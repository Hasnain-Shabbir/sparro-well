import { ChevronDown } from '@/assets';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SidebarItemProps {
  hasSubMenu?: boolean;
  icon: React.ReactNode;
  isExpanded: boolean;
  isOpen?: boolean;
  label: string;
  link: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  hasSubMenu,
  icon,
  isExpanded,
  isOpen,
  label,
  link,
  onClick,
}) => (
  <Link
    href={link}
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
    {hasSubMenu && isExpanded && (
      <span
        className={cn(
          'ml-auto transition-transform',
          isOpen ? '' : '-rotate-90',
        )}
      >
        <ChevronDown color="#666970" />
      </span>
    )}
  </Link>
);

export default SidebarItem;
