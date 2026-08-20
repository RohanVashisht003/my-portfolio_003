import Logo from "../assets/R.png";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [showShadowNav, setShowShadowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowShadowNav(true);
      } else {
        setShowShadowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 z-20 text-theme-dim transition-all duration-300 ${
        showShadowNav
          ? "translate-y-0 opacity-100 bg-theme-bg/85 backdrop-blur-md border-b border-theme"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div>
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={Logo}
            alt="logo"
            className="rounded-full"
            style={{ width: "5rem", marginLeft: "1rem", marginRight: "1rem" }}
          />
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-theme-amber hover:translate-y-1 hover:duration-200 active:text-theme-amber">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-theme-amber hover:translate-y-1 hover:duration-200 active:text-theme-amber">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-theme-amber hover:translate-y-1 hover:duration-200 active:text-theme-amber">
          <Link to="awards" smooth={true} duration={500}>
            Awards
          </Link>
        </li>
        <li className="hover:text-theme-amber hover:translate-y-1 hover:duration-200 active:text-theme-amber">
          <Link to="skill" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li className="hover:text-theme-amber hover:translate-y-1 hover:duration-200 active:text-theme-amber">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="hover:text-theme-amber hover:translate-y-1 hover:duration-200 active:text-theme-amber">
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="hover:text-theme-amber hover:translate-y-1 hover:duration-200 active:text-theme-amber">
          <Link to="contact" smooth={true} duration={500}>
            Get In Touch
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[100%]">
        <ul className="flex flex-col gap-6">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-theme-panel border border-theme rounded-e-2xl font-semibold">
            <a
              href="https://www.linkedin.com/in/rohan-sharma-937283167/"
              className="flex justify-between items-center w-full text-theme-text"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-theme-panel border border-theme rounded-e-2xl font-semibold">
            <a
              href="https://github.com/RohanVashisht003"
              className="flex justify-between items-center w-full text-theme-text"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
