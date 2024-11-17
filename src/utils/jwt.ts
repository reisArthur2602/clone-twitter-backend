import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import UserServices from "../modules/user/user.services";
import { ExtendRequestExpress } from "../types/express";

export class JWTServices {

  static create(slug: string) {
    return jwt.sign({ slug }, process.env.JWT_SECRET as string);
  }

  static verify(
    request: ExtendRequestExpress,
    response: Response,
    next: NextFunction
  ) {
    const authHeader = request.headers["authorization"];
    if (!authHeader)
    return response.status(401).json({ error: "Acesso Negado" });


console.log('passeiiii')


    const token = authHeader!.split(" ")[1];

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      async (error, decoded: any) => {
        if (error) return response.status(401).json({ error: "Acesso Negado" });
        const hasUserWithSlug = await UserServices.findUserbySlug(decoded.slug);

        if (!hasUserWithSlug)
          return response.status(401).json({ error: "Acesso Negado" });

        request.userSlug = hasUserWithSlug.slug;
        next();
      }
    );
  }

}


