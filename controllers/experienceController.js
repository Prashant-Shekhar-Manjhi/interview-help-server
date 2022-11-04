const Experience = require('./../models/experienceModels');
const Company = require("./../models/companyModel");
const { find } = require('./../models/experienceModels');
// add experience...

exports.addExperince = async (req, res)=>{
    try{
        const user_id = req.body.user_id;
        const name = req.body.name;
        const company = req.body.company.toUpperCase();
        const role = req.body.role;
        const desc = req.body.description;
        let companyData = await Company.find({name : company});
        if(companyData.length === 0){
           companyData = await Company.create({
                name:company,
                description:""
            });
            const res = await Experience.create({
                user_id:user_id,
                name:name,
                company_id:companyData._id.toString(),
                role:role,
                description:desc
            });
        }else{
            const res = await Experience.create({
                user_id:user_id,
                name:name,
                company_id:companyData[0]._id.toString(),
                role:role,
                description:desc
            });
        }
        res.status(200).json({
            status: "success",
            message : "Your experience is successfully posted!"
        })
    }catch(err){
        res.status(404).json({
            status:"failure",
            message:"Try Again!"
        })
    }
}


// show all experiences sorted by companies...

exports.getExperienceByCompanyId = async (req, res)=>{
    try{const experiences = await Experience.find({
        company_id : req.params.company_id
    })

    res.status(200).json({
        status:"success",
        data:{
            experiences
        }
    })}catch(err){
        res.status(404).json({
            status:"failure",
            message : err
        })
    }
}

// show all experinces...

exports.getExperience = async (req, res)=>{
    try{
        const experiences = await Experience.find({});

        res.status(200).json({
            status:"success",
            data:{
                experiences
            }
        })
    }catch(err){
        res.status(404).json({
            status:"failure",
            message : err
        })
    }
}



