"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Server, Smartphone, Wrench } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/src/components/ui/hover-card"
import { frontEnd, backEnd, additional, mobile, techDocs } from "@/src/constants/technologies"

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
                {frontEnd.map((tech) => {
                  const info = techDocs[tech.name]
                  return (
                    <HoverCard key={tech.name}>
                      <HoverCardTrigger asChild>
                        <div
                          title={tech.name}
                          className="group flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted transition-transform hover:-translate-y-0.5 hover:ring-1 ring-primary/20"
                        >
                          <img src={tech.logo} alt={tech.name} title={tech.name} className="w-9 h-9" />
                          <span className="font-semibold text-base whitespace-normal break-words">{tech.name}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent sideOffset={8} align="center">
                        <div className="space-y-2">
                          <div className="text-sm font-semibold">{tech.name}</div>
                          <p className="text-sm text-muted-foreground">{info?.desc}</p>
                          <a
                            href={info?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Documentação
                          </a>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  )
                })}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Back-end</h3>
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">Stacks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {backEnd.map((tech) => {
                  const info = techDocs[tech.name]
                  return (
                    <HoverCard key={tech.name}>
                      <HoverCardTrigger asChild>
                        <div
                          title={tech.name}
                          className="group flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted transition-transform hover:-translate-y-0.5 hover:ring-1 ring-primary/20"
                        >
                          <img src={tech.logo} alt={tech.name} title={tech.name} className="w-9 h-9" />
                          <span className="font-semibold text-base whitespace-normal break-words">{tech.name}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent sideOffset={8} align="center">
                        <div className="space-y-2">
                          <div className="text-sm font-semibold">{tech.name}</div>
                          <p className="text-sm text-muted-foreground">{info?.desc}</p>
                          <a
                            href={info?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Documentação
                          </a>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  )
                })}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Mobile</h3>
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">Stacks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {mobile.map((tech) => {
                  const info = techDocs[tech.name]
                  return (
                    <HoverCard key={tech.name}>
                      <HoverCardTrigger asChild>
                        <div
                          title={tech.name}
                          className="group flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted transition-transform hover:-translate-y-0.5 hover:ring-1 ring-primary/20"
                        >
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
                      </HoverCardTrigger>
                      <HoverCardContent sideOffset={8} align="center">
                        <div className="space-y-2">
                          <div className="text-sm font-semibold">{tech.name}</div>
                          <p className="text-sm text-muted-foreground">{info?.desc}</p>
                          <a
                            href={info?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Documentação
                          </a>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  )
                })}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Ferramentas e Tecnologias</h3>
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">Stacks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {additional.map((tool) => {
                  const info = techDocs[tool.name]
                  return (
                    <HoverCard key={tool.name}>
                      <HoverCardTrigger asChild>
                        <div
                          title={tool.name}
                          className="group flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted transition-transform hover:-translate-y-0.5 hover:ring-1 ring-primary/20"
                        >
                          <img src={tool.logo} alt={tool.name} title={tool.name} className="w-9 h-9" />
                          <span className="font-semibold text-base whitespace-normal break-words">{tool.name}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent sideOffset={8} align="center">
                        <div className="space-y-2">
                          <div className="text-sm font-semibold">{tool.name}</div>
                          <p className="text-sm text-muted-foreground">{info?.desc}</p>
                          <a
                            href={info?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Documentação
                          </a>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
