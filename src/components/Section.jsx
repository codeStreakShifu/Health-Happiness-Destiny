import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { FaBookOpen, FaFeatherAlt, FaUserAlt } from "react-icons/fa";

export default function Section({ id, title, children, bg, className = "" }) {
  // Determine icon based on section id
  const getIcon = () => {
    switch (id) {
      case "description":
        return <FaBookOpen className="text-amber-600 w-8 h-8" />;
      case "highlights":
        return <FaFeatherAlt className="text-amber-600 w-8 h-8" />;
      case "author":
        return <FaUserAlt className="text-amber-600 w-8 h-8" />;
      default:
        return null;
    }
  };

  // Single beautiful library background for all sections
  const backgroundImage =
    "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=2000&q=80";

  return (
    <Parallax
      blur={0}
      bgImage={backgroundImage}
      bgImageAlt="vintage library background"
      strength={200}
      className="relative"
    >
      <div className="relative min-h-[600px] py-24">
        {/* Custom overlay gradient based on section */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            id === "description"
              ? "from-white/90 to-white/80"
              : id === "highlights"
              ? "from-amber-50/95 to-white/85"
              : "from-stone-50/90 to-white/80"
          }`}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl"
            >
              {getIcon()}
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              {title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-amber-600/20 rounded-tl-3xl" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-amber-600/20 rounded-br-3xl" />

              {/* Content */}
              <div className="relative z-10">{children}</div>

              {/* Glass effect orbs */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-stone-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
}
