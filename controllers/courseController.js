const Course = require("./../models/courseModel");

exports.getCoures = async (req, res)=>{
    try{
        const courses = await Course.find({});
        res.status(200).json({
            status:"success",
            data:{
                courses
            }
        })

    }catch(err){
        res.status(400).json({
            status:"failure",
            error:err
        })
    }
}

exports.getCourseById = async (req, res)=>{
    try{
        const courses = await Course.findById(req.params.id);
        res.status(200).json({
            status:"success",
            data:{
                courses
            }
        })

    }catch(err){
        res.status(400).json({
            status:"failure",
            error:err
        })
    }
}

exports.addCourse = async (req, res)=>{
    try{
        const newCourse = await Course.create(req.body);

        res.status(200).json({
            status:"success",
            message:"Coures is added successfully!"
        })
    }catch(err){
        res.status(400).json({
            status:"failure",
            error:err
        })
    }
}
