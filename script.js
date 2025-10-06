document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        { title: 'داشبورد', icon: 'bi-speedometer2', href: 'index.html', badge: null },
        { title: 'CRM', icon: 'bi-people', href: '/crm', badge: null, submenu: [{ title: 'سرنخ‌ها', href: 'leads.html' }, { title: 'فرصت‌ها (کانبان)', href: 'opportunities.html' }, { title: 'مخاطبین', href: 'contacts.html' }] },
        { title: 'ارتباط داخلی', icon: 'bi-chat-dots', href: '/intranet', badge: null, submenu: [{ title: 'اعلان‌ها', href: 'intranet.html' }, { title: 'گفتگوها', href: 'messages.html' }] },
        { title: 'مالی', icon: 'bi-receipt', href: '/finance', badge: null, submenu: [{ title: 'فاکتورها', href: 'invoices.html' }] },
        { title: 'مارکتینگ', icon: 'bi-bullseye', href: '/marketing', badge: null, submenu: [{ title: 'کمپین‌ها', href: 'campaigns.html' }] },
        { title: 'مدیریت کاربران', icon: 'bi-people', href: '/users', badge: null, submenu: [{ title: 'لیست کاربران', href: 'users.html' }, { title: 'نقش‌ها و دسترسی‌ها', href: 'roles.html' }, { title: 'پروفایل کاربری', href: 'profile.html' }] },
        { title: 'مدیریت محصولات', icon: 'bi-box-seam', href: '/products', badge: null, submenu: [{ title: 'کاتالوگ محصولات', href: 'products.html' }, { title: 'سفارشی‌سازی', href: 'customization.html' }, { title: 'موجودی و قیمت', href: 'inventory.html' }] },
        { title: 'سفارش‌گیری', icon: 'bi-cart-plus', href: '/orders', badge: '12', submenu: [{ title: 'سفارشات جدید', href: 'orders-new.html' }, { title: 'در حال پردازش', href: 'orders-processing.html' }, { title: 'تکمیل شده', href: 'orders-completed.html' }] },
        { title: 'مدیریت تولید', icon: 'bi-gear-wide', href: '/production', badge: '7', submenu: [{ title: 'برنامه تولید', href: 'production-schedule.html' }, { title: 'مراحل تولید', href: 'production-stages.html' }, { title: 'کنترل کیفیت', href: 'production-quality.html' }] },
        { title: 'مدیریت انبار', icon: 'bi-building', href: '/warehouse', badge: null, submenu: [{ title: 'موجودی کالا', href: 'warehouse-inventory.html' }, { title: 'ورود و خروج', href: 'warehouse-transactions.html' }, { title: 'مواد اولیه', href: 'warehouse-materials.html' }] },
        { title: 'مدیریت نمایندگی‌ها', icon: 'bi-shop', href: '/agencies', badge: null, submenu: [{ title: 'لیست نمایندگان', href: 'agencies.html' }, { title: 'کمیسیون و پورسانت', href: 'agencies-commission.html' }, { title: 'گزارش عملکرد', href: 'agencies-reports.html' }] },
        { title: 'خدمات پس از فروش', icon: 'bi-tools', href: '/after-sales', badge: '3', submenu: [{ title: 'درخواست‌های جدید', href: 'after-sales-requests.html' }, { title: 'در حال بررسی', href: 'after-sales-processing.html' }, { title: 'تکمیل شده', href: 'after-sales-completed.html' }] },
        { title: 'منابع انسانی', icon: 'bi-person-badge', href: '/hr', badge: null, submenu: [{ title: 'مدیریت پرسنل', href: 'hr-employees.html' }, { title: 'درخواست مرخصی', href: 'hr-leave-requests.html' }, { title: 'حقوق و مزایا', href: 'hr-payroll.html' }] },
        { title: 'گزارش‌گیری', icon: 'bi-graph-up', href: '/reports', badge: null, submenu: [{ title: 'گزارش فروش', href: 'reports-sales.html' }, { title: 'گزارش تولید', href: 'reports-production.html' }, { title: 'گزارش مالی', href: 'reports-financial.html' }] },
        { title: 'ورک‌فلوها', icon: 'bi-diagram-3', href: '/workflows', badge: null, submenu: [
            { title: 'مدیریت سفارشات', href: 'workflows-order-management.html' }, 
            { title: 'مدیریت موجودی', href: 'workflows-inventory-management.html' }, 
            { title: 'ورک‌فلو تولید', href: 'workflows-production.html' }, 
            { title: 'خدمات پس از فروش', href: 'workflows-after-sales.html' }, 
            { title: 'مدیریت نمایندگی‌ها', href: 'workflows-agency-management.html' }, 
            { title: 'منابع انسانی', href: 'workflows-human-resources.html' }, 
            { title: 'گزارش‌گیری خودکار', href: 'workflows-automated-reporting.html' }
        ] },
        { title: 'تنظیمات سیستم', icon: 'bi-sliders', href: '/settings', badge: null, submenu: [
            { title: 'تنظیمات عمومی', href: 'settings-general.html' }, 
            { title: 'نقش‌ها و دسترسی‌ها', href: 'settings-roles.html' }, 
            { title: 'پشتیبان‌گیری', href: 'settings-backup.html' }, 
            { title: 'لاگ‌های سیستم', href: 'settings-logs.html' }
        ] }
    ];

    const sidebarNav = document.getElementById('sidebar-nav') || document.getElementById('sidebar');
    const header = document.getElementById('header');
    const quickActionsPlaceholder = document.getElementById('quick-actions-placeholder');
    const recentActivityPlaceholder = document.getElementById('recent-activity-placeholder');
    const currentPage = window.location.pathname.split('/').pop();

    // --- RENDER SIDEBAR ---
    function renderSidebar() {
        const navUl = document.createElement('ul');
        navUl.className = 'nav flex-column';

        menuItems.forEach(item => {
            const navItem = document.createElement('li');
            navItem.className = 'nav-item mb-1';
            let isActive = currentPage === item.href;

            if (item.submenu) {
                const isSubmenuActive = item.submenu.some(sub => currentPage === sub.href);
                navItem.innerHTML = `
                    <button
                        class="nav-link text-white d-flex align-items-center justify-content-between w-100 border-0 bg-transparent ${isSubmenuActive ? 'active' : ''}"
                        data-bs-toggle="collapse" data-bs-target="#${item.href.substring(1)}-menu" aria-expanded="${isSubmenuActive}"
                    >
                        <div class="d-flex align-items-center">
                            <i class="${item.icon} me-2"></i>
                            <span>${item.title}</span>
                            ${item.badge ? `<span class="notification-badge ms-2">${item.badge}</span>` : ''}
                        </div>
                        <i class="bi bi-chevron-${isSubmenuActive ? 'down' : 'left'} small"></i>
                    </button>
                    <div class="collapse ${isSubmenuActive ? 'show' : ''}" id="${item.href.substring(1)}-menu">
                        <ul class="nav flex-column ms-3">
                            ${item.submenu.map(subItem => {
                                const isSubActive = currentPage === subItem.href;
                                return `
                                <li class="nav-item">
                                    <a href="${subItem.href}" class="nav-link text-white-50 py-2 ${isSubActive ? 'active text-white' : ''}">
                                        <i class="bi bi-circle-fill me-2" style="font-size: 6px;"></i>
                                        ${subItem.title}
                                    </a>
                                </li>
                            `}).join('')}
                        </ul>
                    </div>
                `;
            } else {
                navItem.innerHTML = `
                    <a href="${item.href}" class="nav-link text-white d-flex align-items-center ${isActive ? 'active' : ''}">
                        <i class="${item.icon} me-2"></i>
                        <span>${item.title}</span>
                        ${item.badge ? `<span class="notification-badge ms-auto">${item.badge}</span>` : ''}
                    </a>
                `;
            }
            navUl.appendChild(navItem);
        });
        sidebarNav.appendChild(navUl);
    }

    // --- RENDER HEADER ---
    function renderHeader() {
        if (!header) return;
        header.innerHTML = `
            <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary me-2 me-md-3" id="toggle-sidebar">
                        <i class="bi bi-list"></i>
                    </button>
                    <h4 class="mb-0 text-muted d-none d-md-block">خوش آمدید، محمد احمدی</h4>
                    <h6 class="mb-0 text-muted d-block d-md-none">محمد احمدی</h6>
                </div>

                <div class="d-flex align-items-center">
                    <div class="me-3 d-none d-lg-block">
                        <div class="input-group" style="width: 300px;">
                            <input type="text" class="form-control" placeholder="جستجو در سیستم..." style="border-top-right-radius: 20px; border-bottom-right-radius: 20px;">
                            <button class="btn btn-outline-secondary"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                    <button class="btn btn-outline-secondary me-2 d-block d-lg-none"><i class="bi bi-search"></i></button>
                    <button class="btn btn-outline-secondary me-2" id="dark-mode-toggle"><i class="bi bi-moon"></i></button>
                    
                    <div class="dropdown me-2">
                        <button class="btn btn-outline-secondary position-relative" data-bs-toggle="dropdown">
                            <i class="bi bi-bell"></i>
                            <span class="notification-badge">3</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" style="width: 350px;">
                            <div class="dropdown-header d-flex justify-content-between align-items-center">
                                <h6 class="mb-0">اعلان‌ها</h6>
                                <button class="btn btn-sm btn-link text-decoration-none">همه را خوانده علامت کن</button>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div class="dropdown-item">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 rounded-circle p-2 me-2 bg-success bg-opacity-10">
                                        <i class="bi bi-check-circle text-success"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-1 small">سفارش جدید ثبت شد</p>
                                        <small class="text-muted">2 دقیقه پیش</small>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-item">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 rounded-circle p-2 me-2 bg-warning bg-opacity-10">
                                        <i class="bi bi-exclamation-triangle text-warning"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-1 small">محصول از موجودی خارج شد</p>
                                        <small class="text-muted">15 دقیقه پیش</small>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div class="dropdown-item text-center">
                                <button class="btn btn-link text-decoration-none small">مشاهده همه اعلان‌ها</button>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="btn btn-outline-secondary d-flex align-items-center" data-bs-toggle="dropdown">
                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="Profile" class="rounded-circle me-2" width="32" height="32">
                            <span class="d-none d-md-inline">محمد احمدی</span>
                            <i class="bi bi-chevron-down ms-2"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end">
                            <div class="dropdown-header">
                                <strong>محمد احمدی</strong><br>
                                <small class="text-muted">مدیر سیستم</small>
                            </div>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item"><i class="bi bi-person me-2"></i>پروفایل کاربری</button>
                            <button class="dropdown-item"><i class="bi bi-gear me-2"></i>تنظیمات</button>
                            <button class="dropdown-item"><i class="bi bi-question-circle me-2"></i>راهنمای کاربری</button>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item text-danger"><i class="bi bi-box-arrow-right me-2"></i>خروج از سیستم</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('toggle-sidebar').addEventListener('click', toggleSidebar);
        document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
    }

    // --- RENDER DASHBOARD WIDGETS ---
    function renderDashboardWidgets() {
        if (!quickActionsPlaceholder || !recentActivityPlaceholder) return;
        quickActionsPlaceholder.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title mb-3">اقدامات سریع</h5>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary text-start"><i class="bi bi-plus-lg me-2"></i>افزودن محصول جدید</button>
                        <button class="btn btn-outline-secondary text-start"><i class="bi bi-person-plus me-2"></i>افزودن کاربر جدید</button>
                        <button class="btn btn-outline-info text-start"><i class="bi bi-file-earmark-text me-2"></i>گزارش سریع فروش</button>
                    </div>
                </div>
            </div>
        `;

        recentActivityPlaceholder.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title mb-3">فعالیت‌های اخیر</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                            <div>
                                <i class="bi bi-check-circle-fill text-success me-2"></i>
                                <strong>سفارش #5843</strong> تکمیل شد.
                            </div>
                            <small class="text-muted">2 دقیقه پیش</small>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                            <div>
                                <i class="bi bi-person-plus-fill text-primary me-2"></i>
                                کاربر جدید <strong>'سارا رضایی'</strong> اضافه شد.
                            </div>
                            <small class="text-muted">15 دقیقه پیش</small>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                            <div>
                                <i class="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                                موجودی <strong>'صندلی مدل X'</strong> رو به اتمام است.
                            </div>
                            <small class="text-muted">1 ساعت پیش</small>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }

    // --- SIDEBAR AND DARK MODE LOGIC ---
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    let darkMode = localStorage.getItem('darkMode') === 'true';

    function applyDarkMode() {
        document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
        const icon = document.querySelector('#dark-mode-toggle i');
        if(icon) icon.className = `bi bi-${darkMode ? 'sun' : 'moon'}`;
    }

    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('sidebar-collapsed');
    }

    function toggleDarkMode() {
        darkMode = !darkMode;
        localStorage.setItem('darkMode', darkMode);
        applyDarkMode();
    }

    // --- CHART INITIALIZATION ---
    function initializeCharts() {
        const salesChartEl = document.getElementById('salesChart');
        if(salesChartEl) {
            const salesCtx = salesChartEl.getContext('2d');
            new Chart(salesCtx, {
                type: 'line',
                data: { labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'], datasets: [{ label: 'فروش', data: [12000, 19000, 15000, 18000, 22000, 17000, 25000], borderColor: '#667eea', backgroundColor: 'rgba(102, 126, 234, 0.1)', tension: 0.4, fill: true }, { label: 'هدف', data: [10000, 15000, 18000, 20000, 20000, 22000, 25000], borderColor: '#764ba2', backgroundColor: 'transparent', borderDash: [5, 5], tension: 0.4 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, ticks: { callback: (value) => value.toLocaleString('fa-IR') + ' ریال' } }, x: { ticks: { callback: function(value) { return this.getLabelForValue(value); } } } } }
            });
        }

        const productChartEl = document.getElementById('productChart');
        if(productChartEl) {
            const productCtx = productChartEl.getContext('2d');
            new Chart(productCtx, {
                type: 'doughnut',
                data: { labels: ['میز ناهار خوری', 'صندلی راحتی', 'تخت خواب', 'کمد لباس', 'میز کار'], datasets: [{ data: [35, 25, 20, 12, 8], backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'], borderWidth: 0 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
            });
        }
    }

    // --- INITIALIZE EVERYTHING ---
    applyDarkMode();
    renderSidebar();
    renderHeader();
    renderDashboardWidgets();
    initializeCharts();

    // Handle submenu toggle icons
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i.bi-chevron-left, i.bi-chevron-down');
            setTimeout(() => {
                const isCollapsed = this.getAttribute('aria-expanded') === 'false';
                if (isCollapsed) {
                    icon.classList.remove('bi-chevron-down');
                    icon.classList.add('bi-chevron-left');
                } else {
                    icon.classList.remove('bi-chevron-left');
                    icon.classList.add('bi-chevron-down');
                }
            }, 350); // Match bootstrap collapse animation time
        });
    });
});