const Messages = require('./../models/messageModel');
const Users = require('./../models/userModels');

exports.addMessage = async (req, res)=>{
    try{
        const newMessage = await Messages.create({
            name:req.body.name,
            email:req.body.email,
            text:req.body.comment
        });

        res.status(200).json({
            status:"success",
            message:"Message is sent successfully to admin"
        })
    }catch(err){
        res.status(400).json({
            status:"failure",
            message:"Try again!"
        })
    }
}

// get All messages...
exports.getMessages = async (req, res)=>{
    try{
        const messages = await Messages.find({});
        res.status(200).json({
            status:"success",
            messages
        })

    }catch(err){
        res.status(501).json({
            status:"failure"
        })
    }
}