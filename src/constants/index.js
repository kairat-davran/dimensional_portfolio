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
  mega,
  neobis,
  OMobile,
  carrent,
  jobit,
  tripguide,
  threejs,
  birgeChat,
  crewcontrol,
  lookkg,
  mobileTemp,
  webTemp
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
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
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Software & IT Solutions Engineer",
    company_name: "MEGA (ЗАО Альфа Телеком)",
    icon: mega,
    iconBg: "#E6DEDD",
    date: "Jan 2022 – Aug 2023",
    points: [
      "Built and maintained 3 full-scale apps: LandscapeCrewSystem, Look.kg, and BirgeChat.",
      "Used Django REST, React.js, React Native, and MERN stack with PostgreSQL multi-tenancy.",
      "Integrated LangChain + OpenAI and implemented real-time features with Socket.io.",
      "Managed CI/CD pipelines, Docker deployments, and documentation.",
      "Worked cross-functionally to ensure UX consistency across platforms.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Neobis Studio",
    icon: neobis,
    iconBg: "#383E56",
    date: "Jan 2021 – Dec 2022",
    points: [
      "Built MVP frontends for NeoCafe, NeoFin, and Trada using React, Redux, Webpack.",
      "Created admin dashboards, order tracking UIs, and health tracking tools.",
      "Mentored interns and collaborated with backend/API teams.",
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "O! Mobile Operator",
    icon: OMobile,
    iconBg: "#E6DEDD",
    date: "Sep 2020 – Feb 2021",
    points: [
      "Developed Android checklist app using Kotlin and Java.",
      "Improved telecom office workflows across Kyrgyzstan.",
      "Delivered functional mobile app during internship.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kairatbek demonstrated strong initiative and full-stack capability during his time at MEGA. Highly recommended.",
    name: "Team Lead",
    designation: "Tech Lead",
    company: "MEGA",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "He was instrumental in the success of BirgeChat. A reliable and skilled full-stack developer.",
    name: "Project Manager",
    designation: "PM",
    company: "BirgeChat Team",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    testimonial:
      "At Neobis, Kairatbek stood out for his mentorship and his ability to deliver clean, production-ready code under tight deadlines.",
    name: "Senior Developer",
    designation: "Frontend Lead",
    company: "Neobis Studio",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
  },
];

const projects = [
  {
    name: "LandscapeCrewSystem",
    description:
      "Full-stack multi-tenant crew management platform with Django backend, React admin panel, and React Native mobile app.",
    tags: [
      { name: "Django", color: "green-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "React Native", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
    ],
    image: crewcontrol,
    source_code_link: "https://github.com/kairat-davranbek/LandscapeCrewSystem",
  },
  {
    name: "Look.kg",
    description:
      "MERN-based e-commerce platform with multi-role authentication, product management, reviews, and order system.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
    ],
    image: lookkg,
    source_code_link: "https://github.com/kairat-davranbek/look.kg",
  },
  {
    name: "BirgeChat",
    description:
      "MERN-based social media platform with real-time chat, post/media sharing, profiles, likes, and follows.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Socket.io", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
    ],
    image: birgeChat,
    source_code_link: "https://github.com/kairat-davranbek/birgechat",
  },
  {
    name: "NeoCafe",
    description:
      "Real-time order management frontend built with React and Redux for cafe staff and baristas.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Webpack", color: "pink-text-gradient" },
    ],
    image: webTemp,
    source_code_link: "https://github.com/neocafeteam2autumn2021/frontend",
  },
  {
    name: "NeoFin",
    description:
      "Financial tracking dashboard for Neobis and Neolabs with role-based access and live data views.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
    ],
    image: webTemp,
    source_code_link: "https://github.com/fms-team1/frontend",
  },
  {
    name: "Checklist App",
    description:
      "Internal Android app developed in Kotlin/Java for operational checklists at telecom offices.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "Android", color: "pink-text-gradient" },
    ],
    image: mobileTemp,
    source_code_link: "https://gitlab.com/kairatbek_d/checksheet",
  },
  {
    name: "Trada",
    description:
      "Health-focused web application to help manage insulin doses and track health metrics.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
    ],
    image: webTemp,
    source_code_link: "https://gitlab.com/team1.summer2021/Frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };