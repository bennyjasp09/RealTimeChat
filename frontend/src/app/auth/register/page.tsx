import React from 'react';
import AuthForm from '@/app/components/AuthForm';

export default function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <AuthForm mode="register" />
    </div>
  );
}