const mongoose = require('mongoose');
const validator = require("validator");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, 'Oops! Email Already Presend In Our Records'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new error ("Invalid Email ID")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        
    },
    messege:{
        type:String,
        required:true,
        minlength:5,
        maxlength:500

    }

})

// create collection

const contact = mongoose.model('contact', contactSchema);

module.exports = contact;