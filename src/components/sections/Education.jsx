import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Specialization in Data Science",
    duration: "",
    college:
      "Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh",
    description:
      "Bachelor's degree with a specialization in Data Science. Built projects in Machine Learning, Deep Learning, Artificial Intelligence, Full Stack Development and Data Analytics while strengthening problem-solving and software engineering skills.",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    specialization: "Mathematics",
    duration: "",
    college:
      "Siddharth University, Uttar Pradesh",
    description:
      "Studied Mathematics with emphasis on logical reasoning, analytical thinking, statistics and mathematical foundations that support computer science and machine learning.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="w-24 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-700 ml-4">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative pl-10 pb-14"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-slate-900"></div>

              {/* Card */}
              <div className="glass rounded-2xl border border-slate-700 p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1">

                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-5">

                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <GraduationCap className="text-cyan-400" size={26} />
                      {item.degree}
                    </h3>

                    <p className="text-cyan-400 mt-2 font-medium">
                      {item.specialization}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full text-slate-300 text-sm">
                    <Calendar size={16} />
                    {item.duration}
                  </div>

                </div>

                <div className="flex items-start gap-2 mb-5 text-slate-300">
                  <MapPin
                    className="text-purple-400 mt-1"
                    size={18}
                  />

                  <span>{item.college}</span>
                </div>

                <p className="text-slate-400 leading-8">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;