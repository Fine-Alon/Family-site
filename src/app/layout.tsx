import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/providers/provider"
import Header from "@/components/UI/header"
import { siteConfigs } from "@/config/app.config"
import { layoutConfig } from "@/config/layout.config"
import { auth } from "./auth/auth"
import AuthSyncProvider from "@/hoc/app-loader"

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

  // TODO: логика при и без сессии ?
  const session = await auth()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers session={session}>
          <AuthSyncProvider>
            <Header />
            <main className={`flex flex-col w-full justify-center items-center`}
              style={{
                height: `calc(100vh - ${layoutConfig.header.height} - ${layoutConfig.footer.height})`
              }}>
              {children}
            </main>
            <footer className={`flex justify-center items-center`} style={{ height: `${layoutConfig.footer.height}` }}>
              <p>REMINDER FOR YOURSELF TAKE EVERYTHING EASER, make randomizer with fraises</p>
            </footer>
          </AuthSyncProvider>
        </Providers>

      </body>
    </html >
  )
}
