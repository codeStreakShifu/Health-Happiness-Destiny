import { motion } from "framer-motion";
import { FaBookOpen, FaFeatherAlt, FaUserAlt } from "react-icons/fa";
import descriptionBg from '../assets/description-bg.jpg';
import bookLogo from '../assets/booklogo.jpg'; // Add this import

export default function Section({ id, title, children, className = "" }) {
  // Enhanced icon rendering with animations
  const getIcon = () => {
    const iconClass = "w-8 h-8 transform transition-all group-hover:scale-110";
    switch (id) {
      case "description":
        return <FaBookOpen className={`text-amber-600 ${iconClass}`} />;
      case "highlights":
        return <FaFeatherAlt className={`text-amber-600 ${iconClass}`} />;
      case "author":
        return <FaUserAlt className={`text-amber-600 ${iconClass}`} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <img 
        src={descriptionBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        id === "description"
          ? "from-white/95 via-white/90 to-amber-50/80"
          : id === "highlights"
          ? "from-amber-50/95 via-white/90 to-amber-100/80"
          : "from-stone-50/95 via-white/90 to-amber-50/80"
      }`} />

      <div className="relative z-10 min-h-[600px] py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Enhanced section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl 
                hover:shadow-2xl hover:bg-white transition-all duration-300"
            >
              {getIcon()}
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              {title}
            </h2>
          </motion.div>

          {/* Enhanced content container */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12
              hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 
                border-amber-600/30 rounded-tl-3xl transition-all duration-300
                group-hover:w-20 group-hover:h-20" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 
                border-amber-600/30 rounded-br-3xl transition-all duration-300
                group-hover:w-20 group-hover:h-20" />

              {/* Content with responsive layout */}
              {id === "description" ? (
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="prose prose-lg max-w-none prose-headings:font-serif
                    prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600
                    prose-strong:text-gray-900 order-2 md:order-1"
                  >
                    {children}
                  </div>
                  
                  <motion.div 
                    className="order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={bookLogo}
                      alt="Book Logo"
                      className="w-full max-w-md mx-auto rounded-2xl shadow-xl 
                        transform hover:scale-105 transition-transform duration-300
                        hover:shadow-2xl"
                    />
                  </motion.div>
                </div>
              ) : (
                <div className="relative z-10 prose prose-lg max-w-none prose-headings:font-serif
                  prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600
                  prose-strong:text-gray-900"
                >
                  {children}
                </div>
              )}

              {/* Glass effect orbs */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 
                bg-gradient-to-br from-amber-200/30 to-amber-100/10 
                rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-32 h-32 
                bg-gradient-to-br from-stone-200/30 to-amber-100/10 
                rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
