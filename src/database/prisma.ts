import { PrismaClient } from "@prisma/client";

const GlobalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = GlobalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") GlobalForPrisma.prisma = prisma;
