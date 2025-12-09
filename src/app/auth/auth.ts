import { signInSchema } from "@/schema/zod"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"
import { getUserFromDb } from "@/utils/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/utils/prisma"
// TODO: may be change bcryptjs to bcrypt. js
import bcrypt from "bcryptjs"


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

        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          console.log('\ncredentials:  ', credentials)

          const { email, password } = await signInSchema.parseAsync(credentials)

          // // logic to salt and hash password
          // const pwHash = saltAndHashPassword(credentials.password)

          // logic to verify if the user exists
          const user = await getUserFromDb(email)
          if (!user || !user.password) {
            // No user found, so this is their first attempt to login
            return null
          }

          const isPasswordValid = await bcrypt.compare(password, user.password)
          if (!isPasswordValid) {
            return null
          }

          // return JSON object with user profile data
          return { id: user.id, email: user.email }

        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
          console.error("Unexpected error in authorize:", error);
          return null
        }
      },
    })
  ],
})

