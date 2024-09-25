document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling to the About Me section
    const moreInfoBtn = document.getElementById('more-info-btn');
    moreInfoBtn.addEventListener('click', function() {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Contact Form Submission Alert
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Portfolio Item Hover Effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.style.transform = 'translateY(-10px)';
            item.style.boxShadow = '0 4px 15px rgba(255, 0, 127, 0.7)';
        });

        item.addEventListener('mouseout', function() {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'none';
        });
    });

    // Social Icons Hover Effect
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(function(icon) {
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.2)';
            icon.style.boxShadow = '0 4px 15px rgba(255, 0, 127, 0.7)';
        });

        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)';
            icon.style.boxShadow = 'none';
        });
    });

    // Button Hover Effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#ff7f00';
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#ff007f';
            button.style.transform = 'scale(1)';
        });
    });
});
