'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function WorkflowsPage() {
  const workflows = [
    {
      id: 1,
      title: 'مدیریت سفارشات',
      description: 'خودکارسازی فرآیند دریافت، بررسی و پردازش سفارشات مشتریان',
      icon: 'bi-cart-check',
      status: 'فعال',
      lastRun: '2 ساعت پیش',
      link: '/workflows/order-management'
    },
    {
      id: 2,
      title: 'مدیریت موجودی',
      description: 'نظارت خودکار بر موجودی و هشدار کمبود مواد اولیه',
      icon: 'bi-boxes',
      status: 'فعال',
      lastRun: '30 دقیقه پیش',
      link: '/workflows/inventory-management'
    },
    {
      id: 3,
      title: 'ورک‌فلو تولید',
      description: 'پیگیری مراحل تولید و اطلاع‌رسانی به مشتریان',
      icon: 'bi-gear-wide-connected',
      status: 'فعال',
      lastRun: '1 ساعت پیش',
      link: '/workflows/production'
    },
    {
      id: 4,
      title: 'خدمات پس از فروش',
      description: 'مدیریت درخواست‌های خدمات و پیگیری تا حل مشکل',
      icon: 'bi-headset',
      status: 'فعال',
      lastRun: '45 دقیقه پیش',
      link: '/workflows/after-sales'
    },
    {
      id: 5,
      title: 'مدیریت نمایندگی‌ها',
      description: 'محاسبه کمیسیون و ارسال گزارش عملکرد نمایندگان',
      icon: 'bi-people-fill',
      status: 'فعال',
      lastRun: '3 ساعت پیش',
      link: '/workflows/agency-management'
    },
    {
      id: 6,
      title: 'منابع انسانی',
      description: 'پردازش درخواست‌های مرخصی و مدیریت حقوق',
      icon: 'bi-person-badge-fill',
      status: 'فعال',
      lastRun: '6 ساعت پیش',
      link: '/workflows/human-resources'
    },
    {
      id: 7,
      title: 'گزارش‌گیری خودکار',
      description: 'تولید و ارسال گزارش‌های دوره‌ای به مدیران',
      icon: 'bi-file-earmark-bar-graph',
      status: 'فعال',
      lastRun: '12 ساعت پیش',
      link: '/workflows/automated-reporting'
    }
  ];

  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">مدیریت ورک‌فلوها</h2>
            <p className="text-muted mb-0">خودکارسازی فرآیندهای کسب و کار با n8n</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">
              <i className="bi bi-plus-lg me-2"></i>
              ورک‌فلو جدید
            </button>
            <button className="btn btn-gradient-primary">
              <i className="bi bi-gear me-2"></i>
              تنظیمات n8n
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-info-circle me-2"></i>
                  درباره ورک‌فلوهای سیستم
                </h5>
              </div>
              <div className="card-body">
                <p className="mb-3">
                  ورک‌فلوهای n8n به شما امکان خودکارسازی فرآیندهای مختلف کسب و کار را می‌دهند. 
                  هر ورک‌فلو شامل مجموعه‌ای از اقدامات مرتبط است که به صورت خودکار اجرا می‌شوند.
                </p>
                <div className="row">
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-flex mb-2">
                        <i className="bi bi-check-circle text-success fs-4"></i>
                      </div>
                      <h6>خودکارسازی</h6>
                      <small className="text-muted">کاهش کار دستی</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="bg-info bg-opacity-10 rounded-circle p-3 d-inline-flex mb-2">
                        <i className="bi bi-clock text-info fs-4"></i>
                      </div>
                      <h6>صرفه‌جویی زمان</h6>
                      <small className="text-muted">انجام سریع‌تر کارها</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-flex mb-2">
                        <i className="bi bi-shield-check text-warning fs-4"></i>
                      </div>
                      <h6>کاهش خطا</h6>
                      <small className="text-muted">دقت بیشتر در فرآیندها</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex mb-2">
                        <i className="bi bi-graph-up text-primary fs-4"></i>
                      </div>
                      <h6>بهبود کارایی</h6>
                      <small className="text-muted">افزایش بهره‌وری</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 hover-lift">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                      <i className={`${workflow.icon} text-primary fs-4`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-1">{workflow.title}</h5>
                      <span className="badge bg-success">{workflow.status}</span>
                    </div>
                  </div>
                  
                  <p className="card-text text-muted mb-3">{workflow.description}</p>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      آخرین اجرا: {workflow.lastRun}
                    </small>
                    <a href={workflow.link} className="btn btn-outline-primary btn-sm">
                      مشاهده جزئیات
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">آمار کلی ورک‌فلوها</h5>
              </div>
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-md-3">
                    <h3 className="text-primary">7</h3>
                    <p className="mb-0">ورک‌فلو فعال</p>
                  </div>
                  <div className="col-md-3">
                    <h3 className="text-success">156</h3>
                    <p className="mb-0">اجرای موفق امروز</p>
                  </div>
                  <div className="col-md-3">
                    <h3 className="text-warning">2</h3>
                    <p className="mb-0">نیاز به بررسی</p>
                  </div>
                  <div className="col-md-3">
                    <h3 className="text-info">98.5%</h3>
                    <p className="mb-0">نرخ موفقیت</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
