"use client"

import SkillProgress from "@/components/common/progress-bar"
import { Card, CardBody, Tab, Tabs } from "@heroui/react"

export default function Home() {
  return <>

    <div className="flex w-full h-full flex-col self-start items-start pt-22" >
      {/* <div className="inline-flex shadow-xl/50 shadow-purple-700 rounded-2xl bg-purple-900"> */}
      <Tabs aria-label="Options" placement={"top"} color="secondary" classNames={{
        panel: "pb-0",
        cursor: "shadow-xl/50 shadow-purple-700 rounded-2xl",
        tabContent:"text-white/90 text-lg font-bold",
        tabList: "bg-linear-to-r from-pink-400 to-purple-700 shadow-xl/50 shadow-purple-700 rounded-2xl"
      }}>
        <Tab key="hard-skills" title="Hard Skills">
          <Card classNames={{base:"bg-linear-to-r from-pink-400 to-purple-700"}}>
            <CardBody className="bg-dan">
              <SkillProgress radius="sm" value={30} size="lg" label="React" key={"React"} />
              <SkillProgress radius="sm" value={60} size="lg" label="Next" key={"Next"} />
              <SkillProgress radius="sm" value={10} size="lg" label="DevOps" key={"DevOps"} />
              <SkillProgress radius="sm" value={90} size="lg" label="Debugging" key={"debugging"} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="personal" title="Personal">
          <Card>
            <CardBody>
              <SkillProgress radius="sm" value={70} size="lg" label="Soft skills" key={"Soft skills"} />
              <SkillProgress radius="sm" value={100} size="lg" label="English" key={"English"} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="hobby" title="Hobby">
          <Card>
            <CardBody>
              <SkillProgress radius="sm" value={100} size="lg" label="Youtube" key={"Youtube"} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
      {/* </div> */}
    </div>


    <h2>Developing</h2>
    <h2>Personal</h2>
    <h2>Youtube</h2>
  </>
}
