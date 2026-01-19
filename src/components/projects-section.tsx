"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"

const projects = [
  {
    title: "Nexus Skills",
    description:
      "Plataforma Nexus Skill com cursos para potencializar as softs skills das pessoas",
    image: "/nexus-skill-web-image.png",
    technologies: ["Next.js", "Typescript", "Tailwind" ,"Firebase"],
    demo: "https://skill.nxshub.com.br/",
  },
  {
    title: "Master Control",
    description:
      "Software de PDV usado para gerenciamento de vendas e clientes sem a necessidade de um estoque base",
    image: "/master-control-image.png",
    technologies: ["PHP", "Javascript", "MySQL", "Tailwind"],
    code: "https://github.com/daviPeter07/Master-Control",
  },
  {
    title: "Master Mind – Landing Page",
    description:
      "Landing page para divulgação do aplicativo Master Mind (produtividade e controle financeiro integrado ao Google Calendar).",
    image: "/mastermind-landing-page.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Radix UI", "Lucide"],
    demo: "https://mastermind-landing-page.vercel.app/",
  },
  {
    title: "Jus Fácil",
    description:
      "Aplicativo jurídico open source para consulta e organização de súmulas, desenvolvido com Expo/React Native.",
    image: "/jus-facil.png",
    technologies: ["Expo", "React Native", "TypeScript", "Firebase", "NativeWind"],
    code: "https://github.com/daviPeter07/jus-facil",
  },
  {
    title: "Robótica Educacional",
    description:
      "Site institucional do projeto acadêmico migrado para React + TypeScript, apresentando objetivos, equipe, metodologia STEAM e resultados.",
    image: "/robotica-educacional.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Radix UI", "Router"],
    demo: "https://robotica-educacional.vercel.app/",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="projetos" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meus <span className="text-primary">Projetos</span>
          </h2>

          {/* <div className="flex items-center justify-center h-40">
            <p className="text-lg md:text-xl text-muted-foreground text-center italic">
              🚀 Projetos em breve...
            </p>
          </div> */}

          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden p-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.code ? (
                      <Button
                        size="sm"
                        asChild
                        className="bg-[#0D1117] text-white hover:bg-[#161b22]"
                      >
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    ) : project.demo ? (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Navegar
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
         
        </div>
      </div>
    </section>
  )
}
