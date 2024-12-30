import { Zap, Paintbrush, Sparkles, PuzzleIcon as PuzzlePiece, Users, Code, Database, Scale, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function WhyChooseShapex() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-24">
      <div className="container mx-auto max-w-5xl space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Why Choose ShapeX-UI?
          </h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-primary-foreground rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <FeatureCard
            icon={<Zap className="size-8" />}
            title="Super Fast & Easy"
            emoji="🏎️"
            description="Tired of coding the same components over and over? ShapeX-UI makes development a breeze! Simply pick the component you need, copy-paste, and customize. What used to take days now takes just minutes."
          />
          
          <FeatureCard
            icon={<Paintbrush className="size-8" />}
            title="Eye-Catching Designs"
            emoji="🎨"
            description="From vibrant Hero Sections to engaging Testimonials, each block is crafted for visual impact and easy customization. Change colors, layouts, and more to fit your needs effortlessly."
          />
          
          <FeatureCard
            icon={<Sparkles className="size-8" />}
            title="Smooth Animations"
            emoji="✨"
            description="Add a professional touch with prebuilt animations—no extra work needed! ShapeX-UI delivers polished interactions with minimal effort."
          />
          
          <FeatureCard
            icon={<PuzzlePiece className="size-8" />}
            title="Ready-to-Use Blocks"
            emoji="🧩"
            description="Comprehensive collection of essential components for your web applications."
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Available Components</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Hero Sections",
              "Headers and Footers",
              "FAQs",
              "Sign In/Sign Up Forms",
              "Testimonials",
              "And many more!"
            ].map((component) => (
              <div
                key={component}
                className="bg-secondary/50 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-secondary/70 transition-colors"
              >
                {component}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Who's It For?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <UserCard
              icon={<Code className="size-6" />}
              title="Frontend Developers"
              description="Who want ready-to-use building blocks"
            />
            <UserCard
              icon={<Database className="size-6" />}
              title="Backend Developers"
              description="Who prefer avoiding frontend hassles"
            />
            <UserCard
              icon={<Scale className="size-6" />}
              title="Development Teams"
              description="Needing scalable, responsive, and stylish UI solutions"
            />
            <UserCard
              icon={<Users className="size-6" />}
              title="UI Enthusiasts"
              description="Who love polished, animation-ready components"
            />
          </div>
        </div>

        <div className="text-center space-y-6 py-12">
          <p className="text-xl md:text-2xl text-muted-foreground">
            With ShapeX-UI, focus less on repetitive tasks and more on building amazing applications.
          </p>
          <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold">
            Design with ShapeX-UI! 
            <Rocket className="size-8 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, emoji, description }: {
  icon: React.ReactNode
  title: string
  emoji: string
  description: string
}) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {icon}
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-2xl">{emoji}</span>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

function UserCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

