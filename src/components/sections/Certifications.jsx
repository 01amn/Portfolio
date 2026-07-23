import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Certificate of Participation – OOSC 3.0",
      issuer: "OpenPrinting, The Linux Foundation & IIT Kanpur",
      date: "",
      skills:
        "Open Source • Linux • Software Development • Community Collaboration • OpenPrinting",
    },
    {
      title: "TCS CodeVita Season 13 – Global Rank",
      issuer: "Tata Consultancy Services (TCS)",
      date: "",
      skills:
        "Competitive Programming • Data Structures • Algorithms • Python",
    },
    {
      title: "Innovation Festival – Participation",
      issuer:
        "Regional Science City, Lucknow | Ministry of Culture, Government of India",
      date: "",
      skills:
        "Innovation • Problem Solving • Technology • Research • Collaboration",
    },
    {
      title: "Machine Learning with Python",
      issuer: "Udemy",
      date: "",
      skills:
        "Python • Machine Learning • Scikit-learn • Data Preprocessing • Model Building",
    },
    {
      title: "Python for Data Science",
      issuer: "IBM SkillsBuild",
      date: "",
      skills:
        "Python, Data Science, Pandas, NumPy, Data Analysis, Data Visualization, Jupyter Notebook",
    },
    {
      title: "Data Science Tools",
      issuer: "IBM SkillsBuild",
      date: "",
      skills:
        "IBM SkillsBuild • Python • Jupyter Notebook • Data Analysis",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <div className="w-24 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="glass rounded-2xl border border-slate-700 p-7 hover:border-cyan-400 transition-all duration-300"
            >
              <Award className="w-10 h-10 text-cyan-400 mb-5" />

              <h3 className="text-xl font-semibold text-white mb-3 leading-7">
                {cert.title}
              </h3>

              <p className="text-cyan-400 text-sm font-medium">
                {cert.issuer}
              </p>

              {cert.date && (
                <p className="text-slate-500 text-sm mt-1">
                  {cert.date}
                </p>
              )}

              <div className="border-t border-slate-700 mt-6 pt-5 flex gap-3">
                <CheckCircle
                  size={18}
                  className="text-purple-400 mt-1 flex-shrink-0"
                />

                <p className="text-slate-400 text-sm leading-7">
                  {cert.skills}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;