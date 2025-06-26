"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* 动态光标跟随效果 */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-yellow-200/10 to-orange-200/10 rounded-full blur-3xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* 浮动装饰元素 */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-teal-400 rounded-full opacity-40 animate-bounce delay-1000" />
      <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-ping delay-2000" />
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-30 animate-pulse delay-1500" />

      {/* 流动的线条 */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M0,200 Q300,150 600,200 T1200,200"
          stroke="url(#gradient1)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse delay-1000"
        />
      </svg>
    </div>
  )
}
