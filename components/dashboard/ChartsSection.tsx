'use client';

import { useState } from 'react';

export default function ChartsSection() {
  const [activeTab, setActiveTab] = useState('sales');

  const salesData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    values: [120, 150, 180, 200, 160, 220]
  };

  const productionData = {
    labels: ['مبل راحتی', 'میز نهارخوری', 'کمد', 'تخت خواب', 'صندلی'],
    values: [45, 30, 25, 35, 20]
  };

  return (
    <div className="chart-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">نمودارهای عملکرد</h5>
        <div className="btn-group" role="group">
          <button 
            className={`btn ${activeTab === 'sales' ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
            onClick={() => setActiveTab('sales')}
          >
            فروش
          </button>
          <button 
            className={`btn ${activeTab === 'production' ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
            onClick={() => setActiveTab('production')}
          >
            تولید
          </button>
          <button 
            className={`btn ${activeTab === 'orders' ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
            onClick={() => setActiveTab('orders')}
          >
            سفارشات
          </button>
        </div>
      </div>

      <div style={{ height: '300px' }}>
        {activeTab === 'sales' && (
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <div className="row">
                {salesData.labels.map((label, index) => (
                  <div key={index} className="col-2">
                    <div 
                      className="bg-primary rounded mb-2 mx-auto"
                      style={{ 
                        height: `${(salesData.values[index] / Math.max(...salesData.values)) * 200}px`,
                        width: '20px'
                      }}
                    ></div>
                    <small className="text-muted">{label}</small>
                    <br />
                    <small className="fw-bold">{salesData.values[index]}M</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'production' && (
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <div className="row">
                {productionData.labels.map((label, index) => (
                  <div key={index} className="col">
                    <div 
                      className="bg-warning rounded mb-2 mx-auto"
                      style={{ 
                        height: `${(productionData.values[index] / Math.max(...productionData.values)) * 150}px`,
                        width: '30px'
                      }}
                    ></div>
                    <small className="text-muted">{label}</small>
                    <br />
                    <small className="fw-bold">{productionData.values[index]}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <i className="bi bi-graph-up text-success" style={{ fontSize: '4rem' }}></i>
              <h4 className="mt-3">نمودار سفارشات</h4>
              <p className="text-muted">نمودار تعاملی سفارشات در حال توسعه</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
