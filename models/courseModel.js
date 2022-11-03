const mongoose = require('mongoose')

const pdfSchema = mongoose.Schema({
    pdf_name:{
        type:String,
    },
    link:{
        type:String
    }
})
const courseSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    },
    pdfLinks:[pdfSchema]
});

const Course = mongoose.model("Courses", courseSchema);
module.exports = Course;