
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export interface PostProps {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export function PostCard({ post }: { post: PostProps }) {
  return (
    <Card className="mb-4 overflow-hidden animate-enter">
      <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">@{post.author.username} · {post.timestamp}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save post</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
            <DropdownMenuItem>Unfollow</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-0">
        {post.content && (
          <div className="p-4 pt-0">{post.content}</div>
        )}
        {post.image && (
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <img 
              src={post.image}
              alt="Post image"
              className="object-cover w-full h-full hover-scale"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between border-t">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <Heart className="h-4 w-4" />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span>{post.comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Share className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
