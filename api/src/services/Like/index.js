const User = require('../../models/User')
const HelperService = require('../Helpers')

module.exports = {
    like
}

async function like(userId, user){
    try{
        const loggedUser = HelperService.loggedUser(user)
        const targetUser = await User.findById(userId)
    
        if (!targetUser) return

        if (targetUser.likes.includes(loggedUser.id)) console.log("DEU MATCH")

        loggedUser.likes.push(targetUser._id)

        await loggedUser.save()

        return loggedUser
    }
    catch(error){
        console.error(error)
        return { result: false }
    }
}