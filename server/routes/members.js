
const {app} = require("../app");
const {Member} = require("../models")
const {success} = require('../utils/index')


app.get("/members",(req,res) => {
    const allMembers = Member.find();
    return success(res,allMembers);
})

