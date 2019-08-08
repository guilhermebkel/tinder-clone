const express = require('express')
const server = express()
const cors = require('cors')

module.exports = {
    setup
}

async function setup(){
    server.get('/', (req, res) => {
        return res.send('Fake-Tinder server is running...')
    })

    server.use(cors())
    server.use(express.json())

    require('../controllers').config(server)

    server.listen(process.env.PORT || process.env.SERVER_PORT, () => {
        console.log(`- Server running at port ${process.env.SERVER_PORT}`)
    })
}