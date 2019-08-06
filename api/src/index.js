async function boot(){
    console.log("=> Setting up environmental variables...")
    require('dotenv').config()

    console.log("=> Starting server...")
    require('./core/server').setup()
}

boot()