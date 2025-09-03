'use client';

const activities = [
  {
    id: 1,
    type: 'order',
    message: 'سفارش جدید از مشتری احمد رضایی ثبت شد',
    time: '5 دقیقه پیش',
    icon: 'bi-cart-plus',
    color: 'success'
  },
  {
    id: 2,
    type: 'production',
    message: 'تولید مبل راحتی مدل A123 تکمیل شد',
    time: '15 دقیقه پیش',
    icon: 'bi-check-circle',
    color: 'primary'
  },
  {
    id: 3,
    type: 'inventory',
    message: 'هشدار کمبود موجودی پارچه قرمز',
    time: '30 دقیقه پیش',
    icon: 'bi-exclamation-triangle',
    color: 'warning'
  },
  {
    id: 4,
    type: 'user',
    message: 'کاربر جدید فاطمه محمدی ثبت نام کرد',
    time: '1 ساعت پیش',
    icon: 'bi-person-plus',
    color: 'info'
  },
  {
    id: 5,
    type: 'service',
    message: 'درخواست خدمات پس از فروش ثبت شد',
    time: '2 ساعت پیش',
    icon: 'bi-tools',
    color: 'secondary'
  }
];

export default function RecentActivity() {
  return (
    <div className="chart-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">فعالیت‌های اخیر</h5>
        <button className="btn btn-sm btn-outline-primary">
          مشاهده همه
        </button>
      </div>
      
      <div className="list-group list-group-flush">
        {activities.map((activity) => (
          <div key={activity.id} className="list-group-item border-0 px-0 py-2">
            <div className="d-flex align-items-start">
              <div className={`flex-shrink-0 rounded-circle p-2 me-3 bg-${activity.color} bg-opacity-10`}>
                <i className={`${activity.icon} text-${activity.color}`}></i>
              </div>
              <div className="flex-grow-1">
                <p className="mb-1 small">{activity.message}</p>
                <small className="text-muted">{activity.time}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
