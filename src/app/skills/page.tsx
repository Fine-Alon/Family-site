"use client"

import PageContent from "@/components/common/page-content"
import { siteConfigs } from "@/config/app.config"

const SkillsPage = () => {
  //  skills page = siteConfigs.navBarItems[1]
  return <>
    <div><h1>{siteConfigs.navBarItems[1].content.toUpperCase()}</h1></div>
    <PageContent />
    {/* <div><h3>{(siteConfigs.pagesContent["/skills"].content)}</h3></div> */}
  </>
}

export default SkillsPage