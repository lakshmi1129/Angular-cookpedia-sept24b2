const downloadRecipes = require('../models/downloadModel')

// add to downloadRecipes
exports.addToDownloadRecipeController = async(req,res)=>{
    console.log("inside addToDownloadRecipeController");
    const {id} = req.params
    const userId = req.userId
    const {name,image,cuisine} = req.body
    console.log(id,userId,name,cuisine,image);
    try{
            // check recipe already in download
            const existingrecipe = await downloadRecipes.findOne({recipeId:id})
            if(existingrecipe){
                existingrecipe.count +=1
                await existingrecipe.save()
                res.status(200).json(existingrecipe)
            }
            else{
                // Add recipe to download model
                const newRecipe = new downloadRecipes({recipeId:id,recipeName:name,recipeImage:image, recipeCuisine:cuisine,count:1,userId})
                await newRecipe.save()
                res.status(200).json(newRecipe)
            }
    }catch(err){
        console.log(err);
        
        res.status(401).json(err)
    }
    
}

// get User downloadRecipes
exports.getUserDownloadRecipeController = async(req,res)=>{
    console.log("inside getUserDownloadRecipeController");
    const userId = req.userId
    try{
            const alluserDownloadList = await downloadRecipes.find({userId})   
            res.status(200).json(alluserDownloadList)
        }
    catch(err){
        console.log(err);
        res.status(401).json(err)
    }
    
}

// get all downloadRecipes
exports.getAllDownloadRecipeController = async(req,res)=>{
    console.log("inside getAllDownloadRecipeController");
    try{
            const alluserDownloadList = await downloadRecipes.find()   
            res.status(200).json(alluserDownloadList)
        }
    catch(err){
        console.log(err);
        res.status(401).json(err)
    }
}