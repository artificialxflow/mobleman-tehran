'use client';

const statsData = [
  {
    title: 'فروش امروز',
    value: '۱۲,۳۴۵,۰۰۰',
    unit: 'تومان',
    icon: 'bi-currency-dollar',
    color: 'success',
    trend: '+12%',
    trendUp: true
  },
  {
    title: 'سفارشات جدید',
    value: '۲۳',
    unit: 'سفارش',
    icon: 'bi-cart-plus',
    color: 'primary',
    trend: '+5%',
    trendUp: true
  },
  {
    title: 'تولید امروز',
    value: '۸',
    unit: 'قطعه',
    icon: 'bi-gear-wide',
    color: 'warning',
    trend: '-2%',
    trendUp: false
  },
  {
    title: 'مشتریان فعال',
    value: '۱۵۶',
    unit: 'مشتری',
    icon: 'bi-people',
    color: 'info',
    trend: '+8%',
    trendUp: true
  }
];

export default function StatsCards() {
  return (
    <div className="row">
      {statsData.map((stat, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3">
          <div className="stat-card hover-lift">
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-grow-1">
                <h6 className="text-muted mb-2 small">{stat.title}</h6>
                <h3 className="mb-0 fw-bold">{stat.value}</h3>
                <small className="text-muted">{stat.unit}</small>
                <div className="mt-2">
                  <span className={`badge ${stat.trendUp ? 'bg-success' : 'bg-danger'} bg-opacity-10 text-${stat.trendUp ? 'success' : 'danger'} small`}>
                    <i className={`bi bi-arrow-${stat.trendUp ? 'up' : 'down'} me-1`}></i>
                    {stat.trend}
                  </span>
                </div>
              </div>
              <div className={`bg-${stat.color} bg-opacity-10 rounded-circle p-2 p-md-3 flex-shrink-0`}>
                <i className={`${stat.icon} text-${stat.color} fs-5 fs-md-4`}></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
