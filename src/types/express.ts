import { Request } from "express";

export type ExtendRequestExpress = Request & {
  userSlug?: string;
};
