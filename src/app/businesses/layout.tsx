import { FC } from "react"

interface IProps {
  children: React.ReactNode
}

const LayoutBusinesses: FC<IProps> = ({ children }) => {
  return <>
    <section className="h-full flex flex-col">{children}</section>
  </>
}

export default LayoutBusinesses

