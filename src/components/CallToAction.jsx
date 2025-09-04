import { motion } from "framer-motion";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import GooeyButton from "./GooeyButton";

export default function CallToAction() {
  return (
    <section id="buy" className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-800/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Icon */}
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
              <FaBookOpen className="w-8 h-8 text-white" />
            </div>
            
            {/* Title with gradient text */}
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">
              Ready to Transform Your Health?
            </h2>
            
            {/* Description with better typography */}
            <p className="text-xl md:text-2xl text-amber-100/90 font-light leading-relaxed max-w-2xl mx-auto">
              Get your copy today and start making wise choices for a longer, 
              healthier, and happier life.
            </p>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <GooeyButton>
              Buy Now <FaArrowRight className="ml-3 inline-block" />
            </GooeyButton>

            <motion.a
              href="#preview"
              className="group px-8 py-4 text-white/90 hover:text-white flex items-center gap-2 
                transition-all font-semibold"
              whileHover={{ x: 5 }}
            >
              Read Preview
              <FaArrowRight className="transform transition-transform group-hover:translate-x-2" />
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "4.9", label: "Average Rating" },
                { number: "10K+", label: "Readers Worldwide" },
                { number: "100%", label: "Satisfaction Guaranteed" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-amber-100/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
