// Main JavaScript for Dr. Nicolás Capdevilla Website

// DOM Elements
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');
const appointmentForm = document.getElementById('appointmentForm');
const newsletterForm = document.getElementById('newsletterForm');

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initScrollEffects();
    initAnimations();
    initForms();
    initSmoothScrolling();
    initAccessibility();
});

// Navigation
function initNavigation() {
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const isOpen = navMenu.classList.contains('active');

            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', !isOpen);

            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? 'auto' : 'hidden';
        });
    }

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (navToggle && navMenu &&
            !navToggle.contains(e.target) &&
            !navMenu.contains(e.target) &&
            navMenu.classList.contains('active')) {

            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Header shadow and background
        if (header) {
            if (scrollTop > 10) {
                header.classList.add('scrolled');
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.classList.remove('scrolled');
                header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }

        // Active navigation link
        updateActiveNavLink();

        lastScrollTop = scrollTop;
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Stagger animation for grid items
                if (entry.target.classList.contains('service-card') ||
                    entry.target.classList.contains('testimonial-card') ||
                    entry.target.classList.contains('blog-card')) {

                    const parent = entry.target.parentElement;
                    const cards = parent.querySelectorAll('.service-card, .testimonial-card, .blog-card');
                    const index = Array.from(cards).indexOf(entry.target);

                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(`
        .hero__content,
        .hero__image,
        .about__content,
        .service-card,
        .treatment-item,
        .process-step,
        .testimonial-card,
        .blog-card,
        .contact__content
    `);

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Form Handling
function initForms() {
    // Appointment Form
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Validate form
            if (!validateAppointmentForm(data)) {
                return;
            }

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                showFormMessage(this, 'success', 'Su solicitud de cita ha sido enviada correctamente. Nos contactaremos pronto.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Newsletter Form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;

            if (!validateEmail(email)) {
                showFormMessage(this, 'error', 'Por favor, ingrese un email válido.');
                return;
            }

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Suscribiendo...';
            submitBtn.disabled = true;

            // Simulate subscription
            setTimeout(() => {
                showFormMessage(this, 'success', '¡Gracias por suscribirte a nuestro newsletter!');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// Form Validation
function validateAppointmentForm(data) {
    const requiredFields = ['name', 'email', 'phone', 'reason'];

    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showFormMessage(appointmentForm, 'error', 'Por favor, complete todos los campos obligatorios.');
            return false;
        }
    }

    if (!validateEmail(data.email)) {
        showFormMessage(appointmentForm, 'error', 'Por favor, ingrese un email válido.');
        return false;
    }

    if (!validatePhone(data.phone)) {
        showFormMessage(appointmentForm, 'error', 'Por favor, ingrese un número de teléfono válido.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Form Messages
function showFormMessage(form, type, message) {
    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        font-weight: 500;
        ${type === 'success' ? 'background-color: #10B981; color: white;' : 'background-color: #EF4444; color: white;'}
    `;

    // Insert message
    form.insertBefore(messageEl, form.firstChild);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.remove();
        }
    }, 5000);
}

// Accessibility
function initAccessibility() {
    // Keyboard navigation for mobile menu
    navToggle?.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    // Focus management
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', function () {
        document.body.classList.remove('keyboard-nav');
    });

    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        font-weight: 500;
    `;

    skipLink.addEventListener('focus', function () {
        this.style.top = '6px';
    });

    skipLink.addEventListener('blur', function () {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimization for scroll events
const optimizedScroll = throttle(function () {
    // Scroll-related operations
}, 16); // 60fps

window.addEventListener('scroll', optimizedScroll);

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid var(--color-primary) !important;
        outline-offset: 2px !important;
    }
    
    .nav__link.active {
        color: var(--color-primary) !important;
    }
    
    .nav__link.active::after {
        width: 100% !important;
    }
    
    .form-message {
        animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loading {
        pointer-events: none;
        opacity: 0.6;
    }
`;
document.head.appendChild(style);

// Calendar integration placeholder
function initCalendarIntegration() {
    // This would integrate with Calendly or similar service
    const calendarButtons = document.querySelectorAll('[data-calendar]');

    calendarButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            // Open calendar modal or redirect to calendar service
            console.log('Calendar integration would go here');
        });
    });
}

// Analytics placeholder
function initAnalytics() {
    // This would integrate with Google Analytics or similar
    // Placeholder for tracking events
    window.trackEvent = function (category, action, label) {
        console.log('Analytics Event:', { category, action, label });
        // Actual analytics implementation would go here
    };

    // Track form submissions
    appointmentForm?.addEventListener('submit', function () {
        trackEvent('Form', 'Submit', 'Appointment Request');
    });

    newsletterForm?.addEventListener('submit', function () {
        trackEvent('Form', 'Submit', 'Newsletter Subscription');
    });

    // Track CTA clicks
    document.querySelectorAll('.btn--primary').forEach(button => {
        button.addEventListener('click', function () {
            trackEvent('CTA', 'Click', this.textContent);
        });
    });
}

// Initialize additional features
initCalendarIntegration();
initAnalytics();

// Error handling
window.addEventListener('error', function (e) {
    console.error('JavaScript Error:', e.error);
    // In production, this would send errors to a monitoring service
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(function(registrationError) {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}
