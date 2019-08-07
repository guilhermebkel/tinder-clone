const express = require('express')
const server = express()

module.exports = {
    setup
}

async function setup(){
    server.get('/', (req, res) => {
        return res.send('Fake-Tinder server is running...')
    })

    server.use(express.json())
    
    require('../controllers').config(server)

    server.listen(process.env.PORT, () => {
        console.log(`- Server running at port ${process.env.PORT}`)
    })
}