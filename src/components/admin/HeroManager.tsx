import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { defaultHeroData } from '@/data/defaults';

const HeroManager = () => {
  const [storedHeroData, setStoredHeroData] = useLocalStorage('heroData', defaultHeroData);
  const [formData, setFormData] = useState(storedHeroData);
  const { toast } = useToast();

  useEffect(() => {
    setFormData(storedHeroData);
  }, [storedHeroData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredHeroData(formData);
    toast({
      title: "Success!",
      description: "Hero section has been updated.",
    });
  };
  
  const handleReset = () => {
    setStoredHeroData(defaultHeroData);
    setFormData(defaultHeroData);
     toast({
      title: "Reset!",
      description: "Hero section has been reset to default values.",
      variant: "destructive",
    });
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Hero Section</h2>
        <Button onClick={handleReset} variant="outline">Reset to Default</Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="mainHeading">Main Heading</Label>
          <Input id="mainHeading" name="mainHeading" value={formData.mainHeading} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="subHeading">Sub Heading</Label>
          <Input id="subHeading" name="subHeading" value={formData.subHeading} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
        </div>
        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
};

export default HeroManager;
