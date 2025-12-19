"use client"

import { siteConfigs } from "@/config/app.config"
import { usePathname } from "next/navigation"

const PageContent = () => {
  // const pathname = usePathname() as keyof typeof siteConfigs.pagesContent
  const pathname = usePathname()

  const currentPage = siteConfigs.pagesContent[pathname as keyof typeof siteConfigs.pagesContent]

  if (!currentPage) {
    return <p>{siteConfigs.notFound.PageContent}</p>
  }

  return <>
    <div className="m-auto"><h3>{currentPage.content}</h3></div>
  </>
}

export default PageContent