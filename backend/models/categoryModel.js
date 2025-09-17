const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String}
});

const categoryModel = mongoose.models.Category||mongoose.model("Category",categorySchema);

module.exports = categoryModel;