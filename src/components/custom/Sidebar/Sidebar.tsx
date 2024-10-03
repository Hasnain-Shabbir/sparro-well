import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Clock,
  Dashboard,
  LogoSymbol,
  Menu,
  Program,
  Resource,
  Settings,
  UserOutline,
  Users,
  ChevronDown,
} from '@/assets';
import Link from 'next/link';

const sidebarData = [
  { id: '1sd423', name: 'Dashboard', link: '/dashboard', icon: <Dashboard /> },
  { id: 'fj378d', name: 'Patients', link: '/patients', icon: <UserOutline /> },
  { id: '1f83fj', name: 'Reminders', link: '/reminders', icon: <Clock /> },
  {
    id: '12f01c',
    name: 'Contacts',
    link: '/contacts',
    icon: <Users />,
    subMenu: [
      { id: 'jh92ld', name: 'Provider', link: '/contacts' },
      { id: 'f37j3s', name: 'Medical Group', link: '/contacts' },
      { id: '1x;0ow', name: 'Community', link: '/contacts' },
      { id: '1m3bgy', name: 'Care Manager', link: '/contacts' },
    ],
  },
  { id: 'x3wl8e', name: 'Resources', link: '/resources', icon: <Resource /> },
  { id: 'mz0hlq', name: 'Settings', link: '/settings', icon: <Settings /> },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null); // Track the open sub-menu

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSubMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id); // Open/close the sub-menu
  };

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className={cn(
        'fixed left-0 top-0 z-40 h-screen w-60 -translate-x-full border-r text-neutral-700 transition-all duration-300 sm:translate-x-0',
        isExpanded ? 'w-60' : 'w-20',
      )}
      aria-label="Sidebar"
    >
      <div className="h-full space-y-5 overflow-y-auto px-3 py-4">
        <ToggleButton isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <ul
          className={cn('flex flex-col justify-center space-y-2 font-medium')}
        >
          {sidebarData.map(sidebarItem => (
            <li key={sidebarItem.id}>
              <SidebarItem
                label={sidebarItem.name}
                icon={sidebarItem.icon}
                isExpanded={isExpanded}
                hasSubMenu={!!sidebarItem.subMenu}
                isOpen={openMenuId === sidebarItem.id}
                onClick={() => toggleSubMenu(sidebarItem.id)}
              />
              {sidebarItem.subMenu && openMenuId === sidebarItem.id && (
                <ul className="pl-9">
                  {sidebarItem.subMenu.map(subMenuItem => (
                    <li
                      key={subMenuItem.id}
                      className="rounded-lg px-3 py-2 hover:bg-neutral-100"
                    >
                      <Link href={subMenuItem.link} className="flex">
                        <span>{subMenuItem.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isExpanded: boolean;
  hasSubMenu?: boolean;
  isOpen?: boolean; // Indicate if the sub-menu is open
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  isExpanded,
  hasSubMenu,
  isOpen,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={cn(
      'flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-neutral-100',
      isExpanded ? 'justify-start' : 'w-max',
    )}
  >
    <span>{icon}</span>
    <span className={`transition-all ${isExpanded ? 'block' : 'hidden'}`}>
      {label}
    </span>
    {hasSubMenu && (
      <span className="ml-auto">
        {isOpen ? <ChevronDown /> : <ChevronDown />}
      </span>
    )}
  </div>
);

interface ToggleButtonProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  isExpanded,
  toggleSidebar,
}) => (
  <div
    className={cn(
      'flex items-center justify-between border-b pb-3',
      isExpanded ? 'px-3 py-2' : 'py-2',
    )}
  >
    {isExpanded && <LogoSymbol size="sm" />}
    <button
      onClick={toggleSidebar}
      className="rounded-lg px-3 py-2 hover:bg-neutral-100"
      aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
    >
      <Menu />
    </button>
  </div>
);

export default Sidebar;
