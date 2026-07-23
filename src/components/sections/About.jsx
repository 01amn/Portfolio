import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code,
  Terminal,
  Database,
} from "lucide-react";

const About = () => {
  const cards = [
    {
      title: "Data Science",
      icon: <Terminal className="w-8 h-8 text-purple-400 mb-4" />,
      desc: "Extracting meaningful insights from data using Machine Learning.",
    },
    {
      title: "AI Enthusiast",
      icon: <BrainCircuit className="w-8 h-8 text-cyan-400 mb-4" />,
      desc: "Passionate about Artificial Intelligence, Deep Learning and Generative AI.",
    },
    {
      title: "Web Developer",
      icon: <Code className="w-8 h-8 text-blue-400 mb-4" />,
      desc: "Building responsive and modern web applications with React and Tailwind CSS.",
    },
    {
      title: "Problem Solver",
      icon: <Database className="w-8 h-8 text-emerald-400 mb-4" />,
      desc: "I enjoy solving real-world problems using clean and efficient solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-5"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-300 leading-8 mb-6">
              Hello! I'm <span className="text-cyan-400 font-semibold">Aman Mishra</span>,
              a Computer Science Engineer specializing in
              <span className="text-purple-400 font-semibold">
                {" "}Data Science
              </span>.
              I enjoy building intelligent applications, solving challenging
              problems and exploring modern technologies.
              I build intelligent systems, scalable web applications, and AI-powered solutions that transform complex problems into efficient, scalable, and impactful experiences.
              My interests include Machine Learning, Deep Learning, Web Development and Artificial Intelligence.
              As an aspiring Data Scientist and Data Engineer, I have a strong foundation in Python, SQL, Machine Learning, and Data Analysis. 
              I'm passionate about developing data-driven solutions that create real-world impact.
            </p>

            <p className="text-lg text-slate-300 leading-8">
              Apart from coding, I continuously learn new technologies and
              improve my problem-solving skills to become a better software
              engineer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-10">

              <div className="text-center glass rounded-xl p-5">
                <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
                <p className="text-slate-400 mt-2">
                  Projects Completed
                </p>
              </div>

              <div className="text-center glass rounded-xl p-5">
                <h3 className="text-4xl font-bold text-purple-400">10+</h3>
                <p className="text-slate-400 mt-2">
                  Technologies
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="glass rounded-2xl border border-slate-700 p-6 hover:border-cyan-400 transition-all duration-300"
              >
                {card.icon}

                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;