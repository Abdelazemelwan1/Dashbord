 import type { LucideIcon } from "lucide-react";

 interface SubMenuItem {
  id: string;
  label: string;
}

export interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
  badge?: string;
  count?: string;
  submenu?: SubMenuItem[];
}


export interface SideBarProps {
  collapsed: boolean;
  onToggle: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}
export interface SideBarProps2 {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
//   currentPage: string;
//   onPageChange: (page: string) => void;
}

export type StatItem = {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: LucideIcon
  color: string
  bgColor: string
  textColor: string
}

export type RevenueData = {
  month: string
  revenue: number
  expenses: number
}
export type SalesChartData = {
  name: string
  value: number
  color: string
}

export type recentOrdersData ={
    id: string,
    customer: string,
    products: string,
    amount: string,
    status: string,
    data: string,
}
export type topProductsData = {
    name: string,
    sales: number,
    revenue: string,
    trend: string,
    change: string,
}

export type activitiesData = {
    id: number,
    type: string,
    icon: LucideIcon,
    title: string,
    description: string,
    time: string,
    color: string,
    bgColor: string
}