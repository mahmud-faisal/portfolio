const express = require('express');
const { createProject,getProjects,getProjectById,updateProject,deleteProject } = require('../controllers/projectController');

const projectRouter = express.Router();

projectRouter.post("/add",createProject);
projectRouter.get("/all",getProjects);
projectRouter.get("/show/:id",getProjectById);
projectRouter.post("/update/:id",updateProject);
projectRouter.delete("/delete/:id",deleteProject);

module.exports =projectRouter;