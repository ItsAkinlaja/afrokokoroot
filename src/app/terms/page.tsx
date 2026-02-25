import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Scale, FileText, CheckCircle, AlertTriangle, ShieldCheck, Mail, Phone, MapPin } from "lucide-react"
import { getContactInfo } from "@/lib/api"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Afrokokoroot Foundation. Read our terms and conditions for using our website and services.",
  openGraph: {
    title: "Terms of Service | Afrokokoroot Foundation",
    description: "Terms of Service for Afrokokoroot Foundation. Read our terms and conditions for using our website and services.",
    url: `${siteConfig.url}/terms`,
  },
}

export default async function TermsPage() {
  const contactInfo = await getContactInfo()
  const lastUpdated = "February 25, 2026"

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-indigo-900 text-white overflow-hidden rounded-b-[3rem] shadow-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            alt="Terms and Conditions"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-indigo-950/90" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse mix-blend-screen delay-1000" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-sm font-medium text-indigo-100">
            <Scale className="h-4 w-4" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto font-light leading-relaxed">
            Please read these terms and conditions carefully before using our website.
          </p>
          <p className="mt-4 text-indigo-200/80 text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Table of Contents / Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-50">
              <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-500" />
                Table of Contents
              </h3>
              <nav className="space-y-1">
                <a href="#acceptance" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">1. Acceptance of Terms</a>
                <a href="#use-license" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">2. Use License</a>
                <a href="#disclaimer" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">3. Disclaimer</a>
                <a href="#limitations" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">4. Limitations</a>
                <a href="#governing-law" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">5. Governing Law</a>
                <a href="#contact" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">6. Contact Us</a>
              </nav>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-bl-full -mr-8 -mt-8" />
              <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
              <p className="text-indigo-100 mb-6 text-sm">
                If you have any questions about our terms, please feel free to contact us.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-indigo-900 font-bold hover:bg-orange-50 transition-colors w-full text-sm">
                Contact Support
              </Link>
            </div>
          </div>

          {/* Terms Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Acceptance */}
            <section id="acceptance" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  By accessing this website, accessible from {siteConfig.url}, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
                </p>
              </div>
            </section>

            {/* Use License */}
            <section id="use-license" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 text-orange-700 rounded-xl">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. Use License</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-6">
                <p>
                  Permission is granted to temporarily download one copy of the materials on Afrokokoroot Foundation&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="grid gap-4 list-none pl-0">
                  <li className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span>modify or copy the materials;</span>
                  </li>
                  <li className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span>use the materials for any commercial purpose or for any public display;</span>
                  </li>
                  <li className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span>attempt to reverse engineer any software contained on Afrokokoroot Foundation&apos;s Website;</span>
                  </li>
                  <li className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span>remove any copyright or other proprietary notations from the materials; or</span>
                  </li>
                  <li className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Disclaimer */}
            <section id="disclaimer" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-100 text-yellow-700 rounded-xl">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. Disclaimer</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  All the materials on Afrokokoroot Foundation&apos;s Website are provided &quot;as is&quot;. Afrokokoroot Foundation makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Afrokokoroot Foundation does not make any representations concerning the accuracy or likely results of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this Website.
                </p>
              </div>
            </section>

            {/* Limitations */}
            <section id="limitations" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 text-red-700 rounded-xl">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. Limitations</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  Afrokokoroot Foundation or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Afrokokoroot Foundation&apos;s Website, even if Afrokokoroot Foundation or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
                  <Scale className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Governing Law</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  Any claim related to Afrokokoroot Foundation&apos;s Website shall be governed by the laws of the United States without regards to its conflict of law provisions.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="bg-indigo-50 rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6">6. Contact Information</h2>
                <p className="text-indigo-700/80 mb-8">
                  To ask questions or comment about these terms, contact us at:
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2.5 rounded-lg shadow-sm text-orange-500">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Email Us</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-indigo-600 hover:text-indigo-800 transition-colors break-all">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2.5 rounded-lg shadow-sm text-orange-500">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Call Us</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:col-span-2">
                    <div className="bg-white p-2.5 rounded-lg shadow-sm text-orange-500">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Visit Us</p>
                      <p className="text-muted-foreground">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
