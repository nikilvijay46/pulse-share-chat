
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

export interface ChatProps {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  online?: boolean;
}

interface ChatListProps {
  chats: ChatProps[];
  activeChat?: string;
  onSelect: (chatId: string) => void;
}

export function ChatList({ chats, activeChat, onSelect }: ChatListProps) {
  return (
    <div className="flex flex-col h-full border-r">
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search messages..."
            className="pl-8 bg-muted/40"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-md mb-1 cursor-pointer hover:bg-muted/50",
              activeChat === chat.id && "bg-muted"
            )}
            onClick={() => onSelect(chat.id)}
          >
            <div className="relative">
              <Avatar>
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>{chat.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white bg-green-500 rounded-full" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-sm">{chat.name}</h4>
                <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
              </div>
              <div className="flex items-center gap-1">
                <p 
                  className={cn(
                    "text-xs truncate", 
                    chat.unread ? "font-medium" : "text-muted-foreground"
                  )}
                >
                  {chat.lastMessage}
                </p>
                {chat.unread && (
                  <span className="bg-social-accent rounded-full w-2 h-2 shrink-0"></span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
