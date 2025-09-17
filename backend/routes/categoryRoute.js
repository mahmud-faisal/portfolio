const express = require("express");
const {createCategory,getCategories,getCategoryById,updateCategory,deleteCategory} = require("../controllers/categoryController");

const categoryRouter=express.Router();

categoryRouter.post("/add",createCategory);
categoryRouter.get("/all",getCategories);
categoryRouter.get("/show/:id",getCategoryById);
categoryRouter.post("/update/:id",updateCategory);
categoryRouter.delete("/delete/:id",deleteCategory);

module.exports = categoryRouter;