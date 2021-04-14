document.addEventListener('click', function (e) {
    const modal = e.target.dataset.modal ?? e.target.closest('[data-modal]')?.dataset.modal;

    if (!modal) return true;

    console.log(modal);

    const header = document.querySelector('.index-header');
    const menuIsOpen = header.classList.contains('open');

    if (menuIsOpen) {
        header.classList.remove('open');
    }

    setTimeout(() => {
        // todo modal
    }, menuIsOpen ? 700 : 10);
});