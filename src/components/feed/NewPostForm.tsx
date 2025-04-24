
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Image, Smile, Send } from 'lucide-react';
import { toast } from 'sonner';

export function NewPostForm() {
  const [content, setContent] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the post to an API
    if (content.trim()) {
      toast.success('Post created successfully!');
      setContent('');
    } else {
      toast.error('Post cannot be empty');
    }
  };

  return (
    <Card className="mb-6">
      <form onSubmit={handleSubmit}>
        <CardContent className="p-4 pt-6">
          <div className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's happening?"
                className="resize-none border-none focus-visible:ring-0 p-0 shadow-none"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 border-t flex justify-between">
          <div className="flex gap-2">
            <Button type="button" size="sm" variant="ghost">
              <Image className="h-4 w-4 mr-1" />
              Photo
            </Button>
            <Button type="button" size="sm" variant="ghost">
              <Smile className="h-4 w-4 mr-1" />
              Feeling
            </Button>
          </div>
          <Button type="submit" size="sm">
            <Send className="h-4 w-4 mr-1" /> Post
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
