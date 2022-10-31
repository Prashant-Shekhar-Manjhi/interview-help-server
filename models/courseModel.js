const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    }
});

const Course = mongoose.model("Courses", courseSchema);
module.exports = Course;