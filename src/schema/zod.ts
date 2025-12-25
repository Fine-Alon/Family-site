 //  TODO: мигрировать zod на v3 новый синтаксис

import { z } from "zod"

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(5, "Password must be more than 5 characters") // ← исправил: было "more than 8", но min(6)
    .max(32, "Password must be less than 32 characters"),
})