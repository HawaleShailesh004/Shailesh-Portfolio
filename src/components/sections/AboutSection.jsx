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
      title: "Full-Stack Web Dev",
      description:
        "Exploring ways in developing end-to-end MERN stack applications with scalable architecture and optimized performance.",
    },
    {
      icon: <FaBrain className="text-indigo-500 text-2xl" />,
      title: "AI-Driven Development",
      description:
        "Designing and implementing AI-powered features that enhance usability and deliver intelligent experiences.",
    },
    {
      icon: <FaLaptopCode className="text-indigo-500 text-2xl" />,
      title: "Modern UI/UX Engineering",
      description:
        "Crafting responsive, accessible, and visually appealing interfaces that elevate the user experience.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 md:px-[10%] py-20 transition-all duration-500 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        About Me
      </h2>
      <div className="border-b-amber-200 border-2 w-30  mb-10 rounded-2xl" />

      {/* Intro Paragraph */}
      <motion.p
        className="text-base md:text-lg max-w-3xl mx-auto text-center leading-relaxed text-slate-700 dark:text-slate-300 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        I’m <strong>Shailesh Hawale</strong>, a self-taught{" "}
        <strong>MERN Stack Developer</strong> specializing in building scalable
        and maintainable web applications. I focus on writing clean,
        professional code and delivering solutions that solve real-world
        problems. Currently, I’m enhancing my skills in professional coding
        practices and am open to internship opportunities.
      </motion.p>

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
