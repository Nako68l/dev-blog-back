import { Request, Response, NextFunction } from "express";
import Posts from "./posts.model";

function createPost(req: Request, res: Response, next: NextFunction) {
    Posts.create({
        title: req.body.title,
        postBody: req.body.postBody,
    }, (err: any, post: any) => {
        err ? next(err) : res.json(post)
    })
}

function getPost(req: Request, res: Response, next: NextFunction) {
    Posts.findById(req.params.postId, (err, post) => {
        err ? next(err) : res.json(post)
    })
}

function updatePost(req: Request, res: Response, next: NextFunction) {
    Posts.findByIdAndUpdate(req.params.postId, req.body, { new: true }, (err, post) => {
        err ? next(err) : res.json(post)
    })
}

function addLike(req: Request, res: Response, next: NextFunction) {
    Posts.findByIdAndUpdate(req.params.postId, { $inc: { likes: 1 } }, { new: true }, (err, post) => {
        err ? next(err) : res.json(post)
    })
}


export { createPost, getPost, updatePost, addLike }