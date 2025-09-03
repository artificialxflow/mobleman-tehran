'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function HumanResourcesWorkflowPage() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">ورک‌فلو منابع انسانی</h2>
            <p className="text-muted mb-0">پردازش درخواست‌های مرخصی و مدیریت حقوق و دستمزد</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-calendar-check me-2"></i>
                  ورک‌فلو مرخصی
                </h5>
              </div>
              <div className="card-body">
                <div className="workflow-steps-hr">
                  <div className="hr-step">
                    <div className="step-number bg-primary text-white">1</div>
                    <div className="step-content">
                      <h6>درخواست کارمند</h6>
                      <p className="small text-muted">کارمند از طریق سیستم درخواست مرخصی ارسال می‌کند</p>
                      <div className="step-tech">
                        <span className="badge bg-info">Form Submit</span>
                        <span className="badge bg-success">Auto Validation</span>
                      </div>
                    </div>
                  </div>

                  <div className="hr-step">
                    <div className="step-number bg-warning text-white">2</div>
                    <div className="step-content">
                      <h6>بررسی موجودی</h6>
                      <p className="small text-muted">چک کردن موجودی مرخصی و قوانین شرکت</p>
                      <div className="step-tech">
                        <span className="badge bg-secondary">Database Check</span>
                        <span className="badge bg-info">Policy Validation</span>
                      </div>
                    </div>
                  </div>

                  <div className="hr-step">
                    <div className="step-number bg-info text-white">3</div>
                    <div className="step-content">
                      <h6>تایید سرپرست</h6>
                      <p className="small text-muted">ارسال درخواست برای تایید سرپرست مستقیم</p>
                      <div className="step-tech">
                        <span className="badge bg-warning">Email Notification</span>
                        <span className="badge bg-primary">SMS Alert</span>
                      </div>
                    </div>
                  </div>

                  <div className="hr-step">
                    <div className="step-number bg-secondary text-white">4</div>
                    <div className="step-content">
                      <h6>تایید مدیر HR</h6>
                      <p className="small text-muted">تایید نهایی توسط بخش منابع انسانی</p>
                      <div className="step-tech">
                        <span className="badge bg-success">Final Approval</span>
                      </div>
                    </div>
                  </div>

                  <div className="hr-step">
                    <div className="step-number bg-success text-white">5</div>
                    <div className="step-content">
                      <h6>اطلاع‌رسانی و ثبت</h6>
                      <p className="small text-muted">اطلاع‌رسانی نتیجه و ثبت در تقویم کاری</p>
                      <div className="step-tech">
                        <span className="badge bg-primary">Calendar Sync</span>
                        <span className="badge bg-info">Report Update</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">
                  <i className="bi bi-cash-coin me-2"></i>
                  ورک‌فلو حقوق و دستمزد
                </h5>
              </div>
              <div className="card-body">
                <div className="workflow-steps-hr">
                  <div className="hr-step">
                    <div className="step-number bg-primary text-white">1</div>
                    <div className="step-content">
                      <h6>جمع‌آوری داده‌ها</h6>
                      <p className="small text-muted">گردآوری ساعات کار، اضافه‌کاری و غیبت‌ها</p>
                      <div className="step-tech">
                        <span className="badge bg-info">Time Tracking</span>
                        <span className="badge bg-warning">Attendance Data</span>
                      </div>
                    </div>
                  </div>

                  <div className="hr-step">
                    <div className="step-number bg-warning text-white">2</div>
                    <div className="step-content">
                      <h6>محاسبه حقوق</h6>
                      <p className="small text-muted">محاسبه حقوق، پاداش، کسورات و مزایا</p>
                      <div className="step-tech">
                        <span className="badge bg-success">Auto Calculation</span>
                        <span className="badge bg-secondary">Tax Calculation</span>
                      </div>
                    </div>
                  </div>

                  <div className="hr-step">
                    <div className="step-number bg-info text-white">3</div>
                    <div className="step-content">
                      <h6>بررسی و تایید</h6>
                      <p className="small text-muted">بررسی نهایی توسط مدیر مالی</p>
                      <div className="step-tech">
                        <span className="badge bg-warning">Review Process</span>
                        <span className="badge bg-primary">Approval</span>
                      </div>
                    </div>
                  </div>

                  <div className="hr-step">
                    <div className="step-number bg-secondary text-white">4</div>
                    <div className="step-content">
                      <h6>صدور فیش حقوقی</h6>
                      <p className="small text-muted">تولید و ارسال فیش حقوقی به کارمندان</p>
                      <div className="step-tech">
                        <span className="badge bg-success">PDF Generation</span>
                        <span className="badge bg-info">Email Send</span>
                      </div>
                    </div>
                  </div>

                  <div className="hr-step">
                    <div className="step-number bg-success text-white">5</div>
                    <div className="step-content">
                      <h6>واریز حقوق</h6>
                      <p className="small text-muted">انجام واریز از طریق سیستم بانکی</p>
                      <div className="step-tech">
                        <span className="badge bg-primary">Bank Transfer</span>
                        <span className="badge bg-warning">Confirmation</span>
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
                  <p>این ورک‌فلو تمام فرآیندهای منابع انسانی از درخواست مرخصی تا پرداخت حقوق را خودکارسازی کرده و مدیریت کارآمد پرسنل را تضمین می‌کند.</p>
                  
                  <h6 className="mt-4">ویژگی‌های کلیدی:</h6>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle text-success me-2"></i>پردازش خودکار درخواست‌های مرخصی</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>محاسبه دقیق حقوق و دستمزد</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>تایید چندمرحله‌ای درخواست‌ها</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>صدور خودکار فیش حقوقی</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>واریز خودکار حقوق از طریق سیستم بانکی</li>
                  </ul>
                  
                  <h6 className="mt-4">مزایای استفاده:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>سرعت:</strong> پردازش سریع درخواست‌ها
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>دقت:</strong> محاسبه دقیق حقوق و کسورات
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>شفافیت:</strong> فرآیند شفاف و قابل پیگیری
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>کارایی:</strong> کاهش کارهای دستی و خطا</div>
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
                  <i className="bi bi-graph-up me-2"></i>
                  آمار مرخصی‌ها
                </h5>
              </div>
              <div className="card-body">
                <div className="stat-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>درخواست‌های امروز:</span>
                    <strong className="text-primary">7</strong>
                  </div>
                </div>
                
                <div className="stat-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>تایید شده:</span>
                    <strong className="text-success">5</strong>
                  </div>
                </div>

                <div className="stat-item mb-3">
                  <div className="d-flex justify-content-between">
                    <span>رد شده:</span>
                    <strong className="text-danger">1</strong>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="d-flex justify-content-between">
                    <span>در انتظار:</span>
                    <strong className="text-warning">3</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-calendar3 me-2"></i>
                  تقویم مرخصی‌ها
                </h5>
              </div>
              <div className="card-body">
                <div className="calendar-view">
                  <div className="calendar-day mb-2">
                    <div className="d-flex justify-content-between">
                      <span>امروز (15 بهمن):</span>
                      <strong className="text-warning">2 نفر</strong>
                    </div>
                  </div>
                  <div className="calendar-day mb-2">
                    <div className="d-flex justify-content-between">
                      <span>فردا (16 بهمن):</span>
                      <strong className="text-info">3 نفر</strong>
                    </div>
                  </div>
                  <div className="calendar-day mb-2">
                    <div className="d-flex justify-content-between">
                      <span>هفته آینده:</span>
                      <strong className="text-primary">8 نفر</strong>
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
                <div className="alert alert-warning">
                  <small>
                    <strong>توجه:</strong> 3 درخواست مرخصی بیش از 48 ساعت بدون پاسخ
                  </small>
                </div>
                <div className="alert alert-info">
                  <small>
                    <strong>یادآور:</strong> پردازش حقوق ماه جاری در 5 روز آینده
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hr-step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .hr-step:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        
        .step-number {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-left: 1rem;
          flex-shrink: 0;
        }
        
        .step-content {
          flex: 1;
        }
        
        .step-tech {
          margin-top: 0.5rem;
        }
        
        .stat-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .stat-item:last-child {
          border-bottom: none;
        }
        
        .calendar-day {
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 0.25rem;
          border: 1px solid #e9ecef;
        }
      `}</style>
    </Layout>
  );
}
