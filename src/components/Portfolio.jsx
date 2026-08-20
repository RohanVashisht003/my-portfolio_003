import { Element } from "react-scroll";
import { portfolio } from "../assets/StaticData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = portfolio.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const filterClass = (active) =>
    `px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
      active
        ? "bg-theme-amber text-[#1a1305]"
        : "bg-theme-panel border border-theme text-theme-dim hover:border-theme-cyan hover:text-theme-cyan"
    }`;

  return (
    <Element
      name="portfolio"
      className="w-full bg-theme-bg py-32 relative z-10"
    >
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex flex-col justify-center h-full text-theme-text">
        <div>
          <p className="section-tag">Work</p>
          <h1 className="text-4xl font-bold inline text-theme-text">
            Projects
          </h1>
          <p className="py-6 text-theme-dim">
            High-traffic news portals and full-stack applications.
          </p>
        </div>

        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={filterClass(filter === "all")}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("professional")}
            className={filterClass(filter === "professional")}
          >
            Professional
          </button>
          <button
            onClick={() => setFilter("personal")}
            className={filterClass(filter === "personal")}
          >
            Personal
          </button>
        </div>

        {(filter === "all" || filter === "professional") && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-theme-text mb-2">
              Professional Projects
            </h2>
            <p className="text-theme-dim mb-6">
             
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter((p) => p.category === "professional")
                .map((work, index) => (
                  <div
                    key={index}
                    className="bg-theme-panel border border-theme rounded-[10px] overflow-hidden hover:border-theme-cyan transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration={600 + (index * 100)}
                    data-aos-easing="linear"
                  >
                    <div className="relative h-40 overflow-hidden">
                      {work.iframe ? (
                        <div className="w-full h-full">
                          <iframe
                            src={work.iframe}
                            title={work.title}
                            className="w-full h-full border-0"
                            style={{ transform: "scale(0.3)", transformOrigin: "top left", width: "333%", height: "333%" }}
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <img
                          src={work.imgUrl}
                          alt={work.title}
                          className="w-full h-40 object-cover"
                        />
                      )}
                      <a
                        href={work.workUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 bg-theme-bg/80 backdrop-blur-sm p-2 rounded-full hover:bg-theme-panel-2 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={16} className="text-theme-amber" />
                      </a>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-theme-text mb-2">
                        {work.title}
                      </h3>
                      <p className="text-sm text-theme-dim mb-4 line-clamp-4">
                        {work.description || "A full-stack application built with modern technologies."}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {work.tech.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-medium text-theme-dim bg-white/[0.03] border border-theme rounded-md px-2 py-1"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {(filter === "all" || filter === "personal") && (
          <div>
            <h2 className="text-2xl font-bold text-theme-text mb-2">
              Personal Projects
            </h2>
            <p className="text-theme-dim mb-6">
              Side projects and experimental work
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter((p) => p.category === "personal")
                .map((work, index) => (
                  <div
                    key={index}
                    className="bg-theme-panel border border-theme rounded-[10px] overflow-hidden hover:border-theme-cyan transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration={600 + (index * 100)}
                    data-aos-easing="linear"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {work.iframe ? (
                        <div className="w-full h-full">
                          <iframe
                            src={work.iframe}
                            title={work.title}
                            className="w-full h-full border-0"
                            style={{ transform: "scale(0.3)", transformOrigin: "top left", width: "333%", height: "333%" }}
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <img
                          src={work.imgUrl}
                          alt={work.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <a
                        href={work.workUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 bg-theme-bg/80 backdrop-blur-sm p-2 rounded-full hover:bg-theme-panel-2 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={16} className="text-theme-amber" />
                      </a>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-theme-text mb-2">
                        {work.title}
                      </h3>
                      <p className="text-sm text-theme-dim mb-4 line-clamp-2">
                        {work.description || "A full-stack application built with modern technologies."}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {work.tech.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-xs font-medium text-theme-dim bg-white/[0.03] border border-theme rounded-md px-2 py-1"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <a
            className="bg-theme-amber text-[#1a1305] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-theme-amber-hover hover:-translate-y-0.5 transition-all duration-300"
            href="https://github.com/RohanVashisht003?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More on GitHub
            <FaGithub className="ml-2" />
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
