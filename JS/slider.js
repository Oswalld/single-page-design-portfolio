  window.onload = function(event) {
    // Swiper config
     const swiper = new Swiper(".swiper", {
       loop: true,
       centeredSlides: true,
       slidesPerView: "auto",
       grabCursor: true,
       initialSlide: 2,
       spaceBetween: 15,
       breakpoints: {
         768: {
           spaceBetween: 30
         }
       }
     });
     
     const prevSlideBtn = document.querySelector(".button--control-prev");
     const nextSlideBtn = document.querySelector(".button--control-next");
     
     nextSlideBtn.addEventListener("click", () => {
       swiper.slideNext();
     });
     prevSlideBtn.addEventListener("click", () => {
       swiper.slidePrev();
     });

  };