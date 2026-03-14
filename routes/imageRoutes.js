const express = require("express");
const router = express.Router();

const uploadImageProduct = require ("../middleware/uploadImage");
const {
    createImage,
    getAllImage,
    getImageById,
    updateImage,
    deletImage
} = require("../controllers/imageController");


router.post("/create", uploadImageProduct ,createImage);
router.get("/allImage",getAllImage);
router.get("/imge/:id",getImageById);
router.put("/update/:id",updateImage);
router.delete("/delete/:id",deletImage);






module.exports=router;