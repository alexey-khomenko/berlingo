document.querySelector('[data-s-menu]').addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('.index-header').classList.toggle('open');
});