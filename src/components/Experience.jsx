import { useState } from "react";
import { Element } from "react-scroll";
import { ChevronDown, ChevronUp } from "lucide-react";
import { experience } from "../assets/StaticData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const items = experience.slice().reverse();

  const [openIndex, setOpenIndex] = useState(
    items.reduce((acc, _, i) => {
      acc[i] = i !== 0;
      return acc;
    }, {})
  );

  const toggle = (i) => {
    setOpenIndex((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <Element
      name="experience"
      className="min-h-screen text-theme-text py-32 bg-theme-bg relative z-10"
    >
      <div className="max-w-screen-lg mx-auto px-8 py-4 flex flex-col justify-center h-full">
        <p className="section-tag text-center">Experience</p>
        <h1 className="text-4xl font-bold inline text-theme-text text-center">
          Experience
        </h1>
        <p className="text-xl py-6 text-theme-dim text-center">
          Experienced professional with a proven track record of success
        </p>

        <div className="relative mt-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-theme-amber to-theme" />

          <div className="flex flex-col gap-8">
            {items.map((data, index) => {
              const isOpen = !!openIndex[index];

              return (
                <div key={index} className="relative pl-14">
                  <span className="absolute left-0 top-8 w-4 h-4 rounded-full border-2 border-theme-amber bg-theme-bg" />

                  <div
                    className="rounded-[10px] border border-theme bg-theme-panel overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="w-full flex items-start justify-between gap-4 p-6 text-left"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-theme-text">
                          {data.company}
                        </h3>
                        <p className="text-sm mt-1 text-theme-dim">
                          <span className="text-theme-cyan font-medium">
                            {data.position}
                          </span>
                          {data.location && <> · {data.location}</>}
                          {data.date && <> · {data.date}</>}
                        </p>
                      </div>
                      <span className="text-theme-dim mt-1 shrink-0">
                        {isOpen ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-theme pt-5">
                        {data.image && (
                          <img
                            src={data.image}
                            alt={`${data.company} preview`}
                            className="w-28 h-16 object-cover rounded-lg border border-theme mb-4"
                          />
                        )}

                        {Array.isArray(data.description) ? (
                          <ul className="space-y-2">
                            {data.description.map((line, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-[15px] leading-relaxed text-theme-dim"
                              >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-theme-amber shrink-0" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          data.description && (
                            <p className="text-[15px] leading-relaxed text-theme-dim">
                              {data.description}
                            </p>
                          )
                        )}

                        {Array.isArray(data.skills) && data.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {data.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="text-xs font-medium text-theme-dim bg-white/[0.03] border border-theme rounded-md px-3 py-1"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
