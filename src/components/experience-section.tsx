"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Hardware technician",
    company: "DG Computer",
    location: "Manaus, AM",
    period: "2019 - 2025",
    description: [
      "Experiência em montagem e manutenção de computadores, suporte técnico em Windows 10/11 e configuração de softwares e periféricos. Desenvolvi habilidades de diagnóstico, comunicação com usuários e documentação de processos, aprendizados que hoje aplico no desenvolvimento de software."
    ],
    achievements: [
      "Montegam e manutenção de máquinas básicas e gamers",
      "Suporte ao Usuário",
      "Instalação e configuração de softwares tanto para a empresa quanto para usuários",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "UAPE",
    location: "Manaus, AM",
    period: "2025 - Em Atividade",
    description:
      "Desenvolvimento Full Stack com foco em arquitetura escalável, integração entre serviços e boas práticas de código. Participação em iniciativas de IA e Data Science aplicadas a produtos internos.",
    achievements: [
      "Desenvolvimento integral de um software de gerenciamento de pagamentos implementado em 3 estados.",
      "Criação de Landing Pages com suporte a internacionalização (i18n) em Português, Inglês e Espanhol.",
      "Suporte técnico avançado e configuração de ambientes e infraestrutura (Windows e Linux/Ubuntu).",
    ],
  },
  {
    title: "Jr Software Developer",
    company: "Indicaí",
    location: "Manaus, AM",
    period: "2025 - Em Atividade",
    description:
      "Atuação como Jr Software Developer em soluções Full Stack e práticas DevOps. Definição de arquitetura e padrões de código escaláveis, implementação de interfaces de alta fidelidade com foco em UX/UI, acessibilidade e performance, além do planejamento e execução do ciclo de deploy com publicação nas lojas (Play Store e App Store).",
    achievements: [
      "Atuação Full Stack e DevOps focada na definição de arquitetura e padrões de código escaláveis.",
      "Implementação de interfaces de alta fidelidade, priorizando UX/UI, acessibilidade e performance.",
      "Planejamento e execução do ciclo de deploy, incluindo o lançamento do aplicativo nas lojas (Play Store e App Store).",
    ],
  },
  {
    title: "Frontend Developer",
    company: "NXS Skill",
    location: "Manaus, AM",
    period: "2025 - Em Atividade",
    description:
      "Desenvolvimento Front-end em plataforma educacional, com ênfase em acessibilidade, performance e experiências ricas de UI. Colaboração em design system e otimizações nos fluxos de autenticação.",
    achievements: [
      "Desenvolvimento da versão 2.0 da plataforma web, atuando em colaboração com uma equipe de 6 desenvolvedores.",
      "Construção de interfaces responsivas complexas (autenticação, cadastros e dashboards) utilizando Next.js e TypeScript.",
      "Implementação de módulos e rotas de API no Back-end para suporte às novas funcionalidades do sistema",
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
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
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
