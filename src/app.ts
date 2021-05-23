import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors'; // Allows express to catch promise rejections as errors
import router from "./config/router";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// App routes
app.use(router);

// 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(404).json({
		status: false,
		message: 'Resource not found.',
	});
});

export default app;
