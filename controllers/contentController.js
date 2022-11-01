const Content = require("./../models/contentModel");

// add content...
exports.addNewContent = async (req, res)=>{
    try{
        const contents = await Content.create(req.body);
        res.status(200).json({
            status:"success",
            message:"Content is added successfully!"
        })
    }catch(err){
        res.status(404).json({
            status:"failure",
            error:{
                err
            }
        })
    }
}


// fetch contents...
exports.showContents = async (req, res)=>{
    try{
        const contents = await Content.find({});
        res.status(200).json({
            status:"success",
            data:{
                contents
            }
        })
    }catch(err){
        res.status(404).json({
            status:"failure",
            error:{
                err
            }
        })
    }
}


// fetch content by id....
exports.showContentById = async (req,res)=>{
    try{
        const content = await Content.find({course_id : req.params.id});
        res.status(200).json({
            status:"success",
            data:{
                content
            }
        })
    }catch(err){
        res.status(404).json({
            status:"failure",
            error:{
                err
            }
        })
    }
}


// update content...
exports.addSubTopics = async (req, res)=>{
    try{
        const content = await Content.findById(req.params.id);
        // console.log(content);
        await content.updateOne({$push: {subtopics: req.body}});

        res.status(202).json({
            status:"success",
            message:"Subtopic is added successfully!"
        })

    }catch(err){
        res.status(404).json({
            status:"failure",
            error:{
                err
            }
        })
    }
}

exports.addPdfLink = async (req, res)=>{
    try{
        const content = await Content.findById(req.params.id);
        // console.log(content);
        await content.updateOne({$push: {pdfLinks: req.body.link}});

        res.status(202).json({
            status:"success",
            message:"PDFLink is added successfully!"
        })

    }catch(err){
        res.status(404).json({
            status:"failure",
            error:{
                err
            }
        })
    }
}