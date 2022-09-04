// tabs
const tabsBtn = document.querySelectorAll(".best-selling__btn");
const tabsItems = document.querySelectorAll(".best-selling__swiper-tab");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function (){

    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);


    if (! currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function(item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }

  });
}

document.querySelector('.best-selling__btn').click();


// Slider
new Swiper('.best-selling__swiper-tab',{
  navigation: {
    nextEl: '.swiper-right-btn',
    prevEl: '.swiper-left-btn',
  },
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  simulateTouch: true,
  speed: 500
});

new Swiper('.testimonials__slider',{
  navigation: {
    nextEl: '.swiper-right-btn',
    prevEl: '.swiper-left-btn',
  },
  slidesPerView: 3,
  spaceBetween: 45,
  loop: true,
  simulateTouch: true,
  autoHeight: true,
  autoplay: {
    delay: 4000,
  },
  speed: 2000
});

// dropdown

const DropDownBtn = document.querySelector(".header__dropdown");

DropDownBtn.addEventListener("click", function() {
  DropDownBtn.classList.toggle("open");
});

// scroll

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      // const topOffset = document.querySelector('.nav').offsetHeight;
      const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});