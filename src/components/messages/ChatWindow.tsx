
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Phone, Video, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MessageProps {
  id: string;
  content: string;
  sender: 'user' | 'other';
  timestamp: string;
}

interface ChatWindowProps {
  chat: {
    id: string;
    name: string;
    avatar: string;
    online?: boolean;
  };
  messages: MessageProps[];
}

export function ChatWindow({ chat, messages }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, send the message to the API
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={chat.avatar} alt={chat.name} />
            <AvatarFallback>{chat.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{chat.name}</div>
            <div className="text-xs text-muted-foreground">
              {chat.online ? 'Online' : 'Offline'}
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.sender === 'user' ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[70%] rounded-md p-3",
                message.sender === 'user' 
                  ? "bg-social-accent text-white rounded-tr-none" 
                  : "bg-muted rounded-tl-none"
              )}
            >
              <div>{message.content}</div>
              <div className={cn(
                "text-xs mt-1",
                message.sender === 'user' ? "text-white/70" : "text-muted-foreground"
              )}>
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSend} className="border-t p-3 flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1"
        />
        <Button type="submit" size="icon" variant="default">
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
