import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/api"
import { BlogPost } from "@/lib/types"
import { siteConfig } from "@/lib/site-config"
import JsonLd from "@/components/ui/JSONLD"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const posts = await getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: post.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || siteConfig.ogImage],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const posts = await getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    image: [post.image || siteConfig.ogImage],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.ogImage,
      },
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
  }

  return (
    <div className="min-h-screen bg-orange-50/30 font-sans selection:bg-orange-200">
      <JsonLd data={jsonLd} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-orange-900 text-white">
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10"></div>
          
          {/* Animated Blobs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse mix-blend-screen" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000 mix-blend-screen" />
        </div>

        <div className="container relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium text-orange-100 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/20">
                {post.category}
              </span>
              <span className="flex items-center text-orange-100 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-200 mb-8 drop-shadow-sm leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-lg font-medium text-orange-100/90">
              <span className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <User className="mr-2 h-5 w-5 text-orange-400" />
                {post.author}
              </span>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 text-orange-50/30">
          <svg className="w-full h-full fill-current" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <div className="container py-12 lg:py-20 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100/50 max-w-4xl mx-auto relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100/40 to-transparent rounded-bl-full -mr-32 -mt-32 pointer-events-none" />
          
          <article className="prose prose-lg prose-indigo mx-auto text-slate-600">
            <p className="lead text-xl md:text-2xl font-medium text-indigo-900 mb-8 border-l-4 border-orange-500 pl-6 italic">
              {post.excerpt}
            </p>
            
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>Content coming soon...</p>
            )}
          </article>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
             <div className="flex gap-2">
               <span className="text-sm font-medium text-slate-500">Share this story:</span>
               <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-indigo-50 hover:text-indigo-600">
                 <Share2 className="h-4 w-4" />
               </Button>
             </div>
             <Button variant="outline" asChild className="rounded-full">
               <Link href="/blog">Read More Stories</Link>
             </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
