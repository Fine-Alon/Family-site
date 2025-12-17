"use client"


import { useEffect } from "react"
import { useSession } from 'next-auth/react'
import { useAuthStore } from "@/store/auth.store"



const AuthSyncProvider = ({ children, }: Readonly<{ children: React.ReactNode }>) => {

  const { data: session, status } = useSession()
  const { setAuthState } = useAuthStore()

  useEffect(() => {
    console.log('\nstatus, session:  ',  status, session);
    

    setAuthState(status, session)

  }, [status, session])

  return <>{children}</>
}

export default AuthSyncProvider