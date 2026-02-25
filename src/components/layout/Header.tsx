"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "Events", href: "/events" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300">
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50" />
      
      <div className="container flex h-20 items-center justify-between relative">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group relative z-50" onClick={() => setMobileMenuOpen(false)}>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 group-hover:scale-105 transition-transform duration-300">
              Afrokokoroot
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-bold transition-colors hover:text-orange-600 rounded-full hover:bg-orange-50/50 group overflow-hidden",
                pathname === item.href
                  ? "text-orange-600 bg-orange-50"
                  : "text-slate-600"
              )}
            >
              <span className="relative z-10">{item.name}</span>
              {pathname === item.href && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-purple-500" />
              )}
            </Link>
          ))}
          <Button asChild size="lg" className="ml-4 shadow-lg shadow-orange-500/20 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 border-0 rounded-full font-bold transition-all hover:scale-105">
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="text-slate-800 hover:bg-orange-50 hover:text-orange-600 relative"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white lg:hidden flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600">
                Afrokokoroot
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 hover:bg-red-50 hover:text-red-600 rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-6">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block text-3xl font-bold transition-all duration-300 py-2",
                        pathname === item.href
                          ? "text-orange-600 scale-110"
                          : "text-slate-800 hover:text-orange-600 hover:scale-105"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 w-full max-w-xs"
                >
                  <Button asChild className="w-full h-14 text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 shadow-xl shadow-orange-500/20 rounded-full hover:scale-105 transition-transform">
                    <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                      Donate Now
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Mobile Footer Decor */}
            <div className="p-6 text-center bg-slate-50">
              <p className="text-sm text-slate-400 font-medium">
                Building a stronger community together.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
