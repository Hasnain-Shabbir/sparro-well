import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SubMenuItem<T> {
  id: string;
  name: string;
  link: string;
  data?: T;
}

interface SubMenuProps<T> {
  isOpen?: boolean;
  itemClassName?: string;
  listClassName?: string;
  onItemClick?: (id: string) => void;
  renderSubMenuItem?: (item: SubMenuItem<T>) => ReactNode;
  subMenu: SubMenuItem<T>[];
}

const SubMenu = <T,>({
  isOpen = true,
  itemClassName = '',
  listClassName = '',
  onItemClick,
  renderSubMenuItem,
  subMenu,
}: SubMenuProps<T>) => (
  <ul
    className={cn(
      'mt-2.5 space-y-2.5 pl-9 transition-all duration-300',
      isOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0',
      listClassName,
    )}
    aria-hidden={!isOpen}
  >
    {subMenu.map(subMenuItem => (
      <li
        className={cn(
          'rounded-lg px-3 py-2 hover:bg-neutral-100',
          itemClassName,
        )}
        key={subMenuItem.id}
        onClick={() => onItemClick?.(subMenuItem.id)}
      >
        {renderSubMenuItem ? (
          renderSubMenuItem(subMenuItem)
        ) : (
          <Link href={subMenuItem.link} className="flex">
            <span>{subMenuItem.name}</span>
          </Link>
        )}
      </li>
    ))}
  </ul>
);

export default SubMenu;
