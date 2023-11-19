var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 5000,
    },
    mousewheel: true,
    slidesPerView: "auto",
    spaceBetween: 24,
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
  // const swiperSahre = new Swiper(".share-swiper", {
  //   spaceBetween: 24,
  //   // 滑鼠中鍵滾輪可滑動
  //   mousewheel: true,
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //     draggable: true
  //   },
  //   slidesPerView: "auto",
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   }
  // });
  