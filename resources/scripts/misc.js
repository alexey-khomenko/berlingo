window.mobileFlag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

document.addEventListener('click', function (e) {
    if (e.target.href === '#' || e.target.closest(`[href="#"]`)) e.preventDefault();
});

document.addEventListener('click', function (e) {
    const link = e.target.href ? e.target : e.target.closest("[href]");

    if (!link) return true;

    setTimeout(() => link.blur(), 700);
});