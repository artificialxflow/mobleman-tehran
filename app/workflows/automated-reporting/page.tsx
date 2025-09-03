'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function AutomatedReportingWorkflowPage() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">ورک‌فلو گزارش‌گیری خودکار</h2>
            <p className="text-muted mb-0">تولید و ارسال گزارش‌های دوره‌ای به مدیران</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header bg-dark text-white">
                <h5 className="mb-0">
                  <i className="bi bi-file-earmark-bar-graph me-2"></i>
                  انواع گزارش‌های خودکار
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="report-type-card daily">
                      <div className="report-header">
                        <i className="bi bi-calendar-day"></i>
                        <h6>گزارش‌های روزانه</h6>
                      </div>
                      <div className="report-list">
                        <ul className="list-unstyled">
                          <li>📊 خلاصه فروش روزانه</li>
                          <li>🏭 وضعیت تولید</li>
                          <li>📦 تراکنش‌های انبار</li>
                          <li>💰 گردش مالی</li>
                          <li>👥 حضور و غیاب پرسنل</li>
                        </ul>
                      </div>
                      <div className="report-time">
                        <span className="badge bg-primary">ساعت 20:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="report-type-card weekly">
                      <div className="report-header">
                        <i className="bi bi-calendar-week"></i>
                        <h6>گزارش‌های هفتگی</h6>
                      </div>
                      <div className="report-list">
                        <ul className="list-unstyled">
                          <li>📈 تحلیل عملکرد فروش</li>
                          <li>🎯 وضعیت اهداف</li>
                          <li>🏪 گزارش نمایندگی‌ها</li>
                          <li>⚙️ بهره‌وری تولید</li>
                          <li>🛠️ خدمات پس از فروش</li>
                        </ul>
                      </div>
                      <div className="report-time">
                        <span className="badge bg-success">یکشنبه 09:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="report-type-card monthly">
                      <div className="report-header">
                        <i className="bi bi-calendar-month"></i>
                        <h6>گزارش‌های ماهانه</h6>
                      </div>
                      <div className="report-list">
                        <ul className="list-unstyled">
                          <li>💼 گزارش جامع مالی</li>
                          <li>📊 تحلیل بازار</li>
                          <li>👨‍💼 عملکرد کارمندان</li>
                          <li>📋 خلاصه عملیاتی</li>
                          <li>🎯 ارزیابی KPI ها</li>
                        </ul>
                      </div>
                      <div className="report-time">
                        <span className="badge bg-warning">اول ماه 08:00</span>
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
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-gear-wide-connected me-2"></i>
                  فرآیند تولید گزارش
                </h5>
              </div>
              <div className="card-body">
                <div className="process-flow-reporting">
                  <div className="flow-step-report active">
                    <div className="step-icon">
                      <i className="bi bi-play-circle"></i>
                    </div>
                    <div className="step-details">
                      <h6>شروع زمان‌بندی</h6>
                      <p>ورک‌فلو بر اساس برنامه تعریف شده شروع می‌شود</p>
                      <div className="step-badges">
                        <span className="badge bg-info">Schedule Trigger</span>
                      </div>
                    </div>
                  </div>

                  <div className="arrow-down"></div>

                  <div className="flow-step-report">
                    <div className="step-icon">
                      <i className="bi bi-database"></i>
                    </div>
                    <div className="step-details">
                      <h6>جمع‌آوری داده‌ها</h6>
                      <p>استخراج داده‌ها از دیتابیس، API ها و سیستم‌های خارجی</p>
                      <div className="step-badges">
                        <span className="badge bg-primary">PostgreSQL</span>
                        <span className="badge bg-success">API Calls</span>
                      </div>
                    </div>
                  </div>

                  <div className="arrow-down"></div>

                  <div className="flow-step-report">
                    <div className="step-icon">
                      <i className="bi bi-calculator"></i>
                    </div>
                    <div className="step-details">
                      <h6>پردازش و محاسبه</h6>
                      <p>تحلیل داده‌ها، محاسبه متریک‌ها و آماده‌سازی نمودارها</p>
                      <div className="step-badges">
                        <span className="badge bg-warning">Data Processing</span>
                        <span className="badge bg-info">Chart Generation</span>
                      </div>
                    </div>
                  </div>

                  <div className="arrow-down"></div>

                  <div className="flow-step-report">
                    <div className="step-icon">
                      <i className="bi bi-file-pdf"></i>
                    </div>
                    <div className="step-details">
                      <h6>تولید گزارش</h6>
                      <p>ایجاد فایل PDF با قالب‌بندی مناسب و نمودارهای تصویری</p>
                      <div className="step-badges">
                        <span className="badge bg-danger">PDF Generation</span>
                        <span className="badge bg-secondary">Template Engine</span>
                      </div>
                    </div>
                  </div>

                  <div className="arrow-down"></div>

                  <div className="flow-step-report">
                    <div className="step-icon">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="step-details">
                      <h6>ارسال گزارش</h6>
                      <p>ارسال گزارش به مدیران از طریق ایمیل و ذخیره در سیستم</p>
                      <div className="step-badges">
                        <span className="badge bg-primary">Email Send</span>
                        <span className="badge bg-success">Cloud Storage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                  <p>این ورک‌فلو به صورت خودکار گزارش‌های دوره‌ای را تولید کرده و به مدیران ارسال می‌کند تا تصمیم‌گیری‌های بهتری داشته باشند.</p>
                  
                  <h6 className="mt-4">ویژگی‌های کلیدی:</h6>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle text-success me-2"></i>تولید خودکار گزارش‌های روزانه، هفتگی و ماهانه</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>جمع‌آوری داده‌ها از منابع مختلف</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>پردازش و تحلیل داده‌ها</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>تولید نمودارها و جداول تصویری</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>ارسال خودکار به مدیران مربوطه</li>
                  </ul>
                  
                  <h6 className="mt-4">مزایای استفاده:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>دقت:</strong> گزارش‌های دقیق و به‌روز
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>سرعت:</strong> تولید فوری گزارش‌ها
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>تصمیم‌گیری:</strong> اطلاعات کامل برای مدیران
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>کارایی:</strong> کاهش کارهای دستی</div>
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
                  <i className="bi bi-speedometer2 me-2"></i>
                  آمار عملکرد
                </h5>
              </div>
              <div className="card-body">
                <div className="performance-stat mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>نرخ موفقیت:</span>
                    <strong className="text-success">98.5%</strong>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-success" style={{width: '98.5%'}}></div>
                  </div>
                </div>

                <div className="performance-stat mb-3">
                  <div className="d-flex justify-content-between">
                    <span>گزارش‌های امروز:</span>
                    <strong className="text-primary">12</strong>
                  </div>
                </div>

                <div className="performance-stat mb-3">
                  <div className="d-flex justify-content-between">
                    <span>گزارش‌های هفته:</span>
                    <strong className="text-info">84</strong>
                  </div>
                </div>

                <div className="performance-stat">
                  <div className="d-flex justify-content-between">
                    <span>میانگین زمان تولید:</span>
                    <strong className="text-warning">3.2 دقیقه</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-people me-2"></i>
                  گیرندگان گزارش
                </h5>
              </div>
              <div className="card-body">
                <div className="recipient-list">
                  <div className="recipient-item mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person-circle text-primary me-2"></i>
                      <div>
                        <strong>مدیر عامل</strong>
                        <br />
                        <small className="text-muted">تمام گزارش‌ها</small>
                      </div>
                    </div>
                  </div>

                  <div className="recipient-item mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person-circle text-success me-2"></i>
                      <div>
                        <strong>مدیر فروش</strong>
                        <br />
                        <small className="text-muted">گزارش‌های فروش</small>
                      </div>
                    </div>
                  </div>

                  <div className="recipient-item mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person-circle text-warning me-2"></i>
                      <div>
                        <strong>مدیر تولید</strong>
                        <br />
                        <small className="text-muted">گزارش‌های تولید</small>
                      </div>
                    </div>
                  </div>

                  <div className="recipient-item">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person-circle text-info me-2"></i>
                      <div>
                        <strong>مدیر مالی</strong>
                        <br />
                        <small className="text-muted">گزارش‌های مالی</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  هشدارها
                </h5>
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  <small>
                    <i className="bi bi-info-circle me-1"></i>
                    گزارش ماهانه در حال آماده‌سازی
                  </small>
                </div>
                <div className="alert alert-success">
                  <small>
                    <i className="bi bi-check-circle me-1"></i>
                    تمام گزارش‌های روزانه با موفقیت ارسال شد
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .report-type-card {
          border: 2px solid #dee2e6;
          border-radius: 1rem;
          padding: 1.5rem;
          height: 100%;
          transition: all 0.3s ease;
        }
        
        .report-type-card.daily {
          border-color: #0d6efd;
        }
        
        .report-type-card.weekly {
          border-color: #198754;
        }
        
        .report-type-card.monthly {
          border-color: #ffc107;
        }
        
        .report-header {
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .report-header i {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .report-list ul li {
          padding: 0.25rem 0;
          font-size: 0.9rem;
        }
        
        .report-time {
          text-align: center;
          margin-top: 1rem;
        }
        
        .flow-step-report {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 0.5rem;
          border: 1px solid #dee2e6;
        }
        
        .flow-step-report.active {
          background: #e7f3ff;
          border-color: #0d6efd;
        }
        
        .step-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #0d6efd;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
          flex-shrink: 0;
        }
        
        .step-details {
          flex: 1;
        }
        
        .step-badges {
          margin-top: 0.5rem;
        }
        
        .arrow-down {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 15px solid #dee2e6;
          margin: 0 auto 1rem;
        }
        
        .performance-stat {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .performance-stat:last-child {
          border-bottom: none;
        }
        
        .recipient-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .recipient-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </Layout>
  );
}
