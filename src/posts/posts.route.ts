import express from "express"
import postsValidation from "./posts.validation";
import { createPost } from "./posts.controller"

const router = express.Router()
const validate = require('express-validation')

router.route('/')
    .post(validate(postsValidation.createPost), createPost)

export default router;