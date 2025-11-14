import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/providers/provider"
import Header from "@/components/UI/header"
import { siteConfigs } from "@/config/app.config"
import { layoutConfig } from "@/config/layout.config"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: siteConfigs.metadata.title,
  description: siteConfigs.metadata.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <header style={{height:`${layoutConfig.header.height}`}}>
            <Header />
          </header>

          <main className={`flex flex-col w-full justify-center items-center`}
            style={{
              height: `calc(100vh - ${layoutConfig.header.height} - ${layoutConfig.footer.height})`
            }}>
            {children}
          </main>
          <footer className={`flex justify-center items-center`} style={{height:`${layoutConfig.footer.height}`}}>
            <p>REMINDER FOR YOURSELF TAKE EVERYTHING EASER, make randomizer with fraises</p>
          </footer>
        </Providers>

      </body>
    </html>
  )
}
