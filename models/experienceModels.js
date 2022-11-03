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
    company_id:{
        type: String,
        required: true
    },
    role:String,
    description:String,
    isApproved:{
        type:Boolean,
        default:false
    }
});

// model using schema,

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;