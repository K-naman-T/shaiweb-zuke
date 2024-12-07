'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Healthcare IoT Solutions",
    description: "Advanced IoT-enabled medical devices and monitoring systems for improved patient care.",
    icon: "🌐",
    details: [
      "Real-time patient monitoring systems",
      "Smart medical device integration",
      "Healthcare data analytics platforms",
      "Remote patient care solutions"
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions for medical diagnosis and healthcare management.",
    icon: "🤖",
    details: [
      "Diagnostic assistance systems",
      "Medical image analysis",
      "Predictive healthcare analytics",
      "Treatment optimization algorithms"
    ]
  },
  {
    title: "Healthcare Consulting",
    description: "Expert guidance for healthcare organizations to optimize their operations and technology.",
    icon: "📊",
    details: [
      "Technology implementation strategy",
      "Healthcare process optimization",
      "Digital transformation consulting",
      "Compliance and security advisory"
    ]
  },
  {
    title: "Medical Research Support",
    description: "Advanced tools and platforms to support medical research and development.",
    icon: "🔬",
    details: [
      "Research data management",
      "Clinical trial support",
      "Laboratory information systems",
      "Research collaboration platforms"
    ]
  }
]

export default function WhatWeDo() {
  return (
    <main className="flex-grow container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          What We Do
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Leveraging cutting-edge technology to revolutionize healthcare delivery and patient care
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <CardTitle className="text-2xl text-blue-400">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-slate-300">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                      className="flex items-center gap-2 text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  )
}