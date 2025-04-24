
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sidebar as ShadcnSidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { Home, MessageCircle, Users, Image, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const menuItems = [
  {
    title: 'Home',
    path: '/',
    icon: Home
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: MessageCircle
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: Users
  },
  {
    title: 'Posts',
    path: '/posts',
    icon: Image
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: User
  }
];

export function Sidebar() {
  return (
    <ShadcnSidebar>
      <SidebarContent>
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-social-accent flex items-center justify-center text-white font-bold">P</div>
            <h1 className="text-xl font-bold">PulseChat</h1>
          </Link>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mt-auto p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Jane Doe</p>
              <p className="text-xs text-muted-foreground">@janedoe</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            Log Out
          </Button>
        </div>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
