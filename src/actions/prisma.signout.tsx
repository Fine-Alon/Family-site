"use server"

import { signOut } from "@/app/auth/auth"


export const signOutUser = async () => {

  try {
    const result = await signOut({ redirect: false })

    console.log('result signOut: ', result);
    return result

  } catch (error) {
    console.log('error signOut: ', error);
    
    throw error
  }

  
}