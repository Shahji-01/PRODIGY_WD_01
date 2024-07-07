window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
    } else {
        navbar.style.backgroundColor = '#2c3e50';
    }
});
