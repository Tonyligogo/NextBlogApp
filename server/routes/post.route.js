import express from 'express';
import {uploads} from '../multer.js'
import { deletePost, createPost, getPosts, getSinglePost } from '../controllers/post.controller.js'

const router = express.Router();

router.post('/createPost', uploads.single('image'), createPost)
router.delete('/deletePost/:id', deletePost)
router.get('/getPosts', getPosts)
router.get('/getSinglePost/:id', getSinglePost)


export default router;