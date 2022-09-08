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
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    579: {
      slidesPerView: 2
    },
    848: {
      slidesPerView: 3
    },
    1124: {
      slidesPerView: 4
    }
  }
});

new Swiper('.testimonials__slider',{
  navigation: {
    nextEl: '.swiper-right-btn',
    prevEl: '.swiper-left-btn',
  },
  spaceBetween: 45,
  loop: true,
  simulateTouch: true,
  autoplay: {
    delay: 4000,
  },
  speed: 2000,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 1.5
    },
    806: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1050: {
      slidesPerView: 2.5
    },
    1280: {
      slidesPerView: 3
    }

  }
});

// dropdown

const DropDownBtn = document.querySelector(".header__dropdown");

DropDownBtn.addEventListener("click", function() {
  DropDownBtn.classList.toggle("active");
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

// nav

const navBtn = document.querySelector(".header__nav-btn");
const navBar = document.querySelector(".header__nav-list");
const navLinks = document.querySelectorAll(".header__dropdown-link");
const navDropdown = document.querySelector(".header__dropdown");

navBtn.addEventListener('click', function() {
  navBtn.classList.toggle('open');
  navBar.classList.toggle('open');
});

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].onclick = () => {
    navBtn.classList.remove('open');
    navBar.classList.remove('open');
    navDropdown.classList.remove('active');
  }
}

// accordion

const footerBtn = document.querySelectorAll(".footer__btn");
const footerSpoller = document.querySelectorAll(".footer__spoller");


footerBtn.forEach(onSpollerClick);

function onSpollerClick(item) {
  item.addEventListener("click", function (){
    let currentBtn = item;
    let spollerId = currentBtn.getAttribute("data-spoller");
    let currentSpoller = document.querySelector(spollerId);

    if (! currentBtn.classList.contains('open')) {
      footerBtn.forEach(function(item) {
        item.classList.remove('open');
      });

      footerSpoller.forEach(function(item) {
        item.classList.remove('open');
      });

      currentBtn.classList.add('open');
      currentSpoller.classList.add('open');
    } else {
      currentBtn.classList.remove('open');
      currentSpoller.classList.remove('open');
    }

  });
}