const mongoose = require('mongoose')

module.exports = {
    setup
}

async function setup(){
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
    checkConnection(mongoose)
}

function checkConnection(database){
    database.connection.host
    ? console.log(`- Connected to MongoDB [${database.connection.host}]`)
    : console.log('- Error to connect to database')
}