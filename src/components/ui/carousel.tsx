'use client'

import React, { useEffect, useRef, useState } from 'react'

interface CarouselProps {
  data: {
    image: string
    alt: string
  }[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function Carousel({ data, autoPlay = false, interval = 3000, className = "" }: CarouselProps) {
  const [currentImg, setCurrentImg] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (autoPlay) {
      const nextSlide = () => {
        setCurrentImg(current => (current === data.length - 1 ? 0 : current + 1))
      }

      timeoutRef.current = setTimeout(nextSlide, interval)

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [currentImg, autoPlay, interval, data.length])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentImg ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
