'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function InventoryManagementWorkflowPage() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">ورک‌فلو مدیریت موجودی</h2>
            <p className="text-muted mb-0">نظارت خودکار بر موجودی و هشدار کمبود مواد اولیه</p>
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
                  فرآیند مدیریت موجودی
                </h5>
              </div>
              <div className="card-body">
                <div className="workflow-description">
                  <h6>هدف ورک‌فلو:</h6>
                  <p>این ورک‌فلو به صورت روزانه موجودی تمام اقلام را بررسی کرده و در صورت رسیدن به حد مجاز، هشدارهای لازم را ارسال می‌کند.</p>
                  
                  <h6 className="mt-4">مراحل عملیاتی:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="process-step mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <div className="step-number bg-primary text-white rounded-circle me-2">1</div>
                          <strong>برنامه‌ریزی روزانه</strong>
                        </div>
                        <p className="small text-muted ms-4">هر روز ساعت 8 صبح ورک‌فلو اجرا می‌شود</p>
                      </div>

                      <div className="process-step mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <div className="step-number bg-primary text-white rounded-circle me-2">2</div>
                          <strong>بررسی موجودی</strong>
                        </div>
                        <p className="small text-muted ms-4">چک کردن موجودی تمام محصولات و مواد اولیه</p>
                      </div>

                      <div className="process-step mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <div className="step-number bg-primary text-white rounded-circle me-2">3</div>
                          <strong>شناسایی کمبود</strong>
                        </div>
                        <p className="small text-muted ms-4">مقایسه موجودی فعلی با حداقل مجاز</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="process-step mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <div className="step-number bg-warning text-white rounded-circle me-2">4</div>
                          <strong>ارسال هشدار</strong>
                        </div>
                        <p className="small text-muted ms-4">اطلاع‌رسانی به مدیر انبار و تامین‌کنندگان</p>
                      </div>

                      <div className="process-step mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <div className="step-number bg-success text-white rounded-circle me-2">5</div>
                          <strong>ثبت درخواست خرید</strong>
                        </div>
                        <p className="small text-muted ms-4">ایجاد خودکار درخواست خرید در سیستم</p>
                      </div>

                      <div className="process-step mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <div className="step-number bg-info text-white rounded-circle me-2">6</div>
                          <strong>گزارش‌گیری</strong>
                        </div>
                        <p className="small text-muted ms-4">ارسال گزارش وضعیت موجودی به مدیران</p>
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
                  <p>این ورک‌فلو به صورت خودکار موجودی تمام اقلام را نظارت کرده و در صورت رسیدن به حد مجاز، هشدارهای لازم را ارسال می‌کند.</p>
                  
                  <h6 className="mt-4">ویژگی‌های کلیدی:</h6>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle text-success me-2"></i>بررسی روزانه موجودی تمام محصولات</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>شناسایی خودکار کمبود مواد اولیه</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>ارسال هشدار به مدیران و تامین‌کنندگان</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>ایجاد خودکار درخواست خرید</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>گزارش‌گیری دوره‌ای وضعیت موجودی</li>
                  </ul>
                  
                  <h6 className="mt-4">مزایای استفاده:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>پیشگیری:</strong> جلوگیری از کمبود مواد اولیه
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>هوشمندی:</strong> تشخیص زودهنگام مشکلات
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>کارایی:</strong> کاهش توقف تولید
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>مدیریت:</strong> کنترل بهتر موجودی</div>
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
                  <i className="bi bi-clock me-2"></i>
                  برنامه‌ریزی
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">زمان اجرا:</label>
                  <select className="form-select">
                    <option>08:00 صبح (روزانه)</option>
                    <option>هر 6 ساعت</option>
                    <option>هر 12 ساعت</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="weekendRun" checked />
                  <label className="form-check-label" htmlFor="weekendRun">
                    اجرا در تعطیلات
                  </label>
                </div>
                <button className="btn btn-primary w-100">ذخیره برنامه</button>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-speedometer2 me-2"></i>
                  آمار عملکرد
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>اجرای موفق:</span>
                    <strong className="text-success">28/30</strong>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-success" style={{width: '93%'}}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>هشدار ارسال شده:</span>
                    <strong>15</strong>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>کالای کم‌موجود:</span>
                    <strong className="text-warning">3</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  هشدارهای اخیر
                </h5>
              </div>
              <div className="card-body">
                <div className="alert-item mb-2">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-circle-fill text-danger me-2" style={{fontSize: '8px'}}></i>
                    <div>
                      <small className="fw-bold">پارچه قرمز</small>
                      <br />
                      <small className="text-muted">30 دقیقه پیش</small>
                    </div>
                  </div>
                </div>
                <div className="alert-item mb-2">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-circle-fill text-warning me-2" style={{fontSize: '8px'}}></i>
                    <div>
                      <small className="fw-bold">فنر سایز M</small>
                      <br />
                      <small className="text-muted">2 ساعت پیش</small>
                    </div>
                  </div>
                </div>
                <div className="alert-item">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-circle-fill text-info me-2" style={{fontSize: '8px'}}></i>
                    <div>
                      <small className="fw-bold">چوب راش</small>
                      <br />
                      <small className="text-muted">5 ساعت پیش</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .step-number {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }
        
        .process-step {
          padding: 1rem;
          border: 1px solid #e9ecef;
          border-radius: 0.5rem;
          background: #f8f9fa;
        }
      `}</style>
    </Layout>
  );
}
