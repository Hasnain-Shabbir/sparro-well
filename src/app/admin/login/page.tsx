import React from 'react';
import { TextField } from '@/components';
import { Button } from '@/components/ui/button';
import { AuthLayout } from '@/templates';

const Login = () => {
  return (
    <AuthLayout
      subTitle="Enter your credentials to login to your account"
      title="Admin Login"
    >
      <form className="flex flex-col space-y-4">
        <TextField id="email" label="Email Address" required type="email" />
        <TextField id="password" label="Password" required type="password" />
        <Button className="w-full" href="/admin/forgot-password" variant="link">
          Forgot Password
        </Button>
        <Button className="w-full" variant="accent">
          Login
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
