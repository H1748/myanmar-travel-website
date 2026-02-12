// Myanmar Travel Website - Interactive Features

// Page Load Animation
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    
    // Hide loading screen
    setTimeout(() => {
        if (loading) {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }
        
        // Fade in body
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }, 500);
    
    // Set current year in footer
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = this.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (navLinks) {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        }
    });
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling function
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }

    // Add click event to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                smoothScroll(targetId);
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Navbar Background Change on Scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active nav link based on scroll position
            updateActiveNavLink();
        });
    }

    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
});

// Destination Cards Interactive Effect
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Destination Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        destinationCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Image Gallery Navigation
const mainImage = document.getElementById('mainImage');
if (mainImage) {
    const images = [
        'yangon1.jpg',
        'm1.jpg',
        'inle-01.jpg',
        'Yangon.jpg'
    ];
    let currentImageIndex = 0;

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            mainImage.src = images[currentImageIndex];
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            mainImage.src = images[currentImageIndex];
        });
    }
}

// Image Error Handling
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Check if image has already loaded
        if (img.complete && img.naturalHeight === 0) {
            replaceBrokenImage(img);
        }
        
        // Add error event listener
        img.addEventListener('error', function() {
            replaceBrokenImage(this);
        });
    });
}

function replaceBrokenImage(imgElement) {
    const altText = imgElement.alt.toLowerCase();
    const backupImages = {
        'bagan': 'https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'inle lake': 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'yangon': 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'default': 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    };
    
    // Find appropriate backup image
    let backupUrl = backupImages.default;
    for (const [key, url] of Object.entries(backupImages)) {
        if (altText.includes(key)) {
            backupUrl = url;
            break;
        }
    }
    
    // Replace with backup image
    imgElement.src = backupUrl;
    imgElement.style.opacity = '0.7';
    imgElement.style.filter = 'grayscale(20%)';
}

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for Statistics
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statisticsSection = document.querySelector('.statistics');
if (statisticsSection) {
    observer.observe(statisticsSection);
}

// Video Modal
const videoModal = document.getElementById('videoModal');
const watchVideoBtn = document.getElementById('watchVideo');
const closeModal = document.querySelector('.close-modal');

if (watchVideoBtn && videoModal && closeModal) {
    watchVideoBtn.addEventListener('click', function() {
        videoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', function() {
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === '') {
            nameError.textContent = window.languageManager ? 
                window.languageManager.get('formName') + ' ' + (window.languageManager.currentLang === 'my' ? 'ဖြည့်ရန်လိုအပ်ပါသည်' : 
                window.languageManager.currentLang === 'ja' ? 'を入力してください' : 'is required') : 'Name is required';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = window.languageManager ? 
                (window.languageManager.currentLang === 'my' ? 'မှန်ကန်သောအီးမေးလ်လိပ်စာထည့်ပါ' : 
                window.languageManager.currentLang === 'ja' ? '有効なメールアドレスを入力してください' : 
                'Please enter a valid email address') : 'Please enter a valid email';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim() === '') {
            messageError.textContent = window.languageManager ? 
                window.languageManager.get('formMessage') + ' ' + (window.languageManager.currentLang === 'my' ? 'ဖြည့်ရန်လိုအပ်ပါသည်' : 
                window.languageManager.currentLang === 'ja' ? 'を入力してください' : 'is required') : 'Message is required';
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }
        
        if (isValid) {
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Show success message
            const successMsg = window.languageManager ? 
                window.languageManager.get('successMessage') : 'Thank you for your message!';
            alert(successMsg);
            
            // Reset form
            contactForm.reset();
        }
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]');
        
        if (email.value) {
            const successMsg = window.languageManager ? 
                window.languageManager.get('subscribeSuccess') : 'Thank you for subscribing!';
            alert(successMsg);
            email.value = '';
        }
    });
}

// Current Time Display
function updateCurrentTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    if (!timeDisplay) return;
    
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Yangon'
    };
    
    // Get current language
    const currentLang = window.languageManager ? window.languageManager.currentLang : 'en';
    
    // Set locale based on language
    const locales = {
        'my': 'my-MM',
        'ja': 'ja-JP',
        'en': 'en-US'
    };
    
    try {
        const myanmarTime = now.toLocaleString(locales[currentLang] || 'en-US', options);
        timeDisplay.textContent = myanmarTime;
    } catch (error) {
        // Fallback to English if locale is not supported
        const myanmarTime = now.toLocaleString('en-US', options);
        timeDisplay.textContent = myanmarTime;
    }
}

// Update time every second
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// Culture Items Click Effect
document.querySelectorAll('.culture-more').forEach(button => {
    button.addEventListener('click', function() {
        const cultureItem = this.closest('.culture-item');
        const cultureTitle = cultureItem.querySelector('h3').textContent;
        
        const message = window.languageManager ? 
            (window.languageManager.currentLang === 'my' ? `${cultureTitle} အကြောင်း နောက်ပိုင်းတွင် ထပ်မံဖော်ပြပေးပါမည်။` : 
            window.languageManager.currentLang === 'ja' ? `${cultureTitle}についての詳細情報は近日公開予定です！` : 
            `More information about ${cultureTitle} coming soon!`) : 
            `More information about ${cultureTitle} coming soon!`;
        
        alert(message);
    });
});

// Destination Details Click Effect
document.querySelectorAll('.btn-detail').forEach(button => {
    button.addEventListener('click', function() {
        const destinationCard = this.closest('.destination-card');
        const destinationName = destinationCard.querySelector('h3').textContent;
        
        const message = window.languageManager ? 
            (window.languageManager.currentLang === 'my' ? `${destinationName} အကြောင်း အသေးစိတ်အချက်အလက်များကို ဤနေရာတွင် ပြသပေးပါမည်။` : 
            window.languageManager.currentLang === 'ja' ? `${destinationName}についての詳細情報はこちらに表示されます！` : 
            `Detailed information about ${destinationName} will be displayed here!`) : 
            `Detailed information about ${destinationName} will be displayed here!`;
        
        alert(message);
    });
});

// Weather Update Simulation
function updateWeather() {
    const temperature = document.querySelector('.temperature');
    const weatherIcon = document.querySelector('.weather-icon i');
    const weatherCondition = document.querySelector('.weather-condition');
    
    if (!temperature || !weatherIcon || !weatherCondition) return;
    
    const weatherData = [
        { temp: 32, icon: 'fa-sun', condition: 'weatherCondition' },
        { temp: 28, icon: 'fa-cloud-sun', condition: 'weatherCondition' },
        { temp: 26, icon: 'fa-cloud-rain', condition: 'weatherCondition' },
        { temp: 30, icon: 'fa-cloud', condition: 'weatherCondition' }
    ];
    
    const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
    
    temperature.textContent = randomWeather.temp + '°C';
    weatherIcon.className = 'fas ' + randomWeather.icon;
    
    // Update weather condition text based on current language
    if (window.languageManager) {
        weatherCondition.textContent = window.languageManager.get('weatherCondition');
    }
}

// Update weather every 30 minutes
setInterval(updateWeather, 1800000);

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observerAll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            if (entry.target.classList.contains('fade-in-up')) {
                entry.target.classList.add('fade-in-up');
            } else if (entry.target.classList.contains('fade-in-left')) {
                entry.target.classList.add('fade-in-left');
            } else if (entry.target.classList.contains('fade-in-right')) {
                entry.target.classList.add('fade-in-right');
            }
            observerAll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => {
        observerAll.observe(el);
    });
    
    // Handle image errors
    handleImageErrors();
});

// Initialize image error handling
document.addEventListener('DOMContentLoaded', handleImageErrors);

// Keyboard shortcuts for language switching
document.addEventListener('keydown', function(e) {
    // Ctrl + 1 for Myanmar
    if (e.ctrlKey && e.key === '1') {
        e.preventDefault();
        if (window.changeLanguage) {
            window.changeLanguage('my');
        }
    }
    // Ctrl + 2 for Japanese
    else if (e.ctrlKey && e.key === '2') {
        e.preventDefault();
        if (window.changeLanguage) {
            window.changeLanguage('ja');
        }
    }
    // Ctrl + 3 for English
    else if (e.ctrlKey && e.key === '3') {
        e.preventDefault();
        if (window.changeLanguage) {
            window.changeLanguage('en');
        }
    }
});

// Print functionality
window.addEventListener('beforeprint', function() {
    // Add print-specific styles
    const style = document.createElement('style');
    style.textContent = `
        .language-switcher,
        .back-to-top,
        .menu-toggle,
        .btn-detail,
        .culture-more,
        .submit-btn,
        #newsletterForm button {
            display: none !important;
        }
        
        header {
            background: white !important;
            color: black !important;
            height: auto !important;
        }
        
        nav {
            position: static !important;
            background: white !important;
            color: black !important;
        }
        
        .logo {
            color: black !important;
        }
        
        .nav-link {
            color: black !important;
        }
        
        section {
            padding: 40px 0 !important;
        }
    `;
    document.head.appendChild(style);
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Myanmar Travel Website Loaded Successfully!');
    console.log('Available languages: Myanmar (မြန်မာ), Japanese (日本語), English');
    console.log('Keyboard shortcuts: Ctrl+1 (Myanmar), Ctrl+2 (Japanese), Ctrl+3 (English)');
});


