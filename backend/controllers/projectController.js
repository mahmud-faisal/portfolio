const Project = require('../models/projectModel');


// Create Project
const createProject = async(req,res)=>{
try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json({success:true,message:"Project added",project});
} catch (error) {
    res.status(400).json({success:false,message:"Project add failed!"})
}
}