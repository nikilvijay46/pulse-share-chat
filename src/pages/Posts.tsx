
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, BookmarkPlus } from 'lucide-react';

const postsData = [
  {
    id: '1',
    author: {
      name: 'Jane Doe',
      username: 'janedoe',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
    },
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800',
    likes: 243,
    comments: 42
  },
  {
    id: '2',
    author: {
      name: 'John Smith',
      username: 'johnsmith',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200',
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
    likes: 189,
    comments: 23
  },
  {
    id: '3',
    author: {
      name: 'Alex Johnson',
      username: 'alexj',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200',
    },
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800',
    likes: 423,
    comments: 64
  },
  {
    id: '4',
    author: {
      name: 'Emily Davis',
      username: 'emilyd',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    likes: 156,
    comments: 18
  }
];

const Posts = () => {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Discover Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {postsData.map((post) => (
            <Card key={post.id} className="overflow-hidden animate-enter">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt="Post" 
                    className="aspect-square w-full object-cover hover-scale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-between items-center text-white mb-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 border-2 border-white">
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{post.author.username}</span>
                      </div>
                      <Button size="icon" variant="ghost" className="text-white h-8 w-8">
                        <BookmarkPlus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1 text-white text-sm">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white text-sm">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Posts;
