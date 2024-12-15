// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation for Contact Us form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
