import { Router, Request, Response } from "express";

const router: Router = Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req: Request, res: Response) =>
    res.send('OK')
);

// router.use('/tourism_tariffs', tourismTariffsRoutes);

export default router;