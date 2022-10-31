const Experience = require('./../models/experienceModels');
// add experience...

exports.addExperince = async (req, res)=>{
    try{
        const newExperience = await Experience.create({
            user_id : req.body.user_id,
            name : req.body.name,
            company: req.body.company.toLowerCase(),
            role:req.body.role,
            description: req.body.description
        });

        res.status(200).json({
            status: "success",
            message : "Your experience is successfully posted!"
        })
    }catch(err){
        res.status(501).json({
            status:"failure",
            message:"Try Again!"
        })
    }
}


// show all experiences sorted by companies...

exports.getExperienceByCompany = async (req, res)=>{
    try{const experiences = await Experience.find({
        company : req.params.company.toLowerCase()
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



