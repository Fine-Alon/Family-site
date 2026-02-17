"use client"

import PageContent from "@/components/common/page-content"
import Title from "@/components/common/title"
import SkillsForm from "@/forms/skills.form"
import { siteConfigs } from "@/config/app.config"
import { usePathname } from "next/navigation"

// TODO: Add LLM to check if the input value is normal existing word 

const SkillsPage = () => {
  const pathname = usePathname()
  const currentPage = siteConfigs.pagesContent[pathname as keyof typeof siteConfigs.pagesContent]  

  return <>
    <Title />
    <SkillsForm progressInitialState={'progressInitialState' in currentPage ? currentPage.progressInitialState : 0} />
    <PageContent />
  </>
}

export default SkillsPage