import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our priority. We work closely with you throughout the entire development process.",
  },
  {
    icon: Target,
    title: "Result-Driven",
    description: "We deliver measurable results that align with your business goals and drive growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions for your business.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We maintain the highest standards in code quality, security, and performance.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">About Fahicart</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a team of passionate developers, designers, and problem-solvers dedicated to creating exceptional
              software solutions. With over a decade of experience, we've helped businesses of all sizes achieve their
              digital transformation goals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expertise spans modern web technologies, mobile development, cloud infrastructure, and everything in
              between. We don't just write code – we build partnerships and deliver solutions that make a real impact.
            </p>
          </div>
          <div className="relative">
            <img src="/aboutus-cover.jpg" alt="Team collaboration" className="rounded-lg w-full h-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title} className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
