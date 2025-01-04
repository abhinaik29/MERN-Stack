const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    fname : {type:String,required:true},
    email : {type:String,required:true},
    address : {type:String,required:true},
    mobile : {type:String,required:true},
});

module.exports = mongoose.model("Contact",tableStructure);