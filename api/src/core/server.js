const express = require('express')
const server = express()

module.exports = {
    setup
}

async function setup(){
    server.get('/', (req, res) => {
        return res.send('Fake-Tinder server is running...')
    })

    server.listen(process.env.PORT, () => {
        console.log(`- Server running at port ${process.env.PORT}`)
    })
}