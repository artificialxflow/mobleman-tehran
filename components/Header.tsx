'use client';

import { useState } from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleDarkMode: () => void;
  darkMode: boolean;
  isMobile?: boolean;
}

export default function Header({ onToggleSidebar, onToggleDarkMode, darkMode, isMobile = false }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, message: 'سفارش جدید ثبت شد', type: 'success', time: '2 دقیقه پیش' },
    { id: 2, message: 'محصول از موجودی خارج شد', type: 'warning', time: '15 دقیقه پیش' },
    { id: 3, message: 'درخواست خدمات جدید', type: 'info', time: '1 ساعت پیش' },
  ];

  return (
    <header className="bg-white shadow-sm border-bottom p-2 p-md-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary me-2 me-md-3" onClick={onToggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
          <h4 className="mb-0 text-muted d-none d-md-block">خوش آمدید، محمد احمدی</h4>
          <h6 className="mb-0 text-muted d-block d-md-none">محمد احمدی</h6>
        </div>

        <div className="d-flex align-items-center">
          {/* Search - Hidden on mobile */}
          <div className="me-3 d-none d-lg-block">
            <div className="input-group" style={{ width: '300px' }}>
              <input 
                type="text" 
                className="form-control" 
                placeholder="جستجو در سیستم..."
                style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}
              />
              <button className="btn btn-outline-secondary">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* Mobile Search Button */}
          <button className="btn btn-outline-secondary me-2 d-block d-lg-none">
            <i className="bi bi-search"></i>
          </button>

          {/* Dark Mode Toggle */}
          <button className="btn btn-outline-secondary me-2" onClick={onToggleDarkMode}>
            <i className={`bi bi-${darkMode ? 'sun' : 'moon'}`}></i>
          </button>

          {/* Notifications */}
          <div className="dropdown me-2">
            <button 
              className="btn btn-outline-secondary position-relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <i className="bi bi-bell"></i>
              <span className="notification-badge">3</span>
            </button>
            {showNotifications && (
              <div className="dropdown-menu show" style={{ width: isMobile ? '280px' : '350px', left: '0', right: 'auto' }}>
                <div className="dropdown-header d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">اعلان‌ها</h6>
                  <button className="btn btn-sm btn-link text-decoration-none">همه را خوانده علامت کن</button>
                </div>
                <div className="dropdown-divider"></div>
                {notifications.map(notification => (
                  <div key={notification.id} className="dropdown-item">
                    <div className="d-flex">
                      <div className={`flex-shrink-0 rounded-circle p-2 me-2 bg-${
                        notification.type === 'success' ? 'success' : 
                        notification.type === 'warning' ? 'warning' : 'info'
                      } bg-opacity-10`}>
                        <i className={`bi bi-${
                          notification.type === 'success' ? 'check-circle' : 
                          notification.type === 'warning' ? 'exclamation-triangle' : 'info-circle'
                        } text-${notification.type}`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1 small">{notification.message}</p>
                        <small className="text-muted">{notification.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="dropdown-divider"></div>
                <div className="dropdown-item text-center">
                  <button className="btn btn-link text-decoration-none small">مشاهده همه اعلان‌ها</button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="dropdown">
            <button 
              className="btn btn-outline-secondary d-flex align-items-center"
              onClick={() => setShowProfile(!showProfile)}
            >
              <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" 
                alt="Profile" 
                className="rounded-circle me-2"
                width="32"
                height="32"
              />
              <span className="d-none d-md-inline">محمد احمدی</span>
              <i className="bi bi-chevron-down ms-2"></i>
            </button>
            {showProfile && (
              <div className="dropdown-menu dropdown-menu-end show">
                <div className="dropdown-header">
                  <strong>محمد احمدی</strong><br />
                  <small className="text-muted">مدیر سیستم</small>
                </div>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">
                  <i className="bi bi-person me-2"></i>
                  پروفایل کاربری
                </button>
                <button className="dropdown-item">
                  <i className="bi bi-gear me-2"></i>
                  تنظیمات
                </button>
                <button className="dropdown-item">
                  <i className="bi bi-question-circle me-2"></i>
                  راهنمای کاربری
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item text-danger">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  خروج از سیستم
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
