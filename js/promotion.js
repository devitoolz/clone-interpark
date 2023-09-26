window.addEventListener('load', () => {
  let promotionSwiper;

  const makePromotionSlide = (_data) => {
    let swPromotionHtml = ``;

    for (let promotion in _data) {
      let obj = _data[promotion];
      let temp = `
        <div class="swiper-slide">
          <a href="${obj.link}"><img src="images/${obj.img}" alt="${obj.name}"></a>
        </div>`;

      swPromotionHtml += temp;
    }

    let swPromotionWrapper = document.querySelector('.sw-promotion .swiper-wrapper');
    swPromotionWrapper.innerHTML = swPromotionHtml;

    promotionSwiper = new Swiper('.sw-promotion', {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.promotion .sw-next',
        prevEl: '.promotion .sw-prev',
      },
      pagination: {
        el: '.sw-promotion-pg',
        clickable: true,
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
        },
      },
    });
  };

  fetchData('promotion', makePromotionSlide);
});
