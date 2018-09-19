import { Request, Response, NextFunction } from "express";
import Posts from "./posts.model";
function createPost(req: Request, res: Response, next: NextFunction) {
    Posts.create({
        title: req.body.title,
        postBody: req.body.postBody,
    }).then(p => res.json(p))
}


export { createPost }