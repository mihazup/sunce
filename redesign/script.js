// ========================
// MOBILE NAVIGATION
// ========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================
// SMOOTH SCROLL & ACTIVE LINK
// ========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================
// CONTACT FORM (Removed - no contact form)
// ========================

// ========================
// SCROLL ANIMATIONS
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to benefit items and instructor cards
document.querySelectorAll('.benefit-item, .instructor-card, .structure-card, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================
// NAVBAR SHADOW ON SCROLL
// ========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// ========================
// CTA BUTTON FUNCTIONALITY
// ========================

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        // If it's the hero CTA or large CTA, scroll to contact
        if (button.classList.contains('cta-button-large') || button.parentElement.classList.contains('hero-content')) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ========================
// PAGE LOAD ANIMATION
// ========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ========================
// FORM VALIDATION (Removed - no contact form)
// ========================

// ========================
// ANALYTICS (Optional - Replace with your tracking)
// ========================

// Track button clicks
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('CTA button clicked');
        // Add your analytics code here
    });
});

// Track scroll to sections
document.querySelectorAll('section').forEach(section => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Section ${entry.target.id} in view`);
                // Add your analytics code here
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(section);
});
