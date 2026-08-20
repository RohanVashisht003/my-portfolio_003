import { Element } from "react-scroll";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { FaArrowRight, FaDownload, FaChevronDown } from "react-icons/fa";
const Home = () => {
  return (
    <Element
      name="home"
      className="w-full h-screen bg-theme-bg relative"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-0 relative z-10">
        <p className="text-theme-amber tracking-[0.2em] uppercase text-xs sm:text-sm font-semibold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-theme-text">
          Rohan Sharma
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-theme-dim pt-2 flex">
            
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Mern stack developer")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-theme-dim py-4 leading-8 ">
          Results-driven Full Stack Developer with around 4 years of experience building high-performance web applications at scale. Currently at Times Network.shipping multiple high-traffic news portals from the ground up. Recipient of the Ace Performer Award for driving significant performance improvements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-theme-amber text-[#1a1305] px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-theme-amber-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Get In Touch
            <FaArrowRight className="ml-2" />
          </Link>
          
          <a
            href="https://drive.google.com/file/d/113A6Zh57EapseGCgHmGv8f43FtjqdTTd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-theme text-theme-text px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:border-theme-cyan hover:text-theme-cyan transition-all duration-300"
          >
            <FaDownload className="mr-2" />
            Resume
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-theme-amber hover:text-theme-amber-hover transition-colors duration-300"
          >
            <FaChevronDown size={30} />
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Home;
