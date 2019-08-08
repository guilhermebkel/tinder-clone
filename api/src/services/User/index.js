const axios = require('axios')
const User = require('../../models/User')
const HelperService = require('../Helpers')

module.exports = {
    create,
    get,
}

async function create(data){
    try{
        const { user } = data

        const userExists = await User.findOne({ user })
    
        if(userExists){
            return userExists
        }
    
        const response = await axios.get(`https://api.github.com/users/${user}`)
    
        const { name, bio, avatar_url: avatar } = response.data
    
        const newUser = await User.create({
            name,
            user,
            bio,
            avatar
        })
    
        return { result: true, data: newUser }
    }
    catch(error){
        console.error(error)
        return { result: false, error }
    }
}

async function get(credentials){
    try{
        const { user } = credentials

        const loggedUser = await HelperService.loggedUser(user)
    
        const users = await User.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } },
            ],
        })
    
        return users
    }
    catch(error){
        console.error(error)
        return { result: false }
    }
}