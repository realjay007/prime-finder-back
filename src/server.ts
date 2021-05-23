import errorHandler from "errorhandler";
import { NextFunction, Request, Response } from "express";
import { ContainerTypes, ExpressJoiError } from "express-joi-validation";
import app from "./app";


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