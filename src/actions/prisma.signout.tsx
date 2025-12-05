"use server"

import { signOut } from "@/app/auth/auth"


export const signOutUser = async () => {

  try {
    const result = await signOut({ redirect: false })

    console.log('result: ', result);
    return result

  } catch (error) {
    console.log('error: ', error);
    
    throw error
  }

  
}