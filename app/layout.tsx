import type { Metadata } from "next"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { ReactNode } from "react"
import Footer from "@/app/components/footer"

export const metadata: Metadata = {
  title: "유니노티",
  description: "대학교 합격자 발표 알림 서비스. 서울대학교 수시 합격 발표 알림",
  metadataBase: new URL("https://uninoti.moveto.kr"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ko" className={"bg-neutral-100"}>
      <body>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={"G-YSJCZMZVX9"} />
    </html>
  )
}
