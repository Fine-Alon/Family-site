import PageContent from "@/components/common/page-content"
import { siteConfigs } from "@/config/app.config"

const AboutPage = () => {
  // about page = siteConfigs.navBarItems[0]
  return <>
    <div><h1>{(siteConfigs.navBarItems[0]['content']).toUpperCase()}</h1></div>
    <PageContent />
  </>
}

export default AboutPage