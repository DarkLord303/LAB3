const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.getAllPosts);
router.get('/add-post', postController.addPostPage);
router.post('/add-post', postController.createPost);
router.get('/edit-post/:id', postController.editPostPage);
router.post('/edit-post/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;

