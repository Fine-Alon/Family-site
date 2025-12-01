"use server"

import { signIn } from "@/app/auth/auth"
import { IFormLoginData } from "@/types/form-data"

export const authorizeUser = async (formData: IFormLoginData) => {


  try {
    const result = await signIn("credentials", {
      ...formData,
      redirect: false
    })

    if (result?.error) ({ success: false, error: result.error })

    return { success: result.success }

  } catch (error) {
    if (error instanceof AuthError) ({ success: false, error: "Smt wrong in credentials" })
    return { success: false, error: "Неизвестная ошибка" }
  }
}

