"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-500",
    category: "Frontend",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-500",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    category: "Frontend",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-600",
    category: "Backend",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-gray-600 dark:text-gray-300",
    category: "Backend",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-500",
    category: "Backend",
  },
  {
    name: "Flask",
    icon: <SiFlask />,
    color: "text-gray-800 dark:text-white",
    category: "Backend",
  },
  {
    name: "SQL",
    icon: <SiPostgresql />,
    color: "text-indigo-500",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
    category: "Backend",
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-gray-800 dark:text-white",
    category: "Tools",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-500",
    category: "Tools",
  },
];

const categories = ["Frontend", "Backend", "Tools"];

const SkillsSection = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 md:px-[10%] py-20 transition-all duration-500">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Skills & Technologies
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-2 text-center">
          Open to Frontend, Backend, and Full Stack roles
        </p>
        <div className="h-0.5 w-24 bg-amber-200 rounded-full mb-12" />

        <div className="w-full flex flex-col divide-y divide-slate-200 dark:divide-slate-700">
          {categories.map((category) => (
            <div key={category} className="w-full py-8">
              {/* Outer container centers content and limits width */}
              <div className="mx-auto w-full max-w-4xl px-4 flex flex-col md:flex-row items-center md:items-stretch gap-6">
                {/* Title box: centered on mobile, left aligned on md+ */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0
                             w-full md:w-40 lg:w-48
                             flex items-center justify-center
                             px-4 py-2
                             bg-indigo-100 dark:bg-indigo-800
                             text-indigo-700 dark:text-white
                             rounded-3xl font-semibold shadow-sm"
                >
                  {category}
                </motion.div>

                {/* Skills */}
                <div
                  className="flex-1 flex flex-wrap gap-4 md:gap-6
                             justify-center md:justify-start"
                >
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.04 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className={`
                          flex flex-col items-center justify-center
                          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
                          bg-gradient-to-br from-slate-100 to-slate-200
                          dark:from-slate-800 dark:to-slate-700
                          border border-slate-200 dark:border-slate-700
                          rounded-xl
                          transform
                          transition-all duration-300
                          ${skill.color}
                          shadow-sm md:shadow-md
                          hover:scale-105 md:hover:shadow-2xl
                        `}
                        title={skill.name}
                      >
                        <div className="text-2xl md:text-3xl mb-1">
                          {skill.icon}
                        </div>
                        <p className="text-[10px] md:text-xs text-center mt-0">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
