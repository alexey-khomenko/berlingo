document.querySelector(`[data-modal-name="receipt"] .form`).addEventListener('submit', function (e) {
    e.preventDefault();

    const checkbox = document.querySelector(`#receipt-agree`);

    if (!checkbox.checked) return false;

    const shop = document.querySelector(`[name="receipt-shop"]`).value.trim();

    console.log(shop);



});





document.querySelector(`[data-modal-name="receipt"] #receipt-agree`).addEventListener('change', svgColor);

svgColor();

function svgColor() {
    const input = document.querySelector(`[data-modal-name="receipt"] #receipt-agree`);
    const svg = document.querySelector(`[data-modal-name="receipt"] .form__check svg`);

    svg.style.color = input.checked ? '#000000' : 'transparent';
}