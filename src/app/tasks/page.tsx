import { siteConfigs } from "@/config/app.config"

const TasksPage = () => {
  return (    //  task page = siteConfigs.navBarItems[2]
    <div><h1>{siteConfigs.navBarItems[2].content.toUpperCase()}</h1></div>
  )
}

export default TasksPage