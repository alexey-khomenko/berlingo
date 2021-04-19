document.querySelector(`[data-modal-name="login"] .form`).addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.querySelector(`[name="login-email"]`).value.trim();
    const password = document.querySelector(`[name="login-password"]`).value.trim();

    if (email.length < 4 || password.length < 4) return true;

    console.log(email, password);

    // todo ajax

    document.querySelector(`[name="login-email"]`).value = '';
    document.querySelector(`[name="login-password"]`).value = '';

    location.reload();
});

document.querySelector(`[data-modal-name="register"] .form`).addEventListener('submit', function (e) {
    e.preventDefault();

    const checkbox = document.querySelector(`#register-agree`);

    if (!checkbox.checked) return false;

    const email = document.querySelector(`[name="register-email"]`).value.trim();
    const phone = document.querySelector(`[name="register-phone"]`).value.trim();
    const password = document.querySelector(`[name="register-password"]`).value.trim();
    const city = document.querySelector(`[name="register-city"]`).value.trim();

    if (email.length < 4 || phone.length < 5 || password.length < 4 || city.length < 1) return true;

    console.log(email, phone, password, city);

    // todo ajax

    document.querySelector(`[name="register-email"]`).value = '';
    document.querySelector(`[name="register-phone"]`).value = '';
    document.querySelector(`[name="register-password"]`).value = '';
    document.querySelector(`[name="register-city"]`).value = '';

    window.misc.modalOpen('success');
});

document.querySelector(`[data-modal-name="register"] #register-agree`).addEventListener('change', svgColor);

svgColor();

function svgColor() {
    const input = document.querySelector(`[data-modal-name="register"] #register-agree`);
    const svg = document.querySelector(`[data-modal-name="register"] .form__check svg`);

    svg.style.color = input.checked ? '#000000' : 'transparent';
}