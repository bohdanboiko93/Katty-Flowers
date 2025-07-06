const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js_burger_btn');
const burgerContentNode = document.querySelector('.js-burger_content')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}

const burgerBtn = document.querySelector('.js_burger_btn');
const burgerIcon = burgerBtn.querySelector('.burger-icon');
const closeIcon = burgerBtn.querySelector('.burger_close_btn');

burgerBtn.addEventListener('click', function() {
  // Переключаем видимость иконок
  if (burgerIcon.style.display === 'none') {
    burgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    burgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
  
  // Здесь также можно добавить код для открытия/закрытия меню
  // document.querySelector('.menu').classList.toggle('open');
});