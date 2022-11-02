const Suggestion = require("../models/suggestionModel");
const User = require("./../models/userModels")

//add suggestion...
exports.addSuggestion = async (req, res) =>{
    try{
        const newSug = await Suggestion.create(req.body);
        res.status(200).json({
            status:"success",
            message:'Your suggestion is sent successfully'
        })
    }catch(err){
        res.status(500).json({
            status:"failure",
            message:"Try Again"
        })
    }
}

//fetch suggestion by course_id...
exports.showSuggestionByCourseId = async (req, res)=>{
    try{
        // const suggestions = await Suggestion.find({course_id : req.params.id});
        // res.status(200).json({
        //     status:"success",
        //     suggestions
        // })

        const messages = await Suggestion.find({course_id : req.params.id});
        const users = await Promise.all(
            messages.map(message=>{
                return User.findById(message.user_id);
            })
        );
        let result = new Array();
        for(let i=0; i<messages.length; i++){
            result.push({
                name:users[i].name,
                messages: messages[i]
            });
        }
        res.status(200).json({
            status:"success",
            result
        })

    }catch(err){
        res.status(500).json({
            status:"failure",
            error:err
        })
    }
}

