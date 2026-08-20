import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaAward } from "react-icons/fa";

const Awards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const awards = [
    {
      title: "Ace Performer Award",
      issuer: "Times Network",
      year: "December 2025",
      description: "Recognized for driving significant performance improvements and delivering exceptional results in high-traffic news portal development.",
      icon: <FaAward size={40} />
    }
  ];

  return (
    <Element
      name="awards"
      className="w-full min-h-screen bg-theme-bg py-32 relative z-10"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-theme-text">
        <div className="text-center">
          <p className="section-tag">Awards</p>
          <h1 className="text-4xl font-bold inline text-theme-text">
            Awards & Recognition
          </h1>
          <p className="py-6 text-theme-dim">
            Recognition for excellence and outstanding contributions
          </p>
        </div>
        
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-1 gap-8 mt-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-theme-panel rounded-[10px] border border-theme p-8 flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="linear"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-theme-amber">
                  {award.icon}
                </div>
                <span className="text-sm font-semibold text-theme-dim bg-theme-panel-2 border border-theme px-3 py-1 rounded-full">
                  {award.year}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-theme-text mb-2">
                {award.title}
              </h3>
              
              <p className="text-theme-cyan font-semibold mb-4">
                {award.issuer}
              </p>
              
              <p className="text-theme-dim leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Awards;
