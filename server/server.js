const mongoose = require("mongoose");


async function startApp(app){
    try{
        await mongoose.connect(
            "mongodb://mongo:27017/voting"
        );
        app.listen(process.env.PORT,() => console.log(`Server started on port ${process.env.PORT}`));
    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = {
    startApp:startApp
}