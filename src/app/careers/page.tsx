'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

const positions = [
  {
    title: "AI Research Scientist",
    department: "Research & Development",
    location: "Bangalore",
    type: "Full-time",
    description: "Join our team to develop cutting-edge AI solutions for healthcare diagnostics."
  },
  {
    title: "Healthcare IoT Developer",
    department: "Engineering",
    location: "Bangalore",
    type: "Full-time",
    description: "Build next-generation IoT solutions for medical devices and patient monitoring."
  },
  {
    title: "Healthcare Project Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Lead healthcare technology implementation projects across India."
  }
]

export default function Careers() {
  return (
    <main className="flex-grow container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-slate-600">
          Help us revolutionize healthcare through innovation
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {positions.map((position, index) => (
          <motion.div
            key={position.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{position.title}</CardTitle>
                <div className="flex gap-4 text-sm text-slate-600">
                  <span>{position.department}</span>
                  <span>{position.location}</span>
                  <span>{position.type}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{position.description}</p>
                <Button className="mt-4">Apply</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
