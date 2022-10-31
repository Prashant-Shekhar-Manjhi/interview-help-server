const Messages = require('./../models/messageModel');
const Users = require('./../models/userModels');

exports.addMessage = async (req, res)=>{
    try{
        const newMessage = await Messages.create({
            user_id:req.body.user_id,
            text:req.body.text
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
        const users = await Promise.all(
            messages.map(message=>{
                return Users.findById(message.user_id);
            })
        );
        let result = new Array();
        for(let i=0; i<messages.length; i++){
            result.push({
                name:users[i].name,
                messages: messages[i]
            });
        }
        res.status(200).json({
            status:"success",
            data:result
        })

    }catch(err){
        res.status(501).json({
            status:"failure"
        })
    }
}