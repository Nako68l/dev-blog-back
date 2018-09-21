import { Request, Response, NextFunction } from "express";
import Posts from "./posts.model";

function createPost(req: Request, res: Response, next: NextFunction) {
    Posts.create({
        title: req.body.title,
        postBody: req.body.postBody,
    }).then(post => res.json(post))
}

function getPost(req: Request, res: Response, next: NextFunction) {
    Posts.findById(req.params.postId)
        .then(post => res.json(post))
        .catch(err => res.json(err))
}

function addLike(req: Request, res: Response, next: NextFunction) {
    Posts.findByIdAndUpdate(req.params.postId, { $inc: { likes: 1 } }, { new: true }, (err, post) => {
        err ? res.status(500).json(err) : res.json(post)
    })
}


export { createPost, getPost, addLike }