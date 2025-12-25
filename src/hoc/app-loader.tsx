"use client"

// this script is called while the app is loading -> SO named "app-loader"


import { useEffect } from "react"
import { useSession } from 'next-auth/react'
import { useAuthStore } from "@/store/auth.store"



const AppLoader = ({ children, }: Readonly<{ children: React.ReactNode }>) => {

  const { data: session, status } = useSession()
  const { setAuthState } = useAuthStore()

  // Auth sync provider
  useEffect(() => {
    console.log('\nAuthSyncProvider - status, session:  ',  status, session);
    setAuthState(status, session)
  }, [status, session, setAuthState])

  return <>{children}</>
}

export default AppLoader