console.log("hello world");

const express = require("express");
require("./db/conn");
const contact = require("./models/contact_msg"); 
const registration = require('./models/registration');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");

// // setting the path
const staticpath = path.join(__dirname,"..\\public");
const templatepath = path.join(__dirname,"..//template//views");
const partialspath = path.join(__dirname,"..//template//partials");
// // middelwheres
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialspath);

//routing

app.get("/",(req, res)=>{
    res.render('index.hbs') 
})

app.get("/contact",(req, res)=>{
    // res.send("this is a contact page");
    res.render('contact.hbs')
    
})
app.get("/registration",(req,res)=>{
    res.render('registration.hbs');
})

app.get("/gallery",(req,res)=>{
    res.render('gallery.hbs')
    
})

app.post("/registration", async(req,res) => {
    try{
        const registrationData = new registration(req.body);
        await registrationData.save();
        res.status(201).render("index");
    }catch(err){
        res.status(500).send(err);
    }
})

app.post("/contact", async(req,res) => {
    try{
        const contactData = new contact(req.body);
        await contactData.save();
        res.status(201).render("index");
    }catch (error){
        res.status(500).send(error);
    }
    
})

app.listen(port, ()=>{
    console.log(`running on the port ${port}`);
})
