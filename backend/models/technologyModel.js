const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
    name:{type:String,required:true},
    logo:{type:String},
    // category:{type:String}
});


const technologyModel = mongoose.models.Technology||mongoose.model("Technology",technologySchema);

module.exports= technologyModel;