const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/posts', Controller.getPosts);
router.get('/posts/:postId', Controller.getPost);

module.exports = router;
