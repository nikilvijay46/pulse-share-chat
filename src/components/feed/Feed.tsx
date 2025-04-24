
import React from 'react';
import { PostCard, PostProps } from './PostCard';
import { NewPostForm } from './NewPostForm';

// Sample posts data
const posts: PostProps[] = [
  {
    id: '1',
    author: {
      name: 'Jane Doe',
      username: 'janedoe',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
    },
    content: 'Just launched my new portfolio website! Check it out and let me know what you think. #webdesign #portfolio',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000',
    likes: 24,
    comments: 5,
    timestamp: '2h ago',
  },
  {
    id: '2',
    author: {
      name: 'John Smith',
      username: 'johnsmith',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200',
    },
    content: 'Beautiful sunset at the beach today! 🌅',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000',
    likes: 45,
    comments: 8,
    timestamp: '4h ago',
  },
  {
    id: '3',
    author: {
      name: 'Alex Johnson',
      username: 'alexj',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200',
    },
    content: 'Just finished reading this amazing book. Highly recommend it to everyone who loves mysteries!',
    likes: 18,
    comments: 3,
    timestamp: '6h ago',
  },
];

export function Feed() {
  return (
    <div>
      <NewPostForm />
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
