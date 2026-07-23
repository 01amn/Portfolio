import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const categories = [
    {
      title: "Programming",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Java (Basic)", level: 70 },
        { name: "HTML", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ],
    },
    {
      title: "Data Science & AI",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Deep Learning", level: 80 },
        { name: "Pandas & NumPy", level: 95 },
        { name: "Scikit-Learn", level: 90 },
        { name: "Generative AI", level: 85 },
      ],
    },
    {
      title: "Web Development",
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Node.js", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      color: "from-emerald-400 to-cyan-500",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 95 },
        { name: "Jupyter Notebook", level: 95 },
        { name: "Conda", level: 85 },
        { name: "ChatGPT", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="w-24 h-1 rounded-full mx-auto mt-5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="glass rounded-2xl border border-slate-700 p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 border-b border-slate-700 pb-4">
                {category.title}
              </h3>

              <div className="space-y-6">

                {category.skills.map((skill, i) => (
                  <div key={i}>

                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>

                      <span className="text-cyan-300 text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;