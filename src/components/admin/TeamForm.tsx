'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { saveTeamMember } from '@/lib/actions'
import { Loader2 } from 'lucide-react'
import { TeamMember } from '@/lib/types'

interface TeamFormProps {
  initialData?: TeamMember
}

export default function TeamForm({ initialData }: TeamFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    slug: initialData?.slug || '',
    name: initialData?.name || '',
    role: initialData?.role || '',
    bio: initialData?.bio || '',
    image: initialData?.image || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    // Only auto-generate slug if it's a new member
    if (!initialData) {
      const slug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, name, slug }))
    } else {
      setFormData(prev => ({ ...prev, name }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await saveTeamMember(formData)
      router.push('/admin/team')
      router.refresh()
    } catch (error) {
      console.error('Error saving team member:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
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
            disabled={!!initialData}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="role" className="text-sm font-medium">Role / Position</label>
        <Input
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="text-sm font-medium">Image URL</label>
        <Input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="/team-placeholder.jpg"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="bio" className="text-sm font-medium">Bio</label>
        <Textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows={5}
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
          {initialData ? 'Update Member' : 'Add Member'}
        </Button>
      </div>
    </form>
  )
}
