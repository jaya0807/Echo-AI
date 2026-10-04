document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        fadeElements.forEach(element => {
            const boxTop = element.getBoundingClientRect().top;
            
            if(boxTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check initially
});
