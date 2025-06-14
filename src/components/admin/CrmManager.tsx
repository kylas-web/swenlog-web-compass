
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { defaultCrmContacts } from '@/data/defaults';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

type Contact = {
  id: string;
  name: string;
  phone: string;
  status: string;
  tags: string[];
  lastContacted: string;
};

const CrmManager = () => {
  const [contacts, setContacts] = useLocalStorage('crmContacts', defaultCrmContacts);
  const [isEditing, setIsEditing] = useState<Contact | null>(null);
  const [contactForm, setContactForm] = useState<Omit<Contact, 'id' | 'lastContacted'>>({ name: '', phone: '', status: 'New', tags: [] });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: name === 'tags' ? value.split(',').map(t => t.trim()) : value }));
  };

  const handleSubmit = () => {
    if (isEditing) {
      setContacts(contacts.map(c => c.id === isEditing.id ? { ...isEditing, ...contactForm, lastContacted: new Date().toISOString() } : c));
    } else {
      const newContact: Contact = {
        id: `c${Date.now()}`,
        ...contactForm,
        lastContacted: new Date().toISOString()
      };
      setContacts([newContact, ...contacts]);
    }
    closeDialog();
  };
  
  const openDialog = (contact: Contact | null = null) => {
    if (contact) {
      setIsEditing(contact);
      setContactForm({ name: contact.name, phone: contact.phone, status: contact.status, tags: contact.tags });
    } else {
      setIsEditing(null);
      setContactForm({ name: '', phone: '', status: 'New', tags: [] });
    }
    setIsDialogOpen(true);
  };
  
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  };
  
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>CRM - Contacts</CardTitle>
          <Button onClick={() => openDialog()}><PlusCircle className="mr-2 h-4 w-4" /> Add Contact</Button>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg">
            <div className="hidden md:grid md:grid-cols-6 p-4 font-bold border-b bg-gray-50">
              <div className="col-span-2">Name</div>
              <div>Phone</div>
              <div>Status</div>
              <div>Last Contacted</div>
              <div className="text-right">Actions</div>
            </div>
            {contacts.map(contact => (
              <div key={contact.id} className="grid grid-cols-1 md:grid-cols-6 p-4 border-b items-start md:items-center">
                <div className="col-span-2 mb-2 md:mb-0">
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-sm text-gray-500">{contact.tags.join(', ')}</div>
                </div>
                <div className="mb-2 md:mb-0">{contact.phone}</div>
                <div className="mb-2 md:mb-0">{contact.status}</div>
                <div className="mb-2 md:mb-0">{new Date(contact.lastContacted).toLocaleDateString()}</div>
                <div className="flex justify-start md:justify-end space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => openDialog(contact)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(contact.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Contact' : 'Add New Contact'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" name="name" value={contactForm.name} onChange={handleInputChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">Phone</Label>
            <Input id="phone" name="phone" value={contactForm.phone} onChange={handleInputChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">Status</Label>
            <Input id="status" name="status" value={contactForm.status} onChange={handleInputChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tags" className="text-right">Tags</Label>
            <Input id="tags" name="tags" value={contactForm.tags.join(', ')} onChange={handleInputChange} className="col-span-3" placeholder="tag1, tag2" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleSubmit}>Save Contact</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CrmManager;
