
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Home, 
  MessageCircle, 
  Users, 
  Image, 
  User, 
  Search, 
  Bell
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="border-b bg-white dark:bg-slate-950 sticky top-0 z-10">
      <div className="container flex items-center justify-between h-16 px-4">
        {isMobile && (
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <Link to="/" className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-social-accent flex items-center justify-center text-white font-bold text-xs">P</div>
              <span className="font-bold text-lg">PulseChat</span>
            </Link>
          </div>
        )}

        {!isMobile && (
          <div className="w-80">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 bg-muted/40"
              />
            </div>
          </div>
        )}

        {isMobile && (
          <nav className="flex items-center gap-1.5">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/friends">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Users className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/posts">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Image className="h-5 w-5" />
              </Button>
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-social-accent rounded-full"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
