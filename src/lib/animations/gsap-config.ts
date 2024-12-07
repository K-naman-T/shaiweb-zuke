import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// Note: MorphSVGPlugin requires GSAP Club membership, removing it
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

// Configure GSAP defaults
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
})

interface ScrollTriggerInstance {
  progress: number;
}

// Export common animations with proper types
export const fadeInUp = (element: string | Element, delay: number = 0): gsap.core.Tween => {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out",
  })
}

export const staggerFadeIn = (elements: string | Element[], stagger: number = 0.2): gsap.core.Tween => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger,
    duration: 1,
    ease: "power3.out",
  })
}

export const parallaxScroll = (element: string | Element, speed: number = 1): ScrollTrigger => {
  return ScrollTrigger.create({
    trigger: element,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self: ScrollTriggerInstance) => {
      gsap.to(element, {
        y: self.progress * 100 * speed,
        ease: "none",
      })
    },
  })
}
    