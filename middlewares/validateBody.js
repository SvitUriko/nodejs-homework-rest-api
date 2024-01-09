import { HttpError } from "../helpers/index.js";

const getErrorMessage = (error, req) => {
  if (req.method === "POST") {
    if (error.details[0].type === "any.required") {
      const missingField = error.details[0].context.key;
      return `missing required ${missingField} field`;
    }
  } else if (req.method === "PATCH") {
    if (error.details[0].path[0] === "favorite") {
      return "missing field favorite";
    }
  }

  return error.details[0].message;
};

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessage = getErrorMessage(error, req);
      return next(HttpError(400, errorMessage));
    }
    next();
  };
};

export default validateBody;
