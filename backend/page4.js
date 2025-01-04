const express = require("express"); //calling express framework
const app = express();              //creating object of express
const cors = require("cors");       //calling cors origin library to allow data communication between 2 server
app.use(cors());                    //creating objecct of cors library
app.use(express.json());            //injecting the json to handle json data communication


app.get("/", (req,res)=>{
    res.send("<h1> The server is live...</h1>");
})

app.get("/booklist",(req,res)=>{
    let booklist = ['html','css','bootstrap','javascript','react','nodejs'];
    res.status(201).json(booklist);
})

app.get("/citylist",(req,res)=>{
    let citylist = ['bangalore','chennai','mumbai','pune','kolkata','Mangalore'];
    res.status(201).json(citylist);
})

app.get("/companylist",(req,res)=>{
    let companylist = ['infosys','tcs','adani','adobe'];
    res.status(201).json(companylist);
})

const fs = require("fs");

app.post("/send",(req,res)=>{
    let newmsg = req.body.mymessage + "## \n";
    fs.appendFile("mssage.txt",newmsg,(error,info)=>{
        res.status(201).json({"yourmsg":"Message Received"});
    })
})

app.get("/messagelist",(req,res)=>{
    fs.readFile("mssage.txt",(error,filedata)=>{
        res.send(filedata);
    })
})

app.get("/clearmessage" , (req,res)=>{
    fs.writeFile("mssage.txt","",(error,info)=>{
        res.status(201).json({"yourmsg":"All Message Deleted"});
    })
})

app.post("/sendemail" , (req,res)=>{

    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abhinaik2908@gmail.com',
        pass: 'lnrz fjbl qhdl uiva'
    }
    });

    var mailOptions = {
    from: 'abhinaik2908@gmail.com',
    to: req.body.email ,
    subject: req.body.sub,
    text: req.body.msg
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        res.send("Error While Sending Email...");
    } else {
        res.send("E-mail Send Successfully !");
    }
    });
})

app.listen(3333,function(){
    console.log("Server Started ");
    console.log("http://localhost:3333/booklist");
    console.log("http://localhost:3333/citylist");
    console.log("http://localhost:3333/companylist");
    console.log("http://localhost:3333/sendemail");
    console.log("http://localhost:3333");
})