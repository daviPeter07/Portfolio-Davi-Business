"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Coffee, Lightbulb, Users } from "lucide-react"

export function AboutSection() {
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
    <section id="sobre" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre <span className="text-primary">Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou um desenvolvedor full stack com mais de 5 anos de experiência criando aplicações web modernas e
                escaláveis. Minha paixão é transformar ideias complexas em soluções digitais elegantes e funcionais.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Especializado em React, Node.js e tecnologias cloud, sempre busco estar atualizado com as últimas
                tendências do desenvolvimento web para entregar produtos de alta qualidade.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Código Limpo</h3>
                <p className="text-sm text-muted-foreground">Escrevo código maintível e bem documentado</p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Inovação</h3>
                <p className="text-sm text-muted-foreground">Sempre buscando soluções criativas e eficientes</p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Colaboração</h3>
                <p className="text-sm text-muted-foreground">Trabalho bem em equipe e comunicação clara</p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Dedicação</h3>
                <p className="text-sm text-muted-foreground">Comprometido com a excelência em cada projeto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
