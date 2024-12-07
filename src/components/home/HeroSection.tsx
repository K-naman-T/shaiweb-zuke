import React from 'react'
import { Carousel } from '@/components/ui/carousel'

const heroImages = [
  {
    image: "https://images.unsplash.com/photo-1631563019676-daa4c4353a9f?q=80&w=1920",
    alt: "AI Medical Analysis"
  },
  {
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1920",
    alt: "Medical Research Lab"
  },
  {
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1920",
    alt: "Healthcare Technology"
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920",
    alt: "Medical Innovation"
  }
]

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <Carousel 
        data={heroImages}
        autoPlay={true}
        interval={5000}
        className="w-full h-full"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50">
        {/* Content */}
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            SH&AI
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mb-8">
            Revolutionizing Healthcare Through AI Innovation
          </p>
          <div className="flex gap-4">
            <a 
              href="/about" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition-colors"
            >
              Learn More
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
