"use strict";
const burger = document.querySelector(".burger"),
   header = document.querySelector(".header"),
   body = document.querySelector("body");

window.addEventListener("load", () => {
   // function qs(element) {
   //    let newEl = document.querySelector(element);
   //    if (newEl) return newEl;
   // }
   // function qa(element) {
   //    let newEl = document.querySelectorAll(element);
   //    if (newEl) return newEl;
   // }

   // ! Burger
   // if (burger) {
   //    body.addEventListener("click", burgerToggle);
   //    function burgerToggle(e) {
   //       if (e.target.closest(".burger")) {
   //          if (burger.classList.contains("active")) {
   //             burger.classList.remove("active");
   //             header.classList.remove("active");
   //             body.classList.remove("lock");
   //          } else {
   //             burger.classList.add("active");
   //             header.classList.add("active");
   //             body.classList.add("lock");
   //             window.addEventListener("scroll", closeBurger); // Закрывает бургер при скролле в том случае, когда для Body не задан класс 'lock'
   //          }
   //       } else if (!e.target.closest(".burger") && !e.target.closest(".menu")) {
   //          burger.classList.remove("active");
   //          header.classList.remove("active");
   //          body.classList.remove("lock");
   //          window.removeEventListener("scroll", closeBurger);
   //       }
   //    }
   //    function closeBurger() {
   //       //Необязательная дополнительная проверка
   //       if (burger.classList.contains("active")) {
   //          burger.classList.remove("active");
   //          menu.classList.remove("active");
   //          header.classList.remove("active");
   //          body.classList.remove("lock");
   //          window.removeEventListener("scroll", closeBurger);
   //       }
   //    }
   // }

   // ! Spoiler.html
   // if (qa(".spoiler")) {
   //    // ? Если нужно открыть только первый спойлер на странице. Можно прогнать циклом для остальных
   //    if (qs(".spoiler").classList.contains("opened")) {
   //       let spoilerWrapper = qa(".spoiler__wrapper")[0];
   //       spoilerWrapper.style.height = spoilerWrapper.scrollHeight + "px";
   //    }

   //    body.addEventListener("click", toggleSpoiler);

   //    function toggleSpoiler(e) {
   //       if (e.target.closest(".spoiler__preview")) {
   //          e.target.closest(".spoiler").classList.toggle("opened");
   //          let spoilerWrapper = e.target.closest(".spoiler__preview").nextElementSibling;
   //          if (!e.target.closest(".spoiler").classList.contains("opened")) {
   //             spoilerWrapper.style.height = null;
   //          } else {
   //             spoilerWrapper.style.height = spoilerWrapper.scrollHeight + "px";
   //          }
   //       }
   //    }
   // }

   // ! Dropdown 
   // const dropdowns = document.querySelectorAll('.dropdown');

   // dropdowns.forEach(dropdown => {
   //    const select = dropdown.querySelector('.dropdown__select');
   //    const caret = dropdown.querySelector('.dropdown__caret');
   //    const menu = dropdown.querySelector('.dropdown__menu');
   //    const options = dropdown.querySelectorAll('.dropdown__item');
   //    const selected = dropdown.querySelector('.dropdown__selected');

   //    select.addEventListener('click', () => {
   //       caret.classList.toggle('caret-rotate');
   //       menu.classList.toggle('menu-open');
   //    })
   //    options.forEach(option => {
   //       option.addEventListener('click', () => {
   //          selected.innerText = option.innerText;
   //          caret.classList.remove('caret-rotate');
   //          menu.classList.remove('menu-open');
   //          options.forEach(option => {
   //             option.classList.remove('dropdown-active');
   //          })
   //          option.classList.add('dropdown-active');
   //       })
   //    })
   // })

   // ! Табы 
   // document.querySelectorAll('.tabs__link').forEach((item) =>
   //    item.addEventListener('click', function (e) {
   //       e.preventDefault();
   //       const id = this.getAttribute('href').replace('#', '');

   //       document.querySelectorAll('.tabs__link').forEach(
   //          (child) => child.classList.remove('tabs__link--active'));
   //       document.querySelectorAll('.tabs__tab').forEach(
   //          (child) => child.classList.remove('tabs__tab--active'));

   //       item.classList.add('tabs__link--active');
   //       document.getElementById(id).classList.add('tabs__tab--active')
   //    })
   // )

   // document.querySelector('.tabs__link').click();
});


// ! Animation elements 

// const titleElement = document.querySelector('.hero__title');
// const windowHeight = window.innerHeight;

// function checkScroll() {
//    const titlePosition = titleElement.getBoundingClientRect().top;

//    if (titlePosition - windowHeight <= 0) {
//       titleElement.classList.add('animate');
//    }
// }

// window.addEventListener('scroll', checkScroll);


// ! Paralax Effect 
// Параллакс эффект
// window.addEventListener("scroll", function () {
//    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    var parallaxElements = document.getElementsByClassName("parallax");

//    for (var i = 0; i < parallaxElements.length; i++) {
//       var element = parallaxElements[i];
//       var speed = parseFloat(element.getAttribute("data-speed")) || 0.5;
//       var yOffset = scrollTop * speed;

//       element.style.backgroundPositionY = yOffset + "px";
//    }
// });


new Swiper('.swiper', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },
   // spaceBetween: 30,
   slidesPerView: 1,
   loop: true,
   // effect: 'fade',
   // fadeEffect: {
   //    crossfade: true
   // },
   direction: 'vertical',
   mousewheel: true,
   // navigation: {
   //    nextEl: ".swiper-button-next",
   //    prevEl: ".swiper-button-prev",
   // }
});