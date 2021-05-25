import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { ExpressJoiError } from "express-joi-validation";
import "express-async-errors"; // Allows express to catch promise rejections as errors
import cors from "cors";
import router from "./config/router";

// Init dotenv to load environment variables from .env
dotenv.config();

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 4000);
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set("trust proxy", true);
app.use(cors());

// App routes
app.use(router);

// 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(404).json({
		status: false,
		message: "Resource not found.",
	});
});

/**
 * Error Handler
 */
app.use((err: any|ExpressJoiError, req: Request, res: Response, next: NextFunction) => {
	if(err && (err as ExpressJoiError).error.isJoi) {
		const joiError: ExpressJoiError = err;
		return res.status(400).json({
			status: false,
			message: joiError.error.toString(),
		});
	}
	// Ideally should send error to error tracking platform
	console.error(err);
	res.status(500).json({
		status: false,
		message: "Internal server error",
	});
});

export default app;
