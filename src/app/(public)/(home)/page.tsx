"use client"

import SkillProgress from "@/components/common/progress-bar"
import Image from "next/image"

{/* TODO: add. <div><h2>debugging skills 90%</h2></div>  */ }
export default function Home() {
  return <>
    <SkillProgress radius="sm" value={90} size="lg" label="Debugging skills" key={"debugging skills"} />
    <SkillProgress radius="sm" value={70} size="lg" label="Soft skills" key={"Lose weight"} />
    <SkillProgress radius="sm" value={30} size="lg" label="React" key={"Lose weight"} />
    <SkillProgress radius="sm" value={10} size="lg" label="DevOps" key={"Lose weight"} />
    <SkillProgress radius="sm" value={60} size="lg" label="Next" key={"Lose weight"} />
    <SkillProgress radius="sm" value={100} size="lg" label="Back end" key={"Lose weight"} />
    <SkillProgress radius="sm" value={100} size="lg" label="Front end" key={"Lose weight"} />

  </>
}
