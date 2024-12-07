'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'

const impacts = [
  {
    title: "Healthcare Access",
    metric: "50,000+",
    description: "Patients served through our early detection programs",
    icon: "🏥",
    categories: ["Patient Care", "Community Health"]
  },
  {
    title: "Technology Adoption",
    metric: "100+",
    description: "Healthcare facilities using our IoT solutions",
    icon: "🔬",
    categories: ["Innovation", "Infrastructure"]
  },
  {
    title: "Community Support",
    metric: "25+",
    description: "NGOs supported through our incubation program",
    icon: "🤝",
    categories: ["Partnership", "Social Impact"]
  },
  {
    title: "Employment Impact",
    metric: "1,000+",
    description: "Healthcare professionals placed through our HR solutions",
    icon: "👥",
    categories: ["Employment", "Healthcare"]
  }
]

const successStories = [
  {
    title: "Rural Healthcare Initiative",
    location: "Karnataka",
    impact: "Improved healthcare access for 10,000+ rural residents",
    description: "Implemented IoT-based health monitoring systems in 5 rural clinics."
  },
  {
    title: "Early Detection Program",
    location: "Tamil Nadu",
    impact: "Detected 500+ early-stage conditions",
    description: "AI-powered screening program helped identify health issues early."
  },
  {
    title: "Healthcare Training Initiative",
    location: "Pan India",
    impact: "Trained 200+ healthcare professionals",
    description: "Comprehensive training program for modern healthcare technologies."
  }
]

export default function Impact() {
  return (
    <main className="flex-grow">
      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <Badge className="mb-2 bg-purple-500/20 text-purple-400">
                      {story.location}
                    </Badge>
                    <CardTitle className="text-xl text-blue-400">{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-green-400 mb-2">{story.impact}</p>
                    <p className="text-slate-300">{story.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
