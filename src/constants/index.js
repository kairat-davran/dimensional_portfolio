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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Android Developer",
      icon: backend,
    },
    {
      title: "Mentor & Team Collaborator",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
      title: "Full Stack Developer",
      company_name: "BirgeChat",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Dec 2023 – Apr 2024",
      points: [
        "Built a social media app using MERN stack.",
        "Integrated real-time chat with Socket.io and JWT authentication.",
        "Implemented post features, media uploads, and responsive design.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Neobis Studio",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Mar 2021 – Jun 2022",
      points: [
        "Developed MVPs using React, Redux, Webpack for NeoCafe, NeoFin, Trada.",
        "Built admin panel, real-time order management UI, and financial tracking tools.",
        "Mentored interns and collaborated with cross-functional teams.",
      ],
    },
    {
      title: "Android Developer Intern",
      company_name: "O! Mobile Operator",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sep 2020 – Feb 2021",
      points: [
        "Developed an Android checklist app in Kotlin and Java.",
        "Improved efficiency across telecom branches.",
        "Delivered production-ready app during 6-month internship.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Kairatbek demonstrated leadership and mentorship during his time at Neobis Studio. A true team player.",
      name: "Mentor, Neobis Studio",
      designation: "Team Lead",
      company: "Neobis",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      testimonial:
        "His MERN stack skills are top-notch. Our BirgeChat project wouldn’t have succeeded without him.",
      name: "Project Manager",
      designation: "PM",
      company: "BirgeChat",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];
  
  const projects = [
    {
      name: "BirgeChat",
      description:
        "A full-stack social media platform with real-time chat, post sharing, and profile features, inspired by Instagram.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "jwt",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "NeoCafe",
      description:
        "Frontend interface for coffee shop staff with real-time order tracking, developed as part of Neobis Studio.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "webpack",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "O! Checklist App",
      description:
        "An internal Android checklist application developed using Java and Kotlin during internship at O! Mobile Operator.",
      tags: [
        {
          name: "kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "android",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };  