const express = require('express')
const recipeController = require("../controllers/recipeController")
const testimonyController = require("../controllers/testimonyController")
const userController = require("../controllers/userController")
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadRecipeController = require("../controllers/downloadRecipeController")
const saveRecipeController = require("../controllers/saveRecipeController")


const router = new express.Router()

// all-recipes
router.get("/get-recipes",recipeController.getAllRecipeController)

// add-testimony
router.post("/add-testimony",testimonyController.addTestimonyController)

// add-user
router.post("/register",userController.addUserController)

// login
router.post("/login",userController.loginController)

// view single-recipe
router.get("/recipe/:id/view",jwtMiddleware ,recipeController.getARecipeController)


// related recipe
router.get("/related-recipes",jwtMiddleware ,recipeController.relatedRecipeController)

// download recipe
router.post("/recipe/:id/download",jwtMiddleware ,downloadRecipeController.addToDownloadRecipeController)

// save recipe
router.post("/recipe/:id/save",jwtMiddleware ,saveRecipeController.addToSaveRecipeController)

// get user saved recipe
router.get("/get-save-recipes",jwtMiddleware ,saveRecipeController.getUserRecipeController)

// delete user saved recipe
router.delete("/save-recipes/:id/remove",jwtMiddleware ,saveRecipeController.removeUserRecipeController)

// get user download recipe
router.get("/user-downloads",jwtMiddleware ,downloadRecipeController.getUserDownloadRecipeController)


// edit-user
router.post("/user/edit",jwtMiddleware,userController.editUserController)

// get-all-user
router.get("/all-users",jwtMiddleware,userController.getAllUserController)

// get-download list
router.get("/download-list",jwtMiddleware ,downloadRecipeController.getAllDownloadRecipeController)

// get-testimony
router.get("/get-testimony",jwtMiddleware,testimonyController.getAllTestimonyController)

// update-testimony
router.get("/feedback/:id/update",jwtMiddleware,testimonyController.UpdateTestimonyStatusController)

// get-testimony
router.get("/get-approved-testimony",testimonyController.getApprovedTestimonyController)

// add-recipe
router.post("/add-recipe",jwtMiddleware,recipeController.addRecipeController)


// edit-recipe
router.put("/recipe/:id/edit",jwtMiddleware,recipeController.updateRecipeController)


// delete-recipe
router.delete("/recipe/:id/delete",jwtMiddleware,recipeController.deleteRecipeController)




module.exports = router 