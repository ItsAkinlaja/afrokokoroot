import Link from "next/link"
import { LayoutDashboard, Calendar, FileText, Settings, LogOut, Music, Users, BarChart3 } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e1b4b] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold tracking-tight">Afrokokoroot <span className="text-orange-500">Admin</span></h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-white/10 rounded-lg transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/events" className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-white/10 rounded-lg transition-colors">
            <Calendar className="h-5 w-5" />
            <span>Events</span>
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-white/10 rounded-lg transition-colors">
            <FileText className="h-5 w-5" />
            <span>Blog Posts</span>
          </Link>
          <Link href="/admin/programs" className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-white/10 rounded-lg transition-colors">
            <Music className="h-5 w-5" />
            <span>Programs</span>
          </Link>
          <Link href="/admin/team" className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-white/10 rounded-lg transition-colors">
            <Users className="h-5 w-5" />
            <span>Team</span>
          </Link>
          <Link href="/admin/impact" className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-white/10 rounded-lg transition-colors">
            <BarChart3 className="h-5 w-5" />
            <span>Impact Metrics</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-white/10 rounded-lg transition-colors">
            <LogOut className="h-5 w-5" />
            <span>Exit to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
