"use client"

import { siteConfigs } from "@/config/app.config"
import { layoutConfig } from "@/config/layout.config"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SignUpBtn from "./sign-up-btn"

export const Logo = () => {
  return (
    <Image
      src={'/Gemini_Generated_Image_6k7xcj6k7xcj6k7x.png'}
      alt="ISA own website"
      width={56}
      height={56}
      preload
    />
  )
}

export default function Header() {
  const currentActiveLink = usePathname()

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
        <NavbarItem>
          <SignUpBtn />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
} //.                  по нажатию на    Sign Up    сделать модалку. !!!!
