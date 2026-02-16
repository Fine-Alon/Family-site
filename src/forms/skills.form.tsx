"use client"

import SkillBtn from "@/components/common/skills/skills-btn"
import SkillInput from "@/components/common/skills/skills-input"
import SkillSlider from "@/components/common/skills/skills-slider"
import { Form } from "@heroui/react"
import React from "react"

interface IProps { }

function validateSkillName(name: string) {
  let isValid = false
  isValid = name.trim() ? true : false
  return isValid
}

export const SkillsForm = ({ }: IProps) => {

  const [step, setStep] = React.useState<1 | 2>(1)
  const [errors, setErrors] = React.useState({})
  const [skillName, setSkillName] = React.useState('')

  const handleNextStep = () => { if (validateSkillName(skillName)) setStep(2) }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    console.log("data: ", data);
    

    if (!data.skill) {
      setErrors({ skill: "Skill is required" })
      return
    }

    const result = callServer(data)
    setErrors(result.errors)
  }

  return <>
    <Form
      className={`w-full max-w-xs flex flex-col gap-3 ${step === 1 && 'pt-2'}`}
      validationErrors={errors}
      onSubmit={step === 1 ? (e) => e.preventDefault() : onSubmit}  >

      {step === 1 && <SkillInput setSkillName={setSkillName} skillName={skillName} />}
      {step === 2 && <SkillSlider label={skillName} />}

      <SkillBtn handleNextStep={handleNextStep} step={step} />
    </Form>

  </>
}

function callServer(data) {
  return {
    errors: {
      skill: "Sorry, this word is not real, please correct.",
    },
  }
}

export default SkillsForm