import type { Session } from 'next-auth'
import { create } from 'zustand'

export type AuthStatus = "authenticated" | "unauthenticated" | "loading"

interface IUseAuthStore {
  isAuth: boolean
  status: AuthStatus
  session: Session | null
  setAuthState: (status: AuthStatus, session: Session | null) => void
}

export const useAuthStore = create<IUseAuthStore>((set) => ({
  isAuth: false,
  status: "loading",
  session: null,

  setAuthState: (status: AuthStatus, session: Session | null) => set({
    isAuth: "authenticated" === status,
    status,
    session
  }),
}))
