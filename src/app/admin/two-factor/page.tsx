/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AuthLayout } from '@/templates';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const TwoFactor = () => {
  return (
    <AuthLayout
      title="Two Factor Authentication"
      subTitle="Enter the 6 digit authentication code below"
    >
      <form className="!mt-0 flex flex-col space-y-4">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSeparator />
            <InputOTPSlot index={1} />
            <InputOTPSeparator />
            <InputOTPSlot index={2} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} />
            <InputOTPSeparator />
            <InputOTPSlot index={4} />
            <InputOTPSeparator />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Typography className="text-center text-neutral-700" variant="body3">
          Didn't received the code?
          <Button className="px-3" href="/admin/forgot-password" variant="link">
            Resend Code
          </Button>
        </Typography>
        <Button className="w-full" variant="accent">
          Verify
        </Button>
        <Button className="w-full" href="/admin/login" variant="secondary">
          Back to login
        </Button>
      </form>
    </AuthLayout>
  );
};

export default TwoFactor;
