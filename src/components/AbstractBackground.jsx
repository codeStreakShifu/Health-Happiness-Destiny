import { motion } from "framer-motion";

export default function AbstractBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-white" />

      {/* Animated shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
            backgroundSize: "100% 100%",
          }}
        />
        
        {/* First wave */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64"
          initial={{ opacity: 0.3 }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full preserve-3d"
            style={{ transform: "rotateX(180deg)" }}
          >
            <path
              fill="rgba(251, 191, 36, 0.1)"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>

        {/* Second wave */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64"
          initial={{ opacity: 0.2 }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full preserve-3d"
            style={{ transform: "rotateX(180deg)" }}
          >
            <path
              fill="rgba(251, 191, 36, 0.15)"
              d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,224C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}