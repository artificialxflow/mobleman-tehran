'use client';

import { useState, useEffect } from 'react';
import StatsCards from './dashboard/StatsCards';
import ChartsSection from './dashboard/ChartsSection';
import RecentActivity from './dashboard/RecentActivity';
import QuickActions from './dashboard/QuickActions';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">داشبورد مدیریت</h2>
          <p className="text-muted mb-0">مرور کلی عملکرد سیستم و آمارهای مهم</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary">
            <i className="bi bi-download me-2"></i>
            دریافت گزارش
          </button>
          <button className="btn btn-gradient-primary">
            <i className="bi bi-plus-lg me-2"></i>
            سفارش جدید
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts and Activity */}
      <div className="row mt-4">
        <div className="col-lg-8">
          <ChartsSection />
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-12 mb-3">
              <QuickActions />
            </div>
            <div className="col-12">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
