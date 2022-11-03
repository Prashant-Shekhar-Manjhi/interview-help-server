const Experience = require('./../models/experienceModels');
// add experience...

exports.addExperince = async (req, res)=>{
    try{
        const newExperience = await Experience.create(req.body);
        // console.log(newExperience.description);
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



