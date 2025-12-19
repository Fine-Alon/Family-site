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
    {/* TODO: styles middeling */}
    <div>
      <h1>{currentPage.title.toUpperCase()}</h1>
    </div>
  </>
}

export default Title