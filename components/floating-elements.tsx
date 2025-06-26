"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Sparkles, Star, Heart, Zap } from "lucide-react"

export function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      x: number
      y: number
      icon: React.ReactNode
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    const icons = [
      <Sparkles key="sparkles" className="w-4 h-4" />,
      <Star key="star" className="w-4 h-4" />,
      <Heart key="heart" className="w-4 h-4" />,
      <Zap key="zap" className="w-4 h-4" />,
    ]

    const newElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      delay: Math.random() * 5000,
      duration: 3000 + Math.random() * 2000,
    }))

    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-yellow-400/20 animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}ms`,
            animationDuration: `${element.duration}ms`,
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  )
}
