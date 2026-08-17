import sevenHundred from "../assets/700-logo.png";
import sunpower from "../assets/sunpower.jpeg";
import bps from "../assets/bps2.jpeg";
import himcab from "../assets/himcab.jpeg";
import amazon from "../assets/amazon.png";
import kanban from "../assets/kanban.jpeg";
import weather from "../assets/weather.avif";
import timesnow from "../assets/timesnow.jpg";

// Array of langue objects
export const languages = [
  {
    id: 1,
    src: "https://img.icons8.com/color/480/000000/html-5--v1.png",
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: "https://img.icons8.com/color/480/000000/css3.png",
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: "https://img.icons8.com/color/480/000000/javascript--v1.png",
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: "https://img.icons8.com/color/480/000000/react-native.png",
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: "https://img.icons8.com/ios-glyphs/480/000000/github.png",
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 6,
    src: "https://img.icons8.com/color/480/tailwind_css.png",
    title: "Tailwind",
    style: "shadow-teal-600",
  },
  {
    id: 7,
    src: "https://img.icons8.com/fluency/480/bootstrap.png",
    title: "Bootstrap",
    style: "shadow-violet-500",
  },
  {
    id: 8,
    src: "https://img.icons8.com/color/480/000000/nodejs.png",
    title: "Nodejs",
    style: "shadow-yellow-500",
  },
  {
    id: 10,
    src: "https://img.icons8.com/color/480/mongodb.png",
    title: "Mongodb",
    style: "shadow-violet-500",
  },
  {
    id: 11,
    src: "https://img.icons8.com/color/96/graphql.png",
    title: "Graphql",
    style: "shadow-orange-500",
  },
  {
    id: 12,
    src: "https://img.icons8.com/color/96/nextjs.png",
    title: "Nextjs",
    style: "shadow-teal-500",
    imgStyle: "invert",
  },
  {
    id: 13,
    src: "https://img.icons8.com/color/480/000000/visual-studio--v1.png",
    title: "VSCode",
    style: "shadow-gray-500",
  },
  {
    id: 14,
    src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
    title: "Postman",
    style: "shadow-violet-500",
  },
];

export const experience = [
  {
    date: "June 2018 - July 2018",
    company: "IndiaMart InterMesh Pvt. Ltd.",
    position: "Android Developer Trainee",
    description: [
      "Learned and understood the working of Android OS",
      "Developed new features for the Android application"
    ],
  },
  {
    date: "October 2019 - March 2020",
    company: "Ap2v solutions Freelancing",
    position: "Trainee",
    description: [
      "Worked as a Linux trainer",
      "Developed web applications as a freelancer",
      "Gained practical experience with HTML, CSS, and JavaScript",
      "Worked on various projects as a trainee"
    ],
  },
  // {
  //   date: "June-2021 - August-2022",
  //   company: "TechMahindra",
  //   position: "Associate-Customer Support",
  //   description: [
  //     "Resolved customer inquiries efficiently",
  //     "Escalated issues to concerned teams",
  //     "Ensured high customer satisfaction levels"
  //   ],
  // },
  {
    date: "June-2021 - September-2022",
    company: "Remote",
    position: "Freelance Web Developer",
    description: [
      "Managed direct client communication, collaborated with client teams to understand and gather the requirements, and provided regular updates on project progress.",
      "Built and deployed a full-stack business website for Himcab, handling end-to-end development from UI design to backend integration.",
      "Developed a custom website for Sunpower, a US-based client, architecting responsive frontend components and integrating backend APIs for seamless data flow.",
    ],
  },
  {
    date: "October-2022 - Present",
    company: "Anubudh Edtech Pvt. Ltd.",
    position: "Fullstack Developer",
    description: [
      "Contributed to various projects using React.js, Node.js, Express.js, and MongoDB",
      "Developed APIs and UI components for multiple applications",
      "Received accolades for exceptional work on both frontend and backend",
      "Demonstrated strong problem-solving skills and innovative mindset",
      "Earned recognition on the organization's cheerboard for delivering exceptional results"
    ],
  },
  {
    date: "April 2024 - Present",
    company: "Times Network (BCCL), Noida",
    position: "Software Developer",
    description: [
      "Engineer scalable full-stack solutions using React.js, Next.js, TypeScript, and Node.js",
      "Power high-traffic production platforms with optimized performance",
      "Architect reusable UI systems and modular component structures, accelerating feature delivery",
      "Reduced development effort by 25% through modular architecture",
      "Optimized Redis caching, reducing memory usage by 40% and API payload size by 77%",
      "Built backend services supporting high-concurrency environments with improved response times"
    ],
  },
];

export const portfolio = [
  {
    title: "TimesNow Mobile Apps Backend Service",
    imgUrl: timesnow,
    // iframe: "https://www.timesnowhindi.com",
    // workUrl: "https://www.timesnowhindi.com",
    tech: ["Nodejs", "MongoDB", "Kafka", "Firebase"],
    duration: "400",
    category: "professional",
    description: "Architected and led the migration of legacy mobile backend services to a centralized microservices ecosystem, delivering a reusable shared platform for multiple Times Network mobile applications(Times Now, Navbharat,Tn-Shorts)"
  },
  {
    title: "Weather Backend Service",
    imgUrl: weather,
    // iframe: "https://www.timesnowhindi.com",
    // workUrl: "https://www.timesnowhindi.com",
    tech: ["Nodejs","Redis","Kafka","SQL"],
    duration: "400",
    category: "professional",
    description: "Built a centralized Node.js data aggregation service to periodically fetch weather data from external APIs,which processed thousands of daily requests and reduced redundant API calls by 40%"
  },
  {
    title: "TimesNow Navbharat",
    imgUrl: sevenHundred,
    iframe: "https://www.timesnowhindi.com",
    workUrl: "https://www.timesnowhindi.com",
    tech: ["Reactjs", "Redux", "Nodejs"],
    duration: "400",
    category: "professional",
    description: "Full-Stack E-Commerce Platform: Architected and developed a feature-rich, full-stack e-commerce application built from scratch using React.js for a dynamic, high-performance shopping interface and Node.js for backend services. Features secure user authentication, real-time inventory management, payment gateway integration, and responsive layouts optimized for fast checkout flow."
  },
  {
    title: "TimesNow World",
    imgUrl: sevenHundred,
    iframe: "https://www.timesnowworld.com",
    workUrl: "https://www.timesnowworld.com",
    tech: ["Reactjs", "Redux", "Nodejs"],
    duration: "400",
    category: "professional",
    description: "Architected and developed a full-stack, dedicated world news platform designed for a global audience. the application features a high-performance React.js frontend paired with a scalable Node.js backend service. The platform handles real-time news feeds, structured content aggregation, and responsive layouts tailored for fast content delivery."
  },
  {
    title: "GMAT Learning Platform",
    imgUrl: sevenHundred,
    // iframe: "https://www.timesnowworld.com",
    // workUrl: "https://www.timesnowworld.com",
    tech: ["Reactjs", "Ant-Design", "Redux", "RTK-Query"],
    duration: "400",
    category: "professional",
    description: "Comprehensive GMAT preparation platform with interactive learning modules and practice tests."
  },
  {
    title: "Sunpower Referral",
    imgUrl: sunpower,
    tech: ["Reactjs", "Ant-Design", "Nodejs", "Graphql"],
    iframe: "https://us.sunpower.com",
    workUrl: "https://us.sunpower.com/",
    duration: "400",
    category: "professional",
    description: "Solar energy referral system with seamless user experience and tracking capabilities."
  },
  {
    title: "Best Payment Solutions",
    imgUrl: bps,
    iframe: "https://www.bestpayment.solutions/",
    workUrl: "https://www.bestpayment.solutions/",
    tech: ["Reactjs", "Bootstrap", "Nodejs", "Graphql"],
    duration: "400",
    category: "professional",
    description: "Secure payment gateway solution with multi-currency support and real-time transaction processing."
  },
  {
    title: "Himcab India",
    imgUrl: himcab,
    iframe: "https://himcabindia.com/",
    workUrl: "https://himcabindia.com/",
    tech: ["Nextjs", "Material-ui", "Rest-api"],
    duration: "400",
    category: "professional",
    description: "Transportation company website with booking system and fleet management features."
  },
  {
    title: "Amazon UI Clone",
    imgUrl: amazon,
    iframe: "https://e-shop-5cc19.web.app/",
    workUrl: "https://e-shop-5cc19.web.app/",
    tech: ["Reactjs"],
    duration: "400",
    category: "personal",
    description: "E-commerce UI clone featuring product listings, cart functionality, and responsive design."
  },
  {
    title: "Kanban UI Clone",
    imgUrl: kanban,
    iframe: "https://rohanvashisht003.github.io/Kanban-Project-Frontend/",
    workUrl: "https://rohanvashisht003.github.io/Kanban-Project-Frontend/",
    tech: ["Reactjs", "Ant-design", "Styled-components"],
    duration: "400",
    category: "personal",
    description: "Project management tool with drag-and-drop functionality and task organization features."
  },
];
