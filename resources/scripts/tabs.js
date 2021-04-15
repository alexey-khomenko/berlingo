const tabs = document.querySelectorAll('[data-tab-open]');

document.addEventListener('click', function (e) {
    const newTabNumber = e.target.dataset.tabOpen ?? e.target.closest('[data-tab-open]')?.dataset.tabOpen;

    if (!newTabNumber) return true;

    if ((e.target.dataset.selected ?? e.target.closest('[data-tab-open]')?.dataset.selected) === 'on') return true;

    const oldTabNumber = document.querySelector(`[data-tab-open][data-selected="on"]`).dataset.tabOpen;

    document.querySelector(`[data-tab-open="${oldTabNumber}"]`).dataset.selected = 'off';
    document.querySelector(`[data-tab-body="${oldTabNumber}"]`).dataset.hidden = 'on';

    document.querySelector(`[data-tab-open="${newTabNumber}"]`).dataset.selected = 'on';
    document.querySelector(`[data-tab-body="${newTabNumber}"]`).dataset.hidden = 'off';
});