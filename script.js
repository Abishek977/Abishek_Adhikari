document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Adding hover effects for buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 8px 16px rgba(255, 0, 127, 0.5)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = 'none';
        });
    });

    // Adding hover effects for portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 8px 16px rgba(255, 0, 127, 0.5)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
    });

    // Add background color animation effect for the home section
    const homeSection = document.getElementById('home');
    let gradientIndex = 0;
    const gradients = [
        'linear-gradient(to right, #ff007f, #ff7f00)',
        'linear-gradient(to right, #007fff, #7f00ff)',
        'linear-gradient(to right, #ff007f, #7f00ff)',
        'linear-gradient(to right, #ff7f00, #007fff)'
    ];
    
    setInterval(() => {
        homeSection.style.background = gradients[gradientIndex];
        gradientIndex = (gradientIndex + 1) % gradients.length;
    }, 3000);

    // Lightbox configuration
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    // More info button click event
    document.getElementById('more-info-btn').addEventListener('click', () => {
        alert('More information coming soon!');
    });

    // Contact form validation
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Get form elements
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Simple validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            event.preventDefault(); // Prevent form submission
            return false;
        }

        // Optional: Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
            return false;
        }

        // If everything is fine, submit the form
        alert('Thank you for your message! I will get back to you soon.');
        return true; // Allow form submission
    });
});