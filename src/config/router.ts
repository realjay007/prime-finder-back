import { Request, Response, Router } from "express";
import primeRouter from "../controllers/prime";

const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.json({
		status: true,
		message: "Hello world",
	});
});

router.get("/error", () => {
	throw new Error("Testing error flow");
});

router.use("/prime", primeRouter);

export default router;
