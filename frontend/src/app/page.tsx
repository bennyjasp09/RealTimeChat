// src/app/page.tsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to RealTimeChat</h1>
      <p className="text-xl mb-8">
        Connect with friends and colleagues in real-time using our secure and user-friendly chat platform.
      </p>
      <div className="space-x-4">
        <Link href="/auth/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
        <Link href="/auth/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Register
        </Link>
      </div>
    </div>
  );
}