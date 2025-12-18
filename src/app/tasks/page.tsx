import { siteConfigs } from "@/config/app.config"

const TasksPage = () => {
   //  task page = siteConfigs.navBarItems[2]
  return (   
    <div><h1>{siteConfigs.navBarItems[2].content.toUpperCase()}</h1></div>
  )
}

export default TasksPage