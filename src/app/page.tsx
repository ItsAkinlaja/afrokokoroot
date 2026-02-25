import { getImpactMetrics } from "@/lib/api"
import { Hero } from "@/components/sections/Hero"
import { Mission } from "@/components/sections/Mission"
import { Impact } from "@/components/sections/Impact"
import { ProgramsPreview } from "@/components/sections/ProgramsPreview"
import { EventsPreview } from "@/components/sections/EventsPreview"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default async function Home() {
  const stats = await getImpactMetrics()

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Mission />
      <Impact stats={stats} />
      <ProgramsPreview />
      <EventsPreview />
      
      {/* Newsletter / CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden text-primary-foreground text-center rounded-b-[3rem] shadow-xl">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-400/30 rounded-full blur-3xl animate-pulse -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container relative z-10 max-w-3xl space-y-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl drop-shadow-sm">Join Our Movement</h2>
          <p className="text-xl opacity-90 font-medium">
            Stay updated on our latest programs, events, and impact stories. Be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:w-80 h-12 text-foreground bg-white/95 border-0 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            />
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 px-8 font-bold shadow-lg hover:scale-105 transition-transform">
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  )
}
