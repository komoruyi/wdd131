// Static values for temperature and wind speed (matching displayed values)
const temperature = 22; // °C
const windSpeed = 8; // km/h

// Function to calculate wind chill factor
function calculateWindChill(temp, wind) {
    // Wind chill formula for metric (Celsius) - using standard Canadian formula
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

// Function to update footer with current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);
    
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Function to display wind chill
function displayWindChill() {
    const windChillElement = document.getElementById('wind-chill');
    
    // Check conditions for viable wind chill calculation
    // Metric: temperature <= 10°C and wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = ⁠ ${Math.round(windChill)}°C ⁠;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Function to add smooth scrolling to navigation links
function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Function to add animation to attraction cards on scroll
function addScrollAnimations() {
    const cards = document.querySelectorAll('.attraction-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Function to handle responsive navigation
function handleResponsiveNav() {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.className = 'nav-toggle';
    navToggle.style.display = 'none';
    
    // Add CSS for mobile nav toggle
    const style = document.createElement('style');
    style.textContent = `
        .nav-toggle {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--primary-color);
            padding: 1rem;
            display: none;
        }
        
        @media (max-width: 768px) {
            .nav-toggle {
                display: block !important;
            }
            
            .nav-collapsed {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    nav.insertBefore(navToggle, nav.firstChild);
    
    navToggle.addEventListener('click', () => {
        const navList = nav.querySelector('ul');
        navList.classList.toggle('nav-collapsed');
    });
}

// Function to update weather display with current conditions
function updateWeatherDisplay() {
    // Update temperature and wind speed elements to match static values
    document.getElementById('temperature').textContent = ⁠ ${temperature}°C ⁠;
    document.getElementById('wind-speed').textContent = ⁠ ${windSpeed} km/h ⁠;
}

// Main initialization function
function init() {
    updateFooter();
    updateWeatherDisplay();
    displayWindChill();
    addSmoothScrolling();
    addScrollAnimations();
    handleResponsiveNav();
    
    // Add loading completion indicator
    document.body.classList.add('loaded');
    
    // Console log for debugging
    console.log('Country page initialized successfully');
    console.log(⁠ Temperature: ${temperature}°C, Wind Speed: ${windSpeed} km/h ⁠);
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', init);

// Optional: Add error handling for images
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn(⁠ Failed to load image: ${this.src} ⁠);
        });
    });
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateWindChill,
        displayWindChill,
        updateFooter
    };
}