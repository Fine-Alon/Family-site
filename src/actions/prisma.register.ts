"use server"

import { IFormRegData } from "@/types/form-data"
import prisma from "@/utils/prisma"
import path from "node:path"


export const registerUser = async (formData: IFormRegData) => {

  const { name, email, password, confirmPassword } = formData

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: password
      }
    })

    console.log('user to be REGISTERED: ', user)
    return user

  } catch (error) {
    console.log(`Error in <${path.basename(__filename)}> file`)
    return { error: 'Registration error occurred' }
  }


}