
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { defaultCrmContacts, defaultLeads, defaultOpportunities } from '@/data/defaults';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from 'date-fns';

type Contact = {
  id: string;
  name: string;
  phone: string;
  status: string;
  tags: string[];
  lastContacted: string;
};

type Lead = {
  id: string;
  name: string;
  source: string;
  status: string;
  assignedTo: string;
  email: string;
};

type Opportunity = {
  id: string;
  name: string;
  stage: string;
  value: number;
  closeDate: string;
  contactId: string;
};

const CrmManager = () => {
  const [contacts, setContacts] = useLocalStorage('crmContacts', defaultCrmContacts);
  const [leads, setLeads] = useLocalStorage('crmLeads', defaultLeads);
  const [opportunities, setOpportunities] = useLocalStorage('crmOpportunities', defaultOpportunities);
  
  const [activeTab, setActiveTab] = useState('contacts');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Contact | Lead | Opportunity | null>(null);

  const [formState, setFormState] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const openDialog = (item: Contact | Lead | Opportunity | null = null) => {
    setEditingItem(item);
    if (item) {
      setFormState(item);
    } else {
      // Set default form state based on active tab
      switch(activeTab) {
        case 'leads':
          setFormState({ name: '', source: '', status: 'New', assignedTo: '', email: '' });
          break;
        case 'opportunities':
          setFormState({ name: '', stage: 'Qualification', value: 0, closeDate: new Date().toISOString().split('T')[0], contactId: '' });
          break;
        default: // contacts
          setFormState({ name: '', phone: '', status: 'New', tags: [] });
      }
    }
    setIsDialogOpen(true);
  };
  
  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingItem(null);
    setFormState({});
  };

  const handleSubmit = () => {
    if (!editingItem) { // Creating new
      const newItem = { id: `${activeTab.charAt(0)}${Date.now()}`, ...formState };
      switch(activeTab) {
        case 'leads':
          setLeads([newItem, ...leads]);
          break;
        case 'opportunities':
          setOpportunities([newItem, ...opportunities]);
          break;
        default:
          setContacts([{ ...newItem, lastContacted: new Date().toISOString() }, ...contacts]);
      }
    } else { // Editing existing
       switch(activeTab) {
        case 'leads':
          setLeads(leads.map(l => l.id === editingItem.id ? { ...l, ...formState } : l));
          break;
        case 'opportunities':
          setOpportunities(opportunities.map(o => o.id === editingItem.id ? { ...o, ...formState } : o));
          break;
        default:
          setContacts(contacts.map(c => c.id === editingItem.id ? { ...c, ...formState, lastContacted: new Date().toISOString() } : c));
      }
    }
    closeDialog();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      switch(activeTab) {
        case 'leads':
          setLeads(leads.filter(l => l.id !== id));
          break;
        case 'opportunities':
          setOpportunities(opportunities.filter(o => o.id !== id));
          break;
        default:
          setContacts(contacts.filter(c => c.id !== id));
      }
    }
  };

  const renderFormFields = () => {
    switch(activeTab) {
      case 'leads':
        return (
          <>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="name" className="text-right">Name</Label><Input id="name" name="name" value={formState.name || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="email" className="text-right">Email</Label><Input id="email" name="email" value={formState.email || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="source" className="text-right">Source</Label><Input id="source" name="source" value={formState.source || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="status" className="text-right">Status</Label><Input id="status" name="status" value={formState.status || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="assignedTo" className="text-right">Assigned To</Label><Input id="assignedTo" name="assignedTo" value={formState.assignedTo || ''} onChange={handleInputChange} className="col-span-3" /></div>
          </>
        );
      case 'opportunities':
        return (
          <>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="name" className="text-right">Name</Label><Input id="name" name="name" value={formState.name || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="stage" className="text-right">Stage</Label><Input id="stage" name="stage" value={formState.stage || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="value" className="text-right">Value ($)</Label><Input id="value" name="value" type="number" value={formState.value || 0} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="closeDate" className="text-right">Close Date</Label><Input id="closeDate" name="closeDate" type="date" value={formState.closeDate ? format(new Date(formState.closeDate), 'yyyy-MM-dd') : ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="contactId" className="text-right">Contact ID</Label><Input id="contactId" name="contactId" value={formState.contactId || ''} onChange={handleInputChange} className="col-span-3" placeholder="Link to contact ID (e.g., c1)"/></div>
          </>
        );
      default: // contacts
        return (
          <>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="name" className="text-right">Name</Label><Input id="name" name="name" value={formState.name || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="phone" className="text-right">Phone</Label><Input id="phone" name="phone" value={formState.phone || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="status" className="text-right">Status</Label><Input id="status" name="status" value={formState.status || ''} onChange={handleInputChange} className="col-span-3" /></div>
            <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="tags" className="text-right">Tags</Label><Input id="tags" name="tags" value={Array.isArray(formState.tags) ? formState.tags.join(', ') : ''} onChange={(e) => setFormState(prev => ({...prev, tags: e.target.value.split(',').map(t => t.trim())}))} className="col-span-3" placeholder="tag1, tag2" /></div>
          </>
        );
    }
  };
  
  const getDialogTitle = () => {
    const action = editingItem ? 'Edit' : 'Add New';
    switch(activeTab) {
      case 'leads': return `${action} Lead`;
      case 'opportunities': return `${action} Opportunity`;
      default: return `${action} Contact`;
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>CRM</CardTitle>
          <Button onClick={() => openDialog()}><PlusCircle className="mr-2 h-4 w-4" /> Add New {activeTab.slice(0, -1)}</Button>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="leads">Leads</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            </TabsList>
            <TabsContent value="contacts">
              <div className="border rounded-lg mt-4">
                <div className="hidden md:grid md:grid-cols-6 p-4 font-bold border-b bg-gray-50">
                  <div className="col-span-2">Name</div><div>Phone</div><div>Status</div><div>Last Contacted</div><div className="text-right">Actions</div>
                </div>
                {contacts.map(contact => (
                  <div key={contact.id} className="grid grid-cols-1 md:grid-cols-6 p-4 border-b items-center">
                    <div className="col-span-2"><div className="font-medium">{contact.name}</div><div className="text-sm text-gray-500">{contact.tags.join(', ')}</div></div>
                    <div>{contact.phone}</div>
                    <div>{contact.status}</div>
                    <div>{format(new Date(contact.lastContacted), 'PP')}</div>
                    <div className="flex justify-start md:justify-end space-x-2 mt-2 md:mt-0">
                      <Button variant="ghost" size="icon" onClick={() => openDialog(contact)}><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(contact.id)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="leads">
              <div className="border rounded-lg mt-4">
                  <div className="hidden md:grid md:grid-cols-5 p-4 font-bold border-b bg-gray-50">
                    <div>Name</div><div>Email</div><div>Source</div><div>Status</div><div className="text-right">Actions</div>
                  </div>
                  {leads.map(lead => (
                    <div key={lead.id} className="grid grid-cols-1 md:grid-cols-5 p-4 border-b items-center">
                      <div className="font-medium">{lead.name}</div>
                      <div>{lead.email}</div>
                      <div>{lead.source}</div>
                      <div>{lead.status}</div>
                      <div className="flex justify-start md:justify-end space-x-2 mt-2 md:mt-0">
                        <Button variant="ghost" size="icon" onClick={() => openDialog(lead)}><Edit className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(lead.id)}><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="opportunities">
              <div className="border rounded-lg mt-4">
                  <div className="hidden md:grid md:grid-cols-5 p-4 font-bold border-b bg-gray-50">
                    <div>Name</div><div>Stage</div><div>Value</div><div>Close Date</div><div className="text-right">Actions</div>
                  </div>
                  {opportunities.map(opp => (
                    <div key={opp.id} className="grid grid-cols-1 md:grid-cols-5 p-4 border-b items-center">
                      <div className="font-medium">{opp.name}</div>
                      <div>{opp.stage}</div>
                      <div>${opp.value.toLocaleString()}</div>
                      <div>{format(new Date(opp.closeDate), 'PP')}</div>
                      <div className="flex justify-start md:justify-end space-x-2 mt-2 md:mt-0">
                        <Button variant="ghost" size="icon" onClick={() => openDialog(opp)}><Edit className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(opp.id)}><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{getDialogTitle()}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {renderFormFields()}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CrmManager;
