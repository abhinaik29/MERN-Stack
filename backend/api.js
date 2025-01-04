const express = require("express"); //calling express framework
const app = express();              //creating object of express
const cors = require("cors");       //calling cors origin library to allow data communication between 2 server
app.use(cors());                    //creating object of cors library
app.use(express.json());            //injecting the json to handle json data communication

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mern");
const db = mongoose.connection;

db.on("error",(error)=>console.log("Error in db connection"));
db.on("open",()=>console.log("Database is Connected..."));

const Contactapi = require("./contactapi");
app.use("/contact", Contactapi); //  http://localhost:2222/contact  (get,post,delete,put,patch)

const image = require("./imageapi");
app.use("/photoupload",image); //  http://localhost:2222/photoupload 

const Vendorapi = require("./vendorapi");
app.use("/vendor", Vendorapi);

app.listen(2222,function(){
    console.log("The server is live...on : http://localhost:2222");
});