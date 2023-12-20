import { HttpError } from "../helpers/index.js";

import { contactAddSchema } from "../schemas/contacts-schemas.js";

const validateContact = (req, res, next) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    let errorMessage;

    if (error.details[0].type === "any.required") {
      errorMessage = `missing required ${error.details[0].context.key} field`;
    } else {
      errorMessage = error.details[0].message;
    }

    return next(HttpError(400, errorMessage));
  }
  next();
};

export default validateContact;
