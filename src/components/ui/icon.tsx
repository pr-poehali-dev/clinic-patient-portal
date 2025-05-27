import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: string;
  fallback?: string;
  size?: number;
  className?: string;
}

const Icon = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  className,
}: IconProps) => {
  const IconComponent = icons[name as keyof typeof icons] as LucideIcon;
  const FallbackIcon = icons[fallback as keyof typeof icons] as LucideIcon;

  const SelectedIcon = IconComponent || FallbackIcon;

  return <SelectedIcon size={size} className={className} />;
};

export default Icon;
