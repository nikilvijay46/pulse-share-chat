
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ChatList, ChatProps } from '@/components/messages/ChatList';
import { ChatWindow, MessageProps } from '@/components/messages/ChatWindow';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Sample chats data
const chats: ChatProps[] = [
  {
    id: '1',
    name: 'John Smith',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200',
    lastMessage: 'Are we still meeting tomorrow?',
    timestamp: '2h',
    unread: true,
    online: true,
  },
  {
    id: '2',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200',
    lastMessage: 'The project is looking great!',
    timestamp: '1d',
    unread: false,
  },
  {
    id: '3',
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200',
    lastMessage: 'Thanks for your help yesterday.',
    timestamp: '2d',
    unread: false,
    online: true,
  },
  {
    id: '4',
    name: 'Michael Wilson',
    avatar: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5b?q=80&w=200',
    lastMessage: 'Did you see the game last night?',
    timestamp: '6d',
    unread: false,
  },
];

// Sample messages for the first chat
const messages: Record<string, MessageProps[]> = {
  '1': [
    {
      id: '1',
      content: 'Hey, how are you doing?',
      sender: 'user',
      timestamp: '11:30 AM',
    },
    {
      id: '2',
      content: 'I\'m good thanks! How about you?',
      sender: 'other',
      timestamp: '11:32 AM',
    },
    {
      id: '3',
      content: 'Pretty good! Just finishing up some work. Are we still meeting tomorrow for coffee?',
      sender: 'user',
      timestamp: '11:35 AM',
    },
    {
      id: '4',
      content: 'Yes, definitely! How about 10 AM at the usual place?',
      sender: 'other',
      timestamp: '11:40 AM',
    },
    {
      id: '5',
      content: 'Perfect! See you then.',
      sender: 'user',
      timestamp: '11:42 AM',
    },
  ],
  '2': [
    {
      id: '1',
      content: 'Hi there! Just wanted to check in on the project progress.',
      sender: 'user',
      timestamp: 'Yesterday',
    },
    {
      id: '2',
      content: 'The project is coming along nicely. I\'ve completed the design phase.',
      sender: 'other',
      timestamp: 'Yesterday',
    },
    {
      id: '3',
      content: 'That sounds great! Can you send me the latest mockups?',
      sender: 'user',
      timestamp: 'Yesterday',
    },
    {
      id: '4',
      content: 'Sure thing! I\'ll share them with you this evening.',
      sender: 'other',
      timestamp: 'Yesterday',
    },
    {
      id: '5',
      content: 'The project is looking great!',
      sender: 'other',
      timestamp: 'Yesterday',
    },
  ],
};

const Messages = () => {
  const [activeChat, setActiveChat] = useState('1');
  const [showChatList, setShowChatList] = useState(true);
  const isMobile = useIsMobile();

  const handleSelectChat = (chatId: string) => {
    setActiveChat(chatId);
    if (isMobile) {
      setShowChatList(false);
    }
  };

  const activeChatData = chats.find((chat) => chat.id === activeChat);
  const activeChatMessages = messages[activeChat] || [];

  return (
    <MainLayout className="p-0 md:p-4">
      <div className="bg-white dark:bg-slate-950 rounded-lg border overflow-hidden h-[calc(100vh-6.5rem)]">
        <div className="flex h-full">
          {(!isMobile || showChatList) && (
            <div className={`${isMobile ? 'w-full' : 'w-80'}`}>
              <ChatList 
                chats={chats} 
                activeChat={activeChat}
                onSelect={handleSelectChat}
              />
            </div>
          )}
          
          {(!isMobile || !showChatList) && activeChatData && (
            <div className="flex-1">
              {isMobile && (
                <div className="p-2 border-b">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-1"
                    onClick={() => setShowChatList(true)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to chats
                  </Button>
                </div>
              )}
              <ChatWindow
                chat={activeChatData}
                messages={activeChatMessages}
              />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;
