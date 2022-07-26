const mysql = require('mysql2')

const { database } = require('./keys')

const pool = mysql.createPool(database)
const { promisify } = require('util')

pool.getConnection((err, connection)=> {

    if (err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Se perdio la conexion con la base de datos vLifev1')
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Hay demasiadas conexiones a la base de datos vLifev1')
        }
        if(err.code === 'ECONNREFUSED'){
            alert('Estamos trabajando')
            console.error('La conexion fue rechazada vLifev1')            
        }
          }
    if (connection) connection.release()
    console.log('Conexion exitosa vLifev1')
    return
})

pool.query = promisify(pool.query)
module.exports = pool