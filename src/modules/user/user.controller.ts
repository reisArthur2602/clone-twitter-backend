import { Request, RequestHandler, Response } from "express";

import UserServices from "./user.services";
import slug from "slug";
import { compare, hash } from "bcrypt-ts";
import { createJWT } from "../../utils/jwt";
import { createUserSchema, loginUserSchema } from "./user.schema";

class UserController {
  static async create(request: Request, response: Response) {
    const { error, data } = createUserSchema.safeParse(request.body);

    if (error)
      return response.status(400).json({ error: error.flatten().fieldErrors });

    const hasUserWithEmail = await UserServices.findUserbyEmail(data.email);
    if (hasUserWithEmail)
      return response.status(409).json({ error: "Email já cadastrado" });

    let genSlug = true;
    let userSlug = slug(data.name);
    while (genSlug) {
      const hasUserWithSlug = await UserServices.findUserbySlug(userSlug);

      if (hasUserWithSlug) {
        let slugSuffix = Math.floor(Math.random() * 99999).toString();
        userSlug = slug(data.name + slugSuffix);
      } else genSlug = false;
    }

    const hashPassword = await hash(data.password, 10);

    const newUser = await UserServices.create({
      slug: userSlug,
      name: data.name,
      email: data.email,
      password: hashPassword,
    });

    const token = createJWT(userSlug);

    response.status(201).json({
      token,
      user: {
        name: newUser.name,
        slug: newUser.slug,
        avatar: newUser.avatar,
      },
    });
  }

  static async login(request: Request, response: Response) {
    const { error, data } = loginUserSchema.safeParse(request.body);

    if (error)
      return response.status(400).json({ error: error.flatten().fieldErrors });

    const hasUserWithEmail = await UserServices.findUserbyEmail(data.email);
    if (!hasUserWithEmail)
      return response.status(401).json({ error: "Acesso Negado" });

    const isMatch = await compare(data.password, hasUserWithEmail.password);
    if (!isMatch) return response.status(401).json({ error: "Acesso Negado" });

    const token = createJWT(hasUserWithEmail.slug);

    response.status(201).json({
      token,
      user: {
        name: hasUserWithEmail.name,
        slug: hasUserWithEmail.slug,
        avatar: hasUserWithEmail.avatar,
      },
    });
  }
}

export default UserController;
