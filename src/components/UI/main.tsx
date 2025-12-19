import { layoutConfig } from "@/config/layout.config"

interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return <main className={`flex flex-col max-w-[1024px] mx-auto px-[24px]  justify-center items-center`}
    style={{ height: `calc(100vh - ${layoutConfig.header.height} - ${layoutConfig.footer.height})` }}>
    {children}
  </main>
}

export default Main