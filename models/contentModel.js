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

const pdfSchema = mongoose.Schema({
    pdf_name:{
        type:String,
    },
    link:{
        type:String
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
    pdfLinks:[pdfSchema]
})

const Content = mongoose.model("contents", contentSchema);
module.exports = Content;