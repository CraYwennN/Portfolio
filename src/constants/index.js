import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    shopify,
    carrent,
    porsche,
    jobit,
    tripguide,
    threejs,
    tech4bet,
    danfoss,
    UVT,
    VUT,
    portfolio
    
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Vue.js  Developer",
      icon: backend,
    },
    {
      title: "UI designer Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Study of Computer Science VUT Brno",
      company_name: "VUT",
      icon: VUT,
      iconBg: "#E6DEDD",
      date: "September 2021 - June 2022",
      points: [
        "Studing Computer Science on VUT in Brno for first two semesters",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "Ustav Vypocetni Techniky  Masarykova Univerzita Brno",
      icon: UVT,
      iconBg: "#383E56",
      date: "September 2021 - December 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js/Python Developer",
      company_name: "Tech4Bet",
      icon: tech4bet,
      iconBg: "#383E56",
      date: "January 2022 - May 2022",
      points: [
        "Developing web applications using React.js.",
        "Developing backend applications to track slot machines around the world",
        "Collaborating with a Senior FullStack Developer and UI designer",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        ,
      ],
    },
    {
      title: "React.js/Python Developer",
      company_name: "Danfoss",
      icon: danfoss,
      iconBg: "#E6DEDD",
      date: "June 2022 -  September 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Developing Python Web App for specfic branch of the firm",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        
      ],
    },
    {
      title: "Study of Managing Informatics VUT Brno",
      company_name: "VUT",
      icon: VUT,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Starting my next studies on VUT but this time Managing Informatics",
        
      ],
    },
    
   
  ];
  
  
  
  const projects = [
    {
      name: "Porsche",
      description:
        "I am copying the official porsche website to learn all their design tricks and all of the funcionality that a full-pledged website might need. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "json databaze",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: porsche,
      source_code_link: "https://github.com/CraYwennN/ProjectCars",
    },
    {
      name: "My Portfolio",
      description:
        "My web portfolio that tracks my journey of learning 3d modeling in react with libraries such as three-drei,three-fibe,framer-motion and so on ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-three",
          color: "green-text-gradient",
        },
        {
          name: "taliwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "In progress",
      description:
        "...",
      tags: [
        {
          name: "",
          color: "blue-text-gradient",
        },
        {
          name: "",
          color: "green-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };