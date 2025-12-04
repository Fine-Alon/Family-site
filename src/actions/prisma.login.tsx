"use server"

import { signIn } from "@/app/auth/auth"
import { IFormLoginData } from "@/types/form-data"
import prisma from "@/utils/prisma"
import { AuthError } from "next-auth"
import path from "node:path"

export const authorizeUser = async (formData: IFormLoginData) => {

  const { email, password } = formData

  try {
    const result = await signIn("credentials", {
      data: { email, password },
      redirect: false
    })

    const user = await prisma.user.update({
      where: {
        email: email
      },
      data: {
        updatedAt: new Date()
      }
    })
    console.log('user to be UPDATED: ',user);
    
    if (result?.error) ({ success: false, error: result.error })

    return { success: result.success }

  } catch (error) {
    console.log(`Error in ${path.basename(__filename)}`)
    if (error instanceof AuthError) ({ success: false, error: "Smt wrong in credentials" })
    return { success: false, error: "Update user data error !!!" }
  }
}

