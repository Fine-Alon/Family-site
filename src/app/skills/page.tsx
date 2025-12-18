import { siteConfigs } from "@/config/app.config"

const SkillsPage = () => {
  //  skills page = siteConfigs.navBarItems[1]
  return (   
    <div><h1>{siteConfigs.navBarItems[1].content.toUpperCase()}</h1></div>
  )
}

export default SkillsPage