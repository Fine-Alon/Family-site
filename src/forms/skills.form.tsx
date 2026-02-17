"use client"

import SkillBtn from "@/components/common/skills/skills-btn"
import SkillInput from "@/components/common/skills/skills-input"
import SkillSlider from "@/components/common/skills/skills-slider"
import { Form } from "@heroui/react"
import React from "react"


function validateSkillName(name: string) {
  const len = name.trim().length
  return len > 0 && len <= 10 
}

interface IProps{
  progressInitialState: number
}

export const SkillsForm:React.FC<IProps> = ({progressInitialState}) => {

  const [step, setStep] = React.useState<1 | 2>(1)
  const [skillName, setSkillName] = React.useState('')
  const [skillProgress, setSkillProgress] = React.useState(progressInitialState)
  const [errors, setErrors] = React.useState({})

  const isSkillNameValid =  validateSkillName(skillName)
  const isDisabled = !isSkillNameValid

  const handleNextStep = () => isSkillNameValid && setStep(2) 

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const dataFromForm = Object.fromEntries(new FormData(e.currentTarget))
    const finalData = {
      ...dataFromForm,
      skill: skillName,
      progress: skillProgress
    }

    console.log("dataFromForm: ", dataFromForm);
    console.log("finalData: ", finalData);
    

    const result = callServer(finalData)
    setErrors(result.errors)
  }

  return <>
    <Form
      className={`w-full max-w-xs flex flex-col gap-3 ${step === 1 && 'pt-2'}`}
      validationErrors={errors}
      onSubmit={step === 1 ? (e) => e.preventDefault() : onSubmit}  >

      {step === 1 && <SkillInput setSkillName={setSkillName} skillName={skillName} />}
      {step === 2 && <SkillSlider skillProgress={skillProgress} setSkillProgress={setSkillProgress} label={skillName} />}

      <SkillBtn isDisabled={isDisabled} handleNextStep={handleNextStep} step={step} />
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