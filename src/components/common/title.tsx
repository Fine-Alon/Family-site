"use client"

import { siteConfigs } from "@/config/app.config"
import { usePathname } from "next/navigation"


const Title = () => {

  const pathname = usePathname()

  const currentPage = siteConfigs.pagesContent[pathname as keyof typeof siteConfigs.pagesContent]

  if (!currentPage) {
    return <p>{siteConfigs.notFound.PageContent}</p>
  }

  return <>
    <div className="flex items-start mx-auto">
      <h1 className="text-2xl font-bold tracking-wide uppercase">{currentPage.title.toUpperCase()}</h1>
    </div>
  </>
}

export default Title