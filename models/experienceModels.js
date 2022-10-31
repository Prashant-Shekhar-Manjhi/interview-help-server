const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
    user_id:{
        type:String,
        default : null
    },
    name:{
        type: String,
        required:true,
    },
    company:{
        type: String,
        required: true
    },
    role:String,
    description:String
});

// model using schema,

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;