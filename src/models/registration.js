const mongoose = require("mongoose");
const validator = require("validator");

const registrationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error ("email is envalid")
            }
        }},
    phoneno:{
        type:Number,
        required:true,
        min:10,
      
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        minlength:5,
        maxlength:50,
        required:true
    },
    package:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

// collection

const registration = new mongoose.model('registration', registrationSchema);

module.exports = registration;