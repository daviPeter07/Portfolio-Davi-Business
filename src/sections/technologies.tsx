'use client';

import { useRef } from 'react';
import { Code2, Server, Smartphone, Wrench } from 'lucide-react';
import { TechnologyCategory } from '@/src/components/technology-category';
import { frontEnd, backEnd, additional, mobile, techDocs } from '@/src/constants/technologies';

export function TechnologiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="tecnologias" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          data-reveal
          className="transition-all duration-1000 opacity-0 translate-y-10 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Minhas <span className="text-primary">Tecnologias</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <TechnologyCategory
              title="Front-end"
              Icon={Code2}
              items={frontEnd}
              infoMap={techDocs}
            />
            <TechnologyCategory
              title="Back-end"
              Icon={Server}
              items={backEnd}
              infoMap={techDocs}
              invertNames={['Express', 'Fastify']}
            />
            <TechnologyCategory
              title="Mobile"
              Icon={Smartphone}
              items={mobile}
              infoMap={techDocs}
            />
            <TechnologyCategory
              title="Ferramentas e Tecnologias"
              Icon={Wrench}
              items={additional}
              infoMap={techDocs}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
