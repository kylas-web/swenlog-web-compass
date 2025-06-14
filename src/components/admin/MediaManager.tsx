import React, { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Edit, Trash } from 'lucide-react';
import { defaultMediaData } from '@/data/defaults';

type MediaItem = {
  id: string;
  name: string;
  url: string;
  alt: string;
};

const MediaManager = () => {
  const [mediaItems, setMediaItems] = useLocalStorage<MediaItem[]>('mediaData', defaultMediaData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<MediaItem | null>(null);
  const [formData, setFormData] = useState({ name: '', url: '', alt: '' });
  const { toast } = useToast();

  const openDialog = (item: MediaItem | null = null) => {
    setCurrentItem(item);
    setFormData(item ? { name: item.name, url: item.url, alt: item.alt } : { name: '', url: '', alt: '' });
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setCurrentItem(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentItem) {
      setMediaItems(mediaItems.map(item => item.id === currentItem.id ? { ...item, ...formData } : item));
      toast({ title: "Success!", description: "Media item updated." });
    } else {
      setMediaItems([...mediaItems, { id: crypto.randomUUID(), ...formData }]);
      toast({ title: "Success!", description: "New media item added." });
    }
    closeDialog();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
        setMediaItems(mediaItems.filter(item => item.id !== id));
        toast({ title: "Deleted!", description: "Media item has been removed.", variant: 'destructive' });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Media Library</h2>
        <Button onClick={() => openDialog()}>
          <Plus className="mr-2 h-4 w-4" /> Add New Media
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Preview</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="text-right w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mediaItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={item.url} alt={item.alt} className="h-16 w-16 object-cover rounded-md bg-gray-100" />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline max-w-xs truncate block">{item.url}</a>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => openDialog(item)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentItem ? 'Edit Media Item' : 'Add New Media Item'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="url">Image URL</Label>
              <Input id="url" name="url" type="url" value={formData.url} onChange={handleChange} required />
            </div>
             <div>
              <Label htmlFor="alt">Alt Text</Label>
              <Input id="alt" name="alt" value={formData.alt} onChange={handleChange} required />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeDialog}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MediaManager;
