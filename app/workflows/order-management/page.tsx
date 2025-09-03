'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function OrderManagementWorkflowPage() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">ورک‌فلو مدیریت سفارشات</h2>
            <p className="text-muted mb-0">خودکارسازی فرآیند دریافت، بررسی و پردازش سفارشات</p>
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
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-diagram-3 me-2"></i>
                  مراحل ورک‌فلو
                </h5>
              </div>
              <div className="card-body">
                <div className="workflow-steps">
                  <div className="step active">
                    <div className="step-icon">
                      <i className="bi bi-webhook"></i>
                    </div>
                    <div className="step-content">
                      <h6>دریافت سفارش</h6>
                      <p className="mb-0">دریافت سفارش از طریق Webhook از وب‌سایت یا اپلیکیشن</p>
                      <small className="text-muted">Trigger: HTTP Webhook</small>
                    </div>
                  </div>

                  <div className="step-connector"></div>

                  <div className="step">
                    <div className="step-icon">
                      <i className="bi bi-database"></i>
                    </div>
                    <div className="step-content">
                      <h6>بررسی موجودی</h6>
                      <p className="mb-0">چک کردن موجودی محصولات و مواد اولیه مورد نیاز</p>
                      <small className="text-muted">Action: PostgreSQL Query</small>
                    </div>
                  </div>

                  <div className="step-connector"></div>

                  <div className="step">
                    <div className="step-icon">
                      <i className="bi bi-question-diamond"></i>
                    </div>
                    <div className="step-content">
                      <h6>تصمیم‌گیری</h6>
                      <p className="mb-0">اگر موجودی کافی است → تایید سفارش، اگر نه → اطلاع‌رسانی کمبود</p>
                      <small className="text-muted">Action: Conditional Logic</small>
                    </div>
                  </div>

                  <div className="step-connector"></div>

                  <div className="step">
                    <div className="step-icon">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="step-content">
                      <h6>ارسال تایید</h6>
                      <p className="mb-0">ارسال ایمیل/SMS تایید سفارش به مشتری</p>
                      <small className="text-muted">Action: Email/SMS Send</small>
                    </div>
                  </div>

                  <div className="step-connector"></div>

                  <div className="step">
                    <div className="step-icon">
                      <i className="bi bi-bell"></i>
                    </div>
                    <div className="step-content">
                      <h6>اطلاع‌رسانی تولید</h6>
                      <p className="mb-0">اطلاع‌رسانی به تیم تولید از طریق Slack/Teams</p>
                      <small className="text-muted">Action: Slack Notification</small>
                    </div>
                  </div>

                  <div className="step-connector"></div>

                  <div className="step">
                    <div className="step-icon">
                      <i className="bi bi-arrow-clockwise"></i>
                    </div>
                    <div className="step-content">
                      <h6>بروزرسانی وضعیت</h6>
                      <p className="mb-0">بروزرسانی وضعیت سفارش در دیتابیس</p>
                      <small className="text-muted">Action: Database Update</small>
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
                  <p>این ورک‌فلو به صورت خودکار سفارشات جدید را پردازش کرده و تمام مراحل از دریافت تا تایید نهایی را مدیریت می‌کند.</p>
                  
                  <h6 className="mt-4">ویژگی‌های کلیدی:</h6>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle text-success me-2"></i>بررسی خودکار موجودی محصولات</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>ارسال تایید فوری به مشتری</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>اطلاع‌رسانی خودکار به تیم تولید</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>بروزرسانی وضعیت سفارش در سیستم</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>مدیریت خطاها و هشدارهای کمبود موجودی</li>
                  </ul>
                  
                  <h6 className="mt-4">مزایای استفاده:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>سرعت:</strong> پردازش فوری سفارشات
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>دقت:</strong> کاهش خطاهای انسانی
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>شفافیت:</strong> پیگیری کامل فرآیند
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>کارایی:</strong> کاهش زمان پاسخ‌دهی
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
                  <i className="bi bi-info-circle me-2"></i>
                  اطلاعات ورک‌فلو
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-bold">وضعیت:</label>
                  <span className="badge bg-success ms-2">فعال</span>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">آخرین اجرا:</label>
                  <p className="mb-0">2 ساعت پیش</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">تعداد اجرا امروز:</label>
                  <p className="mb-0">23 بار</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">نرخ موفقیت:</label>
                  <div className="progress mb-1">
                    <div className="progress-bar bg-success" style={{width: '96%'}}></div>
                  </div>
                  <small className="text-muted">96% (22 از 23)</small>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-gear me-2"></i>
                  تنظیمات
                </h5>
              </div>
              <div className="card-body">
                <div className="form-check form-switch mb-3">
                  <input className="form-check-input" type="checkbox" id="autoRun" checked />
                  <label className="form-check-label" htmlFor="autoRun">
                    اجرای خودکار
                  </label>
                </div>
                <div className="form-check form-switch mb-3">
                  <input className="form-check-input" type="checkbox" id="errorNotif" checked />
                  <label className="form-check-label" htmlFor="errorNotif">
                    اطلاع‌رسانی خطا
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">حداکثر تلاش مجدد:</label>
                  <input type="number" className="form-control" value="3" />
                </div>
                <button className="btn btn-primary btn-sm w-100">ذخیره تنظیمات</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-clock-history me-2"></i>
                  تاریخچه اجرا
                </h5>
              </div>
              <div className="card-body">
                <div className="execution-log">
                  <div className="execution-item success">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                      <small className="fw-bold">سفارش #1234</small>
                      <br />
                      <small className="text-muted">2 ساعت پیش</small>
                    </div>
                  </div>
                  <div className="execution-item success">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                      <small className="fw-bold">سفارش #1233</small>
                      <br />
                      <small className="text-muted">3 ساعت پیش</small>
                    </div>
                  </div>
                  <div className="execution-item error">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                      <small className="fw-bold">سفارش #1232</small>
                      <br />
                      <small className="text-muted">5 ساعت پیش</small>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-primary btn-sm w-100 mt-3">مشاهده همه</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .workflow-steps {
          position: relative;
        }
        
        .step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .step-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #e9ecef;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        
        .step.active .step-icon {
          background: #0d6efd;
          color: white;
        }
        
        .step-content {
          flex: 1;
        }
        
        .step-connector {
          position: absolute;
          right: 25px;
          width: 2px;
          height: 40px;
          background: #dee2e6;
          margin-top: 50px;
          margin-bottom: -40px;
          z-index: 1;
        }
        
        .execution-log {
          max-height: 200px;
          overflow-y: auto;
        }
        
        .execution-item {
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .execution-item i {
          margin-left: 0.5rem;
        }
        
        .execution-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </Layout>
  );
}
