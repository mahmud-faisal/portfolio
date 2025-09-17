const Category = require("../models/categoryModel")

const createCategory = async(req,res)=>{
    try {
        const category= new Category(req.body);
        const savedCategory = await category.save();
        res.status(201).json({success:true,message:"Category Saved",category});
    } catch (error) {
        console.log({success:false,message:error.message})
    }
}

const getCategories = async(req,res)=>{
    try {
        const categories = await Category.find();
        res.status(201).json({success:true,message:"Category Saved",categories});
    } catch (error) {
       res.status(400).json({success:false,message:error.message})
    }
}

const getCategoryById = async(req,res)=>{
    try {
        const category= await Category.findById(req.params.id);
        if(!category)return res.status(201).json({success:true,message:"Category Not Found!"});
        res.status(201).json({success:true,message:"Category Saved",category});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}


const updateCategory = async(req,res)=>{
    try {
        const updatedCat = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        );
        if(!updatedCat)return res.status(201).json({success:true,message:"Category Not Found!"});
        res.status(201).json({success:true,message:"Category Saved",updatedCat});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

const deleteCategory = async(req,res)=>{
    try {
        const deletedCat = await Category.findByIdAndDelete(req.params.id);
        if(!deletedCat)return res.status(201).json({success:true,message:"Category Not Found!"});
        res.status(201).json({success:true,message:"Category Saved",deletedCat});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

module.exports={createCategory,getCategories,getCategoryById,updateCategory,deleteCategory};