window.addEventListener('DOMContentLoaded', () => {
    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle && sidebarWrapper) {
        menuToggle.addEventListener('click', e => {
            e.preventDefault();
            sidebarWrapper.classList.toggle('active');
        });
    }

    document.querySelectorAll('a.js-scroll-trigger').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hash = this.getAttribute('href');
            if (!hash || !hash.startsWith('#')) return;
            const target = document.querySelector(hash);
            if (!target) return;
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
            if (sidebarWrapper) sidebarWrapper.classList.remove('active');
        });
    });
});
