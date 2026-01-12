"use client"

import SkillProgress from "@/components/common/progress-bar"
import { Card, CardBody, Tab, Tabs } from "@heroui/react"

// TODO: tooltips over all UI/UX

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
    </div>
  </>
}
