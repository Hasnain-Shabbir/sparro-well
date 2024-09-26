'use client';
import UserAvatar from '@/assets/icons/UserAvatar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
export default function Home() {
  return (
    <>
      <div className="p-5">
        <Avatar size="2xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>
            <UserAvatar />
          </AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}
