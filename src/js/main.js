document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuTrigger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        setTimeout(() => mobileMenu.classList.toggle('opacity-0'), 0);
    });
});
