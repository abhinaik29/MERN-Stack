const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    fname : {type:String,required:true},
    mobile : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    state : {type:String,required:true},
    city : {type:String,required:true},
    address : {type:String,required:true}
    
});

module.exports = mongoose.model("Vendor",tableStructure);