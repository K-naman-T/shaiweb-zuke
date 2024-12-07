'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
const products = [
  {
    title: "AI Diagnostic Suite",
    category: "Software",
    status: "Available",
    price: "Contact for Pricing",
    description: "Advanced AI-powered diagnostic tool for medical imaging analysis.",
    features: [
      "Real-time image analysis",
      "Multi-modality support (X-ray, MRI, CT)",
      "Automated reporting",
      "Cloud integration"
    ],
    tags: ["AI", "Medical Imaging", "Cloud", "Healthcare"]
  },
  {
    title: "SmartCare IoT Platform",
    category: "Hardware & Software",
    status: "Pre-order",
    price: "Starting from ₹50,000",
    description: "Complete IoT solution for patient monitoring and healthcare management.",
    features: [
      "Real-time vital monitoring",
      "Wireless sensors",
      "Mobile app integration",
      "Emergency alerts"
    ],
    tags: ["IoT", "Patient Care", "Monitoring", "Healthcare"]
  },
  {
    title: "HealthTrack Analytics",
    category: "Software",
    status: "Available",
    price: "Subscription Based",
    description: "Comprehensive healthcare analytics platform for hospitals and clinics.",
    features: [
      "Predictive analytics",
      "Resource optimization",
      "Patient flow management",
      "Performance metrics"
    ],
    tags: ["Analytics", "Hospital Management", "Data Science"]
  },
  {
    title: "MedSecure Cloud",
    category: "Service",
    status: "Available",
    price: "Pay as you go",
    description: "Secure cloud storage and processing solution for healthcare data.",
    features: [
      "HIPAA compliant",
      "End-to-end encryption",
      "Scalable storage",
      "API integration"
    ],
    tags: ["Cloud", "Security", "Healthcare", "Storage"]
  }
]

export default function ProductsPage() {
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
            Our Products
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Innovative healthcare solutions powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
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
                      {product.category}
                    </Badge>
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      {product.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-blue-400">{product.title}</CardTitle>
                  <p className="text-purple-400 font-semibold mt-2">{product.price}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-slate-300">{product.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-purple-400">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                          className="flex items-center gap-2 text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-700/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link href="/enquiry">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600">
                        Request Information
                      </Button>
                    </Link>
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