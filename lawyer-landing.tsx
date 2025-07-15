"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  Users,
  Clock,
  Award,
  Briefcase,
  Gavel,
  Menu,
  X,
  ChevronRight,
  Star,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "nosotros", label: "Nosotros" },
    { id: "ventajas", label: "Ventajas" },
    { id: "contacto", label: "Contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-gray-900">Dr. Walter Gallo</h1>
                <p className="text-xs text-gray-600">Abogado Especialista</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-slate-800 ${
                    activeSection === item.id ? "text-slate-800" : "text-gray-600"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 to-slate-600 transform scale-x-100 transition-transform duration-300" />
                  )}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Consulta Gratuita
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-full">
                  Consulta Gratuita
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300">
              <Award className="w-4 h-4 mr-2" />
              30+ Años de Experiencia
            </Badge>

            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-white animate-in slide-in-from-bottom-4 duration-1000">
              Defendiendo tus
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                derechos
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-200">
              Con compromiso y excelencia en cada caso. Tu justicia es nuestra misión.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
              <Button
                size="lg"
                onClick={() => scrollToSection("contacto")}
                className="group bg-white text-slate-800 hover:bg-gray-100 px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Contactar Ahora
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("servicios")}
                className="group border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-full bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Ver Servicios
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-3 gap-4 mt-16 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
              {[
                { number: "500+", label: "Casos Exitosos" },
                { number: "98%", label: "Casos Ganados" },
                { number: "30+", label: "Años Experiencia" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors">
              Especialización Legal
            </Badge>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Áreas de Especialización</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Brindamos asesoramiento legal integral con la más alta calidad profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Derecho Laboral",
                description:
                  "Despidos, indemnizaciones, accidentes laborales, y defensa integral de derechos del trabajador.",
                features: [
                  "Despidos injustificados",
                  "Accidentes laborales",
                  "Mobbing y acoso",
                  "Negociación colectiva",
                ],
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Scale,
                title: "Derecho Civil",
                description: "Contratos, daños y perjuicios, responsabilidad civil, y litigios comerciales complejos.",
                features: ["Contratos civiles", "Daños y perjuicios", "Responsabilidad civil", "Sucesiones"],
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: Gavel,
                title: "Litigios",
                description: "Representación judicial en todas las instancias con estrategia personalizada y efectiva.",
                features: ["Juicios civiles", "Recursos de apelación", "Ejecuciones", "Medidas cautelares"],
                color: "from-purple-500 to-purple-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center pb-4 relative">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-gray-900 group-hover:text-slate-800 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center space-y-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-center space-x-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${service.color} text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Consultar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fillOpacity='0.02' fillRule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                  Experiencia Profesional
                </Badge>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Experiencia que Marca la
                  <span className="block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Diferencia
                  </span>
                </h3>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Con más de <strong className="text-slate-800">tres décadas de experiencia</strong> en el ejercicio del
                  derecho, Dr. Walter Gallo se ha consolidado como uno de los abogados más respetados en el ámbito
                  laboral y civil.
                </p>
                <p>
                  Su compromiso con la excelencia y la defensa incansable de los derechos de sus clientes lo han
                  convertido en una <strong className="text-slate-800">referencia en el sector legal</strong>.
                </p>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Matrícula Profesional N° 12345</div>
                  <div className="text-sm text-gray-600">Colegio de Abogados de la Ciudad de Buenos Aires</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "30+", label: "Años de Experiencia", icon: Clock, color: "from-blue-500 to-blue-600" },
                { number: "500+", label: "Casos Exitosos", icon: CheckCircle, color: "from-green-500 to-green-600" },
                { number: "98%", label: "Casos Ganados", icon: Award, color: "from-purple-500 to-purple-600" },
                { number: "24/7", label: "Disponibilidad", icon: Clock, color: "from-orange-500 to-orange-600" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="ventajas" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white">
              Ventajas Competitivas
            </Badge>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">¿Por Qué Elegirnos?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestro compromiso va más allá de la representación legal tradicional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Atención Personalizada",
                description: "Cada cliente recibe atención individual y estrategias adaptadas a su caso específico.",
                features: ["Consulta inicial gratuita", "Seguimiento personalizado", "Comunicación directa"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Clock,
                title: "Respuesta Rápida",
                description: "Entendemos la urgencia de los asuntos legales y respondemos con la mayor brevedad.",
                features: ["Respuesta en 24 horas", "Disponibilidad extendida", "Atención de emergencias"],
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Award,
                title: "Resultados Comprobados",
                description: "Nuestro historial de casos exitosos respalda la confianza de nuestros clientes.",
                features: ["98% casos ganados", "Reconocimientos profesionales", "Referencias verificables"],
                color: "from-purple-500 to-pink-500",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 bg-white"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                ></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-current transition-all duration-700"></div>

                <CardContent className="p-10 text-center relative">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${advantage.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <advantage.icon className="w-12 h-12 text-white" />
                  </div>

                  <h4 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {advantage.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed mb-6">{advantage.description}</p>

                  <div className="space-y-3">
                    {advantage.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-center space-x-3 text-sm text-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${advantage.color}`}></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Preview */}
          <div className="mt-20">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 text-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div
                  className="absolute inset-0 opacity-20 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="relative">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                    "Dr. Gallo no solo ganó mi caso, sino que me brindó la tranquilidad y confianza que necesitaba en un
                    momento muy difícil."
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">MR</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">María Rodríguez</div>
                      <div className="text-gray-300 text-sm">Cliente - Caso Laboral</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.02) 75%, transparent 75%)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white">Contacto Directo</Badge>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              ¿Listo para dar el primer paso?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Contáctanos hoy mismo para una consulta gratuita y sin compromiso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@waltergallo.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Teléfono</div>
                      <div className="text-gray-600">+54 9 11 1234-5678</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Dirección</div>
                      <div className="text-gray-600">Av. Corrientes 1234, CABA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form (Placeholder) */}
            <div>
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">Envíanos un Mensaje</CardTitle>
                </CardHeader>
                <CardContent className="p-10">
                  <p className="text-gray-600 text-center mb-6">
                    Estamos listos para escucharte y brindarte la mejor solución legal.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Tu email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Mensaje
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Escribe tu mensaje"
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Enviar Mensaje
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (unchanged – keep existing footer code) */}
    </div>
  )
}
