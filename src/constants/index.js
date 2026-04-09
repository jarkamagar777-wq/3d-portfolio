const BASE_URL = import.meta.env.BASE_URL || '/';

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: `${BASE_URL}assets/review1.png`,
    review:
      'Working with Dilip magar was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: `${BASE_URL}assets/review2.png`,
    review:
      'Dilip’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: `${BASE_URL}assets/review3.png`,
    review:
      'I can’t say enough good things about Dilip. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: `${BASE_URL}assets/review4.png`,
    review:
      'Dilip was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'TodoList - AI-Powered Task Management App',
    desc: 'TodoList is a revolutionary Software-as-a-Service platform that transforms the way tasks are managed. With advanced AI-powered features like text-to-multiple-voices functionality, it allows users to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, TodoList is designed for optimal performance and scalability.',
    href: 'https://jarkamagar777-wq.github.io/Advanced-Todo/',
    texture: `${BASE_URL}textures/project/project1.mp4`,
    logo: `${BASE_URL}assets/project-logo1.png`,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: `${BASE_URL}assets/spotlight1.png`,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: `${BASE_URL}assets/react.svg`,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: `${BASE_URL}assets/tailwindcss.png`,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: `${BASE_URL}assets/typescript.png`,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: `${BASE_URL}assets/framer.png`,
      },
    ],
  },
  {
    title: 'Job-finder - AI-Powered Job Search Platform',
    desc: 'Job-finder is a revolutionary Software-as-a-Service platform that transforms the way job seekers search for opportunities. With advanced AI-powered features like text-to-multiple-voices functionality, it allows users to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Job-finder is designed for optimal performance and scalability.',
    href: 'https://jarkamagar777-wq.github.io/job-finder-/',
    texture: `${BASE_URL}textures/project/project2.mp4`,
    logo: `${BASE_URL}assets/project-logo2.png`,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: `${BASE_URL}assets/spotlight2.png`,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: `${BASE_URL}assets/react.svg`,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: `${BASE_URL}assets/tailwindcss.png`,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: `${BASE_URL}assets/typescript.png`,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: `${BASE_URL}assets/framer.png`,
      },
    ],
  },
  {
    title: 'JuJutsu Showcase - AI-Powered Jujutsu Kaisen Fan Site',
    desc: 'An innovative modern platform designed to streamline character information management. It simplifies fan engagement, appointment scheduling, and content discovery, providing a seamless experience for both Jujutsu Kaisen enthusiasts and creators.',
    subdesc:
      'With a focus on efficiency, JuJutsu Showcase integrates complex forms and SMS notifications, by using React.js, Tailwind CSS that enhance operational workflows.',
    href: 'https://bejewelled-biscotti-961b5b.netlify.app/',
    texture: `${BASE_URL}textures/project/project3.mp4`,
    logo: `${BASE_URL}assets/jjk.png`,
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: `${BASE_URL}assets/spotlight3.png`,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: `${BASE_URL}assets/react.svg`,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: `${BASE_URL}assets/tailwindcss.png`,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: `${BASE_URL}assets/typescript.png`,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: `${BASE_URL}assets/framer.png`,
      },
    ],
  },
  {
    title: 'Anime Streaming - an ApI powered ', 
    desc: 'An anime streaming platform that offers a vast library of anime content, allowing users to stream their favorite shows and movies online. It provides a user-friendly interface, personalized recommendations, and high-quality streaming for anime enthusiasts.',
    subdesc:
      'Built with React.js, API,  combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://jarkamagar777-wq.github.io/AniVerse/',
    texture: `${BASE_URL}textures/project/project5.mp4`,
    logo: `${BASE_URL}assets/project-logo5.png`,
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: `${BASE_URL}assets/spotlight5.png`,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: `${BASE_URL}assets/react.svg`,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: `${BASE_URL}assets/tailwindcss.png`,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: `${BASE_URL}assets/typescript.png`,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: `${BASE_URL}assets/framer.png`,
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: `${BASE_URL}assets/framer.svg`,
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: `${BASE_URL}assets/figma.svg`,
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: `${BASE_URL}assets/notion.svg`,
    animation: 'salute',
  },
];