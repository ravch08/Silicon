'use strict';

const fadeIns = document.querySelectorAll('.fade-in');

const header = document.querySelector('header');
const scrollTop = document.querySelector('.scrollTop ');
const bannerSection = document.querySelector('.heroBanner');


// ----- Intersection Observer -------------------------------------------------------------------

const options = {
   threshold: 1
};

const appearOptions = {
   threshold: 0.7,
   rootMargin: '-100px 0px -100px 0px'
};

const headerObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky'));
}, options);

const scrollObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => !entry.isIntersecting ? scrollTop.classList.remove('scaleDown') : scrollTop.classList.add('scaleDown'));
}, options);

const appearObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {

      if (!entry.isIntersecting) {
         return;
      } else {
         entry.target.classList.add('appear');
         appearObserver.unobserve(entry.target);
      };
   });
}, appearOptions);

headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);

fadeIns.forEach(fadeIn => appearObserver.observe(fadeIn));



// ----- Event Listeners -------------------------------------------------------------------

scrollTop.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});


// ----- Swiper ----------------------------------------------------------------------------

const swiperClients = new Swiper('#swiper-clients', {

   init: true,
   loop: true,
   speed: 1500,
   keyboard: true,
   loopedSlides: 50,
   spaceBetween: 40,
   grabCursor: true,
   mousewheel: false,
   centeredSlides: false,
   breakpointsInverse: true,
   loopFillGroupWithBlank: false,

   breakpoints: {
      640: {
         slidesPerView: 2
      },
      768: {
         slidesPerView: 4
      },
      1024: {
         slidesPerView: 6
      }
   },

   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   }
});