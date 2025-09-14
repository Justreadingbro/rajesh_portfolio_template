"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-montserrat)] leading-tight">
                Father <span className="text-primary">of</span> Himangshu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {"I have a son named Himangshu Haloi. Don't ask why different surname💀."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IoT enthusiast and hardware developer with hands-on experience building smart medical devices and
                connected systems.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
            >
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center ${isVisible ? "animate-scale-in animate-delay-300" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img src="/professional-developer-portrait.png" alt="Rajesh Kumar Das" className="w-full h-full object-cover" />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse animate-delay-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
