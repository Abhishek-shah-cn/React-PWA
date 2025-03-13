// Card component --------------------
export interface CardProps {
  title: string;
  subtitle: string;
  numbers: number[];
  badgeText?: string;
  totalTickets?: number;
  totalAmount?: string;
}

// Navigation component ----------------
export interface NavItem {
  name: string;
  href: string; 
  icon: string;
 
}

export type NavigationVariant = "mobile" | "desktop";

export interface NavigationProps {
  variant: NavigationVariant;
}

export interface NavItemLinkProps {
  name: string;
  href: string;
  icon: string;
  isActive: boolean;
  activeStyles: string;
  inactiveTextColor: string;
}

export interface NavigationComponentProps {
  activeStyles: string;
  inactiveTextColor: string;
  location: any;
}

// Winner & Order Types ----------------
export type Winner = {
  id: number;
  name: string;
  position: number;
  prize: number;
  profileImage: string;
};


// TicketCardProps ---------------------

export type OrderTimeSlot = "Morning" | "Afternoon" | "Evening";

export type Order = {
  id: string;
  companyName: string;
  date: string;
  time: string;
  totalTickets: number;
  totalAmount: number;
  timeSlot: OrderTimeSlot;
};

export interface TicketCardProps {
  companyName: string;
  date: string;
  time: string;
  totalTickets: number;
  totalAmount: number;
  timeSlot: OrderTimeSlot;
  imageUrl: string;
}


// Theme Provider ---------------------

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// context props--------------------

export interface AppContextType {
  winners: Winner[];
  orders: Order[];
  selectedPrize: string;
  setSelectedPrize: (prize: string) => void;
  theme: Theme;
  toggleTheme: () => void;
}


// toaster types ---------------------

export type ToastActionElement = React.ReactNode;

export interface ToastProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface ToasterToast extends ToastProps {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
}