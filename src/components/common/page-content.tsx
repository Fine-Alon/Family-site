"use client"

import { siteConfigs } from "@/config/app.config"
import { usePathname } from "next/navigation"

const PageContent = () => {
  const pathname = usePathname()

  console.log(pathname);
  

  const currentPage =  siteConfigs.pagesContent[pathname as keyof typeof siteConfigs.pagesContent]

  if (!currentPage) {
    return <p>Oops! Content not found… or maybe it’s still in the works 😅</p>;
  }

  return <>
      <div><h3>{currentPage.content}</h3></div>
  </>
}

export default PageContent