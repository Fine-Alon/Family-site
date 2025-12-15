import { signOutUser } from "@/actions/prisma.signout"
import { AuthStatus } from "@/store/auth.store"
import { Button } from "@heroui/react"
import type { Session } from "next-auth"
import { useFormStatus } from "react-dom"


interface ISignOutBtnProps {
  onSignOut: (status: AuthStatus, session: Session | null) => void
}


export const SignOutBtn = ({ onSignOut }: ISignOutBtnProps) => {

  const { pending } = useFormStatus()

  const handleSignOutUser = async () => {
    try {
      await signOutUser()
      const logOut = onSignOut("unauthenticated", null)

    } catch (error) {
      console.log('\nerror:   ', error)
    }
  }

  return (
    <form action={handleSignOutUser}>
      <Button
        type="submit"
        className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        radius="full"
        isLoading={pending}
      >
        {pending ? 'Leaving' : 'Leave'}
      </Button>
    </form>
  )
}