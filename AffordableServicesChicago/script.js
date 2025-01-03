// to get the customer reviews swipe to go infinite loop
const swiper = new Swiper('.slider-wrapper', {
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // customer breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

// Get the full screen images
document.querySelectorAll(".image-container img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});
document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
};