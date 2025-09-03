'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function AgencyManagementWorkflowPage() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">ورک‌فلو مدیریت نمایندگی‌ها</h2>
            <p className="text-muted mb-0">محاسبه کمیسیون و ارسال گزارش عملکرد نمایندگان</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-shop me-2"></i>
                  فرآیند مدیریت نمایندگی‌ها
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="text-primary mb-3">🔄 فرآیند ماهانه</h6>
                    <div className="process-flow">
                      <div className="flow-step mb-3">
                        <div className="d-flex align-items-center">
                          <div className="step-badge bg-primary text-white me-3">1</div>
                          <div>
                            <strong>جمع‌آوری داده‌های فروش</strong>
                            <p className="text-muted mb-0 small">گردآوری اطلاعات فروش هر نماینده از دیتابیس</p>
                          </div>
                        </div>
                      </div>

                      <div className="flow-step mb-3">
                        <div className="d-flex align-items-center">
                          <div className="step-badge bg-warning text-white me-3">2</div>
                          <div>
                            <strong>محاسبه کمیسیون</strong>
                            <p className="text-muted mb-0 small">محاسبه کمیسیون بر اساس نرخ‌های تعریف شده</p>
                          </div>
                        </div>
                      </div>

                      <div className="flow-step mb-3">
                        <div className="d-flex align-items-center">
                          <div className="step-badge bg-info text-white me-3">3</div>
                          <div>
                            <strong>تایید مدیریت</strong>
                            <p className="text-muted mb-0 small">ارسال گزارش برای تایید مدیر فروش</p>
                          </div>
                        </div>
                      </div>

                      <div className="flow-step">
                        <div className="d-flex align-items-center">
                          <div className="step-badge bg-success text-white me-3">4</div>
                          <div>
                            <strong>پرداخت و اطلاع‌رسانی</strong>
                            <p className="text-muted mb-0 small">انجام پرداخت و ارسال گزارش به نمایندگان</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h6 className="text-success mb-3">📊 قوانین کمیسیون</h6>
                    <div className="commission-rules">
                      <div className="rule-card mb-3">
                        <div className="rule-header bg-light p-2 rounded-top">
                          <strong>مبلمان معمولی</strong>
                        </div>
                        <div className="rule-body p-2 border border-top-0 rounded-bottom">
                          <div className="d-flex justify-content-between">
                            <span>نرخ پایه:</span>
                            <strong>8%</strong>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>فروش بالای 50M:</span>
                            <strong>10%</strong>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>فروش بالای 100M:</span>
                            <strong>12%</strong>
                          </div>
                        </div>
                      </div>

                      <div className="rule-card mb-3">
                        <div className="rule-header bg-light p-2 rounded-top">
                          <strong>مبلمان لوکس</strong>
                        </div>
                        <div className="rule-body p-2 border border-top-0 rounded-bottom">
                          <div className="d-flex justify-content-between">
                            <span>نرخ پایه:</span>
                            <strong>6%</strong>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>فروش بالای 30M:</span>
                            <strong>8%</strong>
                          </div>
                        </div>
                      </div>

                      <div className="rule-card">
                        <div className="rule-header bg-light p-2 rounded-top">
                          <strong>پاداش عملکرد</strong>
                        </div>
                        <div className="rule-body p-2 border border-top-0 rounded-bottom">
                          <div className="d-flex justify-content-between">
                            <span>هدف ماهانه:</span>
                            <strong>+2%</strong>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>بهترین نماینده:</span>
                            <strong>5M پاداش</strong>
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
                  <p>این ورک‌فلو به صورت خودکار عملکرد نمایندگان را ارزیابی کرده، کمیسیون‌ها را محاسبه و گزارش‌های عملکرد را تولید می‌کند.</p>
                  
                  <h6 className="mt-4">ویژگی‌های کلیدی:</h6>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle text-success me-2"></i>جمع‌آوری خودکار داده‌های فروش</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>محاسبه کمیسیون بر اساس قوانین تعریف شده</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>تایید مدیریت و پردازش پرداخت‌ها</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>ارسال گزارش عملکرد به نمایندگان</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>رتبه‌بندی و پاداش بهترین عملکردها</li>
                  </ul>
                  
                  <h6 className="mt-4">مزایای استفاده:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>دقت:</strong> محاسبه دقیق کمیسیون‌ها
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>عدالت:</strong> توزیع عادلانه پاداش‌ها
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefit-item mb-2">
                        <strong>انگیزه:</strong> تشویق نمایندگان به عملکرد بهتر
                      </div>
                      <div className="benefit-item mb-2">
                        <strong>شفافیت:</strong> گزارش‌گیری شفاف عملکرد
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
                  <i className="bi bi-calculator me-2"></i>
                  خلاصه محاسبات
                </h5>
              </div>
              <div className="card-body">
                <div className="calculation-summary">
                  <div className="calc-item mb-3">
                    <div className="d-flex justify-content-between">
                      <span>کل فروش:</span>
                      <strong className="text-primary">325M تومان</strong>
                    </div>
                  </div>
                  
                  <div className="calc-item mb-3">
                    <div className="d-flex justify-content-between">
                      <span>کل کمیسیون:</span>
                      <strong className="text-success">34.2M تومان</strong>
                    </div>
                  </div>

                  <div className="calc-item mb-3">
                    <div className="d-flex justify-content-between">
                      <span>پرداخت شده:</span>
                      <strong className="text-info">14.4M تومان</strong>
                    </div>
                  </div>

                  <div className="calc-item mb-3">
                    <div className="d-flex justify-content-between">
                      <span>در انتظار:</span>
                      <strong className="text-warning">19.8M تومان</strong>
                    </div>
                  </div>

                  <hr />

                  <div className="calc-item">
                    <div className="d-flex justify-content-between">
                      <span>میانگین کمیسیون:</span>
                      <strong>10.52%</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-trophy me-2"></i>
                  رتبه‌بندی نمایندگان
                </h5>
              </div>
              <div className="card-body">
                <div className="ranking-list">
                  <div className="rank-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rank-badge bg-warning text-dark me-3">🥇</div>
                      <div>
                        <strong>فاطمه احمدی</strong>
                        <br />
                        <small className="text-muted">120M فروش</small>
                      </div>
                    </div>
                  </div>

                  <div className="rank-item mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rank-badge bg-secondary text-white me-3">🥈</div>
                      <div>
                        <strong>مریم کریمی</strong>
                        <br />
                        <small className="text-muted">95M فروش</small>
                      </div>
                    </div>
                  </div>

                  <div className="rank-item">
                    <div className="d-flex align-items-center">
                      <div className="rank-badge bg-warning text-dark me-3">🥉</div>
                      <div>
                        <strong>احمد رضایی</strong>
                        <br />
                        <small className="text-muted">75M فروش</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-clock-history me-2"></i>
                  تاریخچه پرداخت‌ها
                </h5>
              </div>
              <div className="card-body">
                <div className="payment-history">
                  <div className="payment-item mb-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>فاطمه احمدی</strong>
                        <br />
                        <small className="text-muted">دی 1402</small>
                      </div>
                      <div className="text-end">
                        <strong className="text-success">14.4M</strong>
                        <br />
                        <small className="text-success">پرداخت شده</small>
                      </div>
                    </div>
                  </div>

                  <div className="payment-item mb-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>احمد رضایی</strong>
                        <br />
                        <small className="text-muted">آذر 1402</small>
                      </div>
                      <div className="text-end">
                        <strong className="text-success">6.2M</strong>
                        <br />
                        <small className="text-success">پرداخت شده</small>
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
        .step-badge {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
        }
        
        .rule-card {
          border: 1px solid #dee2e6;
          border-radius: 0.375rem;
          overflow: hidden;
        }
        
        .calc-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .calc-item:last-child {
          border-bottom: none;
        }
        
        .rank-badge {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        
        .rank-item {
          padding: 1rem 0;
          border-bottom: 1px solid #e9ecef;
        }
        
        .rank-item:last-child {
          border-bottom: none;
        }
        
        .payment-item {
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .payment-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </Layout>
  );
}
