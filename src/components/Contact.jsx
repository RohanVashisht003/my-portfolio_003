import { Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element
      name="contact"
      className="w-full py-16 bg-theme-bg relative z-10"
    >
      <div className="flex flex-col justify-center items-center w-full px-8">
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8">
          <div className="bg-theme-panel border border-theme rounded-[10px] p-8 flex flex-col ">
           
            <p className="section-tag text-center">Contact</p>
            <h2 className="text-3xl font-bold text-theme-text mb-4 text-center">Let's Connect</h2>
            <p className="text-theme-dim leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
            </p>
             <div className="flex items-center text-theme-amber text-sm font-semibold pt-9">
              <span className="h-2 w-2 bg-theme-amber rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>
          </div>

          <div className="bg-theme-panel border border-theme rounded-[10px] p-8">
            <h3 className="text-2xl font-bold text-theme-text mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-theme-dim">
                <FaEnvelope className="mr-3 text-theme-amber" />
                <span>sharmarohan544@gmail.com</span>
              </div>
              <div className="flex items-center text-theme-dim">
                <FaPhone className="mr-3 text-theme-amber" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center text-theme-dim">
                <FaMapMarkerAlt className="mr-3 text-theme-amber" />
                <span>India</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/RohanVashisht003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-theme-panel-2 border border-theme rounded-full flex items-center justify-center hover:bg-theme-amber hover:text-[#1a1305] transition-all duration-300 text-theme-text"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-theme-panel-2 border border-theme rounded-full flex items-center justify-center hover:bg-theme-amber hover:text-[#1a1305] transition-all duration-300 text-theme-text"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:sharmarohan544@gmail.com"
                className="w-12 h-12 bg-theme-panel-2 border border-theme rounded-full flex items-center justify-center hover:bg-theme-amber hover:text-[#1a1305] transition-all duration-300 text-theme-text"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </Element>
  );
};

export default Contact;
