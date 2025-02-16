
// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.submit-btn');
    const successMessage = document.getElementById('successMessage');

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    // Simulate form submission
    setTimeout(() => {
        successMessage.style.display = 'block';
        submitBtn.innerHTML = 'Send Message';
        submitBtn.disabled = false;

        // Reset form
        this.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }, 1500);
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.contact-form, .contact-info').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(element);
});
