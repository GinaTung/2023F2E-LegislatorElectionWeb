var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });