const mongoose = require("mongoose");

const subtopics = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const contentSchema = mongoose.Schema({
    course_id:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true,
        unique:true
    },
    introduction:{
        type:String,
        required:true,
    },
    subtopics:[subtopics],
    pdfLinks:{
        type:Array,
        default:[]
    }
})

const Content = mongoose.model("contents", contentSchema);
module.exports = Content;