import { signInSchema } from "@/schema/zod"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"

// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from "@/utils/password"
import { getUserFromDb } from "@/utils/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/utils/prisma"


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      //  authorize  -  checks and validate credentials(учетные данные) of users  +  returns data to create session
      authorize: async (credentials) => {
        try {
          
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Password and Email are necessary to fill")
          }

          const { email, password } = await signInSchema.parseAsync(credentials)

          // // logic to salt and hash password
          // const pwHash = saltAndHashPassword(credentials.password)

          // logic to verify if the user exists
          const user = await getUserFromDb(credentials.email)

          if (!user) {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            throw new Error("Invalid credentials.")
          }

          // return user object with their profile data
          return user
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    })
  ],
})