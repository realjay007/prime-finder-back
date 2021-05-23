import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import * as Joi from "joi";

export const findLowerValidationRules = Joi.object({
	number: Joi.number().integer().min(3).positive().required(),
});

export interface FindLowerRequestSchema extends ValidatedRequestSchema {
	[ContainerTypes.Body]: {
		number: number,
	}
}
