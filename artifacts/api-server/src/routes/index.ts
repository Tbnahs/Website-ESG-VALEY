import { Router, type IRouter } from "express";
import healthRouter from "./health";
import uploadRouter from "./upload";
import otpRouter from "./otp";

const router: IRouter = Router();

router.use(healthRouter);
router.use(uploadRouter);
router.use(otpRouter);

export default router;
