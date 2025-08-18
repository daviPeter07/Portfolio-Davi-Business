"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "São Paulo, SP",
    period: "2022 - Presente",
    description:
      "Lidero o desenvolvimento de aplicações web escaláveis usando React e Node.js. Responsável por arquitetura de sistemas e mentoria de desenvolvedores júnior.",
    achievements: [
      "Aumentei a performance das aplicações em 40%",
      "Implementei CI/CD reduzindo tempo de deploy em 60%",
      "Liderei equipe de 5 desenvolvedores",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Rio de Janeiro, RJ",
    period: "2020 - 2022",
    description:
      "Desenvolvi do zero uma plataforma SaaS para gestão de projetos, desde o MVP até 10k+ usuários ativos.",
    achievements: [
      "Construí arquitetura escalável para 10k+ usuários",
      "Implementei sistema de pagamentos com Stripe",
      "Reduzi custos de infraestrutura em 30%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "WebAgency Pro",
    location: "Belo Horizonte, MG",
    period: "2019 - 2020",
    description: "Criei interfaces responsivas e interativas para diversos clientes, focando em UX/UI e performance.",
    achievements: [
      "Entreguei 25+ projetos no prazo",
      "Melhorei Core Web Vitals em 50%",
      "Implementei design system da empresa",
    ],
  },
]

export function ExperienceSection() {
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
    <section id="experiencia" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Minha <span className="text-primary">Experiência</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>

                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <span>{exp.company}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
