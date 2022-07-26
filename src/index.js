const express = require('express')

const app = express()

//settings
app.set('port', process.env.PORT || 8500)

//routes
app.use('/contacts', require('./routes/contacts'))

//start server
app.listen(app.get('port'), () => {
    console.log('App is running on port', app.get('port'))
})