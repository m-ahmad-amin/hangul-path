import { useState } from 'react';
import api from '../api/client';

export default function AiChat({ lessonDay }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);
    setExpanded(true);

    try {
      const data = await api.aiChat(userMessage, lessonDay);
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: err.message || 'Failed to get response.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30">
      <div className="max-w-2xl mx-auto px-4 pb-4">
        <div className="bg-navy-light border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
          >
            <span className="text-sm font-medium text-gold">
              Ask anything about today&apos;s lesson
            </span>
            <span className="text-gray-500 text-xs">{expanded ? '▼' : '▲'}</span>
          </button>

          {expanded && messages.length > 0 && (
            <div className="max-h-48 overflow-y-auto px-4 py-2 space-y-3 border-t border-gray-800">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm ${
                    msg.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <span
                    className={`inline-block px-3 py-2 rounded-lg max-w-[85%] ${
                      msg.role === 'user'
                        ? 'bg-gold/20 text-gold-light'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {msg.content}
                  </span>
                </div>
              ))}
              {loading && (
                <div className="text-gray-500 text-sm animate-pulse">Thinking...</div>
              )}
            </div>
          )}

          <form onSubmit={handleSend} className="flex gap-2 p-3 border-t border-gray-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about grammar, vocabulary..."
              className="input-field flex-1 py-2 text-sm"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="btn-primary px-4 py-2 text-sm disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
