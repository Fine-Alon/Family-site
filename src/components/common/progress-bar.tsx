"use client"

import { Progress } from "@heroui/react"
import { FC } from "react"

interface IProps {
  size: "sm" | "md" | "lg"
  label: string
  value: number
  radius: "none" | "sm" | "md" | "lg" | "full"
}

const SkillProgress: FC<IProps> = ({ size, label, value, radius }) => {
  return (
    <Progress
      classNames={{
        base: "max-w-sm",
        track: "drop-shadow-md shadow-xl/20 shadow-zinc-700 border border-default",
        indicator: "bg-linear-to-r from-pink-500 to-yellow-500",
        label: "tracking-widest font-semibold text-lg text-black/70",
        value: "text-black/60",
      }}

      label={label ? label : null}
      radius={radius}
      showValueLabel={true}
      size={size}
      value={value ? value : 0}
    />
  )
}

export default SkillProgress
