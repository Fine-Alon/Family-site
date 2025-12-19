"use client"

import { FC } from "react"

interface IProps {
  children: React.ReactNode
}

const LayoutSkills: FC<IProps> = ({ children }) => {
  return <>
    <section>{children}</section>
  </>
}

export default LayoutSkills