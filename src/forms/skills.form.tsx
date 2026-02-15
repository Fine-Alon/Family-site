// TODO: skills get form

import SkillSlider from "@/components/common/skills-slider"
import { Button, Form, Input, Slider } from "@heroui/react"
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

  const handleNextStep = () => {
    if (validateSkillName(skillName)) setStep(2)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    if (!data.skill) {
      setErrors({ skill: "Skill is required" })
      return
    }

    const result = callServer(data)

    setErrors(result.errors)
  }

  return <>
    <Form
      className={step === 1
        ? 'w-full max-w-xs flex flex-col gap-3 pt-2'
        : 'w-full max-w-xs flex flex-col gap-3'}
      validationErrors={errors}
      onSubmit={step === 1 ? (e) => e.preventDefault() : onSubmit}
    >
      {step === 1 && <Input
        label={`SKILL: ⚙️ ${skillName || "⚙️"} ⚙️`}
        labelPlacement="outside"
        name="skill"
        placeholder=" skill's name"
        classNames={{
          label: "font-bold uppercase tracking-widest text-md",
          input: "placeholder:italic",
          inputWrapper: "bg-[#FFFFF0]"
        }}
        onChange={(e) => setSkillName(e.target.value)}
      />}

      {step === 2 && <SkillSlider label={skillName} />}
      <Button
        type={step === 1 ? "button" : "submit"}
        variant="flat"
        onPress={step === 1 ? handleNextStep : undefined}
        size="lg"
        radius="md"
        className="bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500
         text-white shadow-lg shadow-indigo-500/30 px-6 font-semibold hover:opacity-90 
         transition-opacity active:scale-95 duration-200">
        <span className="animate-in fade-in zoom-in-95 duration-300">
          {step === 1 ? "ADD SKILL" : "CONFIRM 🚀"}
        </span> </Button>

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