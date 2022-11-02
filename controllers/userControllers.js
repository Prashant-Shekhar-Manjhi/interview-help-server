const User = require('./../models/userModels');

exports.example = (req,res)=>{
    res.status(200).json({
        message:"Hello",
        From:"Interview.help"
    })
}
exports.getUserById = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(202).json({
            status:"success",
            user
        })
    }catch(arr){
        res.status(404).json({
            status: "failure",
            error:arr
        })
    }
}