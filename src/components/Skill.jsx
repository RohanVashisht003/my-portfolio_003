import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      count: 10,
      skills: [
        "React.js", "Next.js", "React Native", "Angular", "Ionic",
        "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux"
      ]
    },
    {
      title: "Backend",
    
      count: 6,
      skills: [
        "Node.js", "Express.js", "Handlebars (SSR)", "REST APIs", "Microservices", "PHP"
      ]
    },
    {
      title: "Languages",
      
      count: 5,
      skills: [
        "JavaScript (ES6+)", "TypeScript", "Python", "C++", "C"
      ]
    },
    {
      title: "Databases",
      
      count: 3,
      skills: [
        "MongoDB", "MySQL", "Firebase"
      ]
    },
    {
      title: "Testing",
    
      count: 2,
      skills: [
        "Jest", "Unit Testing"
      ]
    },
    {
      title: "Performance & SEO",
      
      count: 7,
      skills: [
        "Core Web Vitals", "SSR/SSG", "Lazy Loading", "Code Splitting",
        "Structured Data", "Sitemaps", "Canonical URLs"
      ]
    }
  ];

  return (
    <Element
      name="skill"
      className="w-full bg-theme-bg text-theme-text py-32 relative z-10"
    >
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex flex-col justify-center h-full">
        <div>
          <p className="section-tag">Skills</p>
          <p className="text-4xl font-bold inline text-theme-text">
            Tools I build with
          </p>
          <p className="py-6 text-theme-dim">
            I have used and worked with the following technologies in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-theme-panel border border-theme rounded-[10px] p-6 hover:-translate-y-1 hover:border-theme-cyan transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration={600 + (index * 100)}
              data-aos-easing="linear"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-lg border border-theme text-theme-amber text-xs font-semibold flex items-center justify-center">
                  {category.code}
                </div>
                <span className="text-sm font-semibold text-theme-dim bg-theme-panel-2 border border-theme px-3 py-1 rounded-full">
                  {category.count} skills
                </span>
              </div>

              <h3 className="text-xl font-bold text-theme-text mb-3">
                {category.title}
              </h3>

              <div className="w-full h-1 bg-white/10 rounded-full mb-4">
                <div 
                  className="h-full bg-theme-amber rounded-full"
                  style={{ width: `${(category.count / 10) * 100}%` }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs font-medium text-theme-dim bg-white/[0.03] border border-theme rounded-md px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skill;
