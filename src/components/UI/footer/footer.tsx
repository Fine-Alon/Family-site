"use client"

import { layoutConfig } from "@/config/layout.config"
import Quote from "./quote"


const Footer = () => {
  
  return <>
    <footer className={`max-w-[1024px] px-[24px] flex justify-center items-center mx-auto`} style={{ height: `${layoutConfig.footer.height}` }}>
      <Quote />
    </footer>
  </>
}

export default Footer