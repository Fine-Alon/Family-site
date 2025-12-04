import { signOutUser } from "@/actions/prisma.signout"
import { Button } from "@heroui/react"
import { useFormStatus } from "react-dom"


export const SignOutBtn = () => {

  const { pending } = useFormStatus()

  return (
    <form action={signOutUser}>
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