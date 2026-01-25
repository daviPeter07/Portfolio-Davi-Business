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
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
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
                Desenvolvedor Fullstack focado em criar soluções web modernas, eficientes e que realmente funcionam na prática.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou movido pela curiosidade e pelo desejo constante de aprendizado. Acredito que a tecnologia é uma ferramenta poderosa para transformar ideias em soluções que impactam vidas, e por isso estou sempre buscando evoluir, tanto tecnicamente quanto pessoalmente.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Me esforço para ser proativo na identificação e resolução de problemas, sempre com foco em entregar valor real para os usuários e para o negócio.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Empresas atuadas</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Código Limpo</h3>
                <p className="text-sm text-muted-foreground">Escrevo código escalável e bem documentado</p>
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
