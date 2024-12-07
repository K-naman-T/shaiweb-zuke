import { motion } from "framer-motion"
import { ReactNode } from "react"

export const TeamCardEffect = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative group">
      {/* Background gradient effect */}
      <motion.div
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 group-hover:opacity-100 blur transition duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Connected nodes animation */}
      <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition duration-500">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
} 