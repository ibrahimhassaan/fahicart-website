import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Healthcare Management",
    description: "Patient management system with appointment scheduling and telehealth features",
    image: "/healthcare-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
  },
  {
    title: "Financial Dashboard",
    description: "Real-time analytics dashboard for tracking financial metrics and KPIs",
    image: "/financial-analytics-dashboard-dark.jpg",
    tags: ["React", "D3.js", "Python", "Redis"],
  },
  {
    title: "Social Media App",
    description: "Mobile-first social platform with real-time messaging and content sharing",
    image: "/social-media-mobile-app-interface.jpg",
    tags: ["React Native", "Firebase", "GraphQL"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of our recent work and successful client collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border hover:border-accent/50 transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-accent" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
