import express from "express";

import {
  authenticate,
  isEmptyBody,
  validateUser,
} from "../../middlewares/index.js";

import { userRegisterSchema } from "../../schemas/user-schemas.js";

import authController from "../../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateUser(userRegisterSchema),
  authController.register
);

authRouter.post(
  "/login",
  isEmptyBody,
  validateUser(userRegisterSchema),
  authController.login
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

export default authRouter;
