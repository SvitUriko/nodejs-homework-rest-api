import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import { isEmptyBody, validateContact } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.listContacts);

contactsRouter.get("/:contactId", contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateContact,
  contactsController.addContact
);

contactsRouter.put("/:contactId", isEmptyBody, contactsController.updateById);

contactsRouter.delete("/:contactId", contactsController.deleteById);

export default contactsRouter;
