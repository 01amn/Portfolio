import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/profile1.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-neon-cyan uppercase tracking-[4px] font-semibold mb-3">
              Welcome to My Digital Universe
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm
              <br />

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Aman Mishra
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mb-8">
              A passionate Computer Science Engineer specializing in Data
              Science. I build intelligent systems, modern web applications and
              AI-powered solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-40"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 animate-[spin_10s_linear_infinite]">

                <div
                  className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-900"
                  style={{
                    animation:
                      "spin 10s linear infinite reverse",
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Aman Mishra"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;