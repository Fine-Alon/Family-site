import { siteConfigs } from "@/config/app.config"

const AboutPage = () => {
  // about page = siteConfigs.navBarItems[0]
  return <>
    <div><h1>{(siteConfigs.navBarItems[0]['content']).toUpperCase()}</h1></div>
    <div><h3>{(siteConfigs.pagesContent[0]['content'])}</h3></div>
  </>
}

export default AboutPage