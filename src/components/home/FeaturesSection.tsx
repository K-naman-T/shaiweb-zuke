'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "AI-Powered Diagnostics",
    description: "Advanced machine learning algorithms for accurate medical diagnosis",
    icon: "🤖"
  },
  {
    title: "IoT Integration",
    description: "Seamless integration with medical IoT devices for real-time monitoring",
    icon: "📱"
  },
  {
    title: "Data Analytics",
    description: "Comprehensive healthcare data analysis for better decision making",
    icon: "📊"
  }
]

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-blue-400 mb-16"
        >
          Our Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-blue-400">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
