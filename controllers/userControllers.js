const User = require('./../models/userModels');

exports.example = (req,res)=>{
    res.status(200).json({
        message:"Hello",
        From:"Interview.help"
    })
}