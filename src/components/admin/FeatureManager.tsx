import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FeatureToggle {
  id: string;
  feature_key: string;
  is_enabled: boolean;
  description: string;
  created_at: string;
  updated_at: string;
}

const FeatureManager = () => {
  const [features, setFeatures] = useState<FeatureToggle[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFeature, setEditingFeature] = useState<FeatureToggle | null>(null);
  const [formData, setFormData] = useState({
    feature_key: '',
    description: '',
    is_enabled: true
  });

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const { data, error } = await supabase
        .from('feature_toggles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFeatures(data || []);
    } catch (error) {
      console.error('Error fetching features:', error);
      toast.error('Failed to fetch features');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFeature = async (id: string, currentValue: boolean) => {
    try {
      const { error } = await supabase
        .from('feature_toggles')
        .update({ is_enabled: !currentValue })
        .eq('id', id);

      if (error) throw error;

      setFeatures(features.map(feature => 
        feature.id === id ? { ...feature, is_enabled: !currentValue } : feature
      ));
      toast.success('Feature updated successfully');
    } catch (error) {
      console.error('Error updating feature:', error);
      toast.error('Failed to update feature');
    }
  };

  const handleSaveFeature = async () => {
    try {
      if (editingFeature) {
        const { error } = await supabase
          .from('feature_toggles')
          .update({
            feature_key: formData.feature_key,
            description: formData.description,
            is_enabled: formData.is_enabled
          })
          .eq('id', editingFeature.id);

        if (error) throw error;
        toast.success('Feature updated successfully');
      } else {
        const { error } = await supabase
          .from('feature_toggles')
          .insert([formData]);

        if (error) throw error;
        toast.success('Feature created successfully');
      }

      setIsDialogOpen(false);
      setEditingFeature(null);
      setFormData({ feature_key: '', description: '', is_enabled: true });
      fetchFeatures();
    } catch (error) {
      console.error('Error saving feature:', error);
      toast.error('Failed to save feature');
    }
  };

  const openEditDialog = (feature: FeatureToggle) => {
    setEditingFeature(feature);
    setFormData({
      feature_key: feature.feature_key,
      description: feature.description,
      is_enabled: feature.is_enabled
    });
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setEditingFeature(null);
    setFormData({ feature_key: '', description: '', is_enabled: true });
    setIsDialogOpen(true);
  };

  if (loading) {
    return <div className="p-6">Loading features...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Feature Management</h1>
          <p className="text-muted-foreground">Control which features are enabled across the website</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Add Feature
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingFeature ? 'Edit Feature' : 'Add New Feature'}</DialogTitle>
              <DialogDescription>
                Configure feature toggle settings
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="feature_key">Feature Key</Label>
                <Input
                  id="feature_key"
                  value={formData.feature_key}
                  onChange={(e) => setFormData({ ...formData, feature_key: e.target.value })}
                  placeholder="e.g., ai_assistant"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe what this feature does"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_enabled"
                  checked={formData.is_enabled}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_enabled: checked })}
                />
                <Label htmlFor="is_enabled">Enabled by default</Label>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSaveFeature}>
                <Save className="h-4 w-4 mr-2" />
                Save Feature
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {features.map((feature) => (
          <Card key={feature.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-base font-medium">{feature.feature_key}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openEditDialog(feature)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Switch
                  checked={feature.is_enabled}
                  onCheckedChange={() => handleToggleFeature(feature.id, feature.is_enabled)}
                />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureManager;