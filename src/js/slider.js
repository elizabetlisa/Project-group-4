export default function slider(selector) {
  const swiper = new Swiper(selector, {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: `${selector}-pagination`,
    },

    // Navigation arrows
    navigation: {
      nextEl: `${selector}-button-next`,
      prevEl: `${selector}-button-prev`,
    },

    // And if we need scrollbar
    scrollbar: {
      el: `${selector}-scrollbar`,
    },
  });
}
