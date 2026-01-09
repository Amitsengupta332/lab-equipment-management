import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import type { User } from "../../generated/prisma/client";

const register = async (payload: User) => {
  const hashPassword = await bcrypt.hash(payload.password, 10);

  const user = await prisma.user.create({
    data: { ...payload, password: hashPassword },
  });

  return user;
};

export const userService = {
  register,
  //  login
};
