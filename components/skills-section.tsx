"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Hardware & IoT",
    skills: [
      { name: "IoT/Hardware", level: 95 },
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "Arduino/ESP32", level: 92 },
    ],
  },
  {
    title: "Development",
    skills: [
      { name: "HTML/CSS", level: 98 },
      { name: "JavaScript", level: 92 },
      { name: "Android Studio", level: 88 },
      { name: "React/Next.js", level: 85 },
    ],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars
          setTimeout(() => {
            const newAnimatedSkills: Record<string, number> = {}
            skillCategories.forEach((category) => {
              category.skills.forEach((skill) => {
                newAnimatedSkills[skill.name] = skill.level
              })
            })
            setAnimatedSkills(newAnimatedSkills)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-montserrat)] mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`${isVisible ? `animate-fade-in-up animate-delay-${(categoryIndex + 1) * 200}` : "opacity-0"}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-[family-name:var(--font-montserrat)]">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{animatedSkills[skill.name] || 0}%</span>
                    </div>
                    <Progress value={animatedSkills[skill.name] || 0} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
