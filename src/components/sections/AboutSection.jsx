import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  const highlights = [
    {
      icon: <FaCode className="text-indigo-500 text-2xl" />,
      title: "Full-Stack Development",
      description:
        "Building and deploying complete MERN stack applications. I love to debug and optimize performance to ensure a clean, reliable, and user-friendly experience.",
    },
    {
      icon: <FaBrain className="text-indigo-500 text-2xl" />,
      title: "Exploring AI",
      description:
        "Actively exploring AI-driven development to build intelligent features that enhance usability and create more dynamic user experiences.",
    },
    {
      icon: <FaLaptopCode className="text-indigo-500 text-2xl" />,
      title: "Modern UI/UX Engineering",
      description:
        "Crafting responsive, accessible, and visually stunning interfaces that provide an exceptional user journey.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 md:px-[10%] py-20 transition-all duration-500 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        About Me
      </h2>
      <div className="h-0.5 w-24 bg-amber-200 rounded-full mb-12" />

      {/* Intro Paragraph */}
      <div className="px-5 pt-4 pb-0 rounded-b-2xl border-r-gray-100 border-b-gray-100 border-r-1 border-l-1 border-b-1  border-l-1 shadow-indigo-500/20 mb-10 shadow-lg">
        <motion.p
          className="text-base md:text-lg max-w-3xl mx-auto sm:text-center leading-relaxed text-slate-700 dark:text-slate-300 mb-12 text-justify"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Meet <strong>Shailesh Hawale</strong>, a{" "}
          <strong>MERN Stack Developer</strong> and self-described{" "}
          <strong>
            <i>"Chill Coder"</i>
          </strong>
          . I love bringing innovative ideas to life on the web by building
          modern, full-stack applications with a focus on writing clean and
          maintainable code. I'm driven to create solutions that solve real
          problems for people. Currently, I'm enhancing my professional coding
          skills and am eager to find an internship where I can learn from
          experienced developers and contribute to meaningful projects.
        </motion.p>
      </div>

      {/* Highlights / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-slate-100 dark:bg-slate-800 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 rounded-xl p-6 flex flex-col items-start gap-2 border border-transparent hover:border-indigo-400 hover:shadow-indigo-500/30"
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
