"use client"

import { siteConfigs } from "@/config/app.config"
import { layoutConfig } from "@/config/layout.config"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SignUpBtn from "../modals/sign-up"
import { useState } from "react"
import LoginBtn from "../modals/login"
import { SignOutBtn } from "./sign-out-btn"
import { useAuthStore } from "@/store/auth.store"
import { Logo } from "./logo"



export default function Header() {
  const currentActiveLink = usePathname()
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const { isAuth, session, status, setAuthState } = useAuthStore()
  
  console.log('Header - session:  ', session)
  console.log('Header - status:  ', status)

  const getNavBarItems = () => {
    return siteConfigs.navBarItems.map(menuItem => {
      const isLinkActive = menuItem.href === currentActiveLink
      return <NavbarItem key={menuItem.href} >
        <Link
          color="foreground"
          href={menuItem.href}
          className={`px-3, py-1,  
                  ${isLinkActive ? "text-blue-500" : "text-foreground"}
                   hover:text-blue-300 hover:outline
                   hover:outline-blue-300 hover:rounded-md
                   transition-colors
                   transition-border
                   duration-200
                  `}
        >
          {menuItem.content}
        </Link>
      </NavbarItem >
    })
  }



  return (
    <header style={{ height: `${layoutConfig.header.height}` }}>
      <Navbar className={`h-[${layoutConfig.header.height}]`}>
        <NavbarBrand>
          <Link href={"/"} className=" gap-1">
            <Logo />
            <p className="font-bold text-inherit">ISA family site</p>
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {getNavBarItems()}
        </NavbarContent>


        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#"> </Link>
          </NavbarItem>
          {isAuth && <p>Hello, {session?.user?.name}!</p>
          }
          {isAuth
            ? <> <NavbarItem>
              <SignOutBtn onSignOut={setAuthState} />
            </NavbarItem>
            </>

            : <>
              <NavbarItem>
                <Button variant="shadow" className="bg-purple-500 text-purple-50 font-mono font-bold italic" onPress={() => { setIsSignUpOpen(true) }}>
                  Sign Up <SignUpBtn isFormOpen={isSignUpOpen} onFormClose={() => setIsSignUpOpen(!isSignUpOpen)} />
                </Button>
              </NavbarItem>

              <NavbarItem>
                <Button variant="shadow" className="bg-pink-500 text-purple-50 font-mono font-bold italic" onPress={() => { setIsLoginOpen(true) }}>
                  Login <LoginBtn isFormOpen={isLoginOpen} onFormClose={() => setIsLoginOpen(!isLoginOpen)} />
                </Button>
              </NavbarItem>
            </>}
        </NavbarContent>
      </Navbar>
    </header >
  )
} 
