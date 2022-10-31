const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    user_id:{
        type: String,
        required:true
    }, 
    text:{
        type:String, 
        required:true
    }
    
},{timestamps:true});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;