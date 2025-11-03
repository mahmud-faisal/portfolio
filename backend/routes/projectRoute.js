const express = require('express');
const { createProject,getProjects,getProjectById,updateProject,deleteProject } = require('../controllers/projectController');
const upload =require('../middleware/upload');
const projectRouter = express.Router();

projectRouter.post("/add",
    upload.fields([
    {name:'cover_image',maxCount:1},
    {name:'screenshots',maxCount:5}
]),createProject);
projectRouter.get("/all",getProjects);
projectRouter.get("/show/:id",getProjectById);
projectRouter.put("/update/:id",updateProject);
projectRouter.delete("/delete/:id",deleteProject);

module.exports =projectRouter;