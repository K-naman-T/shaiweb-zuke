'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'

const posts = [
  {
    title: "The Future of AI in Healthcare Diagnostics",
    date: "2024-03-15",
    author: "Dr. Pradeep S",
    category: "AI & Technology",
    excerpt: "Exploring how artificial intelligence is revolutionizing medical diagnosis and improving patient outcomes.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800"
  },
  {
    title: "IoT Solutions Transforming Patient Care",
    date: "2024-03-10",
    author: "Shandeepan G",
    category: "Healthcare IoT",
    excerpt: "How Internet of Things technology is enabling better patient monitoring and healthcare delivery.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800"
  },
  {
    title: "Early Detection Programs: A Community Impact Study",
    date: "2024-03-05",
    author: "Research Team",
    category: "Community Health",
    excerpt: "Results and insights from our community health initiatives across India.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800"
  }
]

export default function Blog() {
  return (
    <main className="flex-grow container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Latest Updates
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Insights and updates from the forefront of healthcare innovation
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-slate-400">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl text-blue-400 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </CardTitle>
                <div className="text-sm text-slate-400 mt-2">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{post.excerpt}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                  Read more →
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  )
}