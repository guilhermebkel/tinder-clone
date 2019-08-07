const DislikeService = require('../../services/Dislike')

module.exports = {
    config(server){
        server.post('/users/:userId/dislikes', dislikeUser)
    }
}

async function dislikeUser(req, res){
    try{
        const user = await DislikeService.dislike(req.params.userId, req.headers.user)
        res.json(user)
    }
    catch(error){
        res.json({ result: false })
        console.error(error)
    }
}