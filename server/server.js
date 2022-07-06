const mongoose = require("mongoose");


async function startApp(app){
    try{
        await mongoose.connect(
            "mongodb://mongo:27017/voting"
        );
        app.listen(3000,() => console.log('App started on port 3000'))
    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = {
    startApp:startApp
}