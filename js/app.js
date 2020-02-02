const $burgerButton = document.querySelector('#burger')
const $nav = document.querySelector('#nav')

$burgerButton.addEventListener('click', () => {
    $nav.classList.toggle('c-header__nav--active')
})