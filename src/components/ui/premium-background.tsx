import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const PremiumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size with device pixel ratio
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 150)
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: `hsla(${Math.random() * 60 + 200}, 70%, 50%, 0.8)`,
        originalX: 0,
        originalY: 0,
      }))

      // Store original positions for GSAP animations
      particlesRef.current.forEach(particle => {
        particle.originalX = particle.x
        particle.originalY = particle.y
      })
    }

    initParticles()

    // GSAP animation for particles
    const tl = gsap.timeline({ repeat: -1 })
    particlesRef.current.forEach((particle, i) => {
      tl.to(particle, {
        duration: Math.random() * 5 + 5,
        x: particle.originalX + (Math.random() - 0.5) * 100,
        y: particle.originalY + (Math.random() - 0.5) * 100,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      }, 0)
    })

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 5, 16, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, i) => {
        // Mouse repulsion
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.vx -= dx * force * 0.02
          particle.vy -= dy * force * 0.02
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j]
          const dx = other.x - particle.x
          const dy = other.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(100, 149, 237, ${1 - distance / 100})`
            ctx.stroke()
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      gsap.killTweensOf(particlesRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #000510, #002040)' }}
    />
  )
} 