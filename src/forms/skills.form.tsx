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

  const [step, setStep] = React.useState(1)
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
    {step === 1 && <Form
      className="w-full max-w-xs flex flex-col gap-3 pt-2"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <Input
        label="⚙️⚙️⚙️ SKILL:"
        labelPlacement="outside"
        name="skill"
        placeholder=" skill's name"
        classNames={{
          label: "font-bold uppercase tracking-widest text-md", // Ваши стили тут
          input: "placeholder:italic",
          inputWrapper: "bg-[#FFFFF0]"
        }}
        onChange={(e) => setSkillName(e.target.value)}
      />

      <Button
        type="submit"
        variant="flat" onPress={handleNextStep}
        size="lg"
        radius="md"
        className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
         text-white shadow-lg shadow-indigo-500/30 px-6 font-semibold hover:opacity-90 
         transition-opacity"> Add SKILL ⚙️ </Button>
    </Form>}
    {step === 2 && <Form
      className="w-full max-w-xs flex flex-col gap-3"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <SkillSlider label={skillName} />
      <Button
        type="submit"
        variant="flat"
        size="lg"
        radius="md"
        className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
         text-white shadow-lg shadow-indigo-500/30 px-6 font-semibold hover:opacity-90
          transition-opacity"> Confirm 🚀 </Button>
    </Form>}
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