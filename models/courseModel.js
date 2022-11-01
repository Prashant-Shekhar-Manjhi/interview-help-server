const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    },
    pdfLink:{
        type:Array,
        default:[]
    }
});

const Course = mongoose.model("Courses", courseSchema);
module.exports = Course;