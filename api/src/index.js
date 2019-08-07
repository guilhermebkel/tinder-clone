async function boot(){
    console.log("=> Setting up environmental variables...")
    require('dotenv').config()

    console.log("=> Starting server...")
    await require('./core/server').setup()

    console.log("=> Connecting to database...")
    await require('./core/database').setup()
}

boot()