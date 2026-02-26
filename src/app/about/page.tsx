import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { ShieldCheck, Heart, Users, FileText, Globe, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTeam } from "@/lib/api"
import { TeamMember } from "@/lib/types"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Afrokokoroot Foundation's mission to preserve African heritage and empower communities through music and art.",
  openGraph: {
    title: "About Us | Afrokokoroot Foundation",
    description: "Learn about the Afrokokoroot Foundation's mission to preserve African heritage and empower communities through music and art.",
    url: `${siteConfig.url}/about`,
  },
}

export default async function AboutPage() {
  const team = await getTeam()

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-indigo-900 text-white overflow-hidden rounded-b-[3rem] shadow-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=2070&auto=format&fit=crop"
            alt="Community gathering and celebration"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-orange-900/80" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl animate-pulse mix-blend-screen delay-1000" />

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Preserving Heritage, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Inspiring Unity</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto font-light leading-relaxed">
            The Afrokokoroot Foundation is a 501(c)(3) nonprofit dedicated to cultural education, artistic excellence, and community empowerment through the universal language of rhythm.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 container relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
                <Globe className="h-5 w-5" /> Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Bridging Divides Through Rhythm</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To educate, inspire, and unite communities through the power of Afrobeat music and African cultural arts. We believe that rhythm is a universal language that transcends borders and fosters deep understanding.
              </p>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 text-secondary font-bold mb-2">
                <Music className="h-5 w-5" /> Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">A World in Harmony</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where African heritage is celebrated, and cultural exchange leads to global peace, mutual respect, and vibrant communities.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-orange-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <ShieldCheck className="h-8 w-8 text-primary" />
              Commitment to Integrity
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              As a registered 501(c)(3) organization, we adhere to the highest standards of governance, ethics, and financial transparency.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-3 rounded-xl bg-orange-50/50 hover:bg-orange-50 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm text-secondary">
                  <Heart className="h-5 w-5" />
                </div>
                <span className="font-semibold text-foreground">Community-First Approach</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl bg-indigo-50/50 hover:bg-indigo-50 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm text-secondary">
                  <Users className="h-5 w-5" />
                </div>
                <span className="font-semibold text-foreground">Inclusive & Accessible Programs</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl bg-yellow-50/50 hover:bg-yellow-50 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm text-secondary">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="font-semibold text-foreground">Transparent Reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-orange-50 relative overflow-hidden rounded-b-[3rem] shadow-xl">

        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-5" />
        <div className="absolute -left-20 top-1/2 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">Our History</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">From a Band to a Movement</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground text-left bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-orange-100">
            <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              Afrokokoroot began as a musical ensemble, a collective of artists passionate about the infectious rhythms of Afrobeat. Founded by Sunny Dada (SHADDAI), the band quickly realized that their music had a power beyond entertainment—it was a vehicle for education and connection.
            </p>
            <p className="mb-6 italic border-l-4 border-primary pl-6 py-2 bg-orange-50/50 rounded-r-lg">
              &quot;Afro&quot; means Africa-centric, &quot;koko&quot; refers to the epicenter of events, and &quot;root&quot; signifies that everything we do revolves around African heritage.
            </p>
            <p>
              In 2024, we formalized our mission by establishing the Afrokokoroot Foundation. This transition allows us to expand our impact through structured educational programs, community workshops, and large-scale cultural festivals like the World Peace Music & Art Festival.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="py-24 container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries guiding our mission to celebrate African heritage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member: TeamMember) => (
            <div key={member.name} className="group flex flex-col items-center text-center space-y-6 p-6 rounded-3xl hover:bg-muted/30 transition-colors duration-300">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-orange-100 to-indigo-100 p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white overflow-hidden relative border-4 border-white">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold bg-muted">
                      <span className="sr-only">{member.name}</span>
                      <Users className="h-12 w-12 opacity-20" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-bold uppercase tracking-wider text-sm">{member.role}</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
              
              <div className="pt-4 border-t w-full border-border/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="sm" className="text-xs">View Full Bio</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Financials / Annual Report */}
      <section className="py-24 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-indigo-800 opacity-90" />
        
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Financial Transparency</h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-12">
            We are committed to open and honest financial reporting. Our annual reports and IRS Form 990s are available for public review.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
             <Button variant="outline" className="h-auto py-6 flex flex-col gap-2 items-center justify-center bg-white/5 border-white/20 hover:bg-white/10 hover:text-white group">
               <FileText className="h-8 w-8 mb-1 group-hover:scale-110 transition-transform" />
               <span className="font-bold text-lg">IRS Determination Letter</span>
               <span className="text-xs text-indigo-300 font-normal">Download PDF</span>
             </Button>
             
             <Button variant="outline" className="h-auto py-6 flex flex-col gap-2 items-center justify-center bg-white/5 border-white/20 hover:bg-white/10 hover:text-white group">
               <FileText className="h-8 w-8 mb-1 group-hover:scale-110 transition-transform" />
               <span className="font-bold text-lg">Annual Report 2024</span>
               <span className="text-xs text-indigo-300 font-normal">(Coming Soon)</span>
             </Button>
          </div>
        </div>

        {/* Wave Divider to CTA */}
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-orange-950 text-white text-center relative overflow-hidden rounded-b-[3rem] shadow-xl">

        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800 via-orange-900 to-orange-950 opacity-90" />
        
        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
        
        <div className="container max-w-3xl relative z-10">
          <h2 className="text-4xl font-bold tracking-tight mb-6 drop-shadow-sm text-white">Join Our Mission</h2>
          <p className="text-xl text-orange-100/90 mb-10 font-medium">
            Your support helps us keep the rhythm alive. Whether you donate, volunteer, or attend an event, you make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="shadow-lg hover:scale-105 transition-transform font-bold px-8 bg-white text-orange-900 hover:bg-orange-50" asChild>
              <Link href="/donate">Donate Today</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-orange-200/30 text-white hover:bg-white/10 hover:text-white font-bold px-8 backdrop-blur-sm" asChild>
              <Link href="/get-involved">Volunteer With Us</Link>
            </Button>
          </div>
        </div>

        {/* Wave Divider to Footer (Dark Indigo) */}
      </section>

    </div>
  )
}
