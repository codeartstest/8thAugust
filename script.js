document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        navList.classList.toggle('open');
        const expanded = hamburger.classList.contains('open');
        hamburger.setAttribute('aria-expanded', expanded);
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('open');
            navList.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    const observerOptions = {
        rootMargin: '-70px 0px -60% 0px'
    };

    if (!('IntersectionObserver' in window)) return;

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(function(section) {
        sectionObserver.observe(section);
    });
});