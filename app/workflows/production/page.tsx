'use client';

import React from 'react';

export default function ProductionWorkflowPage() {
  return (
      <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">ورک‌فلو تولید</h2>
            <p className="text-muted mb-0">پیگیری مراحل تولید و اطلاع‌رسانی به مشتریان</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">
              <i className="bi bi-pencil me-2"></i>
              ویرایش ورک‌فلو
            </button>
            <button className="btn btn-gradient-primary">
              <i className="bi bi-play me-2"></i>
              اجرای دستی
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-gear-wide-connected me-2"></i>
                  مراحل ورک‌فلو تولید
                </h5>
              </div>
              <div className="card-body">
                <div className="production-workflow">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="stage-card mb-3">
                        <div className="stage-header bg-primary text-white">
                          <h6 className="mb-0">
                            <i className="bi bi-play-circle me-2"></i>
                            شروع تولید
                          </h6>
                        </div>
                        <div className="stage-body">
                          <p><strong>عامل:</strong> اپراتور تولید</p>
                          <p><strong>عملیات:</strong> ثبت شروع کار در سیستم</p>
                          <p><strong>خروجی:</strong> اطلاع‌رسانی به مشتری</p>
                          <div className="d-flex gap-2 mt-2">
                            <span className="badge bg-info">SMS</span>
                            <span className="badge bg-success">Email</span>
                          </div>
                        </div>
                      </div>

                      <div className="stage-card mb-3">
                        <div className="stage-header bg-warning text-dark">
                          <h6 className="mb-0">
                            <i className="bi bi-hammer me-2"></i>
                            ساخت اسکلت
                          </h6>
                        </div>
                        <div className="stage-body">
                          <p><strong>مدت زمان:</strong> 2-3 روز</p>
                          <p><strong>عملیات:</strong> آپلود عکس پیشرفت</p>
                          <p><strong>خروجی:</strong> گزارش تصویری به مشتری</p>
                          <div className="d-flex gap-2 mt-2">
                            <span className="badge bg-primary">WhatsApp</span>
                          </div>
                        </div>
                      </div>

                      <div className="stage-card mb-3">
                        <div className="stage-header bg-info text-white">
                          <h6 className="mb-0">
                            <i className="bi bi-palette me-2"></i>
                            رویه‌کشی و نهایی‌سازی
                          </h6>
                        </div>
                        <div className="stage-body">
                          <p><strong>مدت زمان:</strong> 1-2 روز</p>
                          <p><strong>عملیات:</strong> ثبت تکمیل در سیستم</p>
                          <p><strong>خروجی:</strong> اطلاع آمادگی برای تحویل</p>
                          <div className="d-flex gap-2 mt-2">
                            <span className="badge bg-success">Email</span>
                            <span className="badge bg-info">تماس تلفنی</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="stage-card mb-3">
                        <div className="stage-header bg-secondary text-white">
                          <h6 className="mb-0">
                            <i className="bi bi-clipboard-check me-2"></i>
                            کنترل کیفیت
                          </h6>
                        </div>
                        <div className="stage-body">
                          <p><strong>عامل:</strong> مسئول کیفیت</p>
                          <p><strong>عملیات:</strong> بررسی و تایید نهایی</p>
                          <p><strong>خروجی:</strong> گواهی کیفیت</p>
                          <div className="d-flex gap-2 mt-2">
                            <span className="badge bg-success">تایید کیفیت</span>
                          </div>
                        </div>
                      </div>

                      <div className="stage-card mb-3">
                        <div className="stage-header bg-success text-white">
                          <h6 className="mb-0">
                            <i className="bi bi-truck me-2"></i>
                            آماده تحویل
                          </h6>
                        </div>
                        <div className="stage-body">
                          <p><strong>عملیات:</strong> برنامه‌ریزی تحویل</p>
                          <p><strong>خروجی:</strong> هماهنگی زمان تحویل</p>
                          <div className="d-flex gap-2 mt-2">
                            <span className="badge bg-primary">SMS</span>
                            <span className="badge bg-warning">تماس</span>
                          </div>
                        </div>
                      </div>

                      <div className="stage-card mb-3">
                        <div className="stage-header bg-dark text-white">
                          <h6 className="mb-0">
                            <i className="bi bi-star me-2"></i>
                            نظرسنجی
                          </h6>
                        </div>
                        <div className="stage-body">
                          <p><strong>زمان:</strong> 3 روز پس از تحویل</p>
                          <p><strong>عملیات:</strong> ارسال فرم نظرسنجی</p>
                          <p><strong>خروجی:</strong> جمع‌آوری بازخورد</p>
                          <div className="d-flex gap-2 mt-2">
                            <span className="badge bg-info">Survey</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-info-circle me-2"></i>
                  توضیحات عملکرد
                </h5>
              </div>
              <div className="card-body">
                <div className="workflow-description">
                  <h6>هدف ورک‌فلو:</h6>
                  <p>این ورک‌فلو تمام مراحل تولید را از شروع تا تحویل نهایی پیگیری کرده و مشتریان را از پیشرفت کار مطلع می‌سازد.</p>
                  
                  <h6 className="mt-4">ویژگی‌های کلیدی:</h6>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle text-success me-2"></i>پیگیری خودکار مراحل تولید</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>اطلاع‌رسانی فوری به مشتریان</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>آپلود و ارسال عکس‌های پیشرفت</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>کنترل کیفیت خودکار</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>برنامه‌ریزی تحویل و نظرسنجی</li>
                  </ul>
                  
                  <h6 className="mt-4">مزایای استفاده:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>شفافیت:</strong> مشتریان از وضعیت کار مطلع می‌شوند
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>کیفیت:</strong> کنترل دقیق مراحل تولید
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>رضایت:</strong> افزایش رضایت مشتریان
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>مدیریت:</strong> نظارت بهتر بر فرآیند تولید
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-bar-chart me-2"></i>
                  آمار تولید امروز
                </h5>
              </div>
              <div className="card-body">
                <div className="stat-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>شروع تولید:</span>
                    <strong className="text-primary">3</strong>
                  </div>
                </div>
                <div className="stat-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>در حال ساخت:</span>
                    <strong className="text-warning">8</strong>
                  </div>
                </div>
                <div className="stat-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>تکمیل شده:</span>
                    <strong className="text-success">5</strong>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="d-flex justify-content-between">
                    <span>تحویل داده شده:</span>
                    <strong className="text-info">2</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-bell me-2"></i>
                  اطلاع‌رسانی‌های ارسال شده
                </h5>
              </div>
              <div className="card-body">
                <div className="notification-log">
                  <div className="notification-item mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-envelope text-primary me-2"></i>
                      <div>
                        <small>شروع تولید - احمد رضایی</small>
                        <br />
                        <small className="text-muted">30 دقیقه پیش</small>
                      </div>
                    </div>
                  </div>
                  <div className="notification-item mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-phone text-success me-2"></i>
                      <div>
                        <small>آماده تحویل - علی محمدی</small>
                        <br />
                        <small className="text-muted">1 ساعت پیش</small>
                      </div>
                    </div>
                  </div>
                  <div className="notification-item">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-whatsapp text-success me-2"></i>
                      <div>
                        <small>عکس پیشرفت - فاطمه احمدی</small>
                        <br />
                        <small className="text-muted">2 ساعت پیش</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stage-card {
          border: 1px solid #dee2e6;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .stage-header {
          padding: 0.75rem 1rem;
        }
        
        .stage-body {
          padding: 1rem;
          background: #f8f9fa;
        }
        
        .stat-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid #e9ecef;
        }
        
        .stat-item:last-child {
          border-bottom: none;
        }
        
        .notification-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .notification-item:last-child {
          border-bottom: none;
        }
      `}</style>
      </>
  );
}
