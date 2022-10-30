const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

//creating Schema...
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Provide your name!"],
    },
    email:{
        type:String,
        required:[true, "Provide your email!"],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail, "Provide valid email"]
    },
    password:{
        type:String,
        required:[true, "Provide your password!"],
        select:true
    },
    confirmPassword:{
        type:String,
        required:[true, "Confirm your password!"],
        validate:{
            validator: function(el){
                return el === this.password;
            },
            message : "password and confirm password are not same!"
        }
    }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
});

//creating Model using Schema...
const User = mongoose.model('User', userSchema);
module.exports = User;