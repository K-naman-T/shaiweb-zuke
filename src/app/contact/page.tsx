'use client'
  
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button"
import { motion } from 'framer-motion'

const contactInfo = [
  {
    title: "Email",
    value: "info@shai.com",
    icon: "📧"
  },
  {
    title: "Phone",
    value: "+91 ",
    icon: "📞"
  },
  {
    title: "Address",
    value: "Bangalore, Karnataka, India",
    icon: "📍"
  }
]

export default function Contact() {
  return (
    <main className="flex-grow container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Have questions about our solutions? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name"
                  className="bg-slate-900/50 border-slate-700 text-slate-300"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com"
                  className="bg-slate-900/50 border-slate-700 text-slate-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?"
                  className="bg-slate-900/50 border-slate-700 text-slate-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message"
                  className="h-32 bg-slate-900/50 border-slate-700 text-slate-300"
                />
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <Card 
              key={info.title}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className="text-4xl">{info.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">{info.title}</h3>
                  <p className="text-slate-300">{info.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Map Card */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908140028123!3d12.95396207936457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1652186824932!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
