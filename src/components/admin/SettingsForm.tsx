'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveContactInfo } from '@/lib/actions';
import { ContactInfo } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { Save, Loader2 } from "lucide-react";

interface SettingsFormProps {
  initialData: ContactInfo;
}

export default function SettingsForm({ initialData }: SettingsFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    address: initialData?.address || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    facebook: initialData?.socials?.facebook || '',
    instagram: initialData?.socials?.instagram || '',
    twitter: initialData?.socials?.twitter || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Reconstruct the nested object structure expected by the backend
      const submissionData = {
        address: formData.address,
        email: formData.email,
        phone: formData.phone,
        socials: {
          facebook: formData.facebook,
          instagram: formData.instagram,
          twitter: formData.twitter,
        }
      };

      await saveContactInfo(submissionData);
      router.refresh();
      // Optional: Add toast notification here
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-900 border-b pb-2">General Contact Info</h3>
        
        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter physical address"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="info@example.com"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-900 border-b pb-2">Social Media Links</h3>
        
        <div className="grid gap-2">
          <Label htmlFor="facebook">Facebook URL</Label>
          <Input
            id="facebook"
            name="facebook"
            type="url"
            value={formData.facebook}
            onChange={handleChange}
            placeholder="https://facebook.com/..."
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="instagram">Instagram URL</Label>
          <Input
            id="instagram"
            name="instagram"
            type="url"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="https://instagram.com/..."
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="twitter">Twitter / X URL</Label>
          <Input
            id="twitter"
            name="twitter"
            type="url"
            value={formData.twitter}
            onChange={handleChange}
            placeholder="https://twitter.com/..."
          />
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" disabled={isSubmitting} className="w-full bg-indigo-900 hover:bg-indigo-800">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving Changes...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
