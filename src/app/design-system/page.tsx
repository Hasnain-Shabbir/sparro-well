import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { DialogClose } from '@radix-ui/react-dialog';
import { RadioGroup } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  AppBreadcrumbs,
  AppCheckbox,
  Radio,
  Tag,
  TextField,
  Toggle,
  Typography,
} from '@/components';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import UserAvatar from '@/assets/icons/UserAvatar';

const DesignSystem = () => {
  return (
    <div className="mx-auto my-5 max-w-[1300px] space-y-8 rounded-lg border-2 p-5">
      <h1 className="text-3xl font-bold">Design System</h1>
      <div>
        <h3 className="text-lg font-semibold">Buttons</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <Button variant="accent" size="md">
            Text here
          </Button>
          <Button variant="primary" size="md">
            Text here
          </Button>
          <Button variant="danger" size="md">
            Text here
          </Button>
          <Button variant="secondary" size="md">
            Text here
          </Button>
          <Button variant="icon" size="md">
            <CaretDownIcon />
          </Button>
          <Button variant="link" size="md">
            Text here
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Inputs</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <TextField label="Label" inputSize="xl" placeholder="Name" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Modal</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <Dialog>
            <DialogTrigger>Open Modal</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  <TextField label="Name" placeholder="Name" />
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Avatars</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <UserAvatar />
            </AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <UserAvatar />
            </AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <UserAvatar />
            </AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <UserAvatar />
            </AvatarFallback>
          </Avatar>
          <Avatar size="2xl">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <UserAvatar />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Tooltips</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>Hover</TooltipTrigger>
              <TooltipContent side="right">
                <p>Add to library Lorem</p>
                <TooltipArrow className="h-2.5 w-5" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Toggle</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <Toggle label="Label" id="toggle" subTitle="This is helper text" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Checkboxes</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <AppCheckbox label="Label" id="label" size="md" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Radio</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <RadioGroup defaultValue="option-1">
            <Radio id="option-1" size="sm" label="Default" value="option-1" />
            <Radio
              id="option-2"
              size="sm"
              label="Compromise"
              value="option-2"
            />
            <Radio id="option-3" size="sm" label="Sacrifice" value="option-3" />
          </RadioGroup>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Tags</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <Tag label="Label" size="md" color="red" />
          <Tag label="Label" size="md" color="green" />
          <Tag label="Label" size="md" color="orange" />
          <Tag label="Label" size="md" color="gray" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Breadcrumbs</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <AppBreadcrumbs />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Pagination</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Tabs</h3>
        <div className="flex items-center space-x-5 rounded-lg border p-5">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Typography</h3>
        <div className="rounded-lg border p-5">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="body1">Body 1</Typography>
          <Typography variant="body2">Body 2</Typography>
          <Typography variant="body3">Body 3</Typography>
          <Typography variant="caption">Caption</Typography>
          <Typography variant="footer">Footer</Typography>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
