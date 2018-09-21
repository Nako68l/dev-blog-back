import express from "express"
import postsValidation from "./posts.validation";
import { createPost, getPost, addLike, updatePost } from "./posts.controller"

const router = express.Router()
const validate = require('express-validation')

router.route('/')
    .post(validate(postsValidation.createPost), createPost)

router.route('/:postId')
    .get(getPost)
    .put(validate(postsValidation.updatePost), updatePost)

router.route('/:postId/like')
    .put(addLike)

export default router;