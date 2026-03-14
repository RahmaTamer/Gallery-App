const mongoose = require("mongoose");
const Image =require ("../models/Image");

const createImage = async (req,res) =>{


    try {
        
    if(!req.file) return res.status(400).json({msg:"please upload an image"});

    const newImage = await Image.create({
        title: req.body.title,
        image:req.file.filename

    });
    //response
    res.status(201).json({msg:"Image created successfully"});

    } catch (error) {
        res.status(500).json({msg:"server error"});
        
    };
};

const getAllImage = async (req,res) =>{


    try {
        const images = await Image.find();
        res.status(200).json({msg:"done get image"})
    
    } catch (error) {
        res.status(500).json({msg:"server error"});
        
    };
};

const getImageById = async (req,res) =>{

    try {
      const image = await Image.findById(req.params.id);
      
      if(!image){
        return res.status(400).json({msg:"Image not found"})
      }
    
   
res.status(200).json(image);
    } catch (error) {
        res.status(500).json({msg:"server error"});
        
    };
};

const updateImage = async (req, res) => {


    try {
        const image = await Image.findByIdAndUpdate((req.params.id), { new: true });

        res.status(200).json({ msg: "Image updated", image });
    } catch (error) {
        res.status(500).json({ msg: "server error" });

    };
};

const deletImage = async (req,res) =>{


    try {
      const image = await Image.findByIdAndDelete(req.params.id);
res.status(200).json({msg:"done delete"});
    
    
    } catch (error) {
        res.status(500).json({msg:"server error"});
        
    };
};
module.exports ={
    createImage,
    getAllImage,
    getImageById,
    updateImage,
    deletImage
} ;