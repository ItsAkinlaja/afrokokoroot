'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { saveProgram } from '@/lib/actions'
import { Loader2 } from 'lucide-react'
import { Program } from '@/lib/types'

interface ProgramFormProps {
  initialData?: Program
}

export default function ProgramForm({ initialData }: ProgramFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    slug: initialData?.slug || '',
    title: initialData?.title || '',
    description: initialData?.description || '',
    content: initialData?.content || '',
    image: initialData?.image || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    // Only auto-generate slug if it's a new program
    if (!initialData) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, title, slug }))
    } else {
      setFormData(prev => ({ ...prev, title }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await saveProgram(formData)
      router.push('/admin/programs')
      router.refresh()
    } catch (error) {
      console.error('Error saving program:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">Program Title</label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleTitleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="slug" className="text-sm font-medium">Slug (URL)</label>
          <Input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            disabled={!!initialData} // Disable slug editing for existing programs to prevent breaking links
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="text-sm font-medium">Image URL</label>
        <Input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="/program-placeholder.jpg"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium">Short Description</label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="text-sm font-medium">Full Content</label>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={8}
          required
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData ? 'Update Program' : 'Create Program'}
        </Button>
      </div>
    </form>
  )
}
