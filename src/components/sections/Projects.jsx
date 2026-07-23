import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Leaf,
  BarChart2,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Virtual Eco-Herbal Garden",
      desc:
        "An AI-powered web application that identifies medicinal plants and provides detailed herbal information. The project combines Machine Learning with modern web technologies to preserve and promote traditional herbal knowledge through an interactive digital platform.",
      tech: [
        "React",
        "FastAPI",
        "TensorFlow",
        "Python",
        "Tailwind CSS",
        "MobileNetV2",
      ],
      github: "#",
      demo: "https://virtualecogarden.vercel.app/",
      icon: <Leaf className="text-emerald-400 w-7 h-7" />,
    },
    {
      title: "Laptop Price-Prediction System",
      desc:
        "Developed a Machine Learning model to predict laptop prices using real-world datasets. Performed data cleaning, feature engineering, exploratory data analysis, and model optimization with Scikit-Learn and XGBoost to achieve high prediction accuracy.",
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "XGBoost",
        "Matplotlib",
      ],
      github: "#",
      demo: "https://github.com/01amn/Lap-Pred",
      icon: <BarChart2 className="text-purple-400 w-7 h-7" />,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-24 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="glass rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden"
            >
              <div className="relative p-8 h-full flex flex-col">

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>

                {/* Header */}
                <div className="relative flex justify-between items-start mb-6 z-10">

                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                    {project.icon}
                  </div>

                  <div className="flex gap-4">

                    <a
                      href={project.github}
                      className="text-slate-400 hover:text-cyan-400 transition"
                    >
                      <Github size={20} />
                    </a>

                    <a
                      href={project.demo}
                      className="text-slate-400 hover:text-cyan-400 transition"
                    >
                      <ExternalLink size={20} />
                    </a>

                  </div>

                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-400 leading-7 flex-grow">
                  {project.desc}
                </p>

                {/* Technologies */}
                <div className="relative z-10 flex flex-wrap gap-3 mt-8 pt-6 border-t border-slate-700">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;