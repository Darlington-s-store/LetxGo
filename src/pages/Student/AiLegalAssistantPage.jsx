import React, { useState, useEffect, useRef } from 'react';
import { mockAiSuggestionItems } from '../../mockData/index';

const LEGAL_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(`
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#F2EDED" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.92">
      <g transform="translate(12 10)">
        <path d="M15 12V34" />
        <path d="M15 16L5 26M15 16L25 26" />
        <path d="M5 26L1 34H9L5 26Z" />
        <path d="M25 26L21 34H29L25 26Z" />
        <path d="M8 38H22" />
      </g>
      <g transform="translate(70 18)">
        <path d="M3 8H21L25 15H7L3 8Z" />
        <path d="M3 8V25H25V8" />
        <path d="M14 8V25" />
      </g>
      <g transform="translate(126 12)">
        <path d="M6 34C6 18 12 10 22 10C32 10 38 18 38 34" />
        <path d="M10 38H34" />
      </g>
      <g transform="translate(176 12)">
        <path d="M6 10L26 18" />
        <path d="M16 6L30 11" />
        <path d="M10 25L20 10" />
        <path d="M5 28L15 13" />
      </g>
    </g>
  </svg>
`)})")`;

const ChatBubbleIcon = ({ className = 'h-[74px] w-[74px]' }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40 12C25.64 12 14 22.56 14 35.6C14 42.21 16.94 48.17 21.67 52.39L19.49 63.4L30.13 57.9C33.1 58.71 36.45 59.2 40 59.2C54.36 59.2 66 48.64 66 35.6C66 22.56 54.36 12 40 12Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="31" cy="35.5" r="3.2" fill="currentColor" />
    <circle cx="40" cy="35.5" r="3.2" fill="currentColor" />
    <circle cx="49" cy="35.5" r="3.2" fill="currentColor" />
  </svg>
);

const SendIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12L19 5L16 19L11.5 13.5L5 12Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5 13.5L19 5" strokeLinecap="round" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21V19C6 16.79 7.79 15 10 15H14C16.21 15 18 16.79 18 19V21" />
  </svg>
);

const SparkIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M12 3V4M12 20V21M4.22 4.22L4.93 4.93M19.07 19.07L19.78 19.78M3 12H4M20 12H21M4.22 19.78L4.93 19.07M19.07 4.93L19.78 4.22" />
  </svg>
);

const renderSuggestionIcon = (icon) => {
  const props = {
    className: 'h-[18px] w-[18px]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
  };

  switch (icon) {
    case 'scales':
      return (
        <svg {...props}>
          <path d="M12 4V20" strokeLinecap="round" />
          <path d="M12 7L7 9.5M12 7L17 9.5" strokeLinecap="round" />
          <path d="M7 9.5L5.5 13H8.5L7 9.5Z" />
          <path d="M17 9.5L15.5 13H18.5L17 9.5Z" />
          <path d="M9.5 20H14.5" strokeLinecap="round" />
        </svg>
      );
    case 'book':
      return (
        <svg {...props}>
          <path d="M6 5.5H11C12.1 5.5 13 6.4 13 7.5V18.5H8C6.9 18.5 6 17.6 6 16.5V5.5Z" />
          <path d="M18 5.5H13C11.9 5.5 11 6.4 11 7.5V18.5H16C17.1 18.5 18 17.6 18 16.5V5.5Z" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M4.8 12H19.2" strokeLinecap="round" />
          <path d="M12 4.5C14.2 6.45 15.45 9.1 15.45 12C15.45 14.9 14.2 17.55 12 19.5C9.8 17.55 8.55 14.9 8.55 12C8.55 9.1 9.8 6.45 12 4.5Z" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...props}>
          <path d="M12 4.5L13.55 8.45L17.5 10L13.55 11.55L12 15.5L10.45 11.55L6.5 10L10.45 8.45L12 4.5Z" />
          <path d="M18 15.5L18.7 17.3L20.5 18L18.7 18.7L18 20.5L17.3 18.7L15.5 18L17.3 17.3L18 15.5Z" />
        </svg>
      );
    case 'list':
      return (
        <svg {...props}>
          <path d="M8 7H18" strokeLinecap="round" />
          <path d="M8 12H18" strokeLinecap="round" />
          <path d="M8 17H18" strokeLinecap="round" />
          <circle cx="5" cy="7" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="5" cy="12" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="5" cy="17" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
};

const SuggestionButton = ({ item, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex h-12 w-full items-center gap-4 rounded-xl border border-[#f4eded] bg-white px-4 text-left text-[15px] transition hover:bg-[#fcf8f8] hover:border-[#061526]/10"
  >
    <span className="text-[#111827]">{renderSuggestionIcon(item.icon)}</span>
    <span className="font-medium text-[#111827]">{item.label}</span>
  </button>
);

const AI_RESPONSES = {
  'constitutional-law': 'Constitutional law is the body of law which defines the relationship of different entities within a state, namely, the executive, the legislature, and the judiciary. It establishes the principles by which a government operates and the rights guaranteed to individuals.',
  'contract-law': 'For a contract to be valid, it generally requires: 1) Offer, 2) Acceptance, 3) Consideration (the exchange of something of value), 4) Intention to create legal relations, and 5) Capacity of the parties to enter the agreement.',
  'criminal-law': 'Criminal law deals with conduct that is considered harmful to social order and where the guilty person may be punished by the state. This includes offenses against persons (like assault) or property (like theft). The burden of proof is usually "beyond a reasonable doubt."',
  'tort-law': 'Tort law covers civil wrongs that result in harm or loss, allowing the injured party to seek compensation. Negligence applies when someone fails to exercise the care that a reasonably prudent person would exercise in like circumstances.',
  'what-is-law': 'Law is a system of rules created and enforced through social or governmental institutions to regulate behavior. It is essential for maintaining order, protecting rights, and providing a framework for resolving disputes in any society.',
  'default': 'That\'s a great question about legal concepts! As your AI assistant, I can tell you that understanding the nuances of the law requires looking at statutes, case precedents, and constitutional provisions. Would you like me to elaborate on a specific area?'
};

export const AiLegalAssistantPage = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  const msgIdCounter = useRef(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const generateId = () => {
    msgIdCounter.current += 1;
    return msgIdCounter.current;
  };

  const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const simulateResponse = (userText, topicId = null) => {
    setIsLoading(true);
    
    setTimeout(() => {
      let responseText = AI_RESPONSES[topicId] || AI_RESPONSES['default'];
      
      // Simple keyword matching for non-topic queries
      if (!topicId) {
        const lowerText = userText.toLowerCase();
        if (lowerText.includes('court')) responseText = "The court system is hierarchical, typically starting with trial courts and moving up to appellate and supreme courts. Each level has specific jurisdiction.";
        if (lowerText.includes('rights')) responseText = "Fundamental rights are often enshrined in a Bill of Rights or a Constitution. They protect individuals from arbitrary state power.";
      }

      setMessages(prev => [...prev, {
        id: generateId(),
        type: 'ai',
        text: responseText,
        time: getTime()
      }]);
      setIsLoading(false);
    }, 1500);
  };

  const handleTopicSelect = (item) => {
    const userMsg = {
      id: generateId(),
      type: 'user',
      text: item.prompt,
      time: getTime()
    };
    setMessages([userMsg]);
    simulateResponse(item.prompt, item.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMsg = {
      id: generateId(),
      type: 'user',
      text: query,
      time: getTime()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    simulateResponse(query);
  };

  const handleReset = () => {
    setMessages([]);
    setQuery('');
    setIsLoading(false);
  };

  const isChatting = messages.length > 0;

  return (
    <section
      className="relative flex flex-col h-[calc(100vh-140px)] overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(17,24,39,0.04)]"
      style={!isChatting ? {
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '220px 220px',
      } : {}}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#f3f4f6] px-6 py-4 bg-white/80 backdrop-blur-sm z-20">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#061526] text-white">
            <ChatBubbleIcon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold text-[#111827]">AI Assistant</h2>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]"></span>
              <span className="text-[11px] text-[#6b7280]">Always active</span>
            </div>
          </div>
        </div>
        {isChatting && (
          <button 
            onClick={handleReset}
            className="text-[13px] font-medium text-[#6b7280] hover:text-[#061526] transition-colors"
          >
            New Session
          </button>
        )}
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-6 space-y-6 scroll-smooth"
      >
        {!isChatting ? (
          <div className="flex flex-col items-center justify-center min-h-full py-10">
            <div className="w-full max-w-[500px]">
              <div className="text-center">
                <h1 className="text-[32px] font-bold tracking-tight text-[#111827]">How can I help today?</h1>
                <p className="mt-2 text-[15px] text-[#6b7280]">Select a topic or ask anything about Ghanaian Law</p>
              </div>

              <div className="mt-10 grid gap-3">
                {mockAiSuggestionItems.map((item) => (
                  <SuggestionButton
                    key={item.id}
                    item={item}
                    onClick={() => handleTopicSelect(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  msg.type === 'ai' ? 'bg-[#ffb11b] text-white' : 'bg-[#061526] text-white'
                }`}>
                  {msg.type === 'ai' ? <SparkIcon /> : <UserIcon />}
                </div>
                <div className={`flex flex-col max-w-[80%] ${msg.type === 'user' ? 'items-end' : ''}`}>
                  <div className={`rounded-2xl px-5 py-3.5 text-[15px] leading-relaxed shadow-sm ${
                    msg.type === 'ai' 
                      ? 'bg-[#f3f4f6] text-[#111827]' 
                      : 'bg-[#061526] text-white'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="mt-1.5 text-[10px] text-[#9ca3af] px-1">{msg.time}</span>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ffb11b] text-white animate-pulse">
                  <SparkIcon />
                </div>
                <div className="bg-[#f3f4f6] rounded-2xl px-5 py-4 flex gap-1.5 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9ca3af] animate-bounce"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9ca3af] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9ca3af] animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-[#f3f4f6]">
        <form 
          onSubmit={handleSubmit}
          className="relative max-w-[800px] mx-auto"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            placeholder={isLoading ? 'Assistant is thinking...' : 'Ask about a legal concept...'}
            className="w-full h-14 pl-5 pr-14 rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] text-[15px] text-[#111827] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#061526]/5 focus:border-[#061526]/30 transition-all disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="absolute right-2 top-2 h-10 w-10 flex items-center justify-center rounded-xl bg-[#061526] text-white shadow-lg shadow-[#061526]/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100"
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </form>
        <p className="mt-3 text-center text-[11px] text-[#9ca3af]">
          LexGo AI can make mistakes. Consider checking important legal sources.
        </p>
      </div>
    </section>
  );
};
