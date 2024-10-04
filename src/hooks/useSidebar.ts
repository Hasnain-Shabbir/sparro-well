import { useEffect, useState } from 'react';

const useSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openMenuIds, setOpenMenuIds] = useState<string[]>([]);
  const [collapsedMenuIds, setCollapsedMenuIds] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      if (mobile) {
        setIsExpanded(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = (forceExpand?: boolean) => {
    if (typeof forceExpand === 'boolean') {
      setIsExpanded(forceExpand);
    } else {
      setIsExpanded(prev => !prev);
    }
  };

  const handleSubMenuClick = (id: string) => {
    if (!isExpanded) {
      toggleSidebar(true);

      if (collapsedMenuIds.includes(id)) {
        setCollapsedMenuIds(collapsedMenuIds.filter(menuId => menuId !== id));
        return;
      }
    }

    setOpenMenuIds(prev =>
      prev.includes(id) ? prev.filter(menuId => menuId !== id) : [...prev, id],
    );
  };

  const handleSidebarToggle = () => {
    if (isExpanded) {
      setCollapsedMenuIds(openMenuIds);
    }
    toggleSidebar();
  };

  return {
    isMobile,
    isExpanded,
    openMenuIds,
    handleSubMenuClick,
    handleSidebarToggle,
    toggleSidebar,
  };
};

export default useSidebar;
