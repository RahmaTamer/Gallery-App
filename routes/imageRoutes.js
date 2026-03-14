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
router.put("/imge",getImageById);
router.get("/update",updateImage);
router.delete("/delete",deletImage);






module.exports=router;