// =============================================
// Terry Sterling Scholars - Main JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', function() {

    // 1. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Navbar Active Link Highlight (based on current page)
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // 3. Contact Form Success Message (for contact.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Allow HTML5 validation to run first
            if (!this.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.add('was-validated');
                return;
            }

            // If form is valid, show success message
            e.preventDefault();
            
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-4';
            successMessage.innerHTML = `
                <strong>Thank you!</strong> Your message has been received successfully.<br>
                We will get back to you within 24 hours.
            `;
            
            // Remove any existing success messages
            const existingAlert = contactForm.querySelector('.alert');
            if (existingAlert) existingAlert.remove();
            
            contactForm.appendChild(successMessage);
            
            // Reset form after showing message
            setTimeout(() => {
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                successMessage.remove();
            }, 5000);
        });
    }

    // 4. Back to Top Button (Optional enhancement)
    function createBackToTopButton() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.className = 'btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle shadow';
        backToTop.style.width = '50px';
        backToTop.style.height = '50px';
        backToTop.style.opacity = '0';
        backToTop.style.transition = 'all 0.3s';
        backToTop.style.zIndex = '1000';
        document.body.appendChild(backToTop);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.style.opacity = '1';
                backToTop.style.transform = 'translateY(0)';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.transform = 'translateY(20px)';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize everything
    setActiveNavLink();
    createBackToTopButton();

    // Console message for developers
    console.log('%cTerry Sterling Scholars Website Loaded Successfully ✅', 
                'color: #F2C94C; font-weight: bold; font-size: 14px;');

});