const pool = require('../database/database')

const allContactsByAlpha = async ( req,res ) => {    
    const contacts = await pool.query('SELECT * FROM contacts ORDER BY name ASC')    
    res.status( 200 ).json({ message: "200 OK!",data:contacts })
}

const noMatchContact = async ( req,res ) =>{
    const { nameNoMatch } = req.params
    const findNotMatch = await pool.query(`SELECT * FROM contacts WHERE name != ?`, nameNoMatch )   
    res.status( 200 ).json({ message: "200 OK", data: findNotMatch }) 
}

const matchContact = async ( req,res ) => {
    const { nameMatch } = req.params
    const findMatch = await pool.query(`SELECT * FROM contacts WHERE name LIKE concat('%',?,'%')`, nameMatch )

    if( findMatch.length >= 1){
        res.status( 200 ).json({ message: "200 OK !",data:findMatch })  
    }else if( findMatch.length === 0){
        res.status( 400 ).json({ message: "400 Bad Request",data:findMatch })
    }
}

const finfById = async ( req,res ) => {
    const { id } = req.params
    const findId = await pool.query(`SELECT * FROM contacts WHERE id = ?`, id)
    if( findId.length >= 1){
        res.status( 200 ).json({ message: "200",data:findId })
    }else{
        res.status( 404 ).json({ message: "404 Not Found" })
    }    
}

const deleteById = async ( req,res ) =>{
    const { id } = req.params
    const findForDelete = await pool.query(`SELECT * FROM contacts WHERE id = ?`, id )
    
    if( findForDelete.length === 1){        
        const idDel = findForDelete[0].id
        await pool.query( `DELETE FROM contacts WHERE id = ?`, idDel )
        res.status( 200 ).json({ message: "204 No Content" })
    }else{        
        res.status( 404 ).json({ message: "404 Not Found" })
    }   
}

module.exports = { allContactsByAlpha,noMatchContact,matchContact,finfById,deleteById }
