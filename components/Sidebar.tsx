'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  collapsed: boolean;
  isMobile?: boolean;
  onNavigate?: () => void;
}

interface MenuItem {
  title: string;
  icon: string;
  href: string;
  badge: string | null;
  submenu?: {
    title: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: 'داشبورد',
    icon: 'bi-speedometer2',
    href: '/',
    badge: null
  },
  {
    title: 'CRM',
    icon: 'bi-people',
    href: '/crm',
    badge: null,
    submenu: [
      { title: 'سرنخ‌ها', href: '/crm/leads' },
      { title: 'فرصت‌ها (کانبان)', href: '/crm/opportunities' },
      { title: 'مخاطبین', href: '/crm/contacts' }
    ]
  },
  {
    title: 'ارتباط داخلی',
    icon: 'bi-chat-dots',
    href: '/intranet',
    badge: null,
    submenu: [
      { title: 'اعلان‌ها', href: '/intranet' },
      { title: 'گفتگوها', href: '/intranet/messages' }
    ]
  },
  {
    title: 'مالی',
    icon: 'bi-receipt',
    href: '/finance',
    badge: null,
    submenu: [
      { title: 'فاکتورها', href: '/finance/invoices' }
    ]
  },
  {
    title: 'مارکتینگ',
    icon: 'bi-bullseye',
    href: '/marketing',
    badge: null,
    submenu: [
      { title: 'کمپین‌ها', href: '/marketing/campaigns' }
    ]
  },
  {
    title: 'مدیریت کاربران',
    icon: 'bi-people',
    href: '/users',
    badge: null,
    submenu: [
      { title: 'لیست کاربران', href: '/users' },
      { title: 'نقش‌ها و دسترسی‌ها', href: '/users/roles' },
      { title: 'پروفایل کاربری', href: '/users/profile' }
    ]
  },
  {
    title: 'مدیریت محصولات',
    icon: 'bi-box-seam',
    href: '/products',
    badge: null,
    submenu: [
      { title: 'کاتالوگ محصولات', href: '/products' },
      { title: 'سفارشی‌سازی', href: '/products/customization' },
      { title: 'موجودی و قیمت', href: '/products/inventory' }
    ]
  },
  {
    title: 'سفارش‌گیری',
    icon: 'bi-cart-plus',
    href: '/orders',
    badge: '12',
    submenu: [
      { title: 'سفارشات جدید', href: '/orders/new' },
      { title: 'در حال پردازش', href: '/orders/processing' },
      { title: 'تکمیل شده', href: '/orders/completed' }
    ]
  },
  {
    title: 'مدیریت تولید',
    icon: 'bi-gear-wide',
    href: '/production',
    badge: '7',
    submenu: [
      { title: 'برنامه تولید', href: '/production/schedule' },
      { title: 'مراحل تولید', href: '/production/stages' },
      { title: 'کنترل کیفیت', href: '/production/quality' }
    ]
  },
  {
    title: 'مدیریت انبار',
    icon: 'bi-building',
    href: '/warehouse',
    badge: null,
    submenu: [
      { title: 'موجودی کالا', href: '/warehouse/inventory' },
      { title: 'ورود و خروج', href: '/warehouse/transactions' },
      { title: 'مواد اولیه', href: '/warehouse/materials' }
    ]
  },
  {
    title: 'مدیریت نمایندگی‌ها',
    icon: 'bi-shop',
    href: '/agencies',
    badge: null,
    submenu: [
      { title: 'لیست نمایندگان', href: '/agencies' },
      { title: 'کمیسیون و پورسانت', href: '/agencies/commission' },
      { title: 'گزارش عملکرد', href: '/agencies/reports' }
    ]
  },
  {
    title: 'خدمات پس از فروش',
    icon: 'bi-tools',
    href: '/after-sales',
    badge: '3',
    submenu: [
      { title: 'درخواست‌های جدید', href: '/after-sales/requests' },
      { title: 'در حال بررسی', href: '/after-sales/processing' },
      { title: 'تکمیل شده', href: '/after-sales/completed' }
    ]
  },
  {
    title: 'منابع انسانی',
    icon: 'bi-person-badge',
    href: '/hr',
    badge: null,
    submenu: [
      { title: 'مدیریت پرسنل', href: '/hr/employees' },
      { title: 'درخواست مرخصی', href: '/hr/leave-requests' },
      { title: 'حقوق و مزایا', href: '/hr/payroll' }
    ]
  },
  {
    title: 'گزارش‌گیری',
    icon: 'bi-graph-up',
    href: '/reports',
    badge: null,
    submenu: [
      { title: 'گزارش فروش', href: '/reports/sales' },
      { title: 'گزارش تولید', href: '/reports/production' },
      { title: 'گزارش مالی', href: '/reports/financial' }
    ]
  },
  {
    title: 'ورک‌فلوها',
    icon: 'bi-diagram-3',
    href: '/workflows',
    badge: null,
    submenu: [
      { title: 'مدیریت سفارشات', href: '/workflows/order-management' },
      { title: 'مدیریت موجودی', href: '/workflows/inventory-management' },
      { title: 'ورک‌فلو تولید', href: '/workflows/production' },
      { title: 'خدمات پس از فروش', href: '/workflows/after-sales' },
      { title: 'مدیریت نمایندگی‌ها', href: '/workflows/agency-management' },
      { title: 'منابع انسانی', href: '/workflows/human-resources' },
      { title: 'گزارش‌گیری خودکار', href: '/workflows/automated-reporting' }
    ]
  },
  {
    title: 'تنظیمات سیستم',
    icon: 'bi-sliders',
    href: '/settings',
    badge: null,
    submenu: [
      { title: 'تنظیمات عمومی', href: '/settings/general' },
      { title: 'نقش‌ها و دسترسی‌ها', href: '/settings/roles' },
      { title: 'پشتیبان‌گیری', href: '/settings/backup' },
      { title: 'لاگ‌های سیستم', href: '/settings/logs' }
    ]
  }
];

export default function Sidebar({ collapsed, isMobile = false, onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleSubmenu = (href: string) => {
    setExpandedMenus(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  return (
    <div className={`sidebar position-fixed top-0 start-0 h-100 ${collapsed ? 'sidebar-hidden' : ''} ${isMobile ? 'sidebar-mobile' : ''}`} 
         style={{ 
           width: collapsed ? '0' : '280px', 
           zIndex: 1000, 
           transition: 'all 0.3s ease',
           transform: isMobile && collapsed ? 'translateX(-100%)' : 'translateX(0)'
         }}>
      <div className="sidebar-header p-3 text-center border-bottom border-light">
        <div className="d-flex align-items-center justify-content-center">
          <i className="bi bi-building text-white fs-2 me-2"></i>
          <div className="text-white">
            <h5 className="mb-0 fw-bold">سیستم ERP</h5>
            <small className="opacity-75">مدیریت مبلمان</small>
          </div>
        </div>
      </div>

      <nav className="flex-fill p-3" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
        <ul className="nav flex-column">
          {menuItems.map((item) => (
            <li key={item.href} className="nav-item mb-1">
              {item.submenu ? (
                <>
                  <button
                    className={`nav-link text-white d-flex align-items-center justify-content-between w-100 border-0 bg-transparent ${
                      pathname.startsWith(item.href) ? 'active' : ''
                    }`}
                    onClick={() => toggleSubmenu(item.href)}
                  >
                    <div className="d-flex align-items-center">
                      <i className={`${item.icon} me-2`}></i>
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="notification-badge ms-2">{item.badge}</span>
                      )}
                    </div>
                    <i className={`bi bi-chevron-${expandedMenus.includes(item.href) ? 'down' : 'left'} small`}></i>
                  </button>
                  <div className={`collapse ${expandedMenus.includes(item.href) ? 'show' : ''}`}>
                    <ul className="nav flex-column ms-3">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.href} className="nav-item">
                          <Link href={subItem.href} 
                                className={`nav-link text-white-50 py-2 ${pathname === subItem.href ? 'active text-white' : ''}`}
                                onClick={() => { if (isMobile && onNavigate) onNavigate(); }}>
                            <i className="bi bi-circle-fill me-2" style={{ fontSize: '6px' }}></i>
                            {subItem.title}
                          </Link>
                        </li>
            ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link href={item.href} 
                      className={`nav-link text-white d-flex align-items-center ${pathname === item.href ? 'active' : ''}`}
                      onClick={() => { if (isMobile && onNavigate) onNavigate(); }}>
                  <i className={`${item.icon} me-2`}></i>
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="notification-badge ms-auto">{item.badge}</span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
