"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const educationData = [
  {
    degree: "Bachelor in Information Technology",
    duration: "2023 - 2026",
    institute: "Shivajirao S. Jondhale College Of Engineering, Dombivli",
  },
  {
    degree: "Diploma in Computer Engineering",
    duration: "2021 - 2023",
    score: "81%",
    institute: "VPM’s Polytechnic, Thane",
  },
  {
    degree: "10th SSC Maharashtra Board",
    duration: "2020",
    score: "86%",
    institute: "Shree Nagar Vidya Mandir, Thane",
  },
];

const EducationSection = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-8 md:px-[10%] py-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Education
      </h2>
      <div className="border-b-amber-200 border-2 w-30  mb-10 rounded-2xl" />

      <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 pl-6 space-y-10 w-[80vw]">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group bg-white/20 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute -left-8 top-6 bg-indigo-500 text-white rounded-full p-2 shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaGraduationCap size={18} />
            </div>
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              {edu.degree}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 italic">
              {edu.duration} {edu.score && `| ${edu.score}`}
            </p>
            <p className="text-base mt-1">{edu.institute}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
