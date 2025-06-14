import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { defaultWhatsappData, defaultCrmContacts } from '@/data/defaults';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QrCode, Send, Bot, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const WhatsappManager = () => {
  const [whatsappData, setWhatsappData] = useLocalStorage('whatsappData', defaultWhatsappData);
  const [contacts] = useLocalStorage('crmContacts', defaultCrmContacts);
  const [showQr, setShowQr] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleConnect = () => {
    setShowQr(true);
    toast({ title: "Simulating Connection...", description: "Please wait while we connect to WhatsApp." });
    setTimeout(() => {
      setWhatsappData(prev => ({ ...prev, isConnected: true }));
      setShowQr(false);
      toast({ title: "Success!", description: "Connected to WhatsApp Business API.", variant: "default" });
    }, 3000);
  };

  const handleDisconnect = () => {
    setWhatsappData(prev => ({ ...prev, isConnected: false }));
    toast({ title: "Disconnected", description: "You have been disconnected from WhatsApp.", variant: "destructive" });
  };
  
  const handleSendMessage = () => {
    if (!selectedContact || !message) {
      toast({ title: "Error", description: "Please select a contact and enter a message.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent (Simulated)", description: `Message to ${contacts.find(c => c.id === selectedContact)?.name} sent.` });
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>WhatsApp Connection</CardTitle>
          <CardDescription>Connect your WhatsApp Business Account to start.</CardDescription>
        </CardHeader>
        <CardContent>
          {whatsappData.isConnected ? (
            <div className="flex items-center gap-4">
              <p className="flex items-center text-green-600 font-semibold"><CheckCircle className="mr-2 h-5 w-5" />Connected</p>
              <Button variant="destructive" onClick={handleDisconnect}><XCircle className="mr-2 h-4 w-4" /> Disconnect</Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
               <Button onClick={handleConnect} disabled={showQr}>
                <QrCode className="mr-2 h-4 w-4" /> {showQr ? 'Scanning...' : 'Connect with QR Code'}
              </Button>
              {showQr && <p className="text-sm text-gray-500">Please scan the QR code in your WhatsApp app. Simulating...</p>}
            </div>
          )}
        </CardContent>
      </Card>
      
      {whatsappData.isConnected && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Send a direct message to a contact from your CRM.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Contact</label>
                <Select onValueChange={setSelectedContact} value={selectedContact}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a contact..." />
                  </SelectTrigger>
                  <SelectContent>
                    {contacts.map(contact => (
                      <SelectItem key={contact.id} value={contact.id}>{contact.name} ({contact.phone})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <Button onClick={handleSendMessage}>
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Message Templates</CardTitle>
              <CardDescription>Manage your pre-approved WhatsApp message templates.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {whatsappData.templates.map(template => (
                  <div key={template.id} className="p-4 border rounded-lg bg-gray-50">
                    <p className="font-semibold">{template.name}</p>
                    <p className="text-sm text-gray-600 font-mono mt-2 bg-gray-200 p-2 rounded">{template.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visual Flow Editor</CardTitle>
              <CardDescription>Create automated message sequences. (Simplified View)</CardDescription>
            </CardHeader>
            <CardContent>
              {whatsappData.flows.map(flow => (
                <div key={flow.id} className="p-4 border rounded-lg">
                  <p className="font-semibold text-lg flex items-center"><Bot className="mr-2 h-5 w-5"/>{flow.name}</p>
                  <p className="text-sm text-gray-500 mb-4">Trigger: <span className="font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{flow.trigger}</span></p>
                  <div className="space-y-2">
                    {flow.steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-300 text-xs font-bold text-gray-700">{index + 1}</span>
                        {step.type === 'send_message' ? (
                          <p>
                            Send message: <span className="font-semibold">{whatsappData.templates.find(t => t.id === step.templateId)?.name}</span>
                            <span className="text-sm text-gray-500 ml-2">(Delay: {step.delay})</span>
                          </p>
                        ) : (
                          <p>Wait for <span className="font-semibold">{step.duration}</span></p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default WhatsappManager;
