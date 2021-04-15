document.addEventListener('click', function (e) {
    const anchor = e.target.dataset.anchor ?? e.target.closest('[data-anchor]')?.dataset.anchor;

    if (!anchor) return true;

    const menuIsOpen = window.misc.header.classList.contains('open');

    if (menuIsOpen) {
        window.misc.header.classList.remove('open');
    }

    // todo if modalIsOpen
    const modalIsOpen = false;

    if (modalIsOpen) {
        //
    }

    setTimeout(() => {
        const target = document.querySelector(`.index-${anchor}__main`);
        const wrapper = document.querySelector('.wrapper-outer');

        wrapper.scrollTo(0, getY(target));

        function getY(elem) {
            return elem.getBoundingClientRect().top + pageYOffset - 5;
        }
    }, menuIsOpen || modalIsOpen ? 700 : 10);
});