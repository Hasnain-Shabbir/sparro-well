import React from 'react';
import { AuthLayout } from '@/templates';
import { Button } from '@/components/ui/button';
import { TextField } from '@/components';

const ForgotPassword = () => {
  return (
    <AuthLayout
      title="Forgot Password?"
      subTitle="We will send you an email to reset your password"
    >
      <form className="flex flex-col space-y-4">
        <TextField id="email" label="Email Address" required type="email" />
        <Button className="w-full" variant="accent">
          Send Email
        </Button>
        <Button className="w-full" href="/admin/login" variant="link">
          Back to login
        </Button>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
