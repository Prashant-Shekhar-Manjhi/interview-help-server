const mongoose = require("mongoose");

const suggestionSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    course_id:{
        type:String,
        required:true
    }
},{timestamps:true});


const Suggestion = mongoose.model("Suggestions", suggestionSchema);
module.exports = Suggestion;