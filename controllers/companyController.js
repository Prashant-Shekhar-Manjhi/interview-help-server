const Company = require("./../models/companyModel");

exports.getCompanies = async (req, res)=>{
    try{
        const companies = await Company.find({});
        res.status(200).json({
            status:"success",
            companies
        })
    }catch(err){
        res.status(404).json({
            status:"failure"
        })
    }
}

exports.addCompany = async (req, res)=>{
    try{
        const company = await Company.create({
            name:req.body.name.toUpperCase(),
            description:req.body.description
        })
        res.status(200).json({
            status:"success",
        })
    }catch(err){
        res.status(404).json({
            status:"failure"
        })
    }
}

exports.getCompanyById = async (req, res)=>{
    try{
        const company = await Company.findById(req.params.id);
        res.status(200).json({
            status:"success",
            company
        })
    }catch(err){
        res.status(404).json({
            status:"failure"
        })
    }
}

exports.getCompanyByName = async (req, res)=>{
    try{
        
        const company = await Company.find({name: req.params.name.toUpperCase()});
        res.status(200).json({
            status:"success",
            company
        })
    }catch(err){
        res.status(404).json({
            status:"failure"
        })
    }
}