const Project = require('../models/projectModel');


// Create Project
const createProject = async(req,res)=>{
try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json({success:true,message:"Project added",project});
} catch (error) {
    res.status(400).json({success:false,message:error.message})
}
}


const getProjects = async(req,res)=>{
    try {
        const projects = await Project.find()
        .populate("technologies")
        .populate("category")
        res.status(201).json({success:true,message:"Project Saved",projects});
    } catch (error) {
       res.status(400).json({success:false,message:error.message})
    }
}

const getProjectById = async(req,res)=>{
    try {
        const project= await Project.findById(req.params.id);
        if(!project)return res.status(201).json({success:true,message:"Project Not Found!"});
        res.status(201).json({success:true,message:"Project Saved",project});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

const updateProject = async(req,res)=>{
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        );
        if(!updatedProject)return res.status(201).json({success:true,message:"Project Not Found!"});
        res.status(201).json({success:true,message:"Project Saved",updatedProject});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

const deleteProject = async(req,res)=>{
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if(!deletedProject)return res.status(201).json({success:true,message:"Project Not Found!"});
        res.status(201).json({success:true,message:"Project Saved",deletedProject});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}


module.exports ={createProject,getProjects,getProjectById,updateProject,deleteProject};