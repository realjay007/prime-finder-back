import errorHandler from "errorhandler";
import { NextFunction, Request, Response } from "express";
import app from "./app";


/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
	app.use(errorHandler());
} else {
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		// Ideally should send error to error tracking platform
		console.error(err);
		res.status(500).json({
			status: false,
			message: "There was an error processing your request.",
		});
	});
}


/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
	console.log(
		"  App is running at http://localhost:%d in %s mode",
		app.get("port"),
		app.get("env")
	);
	console.log("  Press CTRL-C to stop\n");
});

export default server;