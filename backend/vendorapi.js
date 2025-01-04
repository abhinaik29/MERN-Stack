const express = require("express");
const router = express.Router();
module.exports = router;

const Vendor = require("./vendorschema");

router.post("/login", async(req, res)=>{

    let input = {"email":req.body.myemail, "password":req.body.mypassword}
    
    let allvendor = await Vendor.findOne(input);
    
    res.status(201).json(allvendor);
})
    
    router.post("/",async(req,res)=>{
        let newuser = Vendor({
            fname:req.body.name,
            mobile:req.body.mobileno,
            email:req.body.emailid,
            password:req.body.pass,
            state:req.body.state,
            city:req.body.city,
            address:req.body.address
        });
    
        let info = await newuser.save();
        res.status(201).json(info);
    })
