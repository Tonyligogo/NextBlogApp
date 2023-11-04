import express from 'express';
import { deletePost, createPost } from '../controllers/post.controller.js'

const router = express.Router();

router.post('/createPost', createPost)
router.delete('/deletePost/:id', deletePost)

export default router;