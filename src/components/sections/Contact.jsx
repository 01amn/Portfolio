import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Phone,
} from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        message: "",
      });

      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="w-24 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Have a project, opportunity, or just want to connect? Feel free to
            reach out. I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl border border-slate-700 p-8">

              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                <a
                  href="tel:+917860951678"
                  className="flex items-center gap-5 group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-cyan-500/10 transition">
                    <Phone className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">Phone</p>
                    <p className="text-white font-medium">
                      +91 7860951678
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:amanmishra.stnt@gmail.com"
                  className="flex items-center gap-5 group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-cyan-500/10 transition">
                    <Mail className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-white font-medium">
                      amanmishra.stnt@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/amanmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-blue-500/10 transition">
                    <Linkedin className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">
                      linkedin.com/in/amanmishra
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/01amn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-slate-700 transition">
                    <Github className="text-white" />
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">GitHub</p>
                    <p className="text-white font-medium">
                      github.com/01amn
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl border border-slate-700 p-8 space-y-6"
            >

              <div>
                <label className="block mb-2 text-slate-400">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-400">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-400">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-[1.02] transition duration-300 flex justify-center items-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;