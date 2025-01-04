const express = require("express");
const router = express.Router();
module.exports = router;

const Contact = require("./contactschema");
const Customer = require("./customerschema");

//customer api start
// get http://localhost:2222/contact/customerlist

    router.get("/customerlist",async(req,res)=>{
        let alldata = await Customer.find();
        res.status(201).json(alldata);
    })

//// get http://localhost:2222/contact/savecustomer
    router.post("/savecustomer",async(req,res)=>{
        let newuser = Customer({
            fullname:req.body.fullname,
            mobile:req.body.mobileno,
            address:req.body.myaddress
        });
    
        let info = await newuser.save();
        res.status(201).json(info);
    })

    router.delete("/deletecustomer:id", async (req, res) => {
        let id = req.params.id;
        let mydata = await Customer.findById(id);                  
        if (mydata == null) {
          res.status(201).json({ "message": " No Such Records ! " });
        } else {
          await mydata.deleteOne();
          // id will go into "mydata" and if data is not present it is show if part or else the data is get deleted
          res.status(201).json({ "message": "Record Deleted Succesfully !..." });
        }
      })
      
      router.get("/details:id", async (req, res) => {  // this get will works for Id
        let id = req.params.id;
        let mydata = await Customer.findById(id);               
        res.status(201).json(mydata);
      })
      
      
      router.put("/putcustomer", async (req, res) => {
        let id = req.body.id; // in edit contact while using edit details go into body 
        let mydata = await Customer.findById(id);
        mydata.fullname = req.body.fullname,
          mydata.mobile = req.body.mobileno,
          mydata.address = req.body.myaddress
        await mydata.save();
        res.status(201).json({ "message": "Record Updated Succesfully using PUT !..." });
      })
      
      
      router.patch("/patchcustomer", async (req, res) => {
        let id = req.body.id;
        let mydata = await Customer.findById(id);
      
        if (mydata.fullname != req.body.fullname) {
          mydata.fullname = req.body.fullname;
        }
      
        if (mydata.mobile != req.body.mobileno) {
          mydata.mobile = req.body.mobileno;
        }
      
        if (mydata.address != req.body.myaddress) {
          mydata.address = req.body.myaddress;
        }
      
        await mydata.save();
        res.status(201).json({ "message": "Record Updated Succesfully using PATCH !..." });
      })

//contact api start
//get http://localhost:2222/contact

router.get("/",async(req,res)=>{
    let alldata = await Contact.find();
    res.status(201).json(alldata);
})

router.post("/",async(req,res)=>{
    let newuser = Contact({
        fname:req.body.fullname,
        email:req.body.emailid,
        mobile:req.body.mobileno,
        address:req.body.myaddress
    });

    let info = await newuser.save();
    res.status(201).json(info);
})

router.delete("/:id", async(req,res)=>{
    let id = req.params.id;
    let mydata = await Contact.findById(id);
    if(mydata==null){
        res.status(201).json({"message":"No such Record !"});
    }else{
        await mydata.deleteOne();
        res.status(201).json({"message":"Record Deleted Successfully !"});
    }
})

router.get("/:id", async(req,res)=>{
    let id = req.params.id;
    let mydata = await Contact.findById(id);
        res.status(201).json(mydata);
})

router.put("/",async(req,res)=>{

    let id = req.body.id;
    let mydata = await Contact.findById(id);   //to get details of the user from backend 

        mydata.fname=req.body.fullname,
        mydata.email=req.body.emailid,
        mydata.mobile=req.body.mobileno,
        mydata.address=req.body.myaddress

    await mydata.save();

    res.status(201).json({"message":"Record Updated Successfully using Put !"});
})

router.patch("/",async(req,res)=>{
    let id = req.body.id;
    let mydata = await Contact.findById(id);   //to get details of the user from backend

        if(mydata.fname != req.body.fullname){
        mydata.fname=req.body.fullname;
        }

        if( mydata.email !=req.body.emailid ){
        mydata.email=req.body.emailid;
        }

        if(mydata.mobile != req.body.mobileno){
        mydata.mobile=req.body.mobileno;
        }

        if(mydata.address != req.body.myaddress){
        mydata.address=req.body.myaddress;
        }

    await mydata.save();
    res.status(201).json({"message":"Record Updated Successfully using Patch !"});
})