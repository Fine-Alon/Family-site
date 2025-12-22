import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/providers/provider"
import Header from "@/components/UI/header"
import { siteConfigs } from "@/config/app.config"
import { auth } from "./auth/auth"
import AuthSyncProvider from "@/hoc/app-loader"
import Main from "@/components/UI/main"
import Footer from "@/components/UI/footer/footer"

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
          <AuthSyncProvider>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </AuthSyncProvider>
        </Providers>

      </body>
    </html >
  )
}
