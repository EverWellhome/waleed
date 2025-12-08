import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icons';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';
import { GenerateContentResponse } from "@google/genai";

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: MessageRole.MODEL,
      text: "Hello! I'm Eve, your Everwell care assistant. How can I help you find the right care for your loved one today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const stream = await sendMessageToGemini(userMessage.text);
      
      const botMessageId = (Date.now() + 1).toString();
      let fullText = '';
      
      // Initialize empty bot message
      setMessages(prev => [
        ...prev, 
        { id: botMessageId, role: MessageRole.MODEL, text: '', isTyping: true }
      ]);

      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text;
        if (textChunk) {
          fullText += textChunk;
          setMessages(prev => 
            prev.map(msg => 
              msg.id === botMessageId 
                ? { ...msg, text: fullText, isTyping: true } 
                : msg
            )
          );
        }
      }
      
      // Finalize message state
      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMessageId 
            ? { ...msg, isTyping: false } 
            : msg
        )
      );

    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: MessageRole.MODEL,
          text: "I apologize, but I'm having trouble connecting right now. Please call our office at (910) 317-3721 for immediate assistance."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[400px] h-[500px] mb-4 flex flex-col overflow-hidden border border-everwell-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-everwell-700 to-everwell-500 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <Icon name="Bot" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Everwell Care Assistant</h3>
                <p className="text-xs text-everwell-100">Usually replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-everwell-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === MessageRole.USER
                      ? 'bg-everwell-600 text-white rounded-br-none'
                      : 'bg-white text-slate-700 border border-everwell-100 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === MessageRole.USER && (
               <div className="flex justify-start">
                 <div className="bg-white border border-everwell-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                   <div className="flex space-x-1">
                     <div className="w-2 h-2 bg-everwell-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                     <div className="w-2 h-2 bg-everwell-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                     <div className="w-2 h-2 bg-everwell-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-everwell-100">
            <div className="flex items-center gap-2 bg-everwell-50 border border-everwell-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-everwell-200 focus-within:border-everwell-400 transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our services..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className={`p-2 rounded-full transition-all ${
                  !inputValue.trim() 
                    ? 'text-slate-300 cursor-not-allowed' 
                    : 'text-everwell-600 hover:bg-everwell-100'
                }`}
              >
                <Icon name="Send" size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-slate-400">AI Care Assistant can make mistakes. Please verify important info.</p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-everwell-700 hover:bg-everwell-800 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
      >
        {isOpen ? (
          <Icon name="X" size={24} />
        ) : (
          <>
            <Icon name="Bot" size={24} className="animate-pulse" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-medium text-sm">
              Ask about care
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;