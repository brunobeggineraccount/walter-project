"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Scale,
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
  Heart,
  Building,
  Shield,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  FileText,
  Eye,
  Lock,
} from "lucide-react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showWhatsApp, setShowWhatsApp] = useState(false)

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "areas", label: "Áreas de Práctica" },
    { id: "nosotros", label: "Sobre Nosotros" },
    { id: "testimonios", label: "Testimonios" },
    { id: "faq", label: "Preguntas Frecuentes" },
    { id: "contacto", label: "Contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowWhatsApp(window.scrollY > 300)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log("Formulario enviado:", formData)
    alert("Gracias por su consulta. Nos pondremos en contacto a la brevedad.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const testimonials = [
    {
      name: "María Elena Rodríguez",
      case: "Despido Injustificado",
      rating: 5,
      text: "El Dr. Gallo me representó en un caso de despido injustificado. Su profesionalismo y dedicación fueron excepcionales. Logró una indemnización superior a la esperada.",
      initials: "MR",
    },
    {
      name: "Carlos Alberto Mendoza",
      case: "Accidente Laboral",
      rating: 5,
      text: "Después de un accidente en mi trabajo, el Dr. Gallo me asesoró durante todo el proceso. Su experiencia fue clave para obtener la compensación que merecía.",
      initials: "CM",
    },
    {
      name: "Ana Patricia Silva",
      case: "Divorcio y Tenencia",
      rating: 5,
      text: "En un momento muy difícil de mi vida, el Dr. Gallo me brindó no solo asesoramiento legal sino también contención humana. Excelente profesional.",
      initials: "AS",
    },
  ]

  const practiceAreas = [
    {
      icon: Briefcase,
      title: "Derecho Laboral",
      description: "Defensa integral de los derechos del trabajador con más de 30 años de experiencia en la materia.",
      services: [
        "Despidos injustificados e indemnizaciones",
        "Accidentes de trabajo y enfermedades profesionales",
        "Mobbing y acoso laboral",
        "Diferencias salariales y horas extras",
        "Negociación colectiva y conflictos sindicales",
      ],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: Scale,
      title: "Derecho Civil",
      description: "Asesoramiento integral en todas las ramas del derecho civil con resultados comprobados.",
      services: [
        "Contratos civiles y comerciales",
        "Daños y perjuicios",
        "Responsabilidad civil",
        "Sucesiones y testamentos",
        "Derechos reales y propiedad",
      ],
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Heart,
      title: "Derecho de Familia",
      description: "Acompañamiento profesional y humano en los momentos más delicados de la vida familiar.",
      services: [
        "Divorcios y separaciones",
        "Tenencia y régimen de visitas",
        "Cuota alimentaria",
        "Adopciones",
        "Violencia familiar",
      ],
      color: "from-rose-600 to-rose-700",
      bgColor: "bg-rose-50",
    },
    /*
    {
      icon: Shield,
      title: "Derecho Penal",
      description: "Defensa penal especializada con estrategias personalizadas para cada caso.",
      services: [
        "Defensa en causas penales",
        "Excarcelaciones y eximiciones",
        "Recursos de apelación",
        "Querella por calumnias e injurias",
        "Delitos económicos",
      ],
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
    },
    {
      icon: Building,
      title: "Derecho Comercial",
      description: "Asesoramiento empresarial integral para el crecimiento y protección de su negocio.",
      services: [
        "Constitución de sociedades",
        "Contratos comerciales",
        "Concursos y quiebras",
        "Derecho del consumidor",
        "Propiedad intelectual",
      ],
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
    },
    {
      icon: Gavel,
      title: "Derecho Administrativo",
      description: "Representación ante organismos públicos y defensa de sus derechos frente al Estado.",
      services: [
        "Recursos administrativos",
        "Contrataciones públicas",
        "Responsabilidad del Estado",
        "Derecho tributario",
        "Derecho municipal",
      ],
      color: "from-amber-600 to-amber-700",
      bgColor: "bg-amber-50",
    },

    */
  ]

  const faqs = [
    {
      question: "¿Cuánto cuesta la primera consulta?",
      answer:
        "La primera consulta es completamente gratuita y sin compromiso. Durante esta reunión evaluaremos su caso y le brindaremos un panorama claro de las opciones legales disponibles.",
    },
    {
      question: "¿Cuánto tiempo demora un juicio laboral?",
      answer:
        "Los tiempos varían según la complejidad del caso y la carga de trabajo de los tribunales. En promedio, un juicio laboral puede demorar entre 12 a 24 meses, aunque trabajamos para acelerar los procesos cuando es posible.",
    },
    {
      question: "¿Qué documentación necesito para una consulta?",
      answer:
        "Para una primera consulta, traiga toda la documentación relacionada con su caso: contratos, recibos de sueldo, telegramas, certificados médicos, etc. Si no tiene algún documento, no se preocupe, lo orientaremos sobre cómo obtenerlo.",
    },
    {
      question: "¿Trabajan con el sistema de honorarios por resultado?",
      answer:
        "Sí, en casos laborales y de daños y perjuicios ofrecemos la modalidad de honorarios por resultado (cuota litis), donde usted solo paga si ganamos el caso. Consultenos sobre esta opción en su primera entrevista.",
    },
    {
      question: "¿Atienden casos en el interior del país?",
      answer:
        "Sí, atendemos casos en todo el territorio nacional. Para casos en el interior, coordinamos las estrategias desde Buenos Aires y trabajamos con corresponsales locales cuando es necesario.",
    },
    {
      question: "¿Qué pasa si pierdo el juicio?",
      answer:
        "En caso de una sentencia desfavorable, analizamos la viabilidad de interponer recursos de apelación. Nuestro compromiso es agotar todas las instancias legales disponibles para defender sus derechos.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* WhatsApp Floating Button */}
      {showWhatsApp && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
            onClick={() => window.open("https://wa.me/543516506273", "_blank")}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </Button>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center shadow-lg">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-gray-900">Estudio Jurídico Walter Gallo</h1>
                <p className="text-xs text-gray-600">Abogados Especialistas</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
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
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Consulta Gratuita
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
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
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-full"
                >
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
              Más de 30 Años Defendiendo sus Derechos
            </Badge>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-white animate-in slide-in-from-bottom-4 duration-1000">
              Derecho
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Argentino
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-200">
              Asesoramiento legal integral con compromiso, experiencia y resultados comprobados.             
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
              <Button
                size="lg"
                onClick={() => scrollToSection("contacto")}
                className="group bg-white text-slate-800 hover:bg-gray-100 px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Consulta Gratuita
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("areas")}
                className="group border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-full bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Ver Áreas de Práctica
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-16 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
              {[
                { number: "200+", label: "Casos Consolidados" },
                { number: "24/7", label: "Disponibilidad" },
                { number: "30+", label: "Años de Experiencia" },
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

      {/* Practice Areas Section */}
      <section id="areas" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors">
              Especialización Legal Integral
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Áreas de Práctica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Brindamos asesoramiento legal especializado en múltiples ramas del derecho, con la experiencia y
              dedicación que su caso requiere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center pb-4 relative">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                  >
                    <area.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-gray-900 group-hover:text-slate-800 transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-center">{area.description}</p>

                  <div className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => scrollToSection("contacto")}
                    className={`w-full bg-gradient-to-r ${area.color} text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                  Trayectoria Profesional
                </Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Experiencia que Marca la
                  <span className="block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Diferencia
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Con más de <strong className="text-slate-800">tres décadas de experiencia</strong> en el ejercicio del
                  derecho.
                </p>
                <p>
                  Compromiso inquebrantable con la{" "}
                  <strong className="text-slate-800">defensa de los derechos</strong> de sus clientes y su búsqueda
                  constante de la excelencia profesional.
                </p>
                <p>
                  Brindamos dedicación y atención en cada paso, 
                  <strong className="text-slate-800"> asesoramiento integral</strong> y
                  <strong className="text-slate-800"> resultados comprobados</strong> que respaldan la confianza
                  depositada por cientos de clientes a lo largo de su carrera.
                </p>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Matrícula Profesional</div>
                  <div className="text-sm text-gray-600">Colegio de Abogados de la Ciudad de Córdoba</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "30+", label: "Años de Experiencia", icon: Clock, color: "from-blue-500 to-blue-600" },
                { number: "200+", label: "Casos consolidados", icon: CheckCircle, color: "from-green-500 to-green-600" },
                { number: "98%", label: "Aprobación de clientes", icon: Award, color: "from-purple-500 to-purple-600" },
                { number: "24/7", label: "Disponibilidad", icon: Phone, color: "from-orange-500 to-orange-600" },
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

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white">
              Testimonios de Clientes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La confianza y satisfacción de nuestros clientes son el mejor testimonio de nuestro trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 bg-white"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</blockquote>

                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.case}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-slate-800 text-white hover:bg-slate-700 transition-colors">
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Resolvemos sus Dudas</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Las consultas más frecuentes que recibimos de nuestros clientes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">¿No encuentra la respuesta que busca?</p>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Consulte Directamente
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white">Contacto Directo</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              ¿Listo para Defender sus Derechos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Contáctenos hoy mismo para una consulta gratuita y sin compromiso. Su tranquilidad es nuestra prioridad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-700 text-white border-0 shadow-xl">
  <CardContent className="p-10 space-y-8">
    <div className="text-center">
      <h3 className="text-2xl font-serif font-bold mb-2">Información de Contacto</h3>
      <p className="text-slate-300">Estamos aquí para ayudarle</p>
    </div>

    <div className="space-y-6">
      {/* Teléfono */}
      <div className="flex items-center space-x-4 hover:bg-white/20 rounded-lg p-2 transition">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-semibold">Teléfono</div>
          <a 
      href="tel:+543516506273"

                          className="text-slate-300">+54 351 6 50 6273</a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4 hover:bg-white/20 rounded-lg p-2 transition">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-semibold">Email</div>
          <div className="text-slate-300">waltergalloabogados@gmail.com</div>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/543516506273"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4 hover:bg-white/20 rounded-lg p-2 transition"
      >
        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-semibold">WhatsApp</div>
          <div className="text-slate-300">+54 351 3 96 2003</div>
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/waltergalloabogados"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4 hover:bg-white/20 rounded-lg p-2 transition"
      >
        <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
          <Instagram className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-semibold">Instagram</div>
          <div className="text-slate-300">@waltergalloabogados</div>
        </div>
      </a>
    </div>
  </CardContent>
</Card>
           </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    Solicite su Consulta Gratuita
                  </CardTitle>
                  <p className="text-gray-600">Complete el formulario y nos pondremos en contacto a la brevedad</p>
                </CardHeader>

                <CardContent className="p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ingrese su nombre completo"
                          className="border-gray-300 focus:border-slate-500 focus:ring-slate-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                          Teléfono *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ej: +54 9 11 1234-5678"
                          className="border-gray-300 focus:border-slate-500 focus:ring-slate-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="su.email@ejemplo.com"
                        className="border-gray-300 focus:border-slate-500 focus:ring-slate-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        Describa su Consulta *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describa brevemente su situación legal. Cuanto más detalle proporcione, mejor podremos asesorarle..."
                        rows={5}
                        className="border-gray-300 focus:border-slate-500 focus:ring-slate-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Enviar Consulta Gratuita
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      * Campos obligatorios. Sus datos están protegidos por nuestro compromiso de confidencialidad.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-500 rounded-lg flex items-center justify-center">
                  <Scale className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">Dr. Walter Gallo</h3>
                  <p className="text-slate-400 text-sm">Abogado Especialista</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-md">
                Más de 30 años defendiendo los derechos de nuestros clientes con compromiso, experiencia y resultados
                comprobados en todo el territorio argentino.
              </p>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                  onClick={() => window.open("https://facebook.com", "_blank")}
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                  onClick={() => window.open("https://instagram.com", "_blank")}
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                  onClick={() => window.open("https://linkedin.com", "_blank")}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Información Legal</h4>
              <div className="space-y-3">
                <button className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                  <span>Aviso Legal</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>Política de Privacidad</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                  <Lock className="w-4 h-4" />
                  <span>Términos y Condiciones</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  Matrícula Profesional
                  <br />
                  Colegio de Abogados de la Ciudad de Córdoba
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">© 2022 Dr. Walter Gallo - Abogados. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

