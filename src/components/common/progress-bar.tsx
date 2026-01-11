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
        base: "max-w-sm pb-7 ",
        track: "bg-fuchsia-200 drop-shadow-md shadow-xl/20 shadow-zinc-700 border border-default",
        indicator: "bg-linear-to-r from-fuchsia-600 to-rose-500",
        label: "tracking-widest text-lg text-black/70",
        value: "text-white/30",labelWrapper:"pb-0"
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
