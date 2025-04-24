
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Feed } from '@/components/feed/Feed';

const Index = () => {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Home Feed</h1>
        <Feed />
      </div>
    </MainLayout>
  );
};

export default Index;
