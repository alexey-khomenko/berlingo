document.addEventListener('click', function (e) {
    const modal = e.target.dataset.modalOpen ?? e.target.closest('[data-modal-open]')?.dataset.modalOpen;

    if (!modal) return true;

    const header = document.querySelector('.index-header');
    const menuIsOpen = header.classList.contains('open');

    if (menuIsOpen) {
        header.classList.remove('open');
    }

    setTimeout(() => {
        // todo
        console.log(modal);
    }, menuIsOpen ? 700 : 10);
});