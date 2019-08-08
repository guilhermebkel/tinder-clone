const LikeService = require('../../services/Like')

module.exports = {
    config(server){
        server.post('/users/:userId/likes', likeUser)
    }
}

async function likeUser(req, res){
    try{
        const credentials = req.headers
        const user = await LikeService.like(credentials, req.params.userId)
        res.json({ result: true, user })
    }
    catch(error){
        res.json({ result: false })
        console.error(error)
    }
}