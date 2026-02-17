"use client"

import { siteConfigs } from "@/config/app.config"
import { usePathname } from "next/navigation"
import parse from 'html-react-parser'
import DOMPurify from "isomorphic-dompurify"
import SkillsForm from "@/forms/skills.form"

// TODO: Add LLM to check if the input value is normal existing word 

const PageContent = () => {
  // const pathname = usePathname() as keyof typeof siteConfigs.pagesContent
  const pathname = usePathname()

  const currentPage = siteConfigs.pagesContent[pathname as keyof typeof siteConfigs.pagesContent]

  if (!currentPage) {
    return <p>{siteConfigs.notFound.PageContent}</p>
  }

  const cleanHTML = DOMPurify.sanitize(currentPage.content)

  return <>
    <div className="m-auto"><h3>{parse(cleanHTML)}</h3></div>
  </>
}
 
export default PageContent