const dotEnv = require("dotenv");
dotEnv.config();

const {app} = require('./app')
const {startApp} = require("./server")

app.get('/',async (req,res) => {
    return res.json({message:"Hello bug 🐛"})
})

startApp(app);