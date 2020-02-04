const $burgerButton = document.querySelector('#burger')
const $nav = document.querySelector('#nav')
const $links = document.querySelectorAll('.c-header__link')

const toggleMenu = () => {
    $nav.classList.toggle('c-header__nav--active')
}

$burgerButton.addEventListener('click', toggleMenu)

$links.forEach(link => link.addEventListener('click', toggleMenu))