
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PostCard, PostProps } from '@/components/feed/PostCard';
import { Image, Settings, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';

// Sample user data
const userData = {
  name: 'Jane Doe',
  username: 'janedoe',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
  coverImage: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2000',
  bio: 'UI/UX Designer | Photographer | Coffee Enthusiast',
  location: 'San Francisco, CA',
  website: 'janedoe.design',
  joinDate: 'Joined March 2020',
  following: 385,
  followers: 2584,
};

// Sample posts
const userPosts: PostProps[] = [
  {
    id: '1',
    author: {
      name: userData.name,
      username: userData.username,
      avatar: userData.avatar,
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
      name: userData.name,
      username: userData.username,
      avatar: userData.avatar,
    },
    content: 'Beautiful sunset at the beach today! 🌅',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000',
    likes: 45,
    comments: 8,
    timestamp: '2d ago',
  },
];

const Profile = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        {/* Cover image and profile info */}
        <div className="relative mb-6">
          <div className="h-48 md:h-64 rounded-lg overflow-hidden">
            <img 
              src={userData.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between absolute -bottom-20 left-0 right-0 px-4">
            <div className="flex items-end">
              <div className="border-4 border-white rounded-full overflow-hidden h-24 w-24 md:h-32 md:w-32 bg-white">
                <img 
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block ml-4 mb-1">
                <h1 className="text-xl font-bold">{userData.name}</h1>
                <p className="text-sm text-muted-foreground">@{userData.username}</p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-3 md:mt-0 md:mb-3">
              <Button size="sm" variant="outline">
                <Settings className="h-4 w-4 mr-1" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile profile info */}
        <div className="md:hidden mt-20 mb-6 px-4">
          <h1 className="text-xl font-bold">{userData.name}</h1>
          <p className="text-sm text-muted-foreground">@{userData.username}</p>
        </div>
        
        {/* Bio and stats */}
        <div className="mb-6 px-4">
          <p className="mb-3">{userData.bio}</p>
          
          <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{userData.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <LinkIcon className="h-4 w-4" />
              <a href="#" className="hover:underline">{userData.website}</a>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{userData.joinDate}</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div>
              <span className="font-bold">{userData.following}</span>
              <span className="text-muted-foreground ml-1">Following</span>
            </div>
            <div>
              <span className="font-bold">{userData.followers}</span>
              <span className="text-muted-foreground ml-1">Followers</span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="posts">
          <TabsList className="mb-6">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            <div className="space-y-4 px-4">
              {userPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="media">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square rounded-md overflow-hidden bg-muted hover-scale">
                  <img 
                    src={`https://images.unsplash.com/photo-${1580000000000 + item * 10000}?q=80&w=400`} 
                    alt="Media" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="likes">
            <div className="p-12 text-center text-muted-foreground">
              <Image className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No liked posts yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
