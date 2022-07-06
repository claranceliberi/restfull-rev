
async function response(res,{status,data,message}){
    return res.status(status).json({data,status,message});
}

async function success(res,data){
    return response(res,{status:200,data,message:"success"});
}

async function fail(res,data){
    return response(res,{status:400,data,message:"fail"});
}

async function failStatus(res,data,status){
    return response(res,{status,data,message:"fail"});
}

module.exports = {
    response,success,fail,failStatus
}