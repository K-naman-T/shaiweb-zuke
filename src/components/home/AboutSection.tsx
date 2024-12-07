'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GeometricShapes } from '@/components/ui/geometric-shapes'

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-slate-900 to-slate-800">
      {/* Animated Background with Grain */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          filter: 'contrast(320%) brightness(100%)',
        }}
      />

      <GeometricShapes />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="text-center space-y-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About SH&AI
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With 30 years of cumulative expertise in HiTech, Healthcare, and MedTech, 
              we're dedicated to transforming healthcare through innovation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-300"
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-slate-300">
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
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-300"
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-slate-300">
                    To redefine healthcare delivery across India through next-gen technology, 
                    expert guidance, and sustainable solutions that bridge the gap between 
                    innovation and implementation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -left-20 top-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -right-20 bottom-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
