const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    }, 
    email:{
        type: String,
        required:true
    },
    text:{
        type:String, 
        required:true
    },
    replied:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;