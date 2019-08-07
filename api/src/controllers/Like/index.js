const LikeService = require('../../services/Like')

module.exports = {
    config(server){
        server.post('/users/:userId/likes', likeUser)
    }
}

async function likeUser(req, res){
    try{
        const user = await LikeService.like(req.params.userId, req.headers.user)
        res.json(user)
    }
    catch(error){
        res.json({ result: false })
        console.error(error)
    }
}