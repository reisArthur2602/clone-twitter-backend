
import { prisma } from "../../database/prisma";
import { getPublicURL } from "../../utils/getPublicURL";
import { CreateUser } from "./user.types";

class UserServices {
  static async create(data: CreateUser) {
    const user = await prisma.user.create({ data });
    return {
      ...user,
      avatar: getPublicURL(user.avatar),
      cover: getPublicURL(user.cover),
    };
  }

  static async findUserbyEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      return {
        ...user,
        avatar: getPublicURL(user.avatar),
        cover: getPublicURL(user.cover),
      };
    }

    return null;
  }

  static async findUserbySlug(slug: string) {
    const user = await prisma.user.findFirst({
      where: { slug },
      select: {
        avatar: true,
        cover: true,
        slug: true,
        name: true,
        bio: true,
        link: true,
      },
    });

    if (user) {
      return {
        ...user,
        avatar: getPublicURL(user.avatar),
        cover: getPublicURL(user.cover),
      };
    }

    return null;
  }
}

export default UserServices;
