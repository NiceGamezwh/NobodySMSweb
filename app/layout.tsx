import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NobodySMS - Nobody 9527 社区专业接码平台",
  description:
    "Nobody 9527 社区倾力打造的专业接码平台，提供安全可靠的短信验证码接收服务。支持所有平台，24/7在线服务，每条短信仅需0.3元。",
  keywords: "接码平台,短信验证码,Nobody,9527,验证码接收,API接口,短信接收,验证码平台",
  authors: [{ name: "Nobody 9527 Community" }],
  creator: "Nobody 9527 Community",
  publisher: "Nobody 9527 Community",
  icons: {
    icon: [
      { url: "/images/nobody-logo.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/nobody-logo.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "/images/nobody-logo.jpeg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "/images/nobody-logo.jpeg",
  },
  openGraph: {
    title: "NobodySMS - Nobody 9527 社区专业接码平台",
    description:
      "专业的短信验证码接收服务，支持所有平台，安全可靠，价格实惠。每条短信仅需0.3元，新用户首充享3.3折优惠。",
    url: "https://nobodysms.com",
    siteName: "NobodySMS",
    images: [
      {
        url: "/images/nobody-banner.jpeg",
        width: 800,
        height: 267,
        alt: "Nobody SMS Platform - 专业接码平台",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NobodySMS - Nobody 9527 社区专业接码平台",
    description: "专业的短信验证码接收服务，支持所有平台，安全可靠，价格实惠",
    images: ["/images/nobody-banner.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nobodysms.com",
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/images/nobody-logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/nobody-logo.jpeg" />
        <link rel="shortcut icon" href="/images/nobody-logo.jpeg" />
        <meta name="theme-color" content="#fbbf24" />
        <meta name="msapplication-TileColor" content="#fbbf24" />
        <meta name="msapplication-TileImage" content="/images/nobody-logo.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
