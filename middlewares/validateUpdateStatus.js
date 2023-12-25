import { HttpError } from "../helpers/index.js";

import { updateFavoriteSchema } from "../schemas/contacts-schemas.js";

const validateUpdateStatus = (req, res, next) => {
  const { error } = updateFavoriteSchema.validate(req.body);
  if (error) {
    return next(HttpError(400, "missing field favorite"));
  }
  next();
};

export default validateUpdateStatus;
