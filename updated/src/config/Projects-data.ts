export interface Project {
  id: string
  title: string
  timeframe: string
  logo: string
  description: string
  fullDescription: string
  githubLink: string
  liveLink: string
  techStack: string[]
  expanded: boolean
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    timeframe: "Jan 2024 - Mar 2024",
    logo: "/ecommerce-store-logo.png",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    fullDescription:
      "A comprehensive e-commerce platform built with Next.js that features real-time inventory management, integrated payment processing using Stripe, user authentication with Supabase, and a powerful admin dashboard for managing products, orders, and customer analytics. The platform includes advanced search functionality, product filtering, and personalized recommendations.",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "React"],
    expanded: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    timeframe: "Apr 2024 - Jun 2024",
    logo: "/task-management-app-logo.jpg",
    description: "A collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
    fullDescription:
      "A collaborative task management application that enables teams to organize their work efficiently. Features include real-time updates using WebSockets, customizable team workspaces, progress tracking with visual analytics, deadline reminders, and integration with popular calendar apps. The app uses optimistic UI updates for seamless user experience.",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    expanded: false,
  },
  {
    id: "project-3",
    title: "AI Content Generator",
    timeframe: "Jul 2024 - Sep 2024",
    logo: "/artificial-intelligence-ai-logo.jpg",
    description: "An AI-powered tool that generates high-quality content using advanced language models.",
    fullDescription:
      "An intelligent content generation platform leveraging OpenAI's GPT models. Features include multi-language support, customizable tone and style, SEO optimization for generated content, batch processing, and usage analytics. The application includes rate limiting, caching mechanisms for improved performance, and detailed content editing capabilities.",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "TailwindCSS"],
    expanded: false,
  },
  {
    id: "project-4",
    title: "Analytics Dashboard",
    timeframe: "Oct 2024 - Nov 2024",
    logo: "/analytics-dashboard-metrics-logo.jpg",
    description: "A real-time analytics dashboard with interactive charts, custom reports, and data visualization.",
    fullDescription:
      "A comprehensive analytics dashboard that provides real-time insights into business metrics and KPIs. Features real-time data visualization, custom report generation, data export functionality, team collaboration tools, and advanced filtering. The dashboard supports multiple data sources and includes predictive analytics capabilities.",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    techStack: ["React", "D3.js", "Recharts", "Express", "PostgreSQL"],
    expanded: false,
  },
]
