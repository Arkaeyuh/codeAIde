// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // log queries in dev, optional
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;