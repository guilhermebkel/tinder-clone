const User = require('../../models/User')

module.exports = {
    loggedUser
}

async function loggedUser(user){
    try{
        return await User.findById(user)
    }
    catch(error){
        console.error(error)
        return { result: false }
    }
}