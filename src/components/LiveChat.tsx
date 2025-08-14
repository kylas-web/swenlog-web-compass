import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const extractTextFromResponse = (response: any): string => {
    console.log('Full AI response:', response);
    
    if (!response) {
      return 'I apologize, but I did not receive a response. Please try again.';
    }

    try {
      // Handle Puter.js response format
      if (response.message?.content) {
        if (Array.isArray(response.message.content)) {
          const textContent = response.message.content
            .filter((item: any) => item.type === 'text')
            .map((item: any) => item.text)
            .join(' ');
          return textContent || 'I apologize, but I could not process the response properly.';
        }
        return String(response.message.content);
      }

      // Fallback to string conversion
      if (typeof response === 'string') {
        return response;
      }

      return 'I apologize, but I could not process the response properly.';
    } catch (error) {
      console.error('Error extracting text from response:', error);
      return 'I apologize, but there was an error processing the response.';
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Optimized context for faster processing
      const logisticsContext = `You are SWENLOG's AI assistant. Provide helpful, concise responses about logistics services.

User question: ${inputMessage}`;

      const response = await window.puter.ai.chat(logisticsContext);
      const responseText = extractTextFromResponse(response);
      
      // Reduce timeout delay for better performance
      setTimeout(() => {
        const aiMessage: Message = {
          id: Date.now() + 1,
          text: responseText,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 300); // Reduced from default to improve performance

    } catch (error) {
      console.error('Error sending message:', error);
      setTimeout(() => {
        const errorMessage: Message = {
          id: Date.now() + 1,
          text: 'I apologize, but I encountered an error. Please try again later.',
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 300);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Open/Close Button */}
      <button
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Live Chat" : "Open Live Chat"}
      >
        {isOpen ? 'X' : '?'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-xl overflow-hidden mt-2">
          {/* Header */}
          <div className="bg-gray-100 p-4 border-b">
            <h5 className="text-lg font-semibold">Live Chat</h5>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto" ref={chatContainerRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-2 p-2 rounded-lg ${message.isUser ? 'bg-blue-100 text-blue-800 ml-auto w-fit max-w-[70%]' : 'bg-gray-200 text-gray-800 mr-auto w-fit max-w-[70%]'}`}
              >
                {message.text}
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-gray-500">Typing...</div>}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t">
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="mt-2 flex justify-end">
              <button
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
