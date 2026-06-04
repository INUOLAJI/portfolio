import marvelousShot from '../assets/marvelous_shot.png';
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Admin Dashboard",
    challenge: "Store owners were struggling to track inventory across multiple platforms, leading to overselling and manual data errors.",
    solution: "I developed a centralized hub using Node.js and React that syncs inventory in real-time. I implemented a robust search algorithm to help staff find products in under 2 seconds.",
    tech: ["React", "Node.js", "PostgreeSQL", "Socket.io"],
    impact: "Reduced inventory errors by 40% and saved managers 10 hours of manual entry per week.",
    image: marvelousShot
  },
  {
    id: 2,
    title: "Client Connect Portal",
    challenge: "A service-based business was losing leads because their booking process required three different phone calls.",
    solution: "I built a secure portal using PostgreSQL and Express where clients can self-schedule, upload documents, and pay invoices in one session.",
    tech: ["Express", "PostgreSQL", "React-Bootstrap", "Stripe API"],
    impact: "Increased successful bookings by 25% within the first month of launch.",
    image: "/images/portal-preview.jpg"
  },
  {
    id: 3,
    title: "Analytics Engine",
    challenge: "Marketing teams had raw data but no way to visualize which audiences were actually converting.",
    solution: "Using Python for data processing and AWS for hosting, I created an engine that transforms CSV logs into interactive heatmaps and conversion funnels.",
    tech: ["Python", "AWS", "Chart.js", "React"],
    impact: "Helped the marketing team reallocate $5,000 in monthly ad spend to high-performing segments.",
    image: "/images/analytics-preview.jpg"
  }
];