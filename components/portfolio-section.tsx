"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-medical platform",
    description: "Online health checker with AI-powered diagnostics and real-time monitoring capabilities.",
    image: "/medical-platform-interface.jpg",
    tags: ["IoT", "AI", "Healthcare", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Object Identifier",
    description: "Web-based image classification app using machine learning for real-time object detection.",
    image: "/object-detection-interface.jpg",
    tags: ["Machine Learning", "Computer Vision", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Customer Service Bot",
    description: "A simple NLP-based Customer Service Chatbot with natural language understanding.",
    image: "/chatbot-interface.png",
    tags: ["NLP", "Chatbot", "Python", "AI"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("portfolio")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-montserrat)] mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing innovative IoT solutions and cutting-edge technology implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demoUrl}
                    className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-montserrat)]">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
