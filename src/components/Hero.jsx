import book from "../data/book";
import { motion } from "framer-motion";
import bookCover from "../assets/book.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-stone-100 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
          alt="Library"
          className="w-full h-full object-cover opacity-20 scale-120"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-stone-900/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
          <motion.div
            className="max-w-lg text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-800 font-serif italic mb-4 block">
              A Journey to Wellness
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
              {book.title}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transform your health, happiness, and destiny through wise choices
              that align mind, body, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#buy"
                className="bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-800 transition-colors inline-flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy the Book
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#preview"
                className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Preview
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-white/50 blur-xl rounded-full"></div>
            <motion.img
              src={bookCover}
              alt="Book Cover"
              className="w-80 book-shadow rounded-lg transform rotate-3 relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
