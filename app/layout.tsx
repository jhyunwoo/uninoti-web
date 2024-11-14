import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "유니노티",
  description: "대학교 합격자 발표 알림 서비스. 서울대학교 수시 합격 발표 알림",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className={"bg-neutral-50"}>
      <body>{children}</body>
      <GoogleAnalytics gaId={"G-YSJCZMZVX9"} />
    </html>
  );
}
