'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveImpactMetrics } from '@/lib/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2, Plus, Trash2, GripVertical } from "lucide-react";
import { ImpactMetric } from "@/lib/types";

interface ImpactFormProps {
  initialData: ImpactMetric[];
}

export default function ImpactForm({ initialData }: ImpactFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [metrics, setMetrics] = useState<ImpactMetric[]>(
    initialData.length > 0 ? initialData : [{ label: '', value: '', description: '' }]
  );

  const handleChange = (index: number, field: keyof ImpactMetric, value: string) => {
    const newMetrics = [...metrics];
    newMetrics[index] = { ...newMetrics[index], [field]: value };
    setMetrics(newMetrics);
  };

  const addMetric = () => {
    setMetrics([...metrics, { label: '', value: '', description: '' }]);
  };

  const removeMetric = (index: number) => {
    const newMetrics = metrics.filter((_, i) => i !== index);
    setMetrics(newMetrics);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await saveImpactMetrics(metrics);
      router.refresh();
      // Optional: Add toast notification
    } catch (error) {
      console.error('Error saving impact metrics:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h3 className="text-lg font-medium text-slate-900">Impact Metrics</h3>
          <Button type="button" onClick={addMetric} variant="outline" size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Metric
          </Button>
        </div>

        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div key={index} className="relative group p-4 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  type="button" 
                  onClick={() => removeMetric(index)} 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor={`label-${index}`}>Label (e.g., "Students Educated")</Label>
                  <Input
                    id={`label-${index}`}
                    value={metric.label}
                    onChange={(e) => handleChange(index, 'label', e.target.value)}
                    placeholder="Metric Label"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`value-${index}`}>Value (e.g., "500+")</Label>
                  <Input
                    id={`value-${index}`}
                    value={metric.value}
                    onChange={(e) => handleChange(index, 'value', e.target.value)}
                    placeholder="Metric Value"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`desc-${index}`}>Description</Label>
                <Textarea
                  id={`desc-${index}`}
                  value={metric.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  placeholder="Brief description of this metric..."
                  rows={2}
                  className="bg-white"
                />
              </div>
            </div>
          ))}

          {metrics.length === 0 && (
            <div className="text-center py-8 text-slate-500 italic">
              No metrics added yet. Click "Add Metric" to start.
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting} className="min-w-[150px] bg-indigo-900 hover:bg-indigo-800">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save All Metrics
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
