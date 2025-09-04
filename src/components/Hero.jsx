import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';
import bookCover from "../assets/book.png";
import bg from '../assets/bg.png';
import GooeyButton from './GooeyButton';

export default function Hero() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-transparent" />
      </div>
      
      <div className="relative z-10 flex items-center justify-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
              {/* Left Column - Enhanced Typography */}
              <div className="flex-1 max-w-2xl">
                <motion.span 
                  className="text-sm uppercase tracking-[0.2em] font-bold text-amber-700 mb-8 block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  A Journey to Wellness
                </motion.span>
                
                <motion.h1 
                  className="text-5xl lg:text-7xl font-black text-gray-800 mb-8 leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Health, Happiness & <span className="text-amber-600">Destiny</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 mb-12 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Transform your health, happiness, and destiny through wise choices
                  that align mind, body, and spirit.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <GooeyButton>
                    Buy the Book <FaArrowRight className="ml-3 inline-block" />
                  </GooeyButton>

                  <motion.a
                    href="#preview"
                    className="border-3 border-amber-500 text-amber-600 px-12 py-5 rounded-xl 
                      hover:bg-amber-50 transition-all flex items-center justify-center text-lg font-bold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read Preview
                  </motion.a>
                  
                </motion.div>
              </div>

              {/* Right Column - Enhanced Book Display */}
              <motion.div 
                className="lg:w-1/3 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 -m-10">
                  <div className="absolute inset-0 bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl transform -rotate-12" />
                  <div className="absolute inset-0 bg-gradient-radial from-amber-100/30 to-transparent rounded-full blur-3xl transform rotate-12" />
                </div>

                {/* Book Cover with Enhanced 3D Effect */}
                <div className="relative transform perspective-1000">
                  <motion.div
                    className="relative z-10"
                    animate={{ 
                      rotateY: [-3, 3, -3],
                      y: [0, -8, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img
                      src={bookCover}
                      alt="Book Cover"
                      className="w-full rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                        transform rotate-2 hover:rotate-0 transition-all duration-500"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
