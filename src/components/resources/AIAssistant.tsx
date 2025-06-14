
import { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

// Declare puter as global to avoid TypeScript errors
declare global {
  interface Window {
    puter: {
      ai: {
        chat: (message: string, options?: { model?: string; stream?: boolean }) => Promise<string>;
      };
    };
  }
}

const AIAssistant = () => {
  const [aiResponse, setAiResponse] = useState<string>('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [puterLoaded, setPuterLoaded] = useState(false);

  useEffect(() => {
    // Check if Puter.js is loaded
    const checkPuter = () => {
      if (window.puter && window.puter.ai) {
        setPuterLoaded(true);
        console.log('Puter.js AI service loaded successfully');
      } else {
        setTimeout(checkPuter, 100);
      }
    };
    checkPuter();
  }, []);

  const handleAiQuery = async () => {
    if (!aiQuestion.trim()) return;
    
    setAiLoading(true);
    setAiResponse('');
    
    try {
      if (window.puter && window.puter.ai) {
        // Use real Puter.js AI chat endpoint
        const response = await window.puter.ai.chat(
          `You are a logistics and supply chain expert. Please provide helpful advice about: ${aiQuestion}`,
          {
            model: 'gpt-4o-mini', // Using GPT-4o mini as specified in the example
            stream: false
          }
        );
        setAiResponse(response);
      } else {
        setAiResponse('AI service is still loading. Please wait a moment and try again.');
      }
    } catch (error) {
      console.error('Puter AI Error:', error);
      setAiResponse('Sorry, there was an error connecting to the AI service. Please try again later.');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-2xl">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center mb-4">
          <Bot className="h-8 w-8 mr-3" />
          <h3 className="text-2xl font-bold">AI Logistics Assistant</h3>
          {puterLoaded && (
            <span className="ml-3 px-2 py-1 bg-green-500 text-xs rounded-full">Online</span>
          )}
        </div>
        <p className="mb-4 text-purple-100">
          Ask our AI assistant any logistics-related question and get instant expert advice powered by advanced AI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={aiQuestion}
            onChange={(e) => setAiQuestion(e.target.value)}
            placeholder="Ask about shipping rates, customs procedures, route optimization..."
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
            onKeyPress={(e) => e.key === 'Enter' && !aiLoading && handleAiQuery()}
            disabled={aiLoading || !puterLoaded}
          />
          <button
            onClick={handleAiQuery}
            disabled={aiLoading || !puterLoaded || !aiQuestion.trim()}
            className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {aiLoading ? 'Thinking...' : 'Ask AI'}
          </button>
        </div>
        
        {aiResponse && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <h4 className="font-semibold text-purple-100 mb-2">AI Response:</h4>
            <p className="text-sm text-purple-100 whitespace-pre-wrap">{aiResponse}</p>
          </div>
        )}
        
        {!puterLoaded && (
          <div className="mt-4 p-3 bg-yellow-500/20 rounded-lg">
            <p className="text-sm text-yellow-100">🔄 Loading AI service...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;
