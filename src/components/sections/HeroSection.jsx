"use client";
import React from "react";
import { FiFolder, FiDownload, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import profilePic from "../../assets/shailesh.png";

const HeroSection = () => {
  return (
    <section
      className="w-full md:min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white 
                 px-6 sm:px-8 md:px-[10%] py-20 md:py-36 flex flex-col md:flex-row items-center gap-10 transition-all duration-500"
    >
      {/* Left - Text Content */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-start gap-2 sm:gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Shailesh Hawale
          </span>
        </motion.h1>

        <motion.h2
          className="text-base sm:text-lg md:text-xl font-medium text-indigo-600 dark:text-indigo-400 
                     h-8 sm:h-8 md:h-10 overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typewriter
            words={[
              "MERN Stack Developer",
              "AI Enthusiast",
              "Building Smart Web Experiences",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg max-w-xl text-slate-700 dark:text-slate-300 leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I’m a passionate full-stack developer who loves building impactful
          products with clean, maintainable code. Currently focused on creating
          scalable web solutions and honing professional coding practices.
        </motion.p>

        <motion.div
          className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-md shadow
                       hover:bg-indigo-700 transition duration-300 w-full sm:w-auto"
          >
            <FiPhone />
            Contact
          </button>

          <a
            href="/shailesh_hawale_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 border border-indigo-600 text-indigo-600
                       dark:text-indigo-400 dark:border-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-800
                       transition duration-300 w-full sm:w-auto text-center"
            // optional: add `download` if file is same-origin and you want it to download
            // download
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right - Profile Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="relative mt-10 sm:mt-0 w-60 h-60 md:w-115 md:h-115 rounded-full border-4 border-indigo-500 dark:border-indigo-400 
    shadow-[0_0_40px_10px_rgba(99,102,241,0.5),_0_0_60px_20px_rgba(99,102,241,0.3)]
    hover:shadow-[0_0_60px_20px_rgba(99,102,241,0.6),_0_0_90px_30px_rgba(99,102,241,0.4)]
    sm:shadow-[0_0_60px_20px_rgba(99,102,241,0.8),_0_0_100px_40px_rgba(99,102,241,0.5)]
    sm:hover:shadow-[0_0_90px_30px_rgba(99,102,241,1),_0_0_120px_60px_rgba(99,102,241,0.7)]
    transition-shadow duration-300
    "
        >
          <img
            src={profilePic}
            alt="Shailesh Hawale"
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
