'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/ui/carousel"

const heroImages = [
  {
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1920",
    alt: "Medical Technology Lab"
  },
  {
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920",
    alt: "AI Healthcare Analysis"
  },
  {
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920",
    alt: "Modern Healthcare Equipment"
  },
  {
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1920",
    alt: "Digital Health Monitoring"
  }
]

const milestones = [
  {
    year: "2020",
    title: "Foundation",
    description: "SH&AI was established with a vision to transform healthcare through AI."
  },
  {
    year: "2021",
    title: "First AI Solution",
    description: "Launched our first AI-powered diagnostic tool for medical imaging."
  },
  {
    year: "2022",
    title: "IoT Integration",
    description: "Expanded into IoT healthcare solutions with remote monitoring systems."
  },
  {
    year: "2023",
    title: "National Recognition",
    description: "Received national awards for healthcare innovation and impact."
  }
]

const stats = [
  { label: "Years Experience", value: "30+" },
  { label: "Healthcare Partners", value: "100+" },
  { label: "Team Members", value: "50+" },
  { label: "Projects Completed", value: "200+" }
]

export default function About() {
  return (
    <main className="flex-grow bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section with Carousel */}
      <section className="relative h-[60vh] overflow-hidden">
        <Carousel 
          data={heroImages}
          autoPlay={true}
          interval={5000}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              About SH&AI
            </h1>
            <p className="text-xl text-slate-300">
              Pioneering the future of healthcare through innovative AI solutions and 
              dedicated expertise in medical technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-300">
                    To foster innovation in healthcare and empower communities to thrive 
                    through advanced technological solutions, ensuring accessible and 
                    efficient healthcare for all.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-300">
                    To redefine healthcare delivery across India through next-gen technology, 
                    expert guidance, and sustainable solutions that bridge the gap between 
                    innovation and implementation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 mb-12"
              >
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold text-purple-400">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-400">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}