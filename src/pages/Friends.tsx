
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, UserPlus, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FriendProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  mutualFriends?: number;
  online?: boolean;
}

const friends: FriendProps[] = [
  {
    id: '1',
    name: 'John Smith',
    username: 'johnsmith',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200',
    mutualFriends: 5,
    online: true,
  },
  {
    id: '2',
    name: 'Alex Johnson',
    username: 'alexj',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200',
    mutualFriends: 3,
  },
  {
    id: '3',
    name: 'Emily Davis',
    username: 'emilyd',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200',
    mutualFriends: 7,
    online: true,
  },
  {
    id: '4',
    name: 'Michael Wilson',
    username: 'michaelw',
    avatar: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5b?q=80&w=200',
    mutualFriends: 2,
  },
];

const suggestions: FriendProps[] = [
  {
    id: '5',
    name: 'Sarah Miller',
    username: 'sarahm',
    avatar: 'https://images.unsplash.com/photo-1579783483458-83d02161294e?q=80&w=200',
    mutualFriends: 1,
  },
  {
    id: '6',
    name: 'David Brown',
    username: 'davidb',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200',
    mutualFriends: 4,
    online: true,
  },
];

const Friends = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Friends</h1>
          <div className="w-full md:w-64">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search friends..."
                className="pl-8 bg-muted/40 w-full"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Friends</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {friends.map(friend => (
                <Card key={friend.id} className="animate-enter">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={friend.avatar} alt={friend.name} />
                          <AvatarFallback>{friend.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        {friend.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white bg-green-500 rounded-full" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{friend.name}</h4>
                        <p className="text-xs text-muted-foreground">@{friend.username}</p>
                        {friend.mutualFriends && (
                          <p className="text-xs text-muted-foreground">{friend.mutualFriends} mutual friends</p>
                        )}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Message</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map(friend => (
                <Card key={friend.id} className="animate-enter">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={friend.avatar} alt={friend.name} />
                          <AvatarFallback>{friend.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        {friend.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white bg-green-500 rounded-full" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{friend.name}</h4>
                        <p className="text-xs text-muted-foreground">@{friend.username}</p>
                        {friend.mutualFriends && (
                          <p className="text-xs text-muted-foreground">{friend.mutualFriends} mutual friends</p>
                        )}
                      </div>
                    </div>
                    <Button className="gap-1">
                      <UserPlus className="h-4 w-4" />
                      Add
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Friends;
