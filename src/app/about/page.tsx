import { siteConfigs } from "@/config/app.config"

const AboutPage = () => {
  return (   // about page = siteConfigs.navBarItems[0]
    <div><h1>{(siteConfigs.navBarItems[0]['content']).toUpperCase()}</h1></div>
  )
}

export default AboutPage