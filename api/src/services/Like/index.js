const User = require('../../models/User')
const HelperService = require('../Helpers')

module.exports = {
    like
}

async function like(credentials, userId){
    try{
        let match = false
        const { user } = credentials
        const loggedUser = await HelperService.loggedUser(user)
        const targetUser = await User.findById(userId)
    
        if (!targetUser) return

        if (targetUser.likes.includes(loggedUser.id)) match = true

        loggedUser.likes.push(targetUser._id)

        await loggedUser.save()

        return {
            ...loggedUser,
            match
        }
    }
    catch(error){
        console.error(error)
        return { result: false }
    }
}