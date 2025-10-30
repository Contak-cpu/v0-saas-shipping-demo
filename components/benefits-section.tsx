import { Card } from "@/components/ui/card"
import { DollarSign, Clock, Target, Zap } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Ahorro Garantizado",
      description:
        "Reduce tus costos de envío entre un 10% y 20% aplicando descuentos directos de Andreani automáticamente.",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Automatiza el proceso manual y libera horas de trabajo. Lo que tomaba días ahora toma minutos.",
      color: "text-primary",
    },
    {
      icon: Target,
      title: "Precisión y Control",
      description:
        "Elimina errores con la vinculación automática de productos a rótulos y reportes de stock en tiempo real.",
      color: "text-chart-3",
    },
    {
      icon: Zap,
      title: "Integración Fácil",
      description:
        "Compatible con tus plataformas de e-commerce favoritas: Tiendanube y Shopify. Sin configuración compleja.",
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

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-muted/50 border-2">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Empresas confían en nosotros</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Envíos procesados mensualmente</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-chart-3 mb-2">$2M+</div>
                <div className="text-sm text-muted-foreground">Ahorrados por nuestros clientes</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
