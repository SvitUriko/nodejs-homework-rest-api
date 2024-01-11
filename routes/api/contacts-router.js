import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import {
  authenticate,
  isEmptyBody,
  isValidId,
  validateBody,
  //validateUpdateStatus,
  //validateAddContact,
  //validateUpdateContact,
} from "../../middlewares/index.js";

import {
  contactAddSchema,
  contactUpdateSchema,
  updateFavoriteSchema,
} from "../../schemas/contacts-schemas.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsController.listContacts);

contactsRouter.get("/:contactId", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactAddSchema),
  contactsController.addContact
);

contactsRouter.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(contactUpdateSchema),
  contactsController.updateById
);

contactsRouter.delete("/:contactId", isValidId, contactsController.deleteById);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  contactsController.updateStatusContact
);

export default contactsRouter;
