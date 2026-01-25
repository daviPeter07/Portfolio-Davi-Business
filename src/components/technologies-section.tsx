"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Server, Smartphone, Wrench } from "lucide-react"

const frontEnd = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "ReactJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
]

const backEnd = [
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Nest.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
]

const additional = [
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Prisma ORM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Jest",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
]
const mobile = [
  {
    name: "React Native",
    logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
  },
  {
    name: "Expo Go",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
  },
  {
    name: "NativeWind",
    logo: "https://github.com/nativewind.png",
  },
  {
    name: "SQLite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
]
export function TechnologiesSection() {

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px 150px 0px" },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Front-end</h3>
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">Stacks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {frontEnd.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="group flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted transition-transform hover:-translate-y-0.5 hover:ring-1 ring-primary/20"
                  >
                    <img src={tech.logo} alt={tech.name} title={tech.name} className="w-9 h-9" />
                    <span className="font-semibold text-base whitespace-normal break-words">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Back-end</h3>
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">Stacks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {backEnd.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="group flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted transition-transform hover:-translate-y-0.5 hover:ring-1 ring-primary/20"
                  >
                    <img src={tech.logo} alt={tech.name} title={tech.name} className="w-9 h-9" />
                    <span className="font-semibold text-base whitespace-normal break-words">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Mobile</h3>
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">Stacks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {mobile.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="group flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted transition-transform hover:-translate-y-0.5 hover:ring-1 ring-primary/20"
                  >
                    {/*Gambiarra pra adaptar a foto do native wind rs*/}
                    {tech.name === "NativeWind" ? (
                      <span className="w-9 h-9 bg-white rounded-md overflow-hidden flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          title={tech.name}
                          className="w-12 h-12 object-contain"
                        />
                      </span>
                    ) : (
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        title={tech.name}
                        className="w-9 h-9 object-contain"
                      />
                    )}
                    <span className="font-semibold text-base whitespace-normal break-words">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Ferramentas e Tecnologias</h3>
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">Stacks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {additional.map((tool) => (
                  <div
                    key={tool.name}
                    title={tool.name}
                    className="group flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted transition-transform hover:-translate-y-0.5 hover:ring-1 ring-primary/20"
                  >
                    <img src={tool.logo} alt={tool.name} title={tool.name} className="w-9 h-9" />
                    <span className="font-semibold text-base whitespace-normal break-words">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
