module.exports = {
    config(server){
        require('./User').config(server)
        require('./Like').config(server)
        require('./Dislike').config(server)
    }
}