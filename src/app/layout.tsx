import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/providers/provider"
import { siteConfigs } from "@/config/app.config"
import { auth } from "./auth/auth"
import Main from "@/components/UI/main"
import Footer from "@/components/UI/footer/footer"
import Header from "@/components/UI/header/header"
import AppLoader from "@/hoc/app-loader"

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const session = await auth()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <Providers session={session}>
          <AppLoader>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </AppLoader>
        </Providers>

      </body>
    </html >
  )
}
