import { siteConfigs } from "@/config/app.config"

const BusinessesPage = () => {
  //  Businesses page = siteConfigs.navBarItems[3]
  return (   
    <div><h1>{siteConfigs.navBarItems[3].content.toUpperCase()}</h1></div>
  )
}

export default BusinessesPage