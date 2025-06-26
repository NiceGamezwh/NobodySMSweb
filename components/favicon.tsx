"use client"

import { useEffect } from "react"

export function Favicon() {
  useEffect(() => {
    // 动态设置favicon
    const setFavicon = () => {
      const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement
      if (favicon) {
        favicon.href = "/images/nobody-logo.jpeg"
      } else {
        const newFavicon = document.createElement("link")
        newFavicon.rel = "icon"
        newFavicon.href = "/images/nobody-logo.jpeg"
        newFavicon.type = "image/jpeg"
        document.head.appendChild(newFavicon)
      }

      // 设置Apple touch icon
      let appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement
      if (!appleTouchIcon) {
        appleTouchIcon = document.createElement("link")
        appleTouchIcon.rel = "apple-touch-icon"
        appleTouchIcon.href = "/images/nobody-logo.jpeg"
        document.head.appendChild(appleTouchIcon)
      }
    }

    setFavicon()

    // 动态更新页面标题
    document.title = "NobodySMS - Nobody 9527 社区专业接码平台"
  }, [])

  return null
}
