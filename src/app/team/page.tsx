'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

const teamMembers = [
  {
    name: "Pradeep S",
    role: "Director",
    expertise: ["AI & Machine Learning", "Healthcare Technology", "Innovation"],
    bio: "Pradeep S is a visionary leader with over 15 years of experience in AI and healthcare technology. His expertise in machine learning and data analytics has been instrumental in driving SH&AI's innovative solutions.",
    linkedin: "https://www.linkedin.com/in/pradeep-s",
    image: "/team/pradeep.jpg"
  },
  {
    name: "Shandeepan G",
    role: "Director",
    expertise: ["Healthcare Operations", "Medical Technology", "Strategic Planning"],
    bio: "Shandeepan G brings 20 years of healthcare industry experience to SH&AI. His deep understanding of medical processes and patient care has been crucial in developing our AI solutions that truly address healthcare needs.",
    linkedin: "https://www.linkedin.com/in/shandeepan-g",
    image: "/team/shandeepan.jpg"
  }
]

export default function Team() {
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
            Our Leadership Team
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Meet the visionaries driving innovation in healthcare technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-300"
            >
              <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-blue-400 flex items-center gap-2">
                        {member.name}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <LinkedInLogoIcon className="w-5 h-5" />
                        </a>
                      </CardTitle>
                      <p className="text-purple-400 font-semibold">{member.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-400"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}