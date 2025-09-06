'use client';

const quickActions = [
  {
    title: 'ثبت سفارش جدید',
    description: 'سفارش جدید از مشتری دریافت کنید',
    icon: 'bi-cart-plus',
    color: 'primary',
    href: '/orders/new'
  },
  {
    title: 'اضافه کردن محصول',
    description: 'محصول جدید به کاتالوگ اضافه کنید',
    icon: 'bi-box-seam',
    color: 'success',
    href: '/products/add'
  },
  {
    title: 'گزارش فروش',
    description: 'گزارش عملکرد فروش دریافت کنید',
    icon: 'bi-graph-up',
    color: 'info',
    href: '/reports/sales'
  },
  {
    title: 'مدیریت کاربران',
    description: 'کاربران جدید اضافه کنید',
    icon: 'bi-person-plus',
    color: 'warning',
    href: '/users'
  }
];

export default function QuickActions() {
  return (
    <div className="chart-container">
      <h5 className="mb-3">اقدامات سریع</h5>
      <div className="row g-2">
        {quickActions.map((action, index) => (
          <div key={index} className="col-12 col-sm-6">
            <div className={`card h-100 border-0 bg-${action.color} bg-opacity-10 hover-lift`}>
              <div className="card-body text-center p-2 p-md-3">
                <i className={`${action.icon} text-${action.color} fs-3 fs-md-2 mb-2`}></i>
                <h6 className="card-title small mb-1">{action.title}</h6>
                <p className="card-text d-none d-sm-block" style={{ fontSize: '0.75rem' }}>{action.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
