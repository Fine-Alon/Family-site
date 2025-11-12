import { siteConfigs } from "@/config/app.config"

const SkillsPage = () => {
  return (   //  skills page = siteConfigs.navBarItems[1]
    <div><h1>{siteConfigs.navBarItems[1].content.toUpperCase()}</h1></div>
  )
}

export default SkillsPage