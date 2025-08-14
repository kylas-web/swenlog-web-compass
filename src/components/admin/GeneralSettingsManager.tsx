import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { 
  Mail, Database, Zap, Globe, Webhook, Settings, Shield, 
  Truck, MessageSquare, Phone, CreditCard, Upload 
} from 'lucide-react';

interface GeneralSettings {
  // Site Settings
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  timezone: string;
  
  // SMTP Settings
  smtpEnabled: boolean;
  smtpHost: string;
  smtpPort: string;
  smtpUsername: string;
  smtpPassword: string;
  smtpSecure: boolean;
  
  // API Settings
  apiKey: string;
  apiSecret: string;
  rateLimitEnabled: boolean;
  rateLimitPerMinute: string;
  
  // Integration Settings
  zapierWebhook: string;
  iftttKey: string;
  pabblyWebhook: string;
  makeWebhook: string;
  
  // Webhook Settings
  webhookUrl: string;
  webhookSecret: string;
  webhookEvents: string[];
  
  // CRM Integrations
  salesforceEnabled: boolean;
  salesforceApiKey: string;
  hubspotEnabled: boolean;
  hubspotApiKey: string;
  
  // Logistics Services
  fedexEnabled: boolean;
  fedexApiKey: string;
  upsEnabled: boolean;
  upsApiKey: string;
  dhlEnabled: boolean;
  dhlApiKey: string;
  
  // Communication
  twilioEnabled: boolean;
  twilioSid: string;
  twilioToken: string;
  slackWebhook: string;
  
  // Payment Gateways
  stripeEnabled: boolean;
  stripePublishableKey: string;
  stripeSecretKey: string;
  paypalEnabled: boolean;
  paypalClientId: string;
}

const defaultSettings: GeneralSettings = {
  siteName: 'SWENLOG',
  siteDescription: 'Global Logistics Solutions',
  siteUrl: 'https://swenlog.com',
  timezone: 'UTC',
  
  smtpEnabled: false,
  smtpHost: '',
  smtpPort: '587',
  smtpUsername: '',
  smtpPassword: '',
  smtpSecure: true,
  
  apiKey: '',
  apiSecret: '',
  rateLimitEnabled: true,
  rateLimitPerMinute: '100',
  
  zapierWebhook: '',
  iftttKey: '',
  pabblyWebhook: '',
  makeWebhook: '',
  
  webhookUrl: '',
  webhookSecret: '',
  webhookEvents: [],
  
  salesforceEnabled: false,
  salesforceApiKey: '',
  hubspotEnabled: false,
  hubspotApiKey: '',
  
  fedexEnabled: false,
  fedexApiKey: '',
  upsEnabled: false,
  upsApiKey: '',
  dhlEnabled: false,
  dhlApiKey: '',
  
  twilioEnabled: false,
  twilioSid: '',
  twilioToken: '',
  slackWebhook: '',
  
  stripeEnabled: false,
  stripePublishableKey: '',
  stripeSecretKey: '',
  paypalEnabled: false,
  paypalClientId: '',
};

const GeneralSettingsManager = () => {
  const [settings, setSettings] = useLocalStorage('generalSettings', defaultSettings);
  const [formData, setFormData] = useState<GeneralSettings>(settings);
  const { toast } = useToast();

  const handleInputChange = (field: keyof GeneralSettings, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setSettings(formData);
    toast({
      title: "Settings Saved",
      description: "Your general settings have been updated successfully.",
    });
  };

  const handleTestConnection = (service: string) => {
    toast({
      title: `Testing ${service}`,
      description: "Connection test initiated. Check the logs for results.",
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">General Settings</h2>
          <p className="text-gray-600">Configure your site settings and external integrations</p>
        </div>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Save Settings
        </Button>
      </div>

      <Tabs defaultValue="site" className="space-y-6">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="site">Site</TabsTrigger>
          <TabsTrigger value="smtp">SMTP</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="crm">CRM</TabsTrigger>
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>

        <TabsContent value="site">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Site Configuration
              </CardTitle>
              <CardDescription>
                Basic site settings and configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={formData.siteName}
                    onChange={(e) => handleInputChange('siteName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="siteUrl">Site URL</Label>
                  <Input
                    id="siteUrl"
                    value={formData.siteUrl}
                    onChange={(e) => handleInputChange('siteUrl', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={formData.siteDescription}
                  onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Input
                  id="timezone"
                  value={formData.timezone}
                  onChange={(e) => handleInputChange('timezone', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="smtp">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                SMTP Email Configuration
              </CardTitle>
              <CardDescription>
                Configure SMTP settings for sending emails
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="smtpEnabled"
                  checked={formData.smtpEnabled}
                  onCheckedChange={(checked) => handleInputChange('smtpEnabled', checked)}
                />
                <Label htmlFor="smtpEnabled">Enable SMTP</Label>
              </div>
              
              {formData.smtpEnabled && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="smtpHost">SMTP Host</Label>
                      <Input
                        id="smtpHost"
                        value={formData.smtpHost}
                        onChange={(e) => handleInputChange('smtpHost', e.target.value)}
                        placeholder="smtp.gmail.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="smtpPort">SMTP Port</Label>
                      <Input
                        id="smtpPort"
                        value={formData.smtpPort}
                        onChange={(e) => handleInputChange('smtpPort', e.target.value)}
                        placeholder="587"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="smtpUsername">Username</Label>
                      <Input
                        id="smtpUsername"
                        value={formData.smtpUsername}
                        onChange={(e) => handleInputChange('smtpUsername', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="smtpPassword">Password</Label>
                      <Input
                        id="smtpPassword"
                        type="password"
                        value={formData.smtpPassword}
                        onChange={(e) => handleInputChange('smtpPassword', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="smtpSecure"
                      checked={formData.smtpSecure}
                      onCheckedChange={(checked) => handleInputChange('smtpSecure', checked)}
                    />
                    <Label htmlFor="smtpSecure">Use TLS/SSL</Label>
                  </div>
                  <Button onClick={() => handleTestConnection('SMTP')}>
                    Test SMTP Connection
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                API Configuration
              </CardTitle>
              <CardDescription>
                Configure API keys and rate limiting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <Input
                    id="apiKey"
                    value={formData.apiKey}
                    onChange={(e) => handleInputChange('apiKey', e.target.value)}
                    placeholder="Your API key"
                  />
                </div>
                <div>
                  <Label htmlFor="apiSecret">API Secret</Label>
                  <Input
                    id="apiSecret"
                    type="password"
                    value={formData.apiSecret}
                    onChange={(e) => handleInputChange('apiSecret', e.target.value)}
                    placeholder="Your API secret"
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="rateLimitEnabled"
                  checked={formData.rateLimitEnabled}
                  onCheckedChange={(checked) => handleInputChange('rateLimitEnabled', checked)}
                />
                <Label htmlFor="rateLimitEnabled">Enable Rate Limiting</Label>
              </div>
              
              {formData.rateLimitEnabled && (
                <div>
                  <Label htmlFor="rateLimitPerMinute">Requests per minute</Label>
                  <Input
                    id="rateLimitPerMinute"
                    value={formData.rateLimitPerMinute}
                    onChange={(e) => handleInputChange('rateLimitPerMinute', e.target.value)}
                    placeholder="100"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Integration Platforms
              </CardTitle>
              <CardDescription>
                Connect with automation and integration platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Zapier Integration</h4>
                <div>
                  <Label htmlFor="zapierWebhook">Zapier Webhook URL</Label>
                  <Input
                    id="zapierWebhook"
                    value={formData.zapierWebhook}
                    onChange={(e) => handleInputChange('zapierWebhook', e.target.value)}
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                  />
                </div>
                <Button onClick={() => handleTestConnection('Zapier')}>Test Zapier</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">IFTTT Integration</h4>
                <div>
                  <Label htmlFor="iftttKey">IFTTT Maker Key</Label>
                  <Input
                    id="iftttKey"
                    value={formData.iftttKey}
                    onChange={(e) => handleInputChange('iftttKey', e.target.value)}
                    placeholder="Your IFTTT Maker key"
                  />
                </div>
                <Button onClick={() => handleTestConnection('IFTTT')}>Test IFTTT</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Pabbly Connect</h4>
                <div>
                  <Label htmlFor="pabblyWebhook">Pabbly Webhook URL</Label>
                  <Input
                    id="pabblyWebhook"
                    value={formData.pabblyWebhook}
                    onChange={(e) => handleInputChange('pabblyWebhook', e.target.value)}
                    placeholder="https://connect.pabbly.com/workflow/sendwebhookdata/..."
                  />
                </div>
                <Button onClick={() => handleTestConnection('Pabbly')}>Test Pabbly</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Make (formerly Integromat)</h4>
                <div>
                  <Label htmlFor="makeWebhook">Make Webhook URL</Label>
                  <Input
                    id="makeWebhook"
                    value={formData.makeWebhook}
                    onChange={(e) => handleInputChange('makeWebhook', e.target.value)}
                    placeholder="https://hook.eu1.make.com/..."
                  />
                </div>
                <Button onClick={() => handleTestConnection('Make')}>Test Make</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5" />
                Webhook Configuration
              </CardTitle>
              <CardDescription>
                Configure custom webhooks for real-time notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="webhookUrl">Webhook URL</Label>
                <Input
                  id="webhookUrl"
                  value={formData.webhookUrl}
                  onChange={(e) => handleInputChange('webhookUrl', e.target.value)}
                  placeholder="https://your-endpoint.com/webhook"
                />
              </div>
              <div>
                <Label htmlFor="webhookSecret">Webhook Secret</Label>
                <Input
                  id="webhookSecret"
                  type="password"
                  value={formData.webhookSecret}
                  onChange={(e) => handleInputChange('webhookSecret', e.target.value)}
                  placeholder="Your webhook secret"
                />
              </div>
              <Button onClick={() => handleTestConnection('Webhook')}>Test Webhook</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                CRM Integrations
              </CardTitle>
              <CardDescription>
                Connect with popular CRM platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="salesforceEnabled"
                    checked={formData.salesforceEnabled}
                    onCheckedChange={(checked) => handleInputChange('salesforceEnabled', checked)}
                  />
                  <Label htmlFor="salesforceEnabled">Enable Salesforce</Label>
                </div>
                {formData.salesforceEnabled && (
                  <div>
                    <Label htmlFor="salesforceApiKey">Salesforce API Key</Label>
                    <Input
                      id="salesforceApiKey"
                      value={formData.salesforceApiKey}
                      onChange={(e) => handleInputChange('salesforceApiKey', e.target.value)}
                    />
                  </div>
                )}
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="hubspotEnabled"
                    checked={formData.hubspotEnabled}
                    onCheckedChange={(checked) => handleInputChange('hubspotEnabled', checked)}
                  />
                  <Label htmlFor="hubspotEnabled">Enable HubSpot</Label>
                </div>
                {formData.hubspotEnabled && (
                  <div>
                    <Label htmlFor="hubspotApiKey">HubSpot API Key</Label>
                    <Input
                      id="hubspotApiKey"
                      value={formData.hubspotApiKey}
                      onChange={(e) => handleInputChange('hubspotApiKey', e.target.value)}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logistics">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Logistics Services
              </CardTitle>
              <CardDescription>
                Configure shipping carrier integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="fedexEnabled"
                      checked={formData.fedexEnabled}
                      onCheckedChange={(checked) => handleInputChange('fedexEnabled', checked)}
                    />
                    <Label htmlFor="fedexEnabled">FedEx</Label>
                  </div>
                  {formData.fedexEnabled && (
                    <Input
                      placeholder="FedEx API Key"
                      value={formData.fedexApiKey}
                      onChange={(e) => handleInputChange('fedexApiKey', e.target.value)}
                    />
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="upsEnabled"
                      checked={formData.upsEnabled}
                      onCheckedChange={(checked) => handleInputChange('upsEnabled', checked)}
                    />
                    <Label htmlFor="upsEnabled">UPS</Label>
                  </div>
                  {formData.upsEnabled && (
                    <Input
                      placeholder="UPS API Key"
                      value={formData.upsApiKey}
                      onChange={(e) => handleInputChange('upsApiKey', e.target.value)}
                    />
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="dhlEnabled"
                      checked={formData.dhlEnabled}
                      onCheckedChange={(checked) => handleInputChange('dhlEnabled', checked)}
                    />
                    <Label htmlFor="dhlEnabled">DHL</Label>
                  </div>
                  {formData.dhlEnabled && (
                    <Input
                      placeholder="DHL API Key"
                      value={formData.dhlApiKey}
                      onChange={(e) => handleInputChange('dhlApiKey', e.target.value)}
                    />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Communication Services
              </CardTitle>
              <CardDescription>
                Configure SMS, messaging, and notification services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="twilioEnabled"
                    checked={formData.twilioEnabled}
                    onCheckedChange={(checked) => handleInputChange('twilioEnabled', checked)}
                  />
                  <Label htmlFor="twilioEnabled">Enable Twilio SMS</Label>
                </div>
                {formData.twilioEnabled && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="twilioSid">Twilio Account SID</Label>
                      <Input
                        id="twilioSid"
                        value={formData.twilioSid}
                        onChange={(e) => handleInputChange('twilioSid', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="twilioToken">Twilio Auth Token</Label>
                      <Input
                        id="twilioToken"
                        type="password"
                        value={formData.twilioToken}
                        onChange={(e) => handleInputChange('twilioToken', e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Slack Notifications</h4>
                <div>
                  <Label htmlFor="slackWebhook">Slack Webhook URL</Label>
                  <Input
                    id="slackWebhook"
                    value={formData.slackWebhook}
                    onChange={(e) => handleInputChange('slackWebhook', e.target.value)}
                    placeholder="https://hooks.slack.com/services/..."
                  />
                </div>
                <Button onClick={() => handleTestConnection('Slack')}>Test Slack</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Payment Gateways</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="stripeEnabled"
                        checked={formData.stripeEnabled}
                        onCheckedChange={(checked) => handleInputChange('stripeEnabled', checked)}
                      />
                      <Label htmlFor="stripeEnabled">Stripe</Label>
                    </div>
                    {formData.stripeEnabled && (
                      <>
                        <Input
                          placeholder="Stripe Publishable Key"
                          value={formData.stripePublishableKey}
                          onChange={(e) => handleInputChange('stripePublishableKey', e.target.value)}
                        />
                        <Input
                          placeholder="Stripe Secret Key"
                          type="password"
                          value={formData.stripeSecretKey}
                          onChange={(e) => handleInputChange('stripeSecretKey', e.target.value)}
                        />
                      </>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="paypalEnabled"
                        checked={formData.paypalEnabled}
                        onCheckedChange={(checked) => handleInputChange('paypalEnabled', checked)}
                      />
                      <Label htmlFor="paypalEnabled">PayPal</Label>
                    </div>
                    {formData.paypalEnabled && (
                      <Input
                        placeholder="PayPal Client ID"
                        value={formData.paypalClientId}
                        onChange={(e) => handleInputChange('paypalClientId', e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GeneralSettingsManager;