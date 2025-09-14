"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function AboutSection() {
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

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img src="/developer-working-with-iot-devices.jpg" alt="About Rajesh" className="w-full h-auto object-cover" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-montserrat)]">
              About <span className="text-primary">Me</span>
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Hello! I'm Rajesh, an IoT enthusiast and hardware developer with hands-on experience building smart
                medical devices and connected systems.
              </p>
              <p>
                I specialize in creating reliable IoT solutions using C++ and Python, from concept to working prototype.
                My projects include collaborative work on an ECG monitoring system and other healthcare-focused hardware
                for the MediPrompt platform.
              </p>
              <p>
                When I'm not soldering circuits or writing firmware, I enjoy exploring new technologies and finding
                creative ways to bring ideas to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
