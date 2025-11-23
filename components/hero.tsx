import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm">
            <Code2 className="h-4 w-4" />
            <span>Software Development Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl">
            Building Digital Solutions That <span className="text-accent">Transform</span> Businesses
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Expert software development services tailored to your needs. From web applications to enterprise solutions,
            we bring your ideas to life with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="text-base">
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <Link href="#about">Who are we</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 w-full max-w-3xl border-t border-border">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-accent">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-accent">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-accent">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
