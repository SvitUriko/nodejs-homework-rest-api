import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import {
  isEmptyBody,
  validateAddContact,
  validateUpdateContact,
  isValidId,
  validateUpdateStatus,
} from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.listContacts);

contactsRouter.get("/:contactId", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateAddContact,
  contactsController.addContact
);

contactsRouter.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateUpdateContact,
  contactsController.updateById
);

contactsRouter.delete("/:contactId", isValidId, contactsController.deleteById);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateUpdateStatus,
  contactsController.updateById
);

export default contactsRouter;
