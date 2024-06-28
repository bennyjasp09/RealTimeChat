import React from 'react';
import AuthForm from '@/app/components/AuthForm';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <AuthForm mode="login" />
    </div>
  );
};

export default LoginPage;