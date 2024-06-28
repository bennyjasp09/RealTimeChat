'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="text-white cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/auth/login">
              <span className="text-white cursor-pointer">Login</span>
            </Link>
          </li>
          <li>
            <Link href="/auth/register">
              <span className="text-white cursor-pointer">Register</span>
            </Link>
          </li>
          <li>
            <Link href="/chat">
              <span className="text-white cursor-pointer">Chat</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
