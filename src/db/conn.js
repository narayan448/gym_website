const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_gym_db").then(()=>{
    console.log("connected succesfully:)");
}).catch((err)=>{
    console.log(err);
})
