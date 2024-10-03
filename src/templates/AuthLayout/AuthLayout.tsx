import React from 'react';
import Link from 'next/link';
import { LogoSymbol } from '@/assets';
import { Typography } from '@/components';

interface AuthLayoutProps {
  children: React.ReactNode;
  subTitle?: string;
  title?: string;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  subTitle,
  title,
}) => {
  return (
    <div className="flex h-screen items-center justify-center p-5">
      <div className="flex flex-col items-center gap-6">
        <Link href="/">
          <LogoSymbol size="lg" />
        </Link>
        <div className="space-y-4 rounded-xl px-4 py-6 shadow-xs sm:w-[350px]">
          <div className="space-y-1 text-center">
            <Typography fontWeight="semibold" variant="h6">
              {title}
            </Typography>
            <Typography className="text-neutral-700" variant="body3">
              {subTitle}
            </Typography>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
