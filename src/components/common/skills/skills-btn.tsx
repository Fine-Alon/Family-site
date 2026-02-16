import { Button } from "@heroui/react"
import React from "react"

interface IProps {
  step: number
  handleNextStep: () => void
}

export const SkillBtn: React.FC<IProps> = ({ step, handleNextStep }) => {
  return <>
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
      </span>
    </Button>
  </>
}

export default SkillBtn