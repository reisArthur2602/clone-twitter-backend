import { Router } from "express";
import UserController from "./user.controller";

export const userRoutes = Router();

userRoutes.post("/auth/register", (request, response) => {
  UserController.create(request, response);
});

userRoutes.post("/auth/login", (request, response) => {
  UserController.login(request, response);
});
