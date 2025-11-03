import { Card } from "@/components/ui/card"
import { DollarSign, Clock, Target, Zap } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Ahorro Garantizado",
      description:
        "Reducí tu promedio de envíos notablemente pasando de 7500/8000 a 5000/5500 promedio por envío, aplicando cupones desde un 10 a un 40% de descuento.",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description:
        "Automatiza el proceso manual y libera horas de trabajo. Lo que tomaba días ahora toma minutos. Lo que requería de trabajo humano hoy simplificado en nuestra aplicación.",
      color: "text-primary",
    },
    {
      icon: Target,
      title: "Precisión y Control",
      description:
        "Nada mejor que llevar precisamente el control de tu stock y tus envíos de forma fácil y cómoda sin depender de papeles escritos a mano o hojas de excel que se pueden perder.",
      color: "text-chart-3",
    },
    {
      icon: Zap,
      title: "¡Facil.uno se adapta a todo!",
      description:
        "¡Facil.uno se adapta a todo! Podés utilizar nuestra plataforma indistinto la plataforma que uses para vender, procesamos correctamente archivos de Tiendanube y Shopify. Podés generar el archivo de envíos para tu empresa de correspondencia preferida ya sea Correo Argentino o Andreani pudiendo utilizar cupón de descuento en ambas!",
      color: "text-chart-4",
    },
  ]

  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Beneficios Clave
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Optimiza tu operación logística y mejora tus márgenes de ganancia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-6 bg-card hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="mb-4">
                  <div className={`h-12 w-12 rounded-lg bg-muted flex items-center justify-center ${benefit.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{benefit.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Operativos desde el 27/10/25 • Fase Beta
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Estamos en nuestras primeras semanas de operación. Tu feedback es esencial para mejorar.
            </p>
          </div>
          <Card className="p-8 bg-muted/50 border-2">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">+35</div>
                <div className="text-sm text-muted-foreground">Clientes Registrados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">35K+</div>
                <div className="text-sm text-muted-foreground">Envíos procesados mensualmente</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-chart-3 mb-2">$50M+</div>
                <div className="text-sm text-muted-foreground">Ahorrados por nuestros clientes</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
