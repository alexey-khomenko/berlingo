document.querySelector('[data-menu-open]').addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('.index-header').classList.add('open');
});

document.querySelector('[data-menu-close]').addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('.index-header').classList.remove('open');
});

document.addEventListener('click', function (e) {
    const anchor = e.target.dataset.anchor ?? e.target.closest('[data-anchor]')?.dataset.anchor;

    if (!anchor) return true;

    console.log(anchor);

    const header = document.querySelector('.index-header');
    const menuIsOpen = header.classList.contains('open');

    if (menuIsOpen) {
        header.classList.remove('open');
    }

    setTimeout(() => {
        // todo anchor scroll
        //document.querySelector(`.index-${anchor}`).scrollIntoView();
        //document.querySelector(`.wrapper-outer`).scrollTo(0,300);
    }, menuIsOpen ? 700 : 10);
});