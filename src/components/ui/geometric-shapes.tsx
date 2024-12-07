import { motion } from "framer-motion"

export const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* DNA Helix-inspired shapes */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border border-blue-200/20"
        style={{ 
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating medical symbols */}
      <motion.div
        className="absolute w-16 h-16 border-2 border-purple-300/20 rounded-lg"
        style={{ top: '20%', left: '20%' }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Neural network nodes */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-blue-400/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  )
} 