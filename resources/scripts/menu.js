const header = document.querySelector('.index-header');

document.querySelector('[data-menu-open]').addEventListener('click', function () {
    header.classList.add('open');
});

document.querySelector('[data-menu-close]').addEventListener('click', function () {
    header.classList.remove('open');
});

document.addEventListener('click', function (e) {
    const anchor = e.target.dataset.anchor ?? e.target.closest('[data-anchor]')?.dataset.anchor;

    if (!anchor) return true;

    const menuIsOpen = header.classList.contains('open');

    if (menuIsOpen) {
        header.classList.remove('open');
    }

    setTimeout(() => {
        const target = document.querySelector(`.index-${anchor}__main`);
        const wrapper = document.querySelector('.wrapper-outer');

        wrapper.scrollTo(0, getY(target));

        function getY(elem) {
            return elem.getBoundingClientRect().top + pageYOffset - 5;
        }
    }, menuIsOpen ? 700 : 10);
});