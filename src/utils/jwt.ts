import jwt from "jsonwebtoken";

export const createJWT = (slug: string) =>
  jwt.sign({ slug }, process.env.JWT_SECRET as string);
