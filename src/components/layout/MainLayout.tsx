
import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarProvider } from '@/components/ui/sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {!isMobile && <Sidebar />}
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className={cn("flex-1 p-4", className)}>
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
