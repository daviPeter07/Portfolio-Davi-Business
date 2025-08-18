"use client"

import { useEffect, useRef, useState } from "react"

const technologies = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Next.js", level: 92, category: "Framework" },
  { name: "Python", level: 85, category: "Language" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "AWS", level: 78, category: "Cloud" },
  { name: "Docker", level: 82, category: "DevOps" },
  { name: "Git", level: 90, category: "Tools" },
]

export function TechnologiesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(technologies.length).fill(0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          technologies.forEach((tech, index) => {
            setTimeout(() => {
              setAnimatedLevels((prev) => {
                const newLevels = [...prev]
                newLevels[index] = tech.level
                return newLevels
              })
            }, index * 100)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tecnologias" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Minhas <span className="text-primary">Tecnologias</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.category}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedLevels[index]}%` }}
                  />
                </div>
                <div className="text-right text-sm text-muted-foreground">{animatedLevels[index]}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
