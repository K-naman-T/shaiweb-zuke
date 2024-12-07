import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'What We Do', path: '/what-we-do' },
  { name: 'Team', path: '/team' },
  { name: 'Products', path: '/products' },
  { name: 'Enquiry', path: '/enquiry' },
]

export const FloatingSidebar = () => {
  return (
    <motion.div
      className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-lg rounded-r-lg p-4 z-50"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-slate-900 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
} 