import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const AnimatedShapes = () => {
  const shapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shapesRef.current) return

    // Create shapes dynamically
    const shapes = Array.from({ length: 5 }, (_, i) => {
      const shape = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      shape.setAttribute("viewBox", "0 0 100 100")
      shape.setAttribute("class", "absolute w-[300px] h-[300px] opacity-20")
      
      // Create random position
      shape.style.left = `${Math.random() * 100}%`
      shape.style.top = `${Math.random() * 100}%`

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path.setAttribute("d", getRandomBlobPath())
      path.setAttribute("fill", `hsl(${Math.random() * 360}, 70%, 70%)`)
      
      shape.appendChild(path)
      shapesRef.current?.appendChild(shape)
      return shape
    })

    // Animate each shape
    shapes.forEach((shape) => {
      gsap.to(shape, {
        rotation: "random(-360, 360)",
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        scale: "random(0.5, 1.5)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Morph the path
      const path = shape.querySelector('path')
      if (path) {
        gsap.to(path, {
          attr: { d: getRandomBlobPath() },
          duration: "random(5, 10)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      }
    })

    return () => {
      shapes.forEach(shape => shape.remove())
    }
  }, [])

  return (
    <div 
      ref={shapesRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  )
}

// Helper function to generate random blob paths
function getRandomBlobPath(): string {
  const size = 50
  const points = 8
  const center = size / 2
  const angleStep = (Math.PI * 2) / points
  const variation = size / 4

  let d = `M ${center + Math.random() * variation} ${center}`

  for (let i = 1; i <= points; i++) {
    const angle = i * angleStep
    const radius = center + (Math.random() - 0.5) * variation
    const x = center + Math.cos(angle) * radius
    const y = center + Math.sin(angle) * radius
    
    if (i === points) {
      d += ` Z`
    } else {
      const controlX = center + Math.cos(angle - angleStep/2) * radius * 1.5
      const controlY = center + Math.sin(angle - angleStep/2) * radius * 1.5
      d += ` Q ${controlX} ${controlY} ${x} ${y}`
    }
  }

  return d
} 