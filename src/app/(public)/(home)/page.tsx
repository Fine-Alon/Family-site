"use client"

import SkillProgress from "@/components/common/progress-bar"
import { Card, CardBody, Tab, Tabs } from "@heroui/react"

export type Skill = {
  label: string
  value: number
}

export type TabItem = {
  id: string
  label: string
  skills: Skill[]
  cardClassNames?: string
}

const tabs: TabItem[] = [
  {
    id: "hard-skills",
    label: "Hard Skills",
    cardClassNames: "bg-linear-to-r from-pink-400 to-purple-700",
    skills: [
      { label: "React", value: 30 },
      { label: "Next", value: 60 },
      { label: "DevOps", value: 10 },
      { label: "Debugging", value: 90 },
    ],
  },
  {
    id: "personal",
    label: "Personal",
    skills: [
      { label: "Soft skills", value: 70 },
      { label: "English", value: 100 },
    ],
  },
  {
    id: "hobby",
    label: "Hobby",
    skills: [
      { label: "Youtube", value: 100 },
    ],
  },
]


export default function Home() {
  return <>

    <div className="flex w-full max-w-xs h-full flex-col self-start items-stretch pt-22" >
      {/* <div className="inline-flex shadow-xl/50 shadow-purple-700 rounded-2xl bg-purple-900"> */}
      <Tabs aria-label="Dynamic tabs" color="secondary" items={tabs} 
      classNames={{
        panel: "pb-0",
        cursor: "shadow-xl/50 shadow-purple-700 rounded-2xl",
        tabContent: "text-white/90 text-lg font-bold",
        tabList: "bg-linear-to-r from-pink-400 to-purple-700 shadow-xl/50 shadow-purple-700 rounded-2xl"
      }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card classNames={{ base: "w-full max-w-xs bg-linear-to-r from-pink-400 to-purple-700" }}>
              <CardBody className="bg-dan">

                {item.skills.map((skill) => (
                  <SkillProgress radius="sm" value={skill.value}
                    size="lg" label={skill.label} key={skill.label} />
                ))}

              </CardBody>
            </Card>
          </Tab>
        )}
         </Tabs>
        {/* <Tab key="hard-skills" title="Hard Skills">
          <Card classNames={{ base: "bg-linear-to-r from-pink-400 to-purple-700" }}>
            <CardBody className="bg-dan">
              <SkillProgress radius="sm" value={30} size="lg" label="React" key={"React"} />
              <SkillProgress radius="sm" value={60} size="lg" label="Next" key={"Next"} />
              <SkillProgress radius="sm" value={10} size="lg" label="DevOps" key={"DevOps"} />
              <SkillProgress radius="sm" value={90} size="lg" label="Debugging" key={"debugging"} />
            </CardBody>
          </Card> */}
        {/* </Tab>
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
        </Tab> */}
     
      {/* </div> */}
    </div>


    <h2>Developing</h2>
    <h2>Personal</h2>
    <h2>Youtube</h2>
  </>
}
