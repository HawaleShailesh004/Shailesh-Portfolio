"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../datafiles/projects";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 sm:px-6 md:px-[5%] py-16 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
        Projects I've Built
      </h2>
      <div className="h-1 w-24 bg-amber-200 rounded-full mb-12" />

      <div className="flex flex-col items-center gap-12 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: false, amount: 0.25 }}
            className="w-[80vw] max-w-4xl md:max-w-5xl lg:max-w-6xl hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 rounded-xl sm:h-[18rem] flex items-center justify-center pl-2 sm:gap-20 border-b sm:border-none"
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
