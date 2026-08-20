import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-theme-bg border-t border-theme py-8 px-8 relative z-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-theme-text font-semibold">
            Designed and Developed by Rohan Sharma
          </p>
          <p className="text-theme-dim text-sm mt-1">
            Copyright © 2026
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/RohanVashisht003"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-theme-panel border border-theme rounded-lg flex items-center justify-center text-theme-dim hover:text-theme-amber hover:border-theme-amber transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/rohan-sharma-937283167/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-theme-panel border border-theme rounded-lg flex items-center justify-center text-theme-dim hover:text-theme-amber hover:border-theme-amber transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:sharmarohan544@gmail.com"
            className="w-12 h-12 bg-theme-panel border border-theme rounded-lg flex items-center justify-center text-theme-dim hover:text-theme-amber hover:border-theme-amber transition-colors duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        <div className="flex gap-6 text-center md:text-right">
          <a
            href="https://github.com/RohanVashisht003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-dim hover:text-theme-amber transition-colors duration-300"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/rohan-sharma-937283167/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-dim hover:text-theme-amber transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sharmarohan544@gmail.com"
            className="text-theme-dim hover:text-theme-amber transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
