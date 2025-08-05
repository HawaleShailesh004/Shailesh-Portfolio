import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 mb-16 group items-center ">
      {/* Timeline Number + Vertical Line */}
      <div className="absolute left-[-25px] top-0 flex flex-col">
        {/* Circle with number */}
        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold z-10">
          {index + 1}
        </div>
        {/* Vertical line */}
        <div className="w-px bg-indigo-400 h-full mt-1" />
      </div>

      {/* Image Section */}
      <div className="w-[100%] sm:w-1/2 w-full overflow-hidden rounded-xl shadow-md flex items-center h-full relative">
        {/* Background image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-41 md:h-72 object-cover rounded-xl"
        />

        {/* Overlay: subtle base + gradient + theme tint */}
        <div
          className="absolute inset-0 rounded-xl z-10 pointer-events-none
            bg-gradient-to-tr from-indigo-700/10 via-transparent to-black/20
            dark:from-indigo-600/20 dark:to-black/40
            transition-all duration-200"
        />

        {/* Hover intensifier (activated by parent .group hover) */}
        <div
          className="absolute inset-0 rounded-xl z-20 pointer-events-none
            bg-gradient-to-tr from-indigo-700/20 via-indigo-600/10 to-black/30
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full flex flex-col gap-3 justify-center z-30">
        <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          {project.tech.map((tag, i) => (
            <span
              key={i}
              className="bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white px-2 py-1 rounded font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-6 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FiGithub /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
