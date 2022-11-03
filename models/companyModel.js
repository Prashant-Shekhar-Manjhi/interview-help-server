const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    }
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;