module.exports = {
    config(server){
        server.post('/devs', (req, res) => {
            console.log(req.body)
            res.json({result: true})
        })
    }
}