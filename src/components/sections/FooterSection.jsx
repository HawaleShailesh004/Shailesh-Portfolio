import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="w-full px-6 py-6 border-t border-gray-700 bg-[#121212] text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        
        {/* Left: Copyright */}
        <div className="font-medium text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Shailesh Hawale</span>. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/HawaleShailesh004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shailesh-hawale"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shaileshhawale004@gmail.com"
            aria-label="Email"
            className="hover:text-red-400 transition duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Optional: Scroll to top button */}
      <div className="text-center mt-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" cursor-pointer text-xs text-gray-500 hover:text-indigo-400 transition"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
