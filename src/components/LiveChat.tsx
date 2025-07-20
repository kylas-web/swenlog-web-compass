
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

// Declare puter as global to avoid TypeScript errors
declare global {
  interface Window {
    puter: {
      ai: {
        chat: (prompt: string, testMode?: boolean, options?: any) => Promise<any>;
      };
    };
  }
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Swen, your logistics assistant. How can I help you today?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [puterLoaded, setPuterLoaded] = useState(false);

  useEffect(() => {
    // Load Puter.js script
    const script = document.createElement('script');
    script.src = 'https://js.puter.com/v2/';
    script.async = true;
    script.onload = () => {
      setPuterLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.head.querySelector('script[src="https://js.puter.com/v2/"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const extractTextFromResponse = (response: any): string => {
    console.log('Raw AI Response:', response);
    
    // Handle different response formats
    if (typeof response === 'string') {
      return response;
    }
    
    if (response && typeof response === 'object') {
      // Handle the specific Puter.js format with message.content array
      if (response.message?.content && Array.isArray(response.message.content)) {
        const textContent = response.message.content
          .filter((item: any) => item.type === 'text')
          .map((item: any) => item.text)
          .join(' ');
        if (textContent) return textContent;
      }
      
      // Try other possible text properties
      if (response.message?.content && typeof response.message.content === 'string') {
        return String(response.message.content);
      }
      if (response.content) {
        return String(response.content);
      }
      if (response.text) {
        return String(response.text);
      }
      if (response.response) {
        return String(response.response);
      }
      
      // If it's an array, try to get the first item
      if (Array.isArray(response) && response.length > 0) {
        return extractTextFromResponse(response[0]);
      }
      
      // Use the toString method if available (Puter.js provides this)
      if (response.toString && typeof response.toString === 'function') {
        const toStringResult = response.toString();
        if (toStringResult && toStringResult !== '[object Object]') {
          return toStringResult;
        }
      }
    }
    
    // Fallback
    return 'I apologize, but I encountered an issue processing the response. Please try again.';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Wait for Puter.js to be available
      let attempts = 0;
      const maxAttempts = 50;
      
      while ((!window.puter || !window.puter.ai) && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }

      if (window.puter && window.puter.ai) {
        const logisticsContext = `You are Swen, a friendly and knowledgeable logistics assistant for SWENLOG Supply Chain Solutions. 
        You help customers with shipping, logistics, supply chain questions, and general inquiries about our services. 
        Always be helpful, professional, and focused on logistics solutions. 
        
        User question: ${inputMessage}`;

        const response = await window.puter.ai.chat(logisticsContext, true); // testMode = true
        
        const responseText = extractTextFromResponse(response);
        
        const agentMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: responseText,
          sender: 'agent',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, agentMessage]);
      } else {
        throw new Error('Puter.js not available');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, but I encountered a technical issue. Please try again later or contact our support team.',
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center">
            <Bot className="h-5 w-5 mr-2" />
            <div>
              <h3 className="font-semibold">Swen - Logistics Assistant</h3>
              <p className="text-xs text-blue-100">Online • Ready to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'agent' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 max-w-xs px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-300">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !inputMessage.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
