const button = document.getElementById('btnChange');

button.addEventListener('click', function () {
    const ul = document.getElementById('navMenu');
    const lis = document.getElementsByClassName('menu');

    ul.style.display = 'initial';

    for (const li of lis) {
        li.classList.toggle('horizontal');
    }
});