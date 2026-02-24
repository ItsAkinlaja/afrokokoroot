'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { saveBlogPost } from '@/lib/actions'
import { Loader2 } from 'lucide-react'
import { BlogPost } from '@/lib/types'

export default function BlogForm({ initialData }: { initialData?: BlogPost }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<BlogPost>(initialData || {
    title: '',
    slug: '',
    date: '',
    author: '',
    category: '',
    excerpt: '',
    image: '',
    content: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const dataToSave = {
        ...formData,
        slug: formData.slug || formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
      }
      
      await saveBlogPost(dataToSave)
      router.push('/admin/blog')
      router.refresh()
    } catch (error) {
      console.error('Failed to save post:', error)
      alert('Failed to save post. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Post Title</label>
          <Input 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="e.g. The Healing Power of Rhythm" 
            required 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Slug (URL)</label>
            <Input 
              name="slug" 
              value={formData.slug} 
              onChange={handleChange} 
              placeholder="healing-power-of-rhythm" 
            />
            <p className="text-xs text-slate-500 mt-1">Leave blank to generate from title</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <Input 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              placeholder="e.g. February 15, 2026" 
              required 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
            <Input 
              name="author" 
              value={formData.author} 
              onChange={handleChange} 
              placeholder="e.g. Sunny Dada" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <Input 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              placeholder="e.g. Wellness" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt</label>
          <Textarea 
            name="excerpt" 
            value={formData.excerpt} 
            onChange={handleChange} 
            placeholder="Brief summary..." 
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Content (Markdown supported)</label>
          <Textarea 
            name="content" 
            value={formData.content} 
            onChange={handleChange} 
            placeholder="Write your post here..." 
            rows={10}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
          <Input 
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            placeholder="/images/blog.jpg" 
          />
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-slate-100">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading} className="bg-indigo-600 hover:bg-indigo-700 text-white">
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData ? 'Update Post' : 'Create Post'}
        </Button>
      </div>
    </form>
  )
}
