// import images
import Hero_person from "./assets/images/Hero/personhero.png";

import htmlcssscss from "./assets/images/Skills/htmlcssscss.png";
import nextjs from "./assets/images/Skills/nextjs.png";
import reactjs from "./assets/images/Skills/react.png";
import telwind from "./assets/images/Skills/telwind-css.png";
import sitecore from "./assets/images/Skills/sitecore.png";
import aem from "./assets/images/Skills/aem.png";
import js from "./assets/images/Skills/js.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";

import project1 from "./assets/images/projects/website_project1.png";
import project2 from "./assets/images/projects/international.png";
import project3 from "./assets/images/projects/E-Commerce.png";
import project4 from "./assets/images/projects/todolist.png";
import person_project from "./assets/images/projects/personhire1.png";

import blog1 from "./assets/images/Blogs/Blog1.jpg";
import blog2 from "./assets/images/Blogs/Blog2.jpg";
import blog3 from "./assets/images/Blogs/Blog3.jpg";

import avatar1 from "./assets/images/Testimonials/cert1.png";
import avatar2 from "./assets/images/Testimonials/cert2.png";
import avatar3 from "./assets/images/Testimonials/cert3.png";

import Hireme_person from "./assets/images/Hireme/personhire.png";
import Hireme_person2 from "./assets/images/projects/personhire1.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiAddBoxFill } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#blogs",
      icon: RiAddBoxFill,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front End Developer/Sitecore CMS",
    firstName: "FAIZAN",
    LastName: "ALI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of expertise in Sitecore CMS and AEM CMS, coupled with front-end skills in HTML, CSS, JavaScript, React JS and Next JS. ",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY SKILLS WITH PROJECTS",
    skills_content: [
      {
        name: "HTML/CSS, SCSS",
        para: "I have extensive experience in front-end...",
        logo: htmlcssscss,
        projecttitle: "Web Page Using HTML/CSS, SCSS",
        skilldescription:
          "I have extensive experience in front-end development using HTML, CSS, and SCSS to build responsive, user-friendly web interfaces. I am proficient in writing clean, semantic HTML and utilizing CSS to create visually appealing layouts with a focus on accessibility and cross-browser compatibility. My SCSS skills allow me to write modular, reusable styles, which helps in maintaining large codebases efficiently.  ",
        projecthref:
          "https://sayyedfaizanali.github.io/htmlScss-Responsive-Page/",
      },
      {
        name: "JavaScript, JQuery",
        para: "I am proficient in JavaScript...",
        logo: js,
        skilldescription:
          "I am proficient in JavaScript, including modern ES6+ features and frameworks like React.js and Next.js. I’ve used JavaScript to build dynamic, responsive web applications, create custom components, and handle API integrations. My focus is on writing clean.",
        projecttitle: "Cookie Banner Using JavaScript",
        projecthref:
          "https://sayyedfaizanali.github.io/javascript-cookie-banner/",
        projecttitle2: "Accordion Using JavaScript",
        projecthref2: "https://sayyedfaizanali.github.io/javascript-accordion/",
        projecttitle3: "Color Flipper Using JavaScript",
        projecthref3:
          "https://sayyedfaizanali.github.io/javascript-color-flipper/",
        projecttitle4: "CRUD Operation Using JavaScript",
        projecthref4:
          "https://sayyedfaizanali.github.io/javascript-crud-operation/",
      },
      {
        name: "React JS & Redux",
        para: "I have strong experience in building web...",
        logo: reactjs,
        skilldescription:
          "I have strong experience in building web applications using React.js, creating reusable components and managing state efficiently. I’ve developed interactive user interfaces, implemented routing, and handled API calls to deliver dynamic content. My focus is on writing clean, modular code to build responsive and performant applications.",
        projecttitle: "React JS Demo Website Using React JS",
        projecthref: "https://sayyedfaizanali.github.io/React-js-website/",
        projecttitle2: "Todo List using redux",
        projecthref2: "https://sayyedfaizanali.github.io/todo-list-using-redux/",
      },
      {
        name: "Next JS",
        para: "I have experience building fast...",
        logo: nextjs,
        skilldescription:
          "I have experience building fast, SEO-friendly web applications using Next.js. I’ve worked with its server-side rendering (SSR) and static site generation (SSG) capabilities to optimize performance and improve SEO. My projects include implementing dynamic routing, handling API routes, and deploying scalable applications with a focus on clean, efficient code.",
          projecttitle: "Currently Working..",
          projecthref: "/",
      },
      {
        name: "Telwind CSS",
        para: "I am proficient in Tailwind CSS...",
        logo: telwind,
        skilldescription:
          "I am proficient in Tailwind CSS, using its utility-first approach to rapidly build responsive, customizable designs. I’ve utilized Tailwind to streamline development, maintain consistency, and create modern, clean UIs across various projects, ensuring both performance and design flexibility.",
          projecttitle: "Currently Working..",
          projecthref: "/",
      },
      {
        name: "Sitecore CMS",
        para: "As a skilled Sitecore CMS content author...",
        logo: sitecore,
        skilldescription:
          " As a skilled Sitecore CMS content author, I have extensive experience creating and managing web content, building new pages, and optimizing existing ones. I work with out-of-the-box components, use Scriban for content templating, and ensure accurate content delivery across multiple languages.",
        projecttitle: "Navistar/Mercury",
        projecthref: "https://www.international.com/",
        projecttitle2: "Resideo/BRK",
        projecthref2: "https://www.resideo.com/us/en/",
        projecttitle3: "LexisNexis Risk Solution(LNRS)",
        projecthref3: "https://risk.lexisnexis.com/",
        projecttitle4: "Sage",
        projecthref4: "https://www.sage.com/",
      },
      {
        name: "AEM CMS",
        para: "As an AEM CMS content author...",
        logo: aem,
        skilldescription:
          "As an AEM CMS content author, I have experience creating, editing, and managing content across various web pages and templates. I work closely with developers and designers to ensure seamless integration of content and design, ensuring consistency and user engagement.",
        projecttitle: "Caterpillar",
        projecthref: "https://www.caterpillar.com/",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Front End Development",
        para: "In Front End Development, I have worked with HTML, CSS, SCSS, React.js, Next.js, and Tailwind CSS, building responsive and efficient user interfaces.",
        logo: services_logo1,
      },
      {
        title: "Content Authoring",
        para: "As a Content Author, I focused on the content side of projects, collaborating with teams to migrate and update content in alignment with client instructions. I authored and edited content, created new pages, and managed content updates across multiple language versions. I also used HTML and CSS to ensure frontend design matched the component structure. My work with Sitecore Score CMS allowed me to optimize content management and improve the efficiency of content delivery.",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Tutorials Website",
        image: project1,
        href: "https://sayyedfaizanali.github.io/React-js-website/",
      },
      {
        title: "Website Using Sitecore CMS",
        image: project2,
        href: "https://www.international.com/",
      },
      {
        title: "ThinkLife Superbeena Website",
        image: project3,
        href: "https://sayyedfaizanali.github.io/React-js-website/",
      },
      {
        title: "Todo List Item",
        image: project4,
        href: "https://sayyedfaizanali.github.io/todo-list-using-redux/",
      },
    ],
  },
  Blogs: {
    title: "Blogs",
    subtitle: "MY BLOGS LISTED HERE...",
    blog_content: [
      {
        title: "Build a Custom 404 Page Using React Router V6 and Next.js",
        image: blog1,
        href: "https://blogs.perficient.com/2024/12/23/how-to-build-a-custom-404-page-using-react-router-v6-and-custom-404-page-in-next-js/",
      },
      {
        title: "Part 1: Sitecore Quick Guide for the Beginner",
        image: blog2,
        href: "https://blogs.perficient.com/2025/01/03/part-1-sitecore-quick-guide-for-the-beginner/",
      },
      {
        title: "Part 2: Sitecore Quick Guide for the Beginner",
        image: blog3,
        href: "https://blogs.perficient.com/2025/01/03/part-2-sitecore-quick-guide-for-beginner/",
      },
    ],
  },
  Testimonials: {
    title: "See My",
    subtitle: "APPRICIATIONS CERTIFICATES & SHOUT APPRICIATIONS CERTIFICATES",
    testimonials_content: [
      {
        img: avatar1,
      },
      {
        img: avatar2,
      },
      {
        img: avatar3,
      },
    ],
  },
  Hireme: {
    title: "Select Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I have front-end development experience with HTML, CSS, SCSS, React.js, Next.js, and Tailwind CSS, focusing on responsive interfaces. As a Content Author, I handled content migration and updates, ensuring design consistency across languages while optimizing management with Sitecore Score CMS.",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sayyedfaizanali7867@gmail.com",
        icon: GrMail,
        link: "mailto:sayyedfaizanali7867@gmail.com",
      },
      {
        text: "+91 9112040097",
        icon: MdCall,
        link: "https://wa.me/9112040097",
      },
      {
        text: "LinkdIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/sayyed-faizan-ali-86869a18b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
