import React, { useState } from 'react';
import { Puck, Config, Data } from '@measured/puck';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Save, Eye, Undo, Redo } from 'lucide-react';
import { puckConfig } from './puck/puckConfig';
import { useGlobalData } from '@/contexts/GlobalDataProvider';

const VisualEditor = () => {
  const { toast } = useToast();
  const { data: globalData, updateData } = useGlobalData();
  const [puckData, setPuckData] = useState<Data>({
    content: [],
    root: { props: { title: 'Homepage' } }
  });
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleSave = () => {
    try {
      // Convert Puck data to GlobalData format
      const convertedData = convertPuckToGlobalData(puckData);
      
      // Update global data with converted values
      Object.keys(convertedData).forEach((section) => {
        updateData(section as keyof typeof globalData, convertedData[section]);
      });

      toast({
        title: "Success",
        description: "Page saved successfully!"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save page. Please try again.",
        variant: "destructive"
      });
    }
  };

  const convertPuckToGlobalData = (data: Data) => {
    const converted: any = {};
    
    data.content.forEach((item) => {
      switch (item.type) {
        case 'HeroSection':
          converted.hero = {
            title: item.props.title,
            subtitle: item.props.subtitle,
            description: item.props.description,
            backgroundImage: item.props.backgroundImage,
            ctaText: item.props.ctaText,
            ctaLink: item.props.ctaLink,
          };
          break;
        case 'AboutSection':
          converted.about = {
            title: item.props.title,
            description: item.props.description,
            image: item.props.image,
            stats: item.props.stats || [],
          };
          break;
        case 'ServicesSection':
          converted.services = {
            title: item.props.title,
            description: item.props.description,
            services: item.props.services || [],
          };
          break;
      }
    });

    return converted;
  };

  const convertGlobalDataToPuck = () => {
    const content = [];
    
    // Convert hero data
    if (globalData.hero) {
      content.push({
        type: 'HeroSection',
        props: globalData.hero
      });
    }

    // Convert about data
    if (globalData.about) {
      content.push({
        type: 'AboutSection',
        props: globalData.about
      });
    }

    // Convert services data
    if (globalData.services) {
      content.push({
        type: 'ServicesSection',
        props: globalData.services
      });
    }

    return {
      content,
      root: { props: { title: 'Homepage' } }
    };
  };

  React.useEffect(() => {
    // Initialize Puck data from global data
    const initialData = convertGlobalDataToPuck();
    setPuckData(initialData);
  }, [globalData]);

  if (isPreviewMode) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Preview Mode</h1>
            <Button
              onClick={() => setIsPreviewMode(false)}
              variant="outline"
              size="sm"
            >
              <Eye className="h-4 w-4 mr-2" />
              Exit Preview
            </Button>
          </div>
        </div>
        <div className="p-8">
          <div className="text-center text-gray-500">
            Preview functionality will render the page components here
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="border-b border-border bg-background/80 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Visual Page Editor</h1>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsPreviewMode(true)}
              variant="outline"
              size="sm"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button
              onClick={handleSave}
              size="sm"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Page
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="h-full">
          <Puck
            config={puckConfig}
            data={puckData}
            onPublish={handleSave}
            onChange={setPuckData}
          />
        </div>
      </div>
    </div>
  );
};

export default VisualEditor;