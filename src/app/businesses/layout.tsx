import { FC } from "react"

interface IProps {
  children: React.ReactNode
}

const LayoutBusinesses: FC<IProps> = ({ children }) => {
  return <>
    <section>{children}</section>
  </>
}

export default LayoutBusinesses

