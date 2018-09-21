import { Router, Request, Response, NextFunction } from "express";

import postsRoutes from "posts/posts.route";

const router: Router = Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req: Request, res: Response) =>
    res.send('OK')
);

router.use('/posts', postsRoutes);

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err })
})

export default router;