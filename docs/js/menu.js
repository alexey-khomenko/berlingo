document.addEventListener('click', function (e) {
    const menuOpen = e.target.dataset.menuOpen ?? e.target.closest('[data-menu-open]');

    if (!menuOpen) return true;

    window.misc.header.classList.add('open');
});

document.addEventListener('click', function (e) {
    const menuClose = e.target.dataset.menuClose ?? e.target.closest('[data-menu-close]');

    if (!menuClose) return true;

    window.misc.header.classList.remove('open');
});