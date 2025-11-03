const Project = require('../models/projectModel');
const fs = require('fs');

// Create Project
const createProject = async(req,res)=>{
try {
    const { title, short_description, detailed_description, category, role, features, technologies, links, date_started, date_completed, status } = req.body;

    const coverImage = req.files['cover_image'] ? `/uploads/${req.files['cover_image'][0].filename}` : null;
    const screenshots = req.files['screenshots']
    ? req.files['screenshots'].map(f => `/uploads/${f.filename}`)
    : [];

    const project = new Project({
        title,
        short_description,
        detailed_description,
        category: category ? JSON.parse(category) : [],
        role,
        features: features ? JSON.parse(features) : [],
        technologies: technologies ? JSON.parse(technologies) : [],
        links: links ? JSON.parse(links) : {},
        media: { 
            cover_image: coverImage, 
            screenshots 
        },
        date_started,
        date_completed,
        status
    })

     const savedProject = await project.save();
     res.status(201).json({success:true,message:"Project added",project: savedProject});

} catch (error) {
    res.status(400).json({success:false,message:error.message})
}
}

const getProjects = async(req,res)=>{
    try {
        const projects = await Project.find()
        .populate("technologies")
        .populate("category")
        res.status(200).json({success:true,message:"Projects retrieved",projects});
    } catch (error) {
       res.status(400).json({success:false,message:error.message})
    }
}

const getProjectById = async(req,res)=>{
    try {
        const project = await Project.findById(req.params.id)
            .populate("technologies")
            .populate("category");
        if(!project) return res.status(404).json({success:false,message:"Project Not Found!"});
        res.status(200).json({success:true,message:"Project retrieved",project});
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
        ).populate("technologies").populate("category");
        
        if(!updatedProject) return res.status(404).json({success:false,message:"Project Not Found!"});
        res.status(200).json({success:true,message:"Project updated",updatedProject});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

const deleteProject = async(req,res)=>{
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if(!deletedProject) return res.status(404).json({success:false,message:"Project Not Found!"});
        res.status(200).json({success:true,message:"Project deleted",deletedProject});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

module.exports = {createProject,getProjects,getProjectById,updateProject,deleteProject};