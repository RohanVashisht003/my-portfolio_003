import { Element } from "react-scroll";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { FaArrowRight, FaDownload, FaChevronDown } from "react-icons/fa";
const Home = () => {
  return (
    <Element
      name="home"
      className="w-full h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-0">
        <p className="text-black-50 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gradient">
          Rohan Sharma
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-black-50 pt-2 flex">
            
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
        <p className="text-black-50 py-4 leading-8 ">
          Results-driven Full Stack Developer with around 4 years of experience building high-performance web applications at scale. Currently at Times Network.shipping multiple high-traffic news portals from the ground up. Recipient of the Ace Performer Award for driving significant performance improvements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-[#7E57C2] text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-[#6D46B0] transition-all duration-300"
          >
            Get In Touch
            <FaArrowRight className="ml-2" />
          </Link>
          
          <a
            href="https://drive.google.com/file/d/113A6Zh57EapseGCgHmGv8f43FtjqdTTd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#7E57C2] text-[#7E57C2] px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-[#7E57C2] hover:text-white transition-all duration-300"
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
            className="text-[#7E57C2] hover:text-[#6D46B0] transition-colors duration-300"
          >
            <FaChevronDown size={30} />
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Home;
