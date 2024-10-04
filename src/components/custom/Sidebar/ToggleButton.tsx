import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LogoSymbol, Menu } from '@/assets';

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
      'flex items-center justify-between border-b pb-6',
      isExpanded ? 'px-3' : '',
    )}
  >
    {isExpanded && <LogoSymbol size="sm" />}
    <Button
      aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
      className="px-3"
      onClick={toggleSidebar}
      variant="icon"
    >
      <Menu />
    </Button>
  </div>
);

export default ToggleButton;
