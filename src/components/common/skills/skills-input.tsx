"use client"

import { Input } from "@heroui/react"
import React from "react"

interface IProps {
  setSkillName: (value: string) => void
  skillName: string
}

export const SkillInput: React.FC<IProps> = ({ setSkillName, skillName }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillName(e.target.value)
  }

  return <>
    <Input
      label={`SKILL: ⚙️ ${skillName || "⚙️"} ⚙️`}
      labelPlacement="outside"
      name="skill"
      placeholder=" skill's name"
      classNames={{
        label: "font-bold uppercase tracking-widest text-md",
        input: "placeholder:italic",
        inputWrapper: "bg-[#FFFFF0]"
      }}
      onChange={handleChange}
    />
  </>
}

export default SkillInput