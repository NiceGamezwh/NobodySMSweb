"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface InteractiveButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function InteractiveButton({ href, children, className = "", external = false }: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks((prev) => prev + 1)
  }

  return (
    <Button
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      asChild
    >
      <Link href={href} target={external ? "_blank" : undefined}>
        {/* 波纹效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

        {/* 粒子效果 */}
        {isHovered && (
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        )}

        {/* 按钮内容 */}
        <span className="relative z-10 flex items-center">{children}</span>

        {/* 点击计数器 */}
        {clicks > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            {clicks > 9 ? "9+" : clicks}
          </span>
        )}
      </Link>
    </Button>
  )
}
