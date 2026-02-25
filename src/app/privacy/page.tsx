import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Shield, Lock, Eye, FileText, Cookie, Mail, Phone, MapPin } from "lucide-react"
import { getContactInfo } from "@/lib/api"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Afrokokoroot Foundation. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Afrokokoroot Foundation",
    description: "Privacy Policy for Afrokokoroot Foundation. Learn how we collect, use, and protect your personal information.",
    url: `${siteConfig.url}/privacy`,
  },
}

export default async function PrivacyPage() {
  const contactInfo = await getContactInfo()
  const lastUpdated = "February 25, 2026"

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-indigo-900 text-white overflow-hidden rounded-b-[3rem] shadow-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop"
            alt="Privacy and Security"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-indigo-950/90" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse mix-blend-screen delay-1000" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-sm font-medium text-indigo-100">
            <Shield className="h-4 w-4" />
            <span>Privacy & Security</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto font-light leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your personal information.
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
                <a href="#introduction" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">1. Introduction</a>
                <a href="#information-collection" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">2. Information Collection</a>
                <a href="#use-of-information" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">3. Use of Information</a>
                <a href="#data-protection" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">4. Data Protection</a>
                <a href="#cookies" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">5. Cookies</a>
                <a href="#contact" className="block px-4 py-2 rounded-lg hover:bg-indigo-50 text-muted-foreground hover:text-indigo-700 transition-colors text-sm font-medium">6. Contact Us</a>
              </nav>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-bl-full -mr-8 -mt-8" />
              <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
              <p className="text-indigo-100 mb-6 text-sm">
                If you have any questions about our privacy practices, please feel free to contact us.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-indigo-900 font-bold hover:bg-orange-50 transition-colors w-full text-sm">
                Contact Support
              </Link>
            </div>
          </div>

          {/* Policy Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Introduction</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  At Afrokokoroot Foundation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website {siteConfig.url} (our &quot;Website&quot;) and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                </p>
                <p>
                  Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy.
                </p>
              </div>
            </section>

            {/* Information Collection */}
            <section id="information-collection" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 text-orange-700 rounded-xl">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. Information We Collect</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-6">
                <p>
                  We collect several types of information from and about users of our Website, including information:
                </p>
                <ul className="grid gap-4 list-none pl-0">
                  <li className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span><strong>Personal Information:</strong> By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.</span>
                  </li>
                  <li className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span><strong>Usage Data:</strong> About your internet connection, the equipment you use to access our Website, and usage details.</span>
                  </li>
                  <li className="flex gap-4 items-start p-4 rounded-xl bg-gray-50">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span><strong>Transaction Data:</strong> Details of transactions you carry out through our Website and of the fulfillment of your orders or donations.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Use of Information */}
            <section id="use-of-information" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. How We Use Your Information</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    "To present our Website and its contents to you.",
                    "To provide you with information, products, or services that you request from us.",
                    "To fulfill any other purpose for which you provide it.",
                    "To provide you with notices about your account or subscription.",
                    "To carry out our obligations and enforce our rights.",
                    "To notify you about changes to our Website or any products or services.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-indigo-600">✓</span>
                      </div>
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section id="data-protection" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 text-purple-700 rounded-xl">
                  <Lock className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. Data Security</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions will be encrypted using SSL technology.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded-r-lg">
                  <p className="text-sm text-yellow-800 m-0">
                    <strong>Note:</strong> Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
                  <Cookie className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Cookies and Tracking</h2>
              </div>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  Our Website uses &quot;cookies&quot; to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
                </p>
                <p className="mt-4">
                  You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <div className="bg-indigo-50 rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6">6. Contact Information</h2>
                <p className="text-indigo-700/80 mb-8">
                  To ask questions or comment about this privacy policy and our privacy practices, contact us at:
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
