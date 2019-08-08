const User = require('../../models/User')
const HelperService = require('../Helpers')

module.exports = {
    dislike
}

async function dislike(credentials, userId){
    try{
        const { user } = credentials
        const loggedUser = await HelperService.loggedUser(user)
        const targetUser = await User.findById(userId)
    
        if (!targetUser) return

        if (targetUser.dislikes.includes(loggedUser.id)) console.log("DEU RUIM")

        loggedUser.dislikes.push(targetUser._id)

        await loggedUser.save()

        return loggedUser
    }
    catch(error){
        console.error(error)
        return { result: false }
    }
}