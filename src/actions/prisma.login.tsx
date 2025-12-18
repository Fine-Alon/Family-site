"use server"

import { signIn } from "@/app/auth/auth"
import { IFormLoginData } from "@/types/form-data"
import prisma from "@/utils/prisma"
import { AuthError } from "next-auth"
import { redirect as next_nav_redirect } from "next/navigation"
import path from "node:path"

export const authorizeUser = async (formData: IFormLoginData) => {

  const { email, password } = formData

  try {
    const result = await signIn("credentials", { email, password, redirect: false })

    const user = await prisma.user.update({
      where: { email: email },
      data: { updatedAt: new Date() }
    })
    console.log('\nuser to be UPDATED: ', user)

    if (result) {
      next_nav_redirect("/")    
    }


    return { success: result.success }

  } catch (error) {
    console.log(`\n\nError in ${path.basename(__filename)}`)
    console.log('\nerror:  ', error)

    if (error instanceof AuthError) {
      return { success: false, error: "Invalid credentials." }
    }
    return { success: false, error: "Unexpected error during login." }
  }
}

