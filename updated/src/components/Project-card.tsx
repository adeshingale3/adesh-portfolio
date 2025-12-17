"use client"

import { useState } from "react"
import { ChevronDown, Github, ExternalLink } from "lucide-react"
import type { Project } from "@/config/Projects-data"

interface ProjectCardProps {
  project: Project
  initialExpanded?: boolean
}

export function ProjectCard({ project, initialExpanded = false }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded)

  return (
    <div
      className={`w-full border-1 border-white/20 rounded-lg bg-black p-4 transition-all duration-500 ease-in-out ${isExpanded ? "shadow-lg shadow-primary/20" : ""}`}
    >
      {/* Header Section */}
      <div className="flex items-start justify-between gap-4 mb-4">
        {/* Logo and Title Section */}
        <div className="flex items-start gap-4 flex-1">
          <img
            src={project.logo || "/placeholder.svg"}
            alt={project.title}
            className="w-12 h-12 rounded-lg flex-shrink-0 object-cover"
          />
          <div className="flex-1">
            <h3 className="text-md font-semibold text-foreground">{project.title}</h3>
<p className="text-sm text-white/50 whitespace-nowrap shrink">{project.timeframe}</p>
          </div>
        </div>

        {/* Links and Expand Button */}
        <div className="flex items-center flex-shrink-0">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-md transition-colors duration-300"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
          </a>
          {/* <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-md transition-colors duration-300"
            aria-label="Live Project"
          >
            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
          </a> */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-muted rounded-md transition-all duration-300 ml-2 active:scale-95"
            aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
          >
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-all duration-500 ease-in-out ${
                isExpanded ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {isExpanded ? project.fullDescription : project.description}
        </p>
      </div>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 pt-4">
          {/* Full Description */}
          <div className="border-t border-border pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">About</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
