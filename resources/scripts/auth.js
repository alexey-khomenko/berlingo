document.querySelector(`[data-modal-name="login"] .form`).addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.querySelector(`[name="login-email"]`).value.trim();
    const password = document.querySelector(`[name="login-password"]`).value.trim();

    console.log(email, password);

    // todo ajax

    document.querySelector(`[name="login-email"]`).value = '';
    document.querySelector(`[name="login-password"]`).value = '';
    location.reload();
});

document.querySelector(`[data-modal-name="register"] .form`).addEventListener('submit', function (e) {
    e.preventDefault();


});