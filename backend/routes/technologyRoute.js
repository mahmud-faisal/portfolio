const express = require("express");
const {createTechnology,getTechnologies,getTechnologyById,updateTechnology,deleteTechnology} = require("../controllers/technologyController");

const technologyRouter=express.Router();

technologyRouter.post("/add",createTechnology);
technologyRouter.get("/all",getTechnologies);
technologyRouter.get("/show/:id",getTechnologyById);
technologyRouter.post("/update/:id",updateTechnology);
technologyRouter.delete("/delete/:id",deleteTechnology);

module.exports = technologyRouter;