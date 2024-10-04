import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from '@/assets';
import { sidebarData } from './sidebarData';
import SidebarItem from './SidebarItem';
import SubMenu from './SubMenu';
import ToggleButton from './ToggleButton';
import useSidebar from '@/hooks/useSidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';

const Sidebar = () => {
  const {
    isMobile,
    isExpanded,
    openMenuIds,
    handleSubMenuClick,
    handleSidebarToggle,
    toggleSidebar,
  } = useSidebar();

  const handleLinkClick = (sidebarItem: any) => {
    if (!sidebarItem.subMenu && isMobile) {
      toggleSidebar(false);
    }
  };

  return (
    <>
      {isMobile && isExpanded && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={handleSidebarToggle}
        />
      )}

      {isMobile && !isExpanded && (
        <Button
          aria-label="Open Sidebar"
          className="px-3"
          onClick={handleSidebarToggle}
          variant="secondary"
        >
          <Menu />
        </Button>
      )}

      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-60 transform bg-white transition-all duration-300 sm:static sm:translate-x-0',
          isExpanded ? 'translate-x-0' : '-translate-x-full',
          isExpanded ? 'w-60' : 'w-20',
          'border-r text-neutral-700',
        )}
        aria-label="Sidebar"
      >
        <div className="h-full space-y-5 overflow-y-auto px-3 py-6">
          <ToggleButton
            isExpanded={isExpanded}
            toggleSidebar={handleSidebarToggle}
          />
          <ul
            className={cn(
              'flex flex-col justify-center space-y-2.5 font-medium',
            )}
          >
            {sidebarData.map(sidebarItem => (
              <li key={sidebarItem.id}>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <SidebarItem
                        hasSubMenu={!!sidebarItem.subMenu}
                        icon={sidebarItem.icon}
                        isExpanded={isExpanded}
                        isOpen={openMenuIds.includes(sidebarItem.id)}
                        label={sidebarItem.name}
                        link={sidebarItem.link}
                        onClick={
                          sidebarItem.subMenu
                            ? () => handleSubMenuClick(sidebarItem.id)
                            : () => handleLinkClick(sidebarItem)
                        }
                      />
                    </TooltipTrigger>
                    {!isExpanded && (
                      <TooltipContent side="right">
                        {sidebarItem.name}
                        <TooltipArrow className="h-2.5 w-5" />
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
                {sidebarItem.subMenu &&
                  openMenuIds.includes(sidebarItem.id) &&
                  isExpanded && <SubMenu subMenu={sidebarItem.subMenu} />}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
