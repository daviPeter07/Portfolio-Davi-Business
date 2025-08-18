"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { ThemeToggle } from "@/src/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Davi Peterson</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("sobre")} className="hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("tecnologias")} className="hover:text-primary transition-colors">
              Tecnologias
            </button>
            <button onClick={() => scrollToSection("projetos")} className="hover:text-primary transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection("experiencia")} className="hover:text-primary transition-colors">
              Experiência
            </button>
            <button onClick={() => scrollToSection("contato")} className="hover:text-primary transition-colors">
              Contato
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("tecnologias")}
                className="text-left hover:text-primary transition-colors"
              >
                Tecnologias
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-left hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-left hover:text-primary transition-colors"
              >
                Experiência
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
