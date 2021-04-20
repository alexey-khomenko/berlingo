document.querySelector(`[data-modal-name="login"] .form`).addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.querySelector(`[name="login-email"]`).value.trim();
    const password = document.querySelector(`[name="login-password"]`).value.trim();

    if (email.length < 4 || password.length < 4) return true;

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    const response = await fetch('/ajax/login_ajax.php', {method: 'POST', body: data});
    const results = await response.json();

    console.log(results);

    if (results.status !== '+') return true;

    document.querySelector(`[name="login-email"]`).value = '';
    document.querySelector(`[name="login-password"]`).value = '';

    location.reload();
});

document.querySelector(`[data-modal-name="register"] .form`).addEventListener('submit', async function (e) {
    e.preventDefault();

    const checkbox = document.querySelector(`#register-agree`);

    if (!checkbox.checked) return false;

    const email = document.querySelector(`[name="register-email"]`).value.trim();
    const phone = document.querySelector(`[name="register-phone"]`).value.trim();
    const password = document.querySelector(`[name="register-password"]`).value.trim();
    const city = document.querySelector(`[name="register-city"]`).value.trim();

    if (email.length < 4 || phone.length < 5 || password.length < 4 || city.length < 2) return true;

    console.log(email, phone, password, city);

    let data = new FormData();
    data.append('email', email);
    data.append('phone', phone);
    data.append('password', password);
    data.append('city', city);
    const response = await fetch('/ajax/register_ajax.php', {method: 'POST', body: data});
    const results = await response.json();

    console.log(results);

    if (results.status !== '+') return true;

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

//----------------------------------------------------------------------------------------------------------------------

const regForm = document.querySelector('[data-modal-name="register"] .form');

if (regForm) {
    const cityInput = regForm.querySelector(`[name="register-city"]`);
    const citiesList = document.querySelector('.form__input_select .cities');

    cityInput.addEventListener('focus', cityInputListener);
    cityInput.addEventListener('input', cityInputListener);
    cityInput.addEventListener('paste', cityInputListener);

    document.addEventListener('click', function (e) {
        if (e.target.closest('.cities') || e.target.closest('[name="register-city"]')) return true;

        citiesList.dataset.hidden = 'on';
    });

    document.querySelector('.form__input_select').addEventListener('click', function (e) {
       e.preventDefault();
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('[data-city]') || e.target.tagName === 'LI') return true;

        cityInput.value = e.target.textContent.trim();

        citiesList.dataset.hidden = 'on';
    });

    function cityInputListener(e) {
        citiesList.dataset.hidden = 'off';

        const value = e.target.value.trim().toLowerCase();

        const cities = citiesList.querySelectorAll('li');

        for (let city of cities) {
            const cityName = city.querySelector('span').textContent.toLowerCase();

            if (cityName.indexOf(value) === -1 && value.length > 0) {
                city.dataset.hidden = 'on';
            }
            else {
                city.dataset.hidden = 'off';
            }
        }
    }
}