import { Card } from "@/components/ui/card"
import { FileSpreadsheet, Truck, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: FileSpreadsheet,
      title: "Carga tu CSV",
      description:
        "Sube tus ventas de Tiendanube o Shopify en formato CSV. Nuestro sistema reconoce automáticamente el formato.",
      step: "01",
    },
    {
      icon: Truck,
      title: "Genera tus Rótulos",
      description:
        "Nuestro sistema crea un Excel compatible con Andreani con rótulos y descuentos aplicados automáticamente.",
      step: "02",
    },
    {
      icon: CheckCircle,
      title: "Despacha y Controla",
      description:
        "Carga PDFs de rótulos para adjuntar productos y genera un reporte de stock actualizado en tiempo real.",
      step: "03",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Cómo Funciona</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Tres pasos simples para optimizar tus envíos y comenzar a ahorrar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative p-8 bg-card hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-lg">
                  {step.step}
                </div>

                <div className="mb-6 mt-4">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{step.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
