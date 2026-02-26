import Link from "next/link"
import { Calendar, FileText, Users, DollarSign } from "lucide-react"
import { getEvents, getBlogPosts, getPrograms, getTeam } from "@/lib/api"
import { Event, BlogPost } from "@/lib/types"

export default async function AdminDashboard() {
  const events = await getEvents()
  const blogs = await getBlogPosts()
  const programs = await getPrograms()
  const team = await getTeam()

  const stats = [
    {
      label: "Upcoming Events",
      value: events.length,
      icon: Calendar,
      color: "bg-blue-500",
      href: "/admin/events"
    },
    {
      label: "Blog Posts",
      value: blogs.length,
      icon: FileText,
      color: "bg-green-500",
      href: "/admin/blog"
    },
    {
      label: "Programs",
      value: programs.length,
      icon: Users,
      color: "bg-purple-500",
      href: "/admin/programs"
    },
    {
      label: "Team Members",
      value: team.length,
      icon: Users,
      color: "bg-orange-500",
      href: "/admin/team"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Dashboard Overview</h1>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link 
            key={stat.label} 
            href={stat.href}
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <span className="text-2xl font-bold text-slate-800">{stat.value}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-500">{stat.label}</h3>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity / Quick Links */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Events</h2>
          <div className="space-y-4">
            {events.slice(0, 3).map((event: Event) => (
              <div key={event.slug} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-slate-800">{event.title}</h4>
                  <p className="text-sm text-slate-500">{event.date}</p>
                </div>
                <Link href={`/admin/events/${event.slug}`} className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                  Edit
                </Link>
              </div>
            ))}
            {events.length === 0 && <p className="text-slate-500 text-sm">No events found.</p>}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Link href="/admin/events" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
              View all events &rarr;
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Latest Blog Posts</h2>
          <div className="space-y-4">
            {blogs.slice(0, 3).map((blog: BlogPost) => (
              <div key={blog.slug} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-slate-800">{blog.title}</h4>
                  <p className="text-sm text-slate-500">{blog.date} • {blog.author}</p>
                </div>
                <Link href={`/admin/blog/${blog.slug}`} className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                  Edit
                </Link>
              </div>
            ))}
            {blogs.length === 0 && <p className="text-slate-500 text-sm">No blog posts found.</p>}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Link href="/admin/blog" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
              View all posts &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
