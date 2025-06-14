
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { defaultHeaderData } from '@/data/defaults';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HeaderManager = () => {
  const [storedData, setStoredData] = useLocalStorage('headerData', defaultHeaderData);
  const [formData, setFormData] = useState(storedData);
  const { toast } = useToast();

  useEffect(() => {
    setFormData(storedData);
  }, [storedData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNavItemChange = (itemIndex: number, field: string, value: string) => {
    const newNavItems = [...formData.navigationItems];
    const navItem = { ...newNavItems[itemIndex], [field]: value };
    newNavItems[itemIndex] = navItem as any; // Quick fix for TS issue with dropdown
    setFormData(prev => ({ ...prev, navigationItems: newNavItems }));
  };
  
  const handleDropdownItemChange = (itemIndex: number, subItemIndex: number, field: string, value: string) => {
    const newNavItems = [...formData.navigationItems];
    const newDropdown = [...(newNavItems[itemIndex].dropdown || [])];
    newDropdown[subItemIndex] = { ...newDropdown[subItemIndex], [field]: value };
    (newNavItems[itemIndex] as any).dropdown = newDropdown;
    setFormData(prev => ({ ...prev, navigationItems: newNavItems }));
  }

  const handleSaveChanges = () => {
    setStoredData(formData);
    toast({
      title: "Success!",
      description: "Header has been updated.",
    });
  };
  
  const handleReset = () => {
    setStoredData(defaultHeaderData);
    setFormData(defaultHeaderData);
     toast({
      title: "Reset!",
      description: "Header has been reset to default values.",
      variant: "destructive",
    });
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
       <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Manage Header</h2>
        <div>
            <Button onClick={handleReset} variant="outline" className="mr-2" type="button">Reset to Default</Button>
            <Button onClick={handleSaveChanges} type="button">Save Changes</Button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="logoText">Logo Text</Label>
              <Input id="logoText" name="logoText" value={formData.logoText} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="logoSubtext">Logo Subtext</Label>
              <Input id="logoSubtext" name="logoSubtext" value={formData.logoSubtext} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="ctaButtonText">CTA Button Text</Label>
              <Input id="ctaButtonText" name="ctaButtonText" value={formData.ctaButtonText} onChange={handleChange} />
            </div>
        </div>
        
        <h3 className="text-xl font-bold pt-4 border-t">Navigation Items</h3>
        <Accordion type="multiple" className="w-full">
            {formData.navigationItems.map((item, itemIndex) => (
                <AccordionItem value={`item-${itemIndex}`} key={item.name + itemIndex}>
                    <AccordionTrigger>{item.name || "New Item"}</AccordionTrigger>
                    <AccordionContent className="space-y-4 p-4 bg-gray-50 rounded-md">
                        <Input value={item.name} onChange={(e) => handleNavItemChange(itemIndex, 'name', e.target.value)} placeholder="Item Name" />
                        <Input name="url" value={item.url || ''} onChange={(e) => handleNavItemChange(itemIndex, 'url', e.target.value)} placeholder="URL" />

                        {item.dropdown && (
                            <div className="pl-4 border-l-2 space-y-2">
                                <h4 className="font-semibold mt-2">Dropdown Items</h4>
                                {item.dropdown.map((subItem, subItemIndex) => (
                                    <div key={subItem.name + subItemIndex} className="flex gap-2 items-center">
                                        <Input value={subItem.name} onChange={(e) => handleDropdownItemChange(itemIndex, subItemIndex, 'name', e.target.value)} placeholder="Sub-item Name" />
                                        <Input value={subItem.url} onChange={(e) => handleDropdownItemChange(itemIndex, subItemIndex, 'url', e.target.value)} placeholder="URL" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HeaderManager;
