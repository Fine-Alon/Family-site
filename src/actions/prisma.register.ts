"use server"

import { IFormRegData } from "@/types/form-data"
import { saltAndHashPassword } from "@/utils/password"
import prisma from "@/utils/prisma"
import path from "node:path"


export const registerUser = async (formData: IFormRegData) => {

  const { name, email, password, confirmPassword } = formData

  if (password !== confirmPassword) {
    return { success: false, error: 'Passwords are different' }
  }

  if (password.length < 6) {
    return { success: false, error: 'Password short then 6 symbols' }
  }

  try {
    const isUserExist = await prisma.user.findUnique({ where: { email } })

    if (isUserExist) {
      return { success: false, error: 'User with same password already exist' }
    }

    const pwHash = await saltAndHashPassword(password)

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: pwHash
      }
    })

    console.log('\n User to be REGISTERED: ', user)
    return user

  } catch (error) {
    console.log(`Error in <${path.basename(__filename)}> file`)
    return { success: false, error: 'Registration error occurred' }
  }


}