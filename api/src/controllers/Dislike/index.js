const DislikeService = require('../../services/Dislike')

module.exports = {
    config(server){
        server.post('/users/:userId/dislikes', dislikeUser)
    }
}

async function dislikeUser(req, res){
    try{
        const credentials = req.headers
        const user = await DislikeService.dislike(credentials, req.params.userId)
        res.json({ result: true, data: user })
    }
    catch(error){
        res.json({ result: false })
        console.error(error)
    }
}