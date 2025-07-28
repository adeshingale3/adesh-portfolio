import React from 'react'
import { Github, Linkedin, Twitter, Mail} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-white"
              >
                Get in Touch
              </motion.h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Let's collaborate on your next project
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-900/20 to-purple-600/10 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/20 shadow-lg shadow-purple-500/10"
              >
                <form className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-4 rounded-lg bg-white/5 border border-purple-500/20 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-transparent peer"
                      placeholder="Name"
                      id="name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-6 text-sm text-purple-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-purple-400 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-4 rounded-lg bg-white/5 border border-purple-500/20 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-transparent peer"
                      placeholder="Email"
                      id="email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-6 text-sm text-purple-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-purple-400 peer-focus:text-sm"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      rows={4}
                      className="w-full px-4 py-4 rounded-lg bg-white/5 border border-purple-500/20 focus:outline-none focus:border-purple-500 transition-colors text-white resize-none placeholder-transparent peer"
                      placeholder="Message"
                      id="message"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-4 -top-6 text-sm text-purple-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-purple-400 peer-focus:text-sm"
                    >
                      Message
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 py-4 px-6 rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-purple-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-900/20 to-purple-600/10 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/20 shadow-lg shadow-purple-500/10"
              >
                <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Connect With Me</h3>
                <div className="space-y-6">
                  <motion.a
                    href="https://github.com/adeshingale3"
                    className="flex items-center space-x-4 text-gray-300 hover:text-white group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-colors">
                      <Github className="w-6 h-6" />
                    </div>
                    <span>Follow on GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/adeshx/"
                    className="flex items-center space-x-4 text-gray-300 hover:text-white group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span>Connect on LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://x.com/adesshhhhh"
                    className="flex items-center space-x-4 text-gray-300 hover:text-white group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </div>
                    <span>Follow on Twitter</span>
                  </motion.a>
                  <motion.a
                    href="mailto:adeshingale600@gmail.com"
                    className="flex items-center space-x-4 text-gray-300 hover:text-white group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span>adeshingale600@gmail.com</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
    </div>
  )
}

export default ContactPage
