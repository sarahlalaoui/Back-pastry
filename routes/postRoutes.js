const express = require("express");
const router = express.Router();
const postController = require("../controllers/postControllers");
const {imageUpload} = require("../middlewares/middlupload").

router.post("/",imageUpload , postController.createPost);
router.get("/", postController.getAllPosts);
router.delete("/:id", postController.deletePost);
router.put("/:id", imageUpload, postController.updatePost);

module.exports = router;
