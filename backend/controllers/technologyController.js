const Technology = require('../models/technologyModel');
const { getCategoryById } = require('./categoryController');

const createTechnology = async(req,res)=>{
    try {
        const technology= new Technology(req.body);
        const savedTechnology = await technology.save();
        res.status(201).json({success:true,message:"Technology Saved",technology});
    } catch (error) {
        console.log({success:false,message:error.message})
    }
}


const getTechnologies = async(req,res)=>{
    try {
        const technologies = await Technology.find();
        res.status(201).json({success:true,message:"Technology Saved",technologies});
    } catch (error) {
       res.status(400).json({success:false,message:error.message})
    }
}

const getTechnologyById = async(req,res)=>{
    try {
        const technology= await Technology.findById(req.params.id);
        if(!technology)return res.status(201).json({success:true,message:"Technology Not Found!"});
        res.status(201).json({success:true,message:"Technology Saved",technology});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}


const updateTechnology = async(req,res)=>{
    try {
        const updatedTech = await Technology.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        );
        if(!updatedTech)return res.status(201).json({success:true,message:"Technology Not Found!"});
        res.status(201).json({success:true,message:"Technology Saved",updatedTech});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

const deleteTechnology = async(req,res)=>{
    try {
        const deletedTech = await Technology.findByIdAndDelete(req.params.id);
        if(!deletedTech)return res.status(201).json({success:true,message:"Technology Not Found!"});
        res.status(201).json({success:true,message:"Technology Saved",deletedTech});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}


module.exports={createTechnology,getTechnologies,getTechnologyById,updateTechnology,deleteTechnology}