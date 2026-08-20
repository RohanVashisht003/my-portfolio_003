import { Element } from "react-scroll";
import profile from "../assets/profile-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ResumeViewer from "./ResumeViewer";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Element
      name="about"
      className="w-full min-h-screen bg-theme-bg relative z-10"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-12">
         <div className="pb-8 text-center">
            <p className="section-tag">About</p>
            <p className="text-4xl font-bold inline text-theme-text">
              About
            </p>
          </div>
        <div className="w-full grid grid-cols-2 gap-8">
        </div>
        <div className="w-full grid sm:grid-cols-2 gap-8">
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="linear"
          >
            <img
              src={profile}
              alt="rohan"
              className="rounded-full shadow-2xl outline outline-1 outline-white/10 outline-offset-8"
              style={{ width: "10rem", height: "12rem" }}
            />
          </div>
          {/* text */}
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold pb-2 text-theme-amber">
              Hello, I am a computer science graduate from India.
            </p>
            <p className="text-sm leading-7 text-theme-dim">
              Architecting and delivering scalable production platforms at Times Network with React.js, Next.js, TypeScript, and Node.js. Focused on high-concurrency environments.
              I lead technical initiatives that optimize performance and streamline delivery—from slashing API payload sizes and Redis memory usage by 40% to reducing UI development overhead through modular architecture.
            </p>
          
          </div>
        </div>
        
        <ResumeViewer />
      </div>
    </Element>
  );
};

export default About;
