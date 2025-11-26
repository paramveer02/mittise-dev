import React from 'react';
import { BRAND_NAME } from '@mittise/ui';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-green-50 to-orange-50">
      <main className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-bold text-green-800">{BRAND_NAME}</h1>
        <p className="text-xl text-green-700">Wellness starts here</p>
        <div className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full">
          Web Platform
        </div>
      </main>
    </div>
  );
}