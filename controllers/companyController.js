const Company = require("./../models/companyModel");

exports.getCompany = async (req, res)=>{
    try{
        const company = await Company.findById(req.body.id);
        res.status(200).json({
            status:"success",
            data:{
                company
            }
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
            name:req.body.name,
            description:req.body.description
        })
        res.status(200).json({
            status:"success",
            data:{
                company
            }
        })
    }catch(err){
        res.status(404).json({
            status:"failure"
        })
    }
}