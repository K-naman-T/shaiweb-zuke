'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const researchAreas = [
  {
    title: "AI in Medical Imaging",
    category: "Artificial Intelligence",
    status: "Ongoing",
    description: "Developing advanced AI algorithms for medical image analysis and diagnosis.",
    achievements: [
      "Developed neural networks for X-ray analysis",
      "Implemented computer vision for MRI scanning",
      "Created automated reporting systems"
    ],
    collaborators: ["Leading Hospitals", "Research Institutions"]
  },
  {
    title: "IoT Healthcare Monitoring",
    category: "IoT & Telemedicine",
    status: "Active",
    description: "Creating next-generation IoT devices for remote patient monitoring.",
    achievements: [
      "Developed real-time vital monitoring systems",
      "Implemented secure data transmission protocols",
      "Created patient monitoring dashboard"
    ],
    collaborators: ["Healthcare Providers", "Tech Partners"]
  },
  {
    title: "Predictive Healthcare Analytics",
    category: "Data Science",
    status: "Ongoing",
    description: "Building predictive models for early disease detection and prevention.",
    achievements: [
      "Developed risk assessment algorithms",
      "Implemented predictive maintenance for medical equipment",
      "Created patient outcome prediction models"
    ],
    collaborators: ["Medical Research Centers", "Universities"]
  },
  {
    title: "Smart Hospital Infrastructure",
    category: "Infrastructure",
    status: "Planning",
    description: "Designing intelligent hospital management and automation systems.",
    achievements: [
      "Developed resource optimization algorithms",
      "Implemented smart inventory management",
      "Created automated scheduling systems"
    ],
    collaborators: ["Hospital Chains", "Infrastructure Partners"]
  }
]

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pioneering healthcare innovation through cutting-edge research and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-300"
            >
              <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                      {area.category}
                    </Badge>
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      {area.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-blue-400">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-slate-300">{area.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-purple-400">Key Achievements</h3>
                    <ul className="space-y-2">
                      {area.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                          className="flex items-center gap-2 text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Collaborators</h3>
                    <div className="flex flex-wrap gap-2">
                      {area.collaborators.map((collaborator, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-700/50">
                          {collaborator}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
} 