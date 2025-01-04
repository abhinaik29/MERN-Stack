const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    fullname : {type:String,required:true},
    address : {type:String,required:true},
    mobile : {type:Number,required:true}
});

module.exports = mongoose.model("Customer",tableStructure);