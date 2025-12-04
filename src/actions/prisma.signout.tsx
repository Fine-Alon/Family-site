"use server"

import { signOut } from "@/app/auth/auth"


export const signOutUser = async () => {
  return await signOut()
}