import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import authorImg from '../assets/richard.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaEnvelope />, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#1a1f26] py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#1a1f26] rounded-2xl shadow-2xl overflow-hidden">
          {/* Main Content Section */}
          <div className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* About Author Column */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-amber-500/90">About the Author</h3>
                <div className="flex flex-col items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 rounded-full bg-[#FFDAC1] overflow-hidden">
                      <img
                        src={authorImg}
                        alt="Dr. Richard Ruhling"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#1a1f26] flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                  </motion.div>
                  <div className="space-y-1">
                    <h4 className="text-white font-medium">Dr. Richard Ruhling</h4>
                    <p className="text-gray-400 text-sm">Health & Wellness Expert</p>
                  </div>
                  <p className="text-gray-300/80 text-sm leading-relaxed">
                    Dr. Richard Ruhling brings decades of medical expertise and spiritual insight
                    to help readers find true health and happiness.
                  </p>
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-amber-500/90">Quick Links</h3>
                <ul className="space-y-3">
                  {['About', 'Book Preview', 'Contact', 'Blog'].map((link) => (
                    <motion.li
                      key={link}
                      whileHover={{ x: 5 }}
                      className="text-gray-300/80 hover:text-white cursor-pointer transition-colors text-sm"
                    >
                      {link}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Connect Column */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-amber-500/90">Connect</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      whileHover={{ y: -3 }}
                      className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-amber-600/20 
                        flex items-center justify-center transition-colors text-gray-300 hover:text-amber-500"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800/50">
            <div className="p-6 text-center">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Richard Ruhling, MD. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
