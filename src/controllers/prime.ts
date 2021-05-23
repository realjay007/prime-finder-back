import { Response, Router } from "express";
import { createValidator, ValidatedRequest } from "express-joi-validation";
import { findNextLowerPrime } from "../lib/prime";
import { FindLowerRequestSchema, findLowerValidationRules } from "../validators/prime";

const router = Router();
const validator = createValidator();

router.post(
	"/find-next-lower", validator.body(findLowerValidationRules),
	(req: ValidatedRequest<FindLowerRequestSchema>, res: Response) => {
		const number = req.body.number;

		const nextLowerPrime = findNextLowerPrime(number);

		res.json({
			status: true,
			data: nextLowerPrime,
		});
	},
);

export default router;
