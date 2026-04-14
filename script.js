/*
 * Modern Minimalist Landing Page
 * Vanilla JavaScript - No Framework Dependencies
 */

// ============================================
// Translations & Constants
// ============================================

const CONTACT_EMAIL = 'omarsallam2304@gmail.com';

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.contactEmail': 'omarsallam2304@gmail.com',
    
    // Hero Section
    'hero.title': 'Professional Services for Your Business',
    'hero.subtitle': 'Comprehensive solutions tailored to your needs. Explore our range of expert services designed to help your business thrive.',
    'hero.cta': 'Get Started',
    'hero.contactEmail': 'omarsallam2304@gmail.com',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Discover our comprehensive range of professional services',
    
    // Individual Services
    'service.1.title': 'Web Development',
    'service.1.desc': 'Custom web applications built with modern technologies and best practices.',
    'service.2.title': 'Mobile Apps',
    'service.2.desc': 'Native and cross-platform mobile applications for iOS and Android.',
    'service.3.title': 'UI/UX Design',
    'service.3.desc': 'Beautiful and intuitive user interfaces that engage your audience.',
    'service.4.title': 'Cloud Solutions',
    'service.4.desc': 'Scalable cloud infrastructure and deployment solutions.',
    'service.5.title': 'Data Analytics',
    'service.5.desc': 'Transform your data into actionable insights with advanced analytics.',
    'service.6.title': 'Cybersecurity',
    'service.6.desc': 'Protect your business with comprehensive security solutions.',
    'service.7.title': 'AI & Machine Learning',
    'service.7.desc': 'Intelligent solutions powered by artificial intelligence.',
    'service.8.title': 'DevOps',
    'service.8.desc': 'Streamline your development and operations with automation.',
    'service.9.title': 'Consulting',
    'service.9.desc': 'Expert guidance to optimize your technology strategy.',
    'service.10.title': 'Support & Maintenance',
    'service.10.desc': '24/7 technical support and system maintenance services.',
    
    // CTA
    'cta.learnMore': 'Learn More',
    'cta.contact': 'Contact Us',
    'cta.emailLabel': 'Email us at:',
    'cta.email': 'omarsallam2304@gmail.com',
    
    // Footer
    'footer.copyright': '© 2026 Professional Services. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact',
    'footer.contactEmail': 'omarsallam2304@gmail.com',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'حول',
    'nav.contact': 'اتصل',
    'nav.contactEmail': 'omarsallam2304@gmail.com',
    
    // Hero Section
    'hero.title': 'خدمات احترافية لعملك',
    'hero.subtitle': 'حلول شاملة مخصصة لاحتياجاتك. استكشف مجموعتنا من الخدمات الخبيرة المصممة لمساعدة عملك على الازدهار.',
    'hero.cta': 'ابدأ الآن',
    'hero.contactEmail': 'omarsallam2304@gmail.com',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'اكتشف مجموعتنا الشاملة من الخدمات الاحترافية',
    
    // Individual Services
    'service.1.title': 'تطوير الويب',
    'service.1.desc': 'تطبيقات ويب مخصصة مبنية بأحدث التقنيات وأفضل الممارسات.',
    'service.2.title': 'تطبيقات الهاتف',
    'service.2.desc': 'تطبيقات أصلية وعابرة للأنظمة الأساسية لنظامي iOS و Android.',
    'service.3.title': 'تصميم واجهة المستخدم',
    'service.3.desc': 'واجهات مستخدم جميلة وسهلة الاستخدام تجذب جمهورك.',
    'service.4.title': 'حلول السحابة',
    'service.4.desc': 'بنية تحتية سحابية قابلة للتوسع وحلول النشر.',
    'service.5.title': 'تحليل البيانات',
    'service.5.desc': 'حول بياناتك إلى رؤى قابلة للتنفيذ باستخدام التحليلات المتقدمة.',
    'service.6.title': 'الأمن السيبراني',
    'service.6.desc': 'حماية عملك بحلول أمان شاملة.',
    'service.7.title': 'الذكاء الاصطناعي والتعلم الآلي',
    'service.7.desc': 'حلول ذكية مدعومة بالذكاء الاصطناعي.',
    'service.8.title': 'DevOps',
    'service.8.desc': 'تبسيط التطوير والعمليات من خلال الأتمتة.',
    'service.9.title': 'الاستشارات',
    'service.9.desc': 'توجيهات خبيرة لتحسين استراتيجيتك التكنولوجية.',
    'service.10.title': 'الدعم والصيانة',
    'service.10.desc': 'دعم فني على مدار الساعة وخدمات صيانة النظام.',
    
    // CTA
    'cta.learnMore': 'تعرف على المزيد',
    'cta.contact': 'اتصل بنا',
    'cta.emailLabel': 'أرسل لنا بريد إلكتروني على:',
    'cta.email': 'omarsallam2304@gmail.com',
    
    // Footer
    'footer.copyright': '© 2026 الخدمات الاحترافية. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.contact': 'اتصل',
    'footer.contactEmail': 'omarsallam2304@gmail.com',
  },
};

// ============================================
// State Management
// =============================================

const state = {
    language: localStorage.getItem('language') || 'en',
    theme: localStorage.getItem('theme') || 'light',
};

// Services Data
const services = [
    {
        id: 1,
        titleKey: 'service.1.title',
        descKey: 'service.1.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-tech-MBFHV2RGtrSWnqXC9b7eW3.webp',
        color: 'from-cyan-400 to-blue-500',
    },
    {
        id: 2,
        titleKey: 'service.2.title',
        descKey: 'service.2.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-tech-MBFHV2RGtrSWnqXC9b7eW3.webp',
        color: 'from-blue-400 to-indigo-500',
    },
    {
        id: 3,
        titleKey: 'service.3.title',
        descKey: 'service.3.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-design-9Y9wrscMsYCE5LAQXRZjN.webp',
        color: 'from-purple-400 to-pink-500',
    },
    {
        id: 4,
        titleKey: 'service.4.title',
        descKey: 'service.4.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-tech-MBFHV2RGtrSWnqXC9b7eW3.webp',
        color: 'from-indigo-400 to-blue-500',
    },
    {
        id: 5,
        titleKey: 'service.5.title',
        descKey: 'service.5.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-analytics-LJxHoVpcnbNrzUzwDkKuSQ.webp',
        color: 'from-orange-400 to-yellow-500',
    },
    {
        id: 6,
        titleKey: 'service.6.title',
        descKey: 'service.6.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-tech-MBFHV2RGtrSWnqXC9b7eW3.webp',
        color: 'from-red-400 to-pink-500',
    },
    {
        id: 7,
        titleKey: 'service.7.title',
        descKey: 'service.7.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-tech-MBFHV2RGtrSWnqXC9b7eW3.webp',
        color: 'from-violet-400 to-purple-500',
    },
    {
        id: 8,
        titleKey: 'service.8.title',
        descKey: 'service.8.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-tech-MBFHV2RGtrSWnqXC9b7eW3.webp',
        color: 'from-cyan-400 to-teal-500',
    },
    {
        id: 9,
        titleKey: 'service.9.title',
        descKey: 'service.9.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-design-9Y9wrscMsYCE5LAQXRZjN.webp',
        color: 'from-green-400 to-emerald-500',
    },
    {
        id: 10,
        titleKey: 'service.10.title',
        descKey: 'service.10.desc',
        icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663552722210/kwoCR48JLnJodbyKjjWwGx/service-icon-analytics-LJxHoVpcnbNrzUzwDkKuSQ.webp',
        color: 'from-blue-400 to-cyan-500',
    },
];

// ============================================
// Initialization
// ============================================

function init() {
    initializeTheme();
    initializeLanguage();
    renderServices();
    initializeBookingCalendar();
    attachEventListeners();
    updateContent();
}

// ============================================
// Theme Management
// ============================================

function initializeTheme() {
    const isDark = state.theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    updateThemeIcon(isDark);
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme);
    document.body.classList.toggle('dark-mode');
    updateThemeIcon(state.theme === 'dark');
}

function updateThemeIcon(isDark) {
    const sunIcon = document.querySelector('.icon-sun');
    const moonIcon = document.querySelector('.icon-moon');
    
    if (isDark) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// ============================================
// Language Management
// ============================================

function initializeLanguage() {
    setLanguage(state.language);
}

function toggleLanguage() {
    state.language = state.language === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', state.language);
    setLanguage(state.language);
}

function setLanguage(lang) {
    state.language = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update language toggle button text
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.lang-text');
    langText.textContent = lang.toUpperCase();
    
    // Update all content
    updateContent();
}

// ============================================
// Content Updates
// ============================================

function updateContent() {
    // Update all elements with data attributes
    document.querySelectorAll('[data-en][data-ar]').forEach(element => {
        const content = state.language === 'en' 
            ? element.getAttribute('data-en')
            : element.getAttribute('data-ar');
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = content;
        } else {
            element.textContent = content;
        }
    });
    
    // Update service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const service = services[index];
        if (service) {
            const titleEl = card.querySelector('.service-title');
            const descEl = card.querySelector('.service-description');
            const btnEl = card.querySelector('.service-btn');
            
            titleEl.textContent = translations[state.language][service.titleKey];
            descEl.textContent = translations[state.language][service.descKey];
            btnEl.textContent = translations[state.language]['cta.learnMore'];
        }
    });
}

// ============================================
// Service Rendering
// ============================================

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = '';
    
    services.forEach(service => {
        const card = createServiceCard(service);
        grid.appendChild(card);
    });
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const title = translations[state.language][service.titleKey];
    const desc = translations[state.language][service.descKey];
    const learnMore = translations[state.language]['cta.learnMore'];
    
    card.innerHTML = `
        <div class="service-card-content">
            <div class="service-icon-wrapper">
                <div class="service-icon">
                    <div class="service-icon-inner">
                        <img src="${service.icon}" alt="${title}" loading="lazy">
                    </div>
                </div>
            </div>
            <h3 class="service-title">${title}</h3>
            <p class="service-description">${desc}</p>
            <button class="service-btn">${learnMore}</button>
        </div>
    `;
    
    // Add click handler to button
    card.querySelector('.service-btn').addEventListener('click', () => {
        handleServiceClick(service.id);
    });
    
    return card;
}

function handleServiceClick(serviceId) {
    console.log(`Service ${serviceId} clicked`);
    // Open email with service inquiry
    const services = [
        'Web Development',
        'Mobile Apps',
        'UI/UX Design',
        'Cloud Solutions',
        'Data Analytics',
        'Cybersecurity',
        'AI & Machine Learning',
        'DevOps',
        'Consulting',
        'Support & Maintenance'
    ];
    
    const serviceName = services[serviceId - 1] || 'Service';
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Inquiry%20About%20${encodeURIComponent(serviceName)}&body=Hello,%0A%0AI%20am%20interested%20in%20your%20${encodeURIComponent(serviceName)}%20service.%0A%0APlease%20provide%20more%20information.%0A%0AThank%20you!`;
}

// ============================================
// Event Listeners
// ============================================

// ============================================
// Booking Calendar
// ============================================

const TIME_SLOTS = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '13:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false },
    { time: '17:00', available: true },
];

const bookingState = {
    selectedDate: null,
    selectedTime: null,
    currentMonth: new Date(),
};

function initializeBookingCalendar() {
    renderCalendarDays();
    renderTimeSlots();
    setupBookingEventListeners();
}

function renderCalendarDays() {
    const year = bookingState.currentMonth.getFullYear();
    const month = bookingState.currentMonth.getMonth();
    
    // Update month/year display
    const monthNames = state.language === 'ar'
        ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
        : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const monthYearEl = document.getElementById('monthYear');
    if (monthYearEl) {
        monthYearEl.textContent = `${monthNames[month]} ${year}`;
    }
    
    // Render day labels
    const dayLabels = document.getElementById('dayLabels');
    if (dayLabels) {
        dayLabels.innerHTML = '';
        const dayNames = state.language === 'ar' ? ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const label = document.createElement('div');
            label.className = 'day-label';
            label.textContent = day;
            dayLabels.appendChild(label);
        });
    }
    
    // Generate calendar days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const grid = document.getElementById('calendarGrid');
    if (grid) {
        grid.innerHTML = '';
        
        // Empty cells before first day
        for (let i = 0; i < startingDayOfWeek; i++) {
            const empty = document.createElement('div');
            grid.appendChild(empty);
        }
        
        // Days of month
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        for (let day = 1; day <= daysInMonth; day++) {
            const btn = document.createElement('button');
            btn.className = 'calendar-day';
            btn.textContent = day;
            
            const checkDate = new Date(year, month, day);
            checkDate.setHours(0, 0, 0, 0);
            
            if (checkDate < today) {
                btn.disabled = true;
            }
            
            if (bookingState.selectedDate && 
                bookingState.selectedDate.getDate() === day && 
                bookingState.selectedDate.getMonth() === month &&
                bookingState.selectedDate.getFullYear() === year) {
                btn.classList.add('selected');
            }
            
            btn.addEventListener('click', () => {
                if (!btn.disabled) {
                    bookingState.selectedDate = new Date(year, month, day);
                    bookingState.selectedTime = null;
                    renderCalendarDays();
                    renderTimeSlots();
                    switchBookingStep('time');
                }
            });
            
            grid.appendChild(btn);
        }
    }
}

function renderTimeSlots() {
    const container = document.getElementById('timeSlots');
    if (!container) return;
    
    container.innerHTML = '';
    
    TIME_SLOTS.forEach(slot => {
        const btn = document.createElement('button');
        btn.className = 'time-slot';
        btn.textContent = slot.time;
        btn.disabled = !slot.available;
        
        if (bookingState.selectedTime === slot.time) {
            btn.classList.add('selected');
        }
        
        if (slot.available) {
            btn.addEventListener('click', () => {
                bookingState.selectedTime = slot.time;
                renderTimeSlots();
                document.getElementById('nextFromTime').disabled = false;
            });
        }
        
        container.appendChild(btn);
    });
}

function switchBookingStep(step) {
    document.querySelectorAll('.booking-step').forEach(el => el.classList.remove('active'));
    
    if (step === 'calendar') {
        document.getElementById('calendarStep').classList.add('active');
    } else if (step === 'time') {
        document.getElementById('timeStep').classList.add('active');
        updateSelectedDateInfo();
    } else if (step === 'confirm') {
        document.getElementById('confirmStep').classList.add('active');
        updateSelectedDateTimeInfo();
    }
}

function updateSelectedDateInfo() {
    const info = document.getElementById('selectedDateInfo');
    if (!info || !bookingState.selectedDate) return;
    
    const dateStr = bookingState.selectedDate.toLocaleDateString(state.language === 'ar' ? 'ar-EG' : 'en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    
    info.innerHTML = `
        <div class="info-item">
            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>${dateStr}</span>
        </div>
    `;
}

function updateSelectedDateTimeInfo() {
    const info = document.getElementById('selectedDateTime');
    if (!info || !bookingState.selectedDate || !bookingState.selectedTime) return;
    
    const dateStr = bookingState.selectedDate.toLocaleDateString(state.language === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    
    info.innerHTML = `
        <div class="info-item">
            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>${dateStr}</span>
        </div>
        <div class="info-item">
            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${bookingState.selectedTime}</span>
        </div>
    `;
}

function setupBookingEventListeners() {
    document.getElementById('prevMonth').addEventListener('click', () => {
        bookingState.currentMonth = new Date(bookingState.currentMonth.getFullYear(), bookingState.currentMonth.getMonth() - 1);
        renderCalendarDays();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        bookingState.currentMonth = new Date(bookingState.currentMonth.getFullYear(), bookingState.currentMonth.getMonth() + 1);
        renderCalendarDays();
    });
    
    document.getElementById('backFromTime').addEventListener('click', () => {
        bookingState.selectedTime = null;
        switchBookingStep('calendar');
    });
    
    document.getElementById('nextFromTime').addEventListener('click', () => {
        switchBookingStep('confirm');
    });
    
    document.getElementById('backFromConfirm').addEventListener('click', () => {
        switchBookingStep('time');
    });
    
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', submitBooking);
    }
}

async function submitBooking(e) {
    e.preventDefault();
    
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    const message = document.getElementById('messageInput').value;
    
    if (!name || !email || !phone) {
        alert(state.language === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields');
        return;
    }
    
    // Prepare booking data
    const bookingData = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        date: bookingState.selectedDate.toLocaleDateString('en-US'),
        time: bookingState.selectedTime,
        language: state.language,
    };
    
    // Send to FormSubmit.co
    const formData = new FormData();
    formData.append('_captcha', 'false');
    formData.append('_next', window.location.href);
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Phone', phone);
    formData.append('Message', message);
    formData.append('Booking Date', bookingData.date);
    formData.append('Booking Time', bookingState.selectedTime);
    
    try {
        const response = await fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            alert(state.language === 'ar' ? 'تم حجز الاجتماع بنجاح! سنتصل بك قريبًا.' : 'Booking confirmed! We will contact you shortly.');
            
            // Reset booking
            document.getElementById('bookingForm').reset();
            bookingState.selectedDate = null;
            bookingState.selectedTime = null;
            switchBookingStep('calendar');
            renderCalendarDays();
            renderTimeSlots();
        } else {
            alert(state.language === 'ar' ? 'حدث خطأ في الحجز. يرجى المحاولة لاحقًا.' : 'Error submitting booking. Please try again.');
        }
    } catch (error) {
        console.error('Booking error:', error);
        alert(state.language === 'ar' ? 'حدث خطأ في الحجز. يرجى المحاولة لاحقًا.' : 'Error submitting booking. Please try again.');
    }
}

function attachEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Button click handlers
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
        btn.addEventListener('click', handleButtonClick);
    });
    
    // Contact button handlers
    const heroContactBtn = document.getElementById('heroContactBtn');
    const ctaContactBtn = document.getElementById('ctaContactBtn');
    const heroLearnBtn = document.getElementById('heroLearnBtn');
    
    if (heroContactBtn) {
        heroContactBtn.addEventListener('click', handleContactClick);
    }
    
    if (ctaContactBtn) {
        ctaContactBtn.addEventListener('click', handleContactClick);
    }
    
    if (heroLearnBtn) {
        heroLearnBtn.addEventListener('click', () => {
            // Scroll to services section
            const servicesSection = document.querySelector('.services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function handleButtonClick(e) {
    const buttonText = e.target.textContent;
    const buttonId = e.target.id;
    
    console.log(`Button clicked: ${buttonText}`);
    
    // Handle contact buttons
    if (buttonId === 'heroContactBtn' || buttonId === 'ctaContactBtn') {
        handleContactClick();
    }
}

function handleContactClick() {
    // Open email client with pre-filled recipient
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Service%20Inquiry&body=Hello,%0A%0AI%20am%20interested%20in%20your%20services.%0A%0APlease%20provide%20more%20information.%0A%0AThank%20you!`;
}

// ============================================
// Utility Functions
// ============================================

function getTranslation(key) {
    return translations[state.language]?.[key] || key;
}

// ============================================
// Performance Optimizations
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Start Application
// ============================================

document.addEventListener('DOMContentLoaded', init);

// Handle visibility change to reinitialize if needed
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page is visible again
        console.log('Page is visible');
    }
});
