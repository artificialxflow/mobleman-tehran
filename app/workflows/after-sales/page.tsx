'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function AfterSalesWorkflowPage() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">ورک‌فلو خدمات پس از فروش</h2>
            <p className="text-muted mb-0">مدیریت درخواست‌های خدمات و پیگیری تا حل مشکل</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-headset me-2"></i>
                  فرآیند خدمات پس از فروش
                </h5>
              </div>
              <div className="card-body">
                <p className="text-muted mb-4">
                  این ورک‌فلو برای مدیریت کامل درخواست‌های خدمات پس از فروش طراحی شده و شامل تمام مراحل از دریافت درخواست تا حل نهایی مشکل است.
                </p>
                
                <div className="workflow-timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker bg-primary"></div>
                    <div className="timeline-content">
                      <h6>دریافت درخواست</h6>
                      <p>مشتری از طریق فرم آنلاین، تماس تلفنی یا ایمیل درخواست خدمات ارسال می‌کند</p>
                      <div className="timeline-details">
                        <span className="badge bg-info me-2">Form Submit</span>
                        <span className="badge bg-success me-2">Auto Response</span>
                        <span className="badge bg-warning">Ticket Creation</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker bg-warning"></div>
                    <div className="timeline-content">
                      <h6>طبقه‌بندی و تخصیص</h6>
                      <p>درخواست بر اساس نوع مشکل طبقه‌بندی و به تکنسین مناسب تخصیص می‌یابد</p>
                      <div className="timeline-details">
                        <span className="badge bg-primary me-2">AI Classification</span>
                        <span className="badge bg-info me-2">Auto Assignment</span>
                        <span className="badge bg-success">SMS Alert</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker bg-info"></div>
                    <div className="timeline-content">
                      <h6>برنامه‌ریزی بازدید</h6>
                      <p>تکنسین با مشتری تماس گرفته و زمان بازدید هماهنگ می‌کند</p>
                      <div className="timeline-details">
                        <span className="badge bg-warning me-2">Calendar Sync</span>
                        <span className="badge bg-primary me-2">SMS Reminder</span>
                        <span className="badge bg-info">Route Planning</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker bg-secondary"></div>
                    <div className="timeline-content">
                      <h6>انجام خدمات</h6>
                      <p>تکنسین خدمات مورد نیاز را انجام داده و گزارش کار را ثبت می‌کند</p>
                      <div className="timeline-details">
                        <span className="badge bg-success me-2">Mobile Report</span>
                        <span className="badge bg-info me-2">Photo Upload</span>
                        <span className="badge bg-warning">Parts Used</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker bg-success"></div>
                    <div className="timeline-content">
                      <h6>تکمیل و نظرسنجی</h6>
                      <p>پس از تایید مشتری، فرم نظرسنجی ارسال و پرونده بسته می‌شود</p>
                      <div className="timeline-details">
                        <span className="badge bg-primary me-2">Customer Approval</span>
                        <span className="badge bg-success me-2">Survey</span>
                        <span className="badge bg-dark">Case Closure</span>
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
                  <p>این ورک‌فلو تمام درخواست‌های خدمات پس از فروش را از دریافت تا حل نهایی مدیریت کرده و کیفیت خدمات را تضمین می‌کند.</p>
                  
                  <h6 className="mt-4">ویژگی‌های کلیدی:</h6>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle text-success me-2"></i>دریافت و طبقه‌بندی خودکار درخواست‌ها</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>تخصیص هوشمند به تکنسین‌های مناسب</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>برنامه‌ریزی خودکار بازدیدها</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>پیگیری کامل فرآیند خدمات</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>نظرسنجی و ارزیابی رضایت مشتری</li>
                  </ul>
                  
                  <h6 className="mt-4">مزایای استفاده:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>سرعت:</strong> پاسخ‌دهی سریع به درخواست‌ها
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>کیفیت:</strong> خدمات استاندارد و باکیفیت
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>رضایت:</strong> افزایش رضایت مشتریان
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>مدیریت:</strong> نظارت کامل بر خدمات
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
                  <i className="bi bi-graph-up me-2"></i>
                  آمار عملکرد
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>میانگین زمان پاسخ:</span>
                    <strong>15 دقیقه</strong>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-success" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>رضایت مشتریان:</span>
                    <strong>4.7/5</strong>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" style={{width: '94%'}}></div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>تیکت‌های امروز:</span>
                    <strong className="text-info">12</strong>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>حل شده امروز:</span>
                    <strong className="text-success">8</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-people me-2"></i>
                  تکنسین‌ها
                </h5>
              </div>
              <div className="card-body">
                <div className="technician-list">
                  <div className="technician-item mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>محمد رضایی</strong>
                        <br />
                        <small className="text-muted">تعمیرات عمومی</small>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-success">آنلاین</span>
                        <br />
                        <small>3 تیکت فعال</small>
                      </div>
                    </div>
                  </div>

                  <div className="technician-item mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>حسن کریمی</strong>
                        <br />
                        <small className="text-muted">رویه‌کشی</small>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-warning">مشغول</span>
                        <br />
                        <small>1 تیکت فعال</small>
                      </div>
                    </div>
                  </div>

                  <div className="technician-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>علی صادقی</strong>
                        <br />
                        <small className="text-muted">نجاری</small>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-danger">آفلاین</span>
                        <br />
                        <small>0 تیکت فعال</small>
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
        .workflow-timeline {
          position: relative;
          padding: 2rem 0;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-right: 3rem;
        }
        
        .timeline-marker {
          position: absolute;
          right: -8px;
          top: 8px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #dee2e6;
        }
        
        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -1px;
          top: 24px;
          width: 2px;
          height: calc(100% + 1rem);
          background: #dee2e6;
        }
        
        .timeline-content {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid #dee2e6;
        }
        
        .timeline-details {
          margin-top: 1rem;
        }
        
        .technician-item {
          padding: 1rem 0;
          border-bottom: 1px solid #e9ecef;
        }
        
        .technician-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </Layout>
  );
}
