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
    "id": "project-1",
    "title": "wavyJS",
    "timeframe": "2024 - 2025",
    "logo": "/wavy logo.png",
    "description": "An NPM package for high-performance, animated UI components using modern animation libraries. ",
    "fullDescription": "Developed a specialized NPM package designed to provide developers with ready-to-use, animated UI components.Built with React and TypeScript, it leverages GSAP and Framer Motion to deliver smooth, production-ready animations that integrate seamlessly with Tailwind CSS. ",
    "githubLink": "https://github.com/adeshingale3/wavyJS",
    "liveLink": "https://www.npmjs.com/package/wavyjs",
    "techStack": ["React", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    "expanded": true
  },
  {
    "id": "project-2",
    "title": "EcoPlace",
    "timeframe": "2024 - 2025",
    "logo": "https://imgs.search.brave.com/Qjz4XU3CKeO-I6OQhDlwfsfyG6lCk1fbe-9n8nnvG48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84My85NS9l/LWxvZ28tbGV0dGVy/LWdyZWVuLWljb24t/bGVhZi1uYXR1cmFs/LXN5bWJvbC12ZWN0/b3ItMjM1MDgzOTUu/anBn",
    "description": "An AI-powered sustainable shopping platform featuring intelligent search and green product recommendations.",
    "fullDescription": "Engineered a full-stack sustainable shopping platform that utilizes the Gemini API to provide AI-driven insights. The application features an improved search mechanism using Google Search integration and a robust backend built with Express and Firebase.",
    "githubLink": "https://github.com/adeshingale3/EcoPlace",
    "liveLink": "https://ecoplace-demo.vercel.app",
    "techStack": ["React", "Express", "Firebase", "Gemini API", "Node.js"],
    "expanded": false
  },
  {
    "id": "project-3",
    "title": "Aquify",
    "timeframe": "2024 - 2025",
    "logo": "https://imgs.search.brave.com/CJhdyZf2rx3rmk5omSGPn1flNJVTIxyup8Sp61lXb6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EzLzI4/LzYwL2EzMjg2MDg4/Y2M0MDk1NTgxZmI3/M2Q0ZWQxMTZkOGU4/LmpwZw",
    "description": "A crowdsourced mapping platform for locating water refill stations to reduce plastic waste. ",
    "fullDescription": "Built a web-based geographic platform using Leaflet to map water refill stations across urban areas. The system includes a gamified reward system to encourage sustainable behavior and a scalable community dashboard for station management.",
    "githubLink": "https://github.com/adeshingale3/Aquify",
    "liveLink": "https://aquify-map.vercel.app",
    "techStack": ["React", "Node.js", "Supabase", "Leaflet"],
    "expanded": false
  },
  {
    "id": "project-4",
    "title": "FoodieHands",
    "timeframe": "2024 - 2025",
    "logo": "/foodie.png",
    "description": "A logistics platform connecting restaurants and NGOs to redistribute surplus food and reduce waste. ",
    "fullDescription": "Developed a social-impact platform designed to reduce food wastage by connecting restaurants with surplus food to NGOs. Features include a real-time alert mechanism for emergency-affected areas and a dashboard to track donation metrics and sustainable impact.",
    "githubLink": "https://github.com/adeshingale3/FoodieHands",
    "liveLink": "https://foodiehands.vercel.app",
    "techStack": ["React", "Node.js", "Firebase"],
    "expanded": false
  }
]
