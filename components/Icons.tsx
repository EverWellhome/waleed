import React from 'react';
import { 
  Heart, 
  Utensils, 
  Clock, 
  Home, 
  Car, 
  Smile, 
  ShieldCheck, 
  Phone, 
  Menu, 
  X, 
  Send, 
  Bot,
  User,
  MapPin,
  Mail,
  ChevronRight
} from 'lucide-react';

export const IconMap: Record<string, React.FC<any>> = {
  Heart,
  Utensils,
  Clock,
  Home,
  Car,
  Smile,
  ShieldCheck,
  Phone,
  Menu,
  X,
  Send,
  Bot,
  User,
  MapPin,
  Mail,
  ChevronRight
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = IconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};
