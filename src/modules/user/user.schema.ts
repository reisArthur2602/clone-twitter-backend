import { z } from "zod";

const createUserSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .trim()
    .min(2, { message: "Precisa de no mínimo 2 caracteres" }),

  email: z
    .string({ message: "Email é obrigatório" })
    .trim()
    .email({ message: "Formato inválido" }),
  password: z
    .string({ message: "Senha é obrigatória" })
    .min(4, { message: "Precisa de no mínimo 4 caracteres" }),
});

const loginUserSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .trim()
    .min(2, { message: "Precisa de no mínimo 2 caracteres" }),

  email: z
    .string({ message: "Email é obrigatório" })
    .trim()
    .email({ message: "Formato inválido" }),
  password: z
    .string({ message: "Senha é obrigatória" })
    .min(4, { message: "Precisa de no mínimo 4 caracteres" }),
});

export { createUserSchema, loginUserSchema };
