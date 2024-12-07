'use client'
  
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'

export default function Home() {
  return (
    <main className="flex-grow bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  )
} 