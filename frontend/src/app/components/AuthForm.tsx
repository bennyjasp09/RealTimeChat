'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AuthForm: React.FC<{ mode: 'login' | 'register' }> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
      await axios.post(url, { email, password });
      router.push('/chat'); // redirect to chat page after successful login/register
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;
