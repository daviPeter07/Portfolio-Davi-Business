'use client';

import { useRef } from 'react';
import { Calendar, MapPin, Laptop } from 'lucide-react';
import { experiences } from '@/src/constants/experiences';

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="experiencia" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          data-reveal
          className="transition-all duration-1000 opacity-0 translate-y-10 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Minha <span className="text-primary">Experiência</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={exp.title} className="relative grid md:grid-cols-[1fr_1fr] gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Laptop className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <div className="text-muted-foreground">{exp.company}</div>
                      </div>
                    </div>

                    <div className="pl-0 md:pl-8">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                          <Laptop className="h-4 w-4" />
                          {exp.modality}
                        </div>
                      </div>

                      <p className="mt-3 text-muted-foreground">{exp.description}</p>

                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((a) => (
                          <li key={a} className="text-sm text-muted-foreground">
                            • {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
