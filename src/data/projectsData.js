// src/data/projectdata.js
import marvelousShot from '../assets/marvelous_shot.png';
import urlsnaplink from '../assets/urlsnaplink.png';
import blogsapi from '../assets/blogsapi.png';
import clientportal from '../assets/clientportal.png';
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Admin Dashboard",
    challenge: "Store owners were struggling to track inventory across multiple platforms, leading to overselling and manual data errors.",
    solution: "I developed a centralized hub using Node.js and React that syncs inventory in real-time. I implemented a robust search algorithm to help staff find products in under 2 seconds.",
    tech: ["React", "Node.js", "PostgreeSQL", "Socket.io"],
    impact: "Reduced inventory errors by 40% and saved managers 10 hours of manual entry per week.",
    image: marvelousShot,
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    impact: "Reduced inventory errors by 40% and saved managers 10 hours of manual entry per week.",
    image: marvelousShot,
    github: "https://github.com/INUOLAJI/frontend-ecommerce.git"
  },
  {
    id: 2,
    title: "Client Connect Portal",
    challenge: "A service-based business was losing leads because their booking process required three different phone calls.",
    solution: "I built a secure portal using PostgreSQL and Express where clients can self-schedule, upload documents, and pay invoices in one session.",
    tech: ["Express", "PostgreSQL", "React-Bootstrap", "Stripe API"],
    impact: "Increased successful bookings by 25% within the first month of launch.",
    image: clientportal,
    github: "https://github.com/INUOLAJI/client-portal.git"
  },
  // {
  //   id: 3,
  //   title: "Analytics Engine",
  //   challenge: "Marketing teams had raw data but no way to visualize which audiences were actually converting.",
  //   solution: "Using Python for data processing and AWS for hosting, I created an engine that transforms CSV logs into interactive heatmaps and conversion funnels.",
  //   tech: ["Python", "AWS", "Chart.js", "React"],
  //   impact: "Helped the marketing team reallocate $5,000 in monthly ad spend to high-performing segments.",
  //   image: "/images/analytics-preview.jpg",
  //   image: "/images/analytics-preview.jpg",
  //   github: "https://github.com/INUOLAJI/analytics-engine.git"
  // },
  {
    id: 3,
    title: "Algorithmic URL Shortener Engine",
    challenge: "Long, chaotic links are prone to breakdown, difficult to manage in workflows, and require server-side mapping mechanisms to safely forward traffic.",
    solution: "I engineered a lightweight backend system using PHP and PostgreSQL that generates secure hash aliases for raw links, processes incoming route strings, and executes quick 301 server redirects.",
    tech: ["PHP", "PostgreSQL", "HTML5", "Bootstrap"],
    impact: "Built a fully functional database mapping scheme with native validation checks to avoid duplicate records and prevent malicious string injections.",
    image: urlsnaplink,
    github: "https://github.com/INUOLAJI/url_shortenener.git"
  },
  {
    id: 4,
    title: "RESTful Blogs API Engine",
    challenge: "Content platforms require highly secure, optimized, and structured relational data streams to handle heavy user traffic without database bottlenecks.",
    solution: "Engineered a robust backend REST API featuring secure user authentication, role-based access control for authors, and optimized relational endpoints for blog posts, comments, and categories.",
    tech: ["Python", "Django", "PostgreSQL", "JWT"],
    impact: "Built full CRUD operations featuring input validation middleware that eliminates database injection risks and ensures data integrity.",
    image: blogsapi,
    github: "https://github.com/INUOLAJI/Blogs_API.git"
  }
];