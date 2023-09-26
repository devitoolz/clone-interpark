window.addEventListener('load', () => {
  let eventsSwiper;

  const makeEventsSlide = (_data) => {
    let swEventsHtml = ``;

    for (let event in _data) {
      let obj = _data[event];
      let temp = `
        <div class="swiper-slide">
          <a href="${obj.link}" class="events-link">
            <img src="images/${obj.pic}.jpg" alt="${obj.alt}" />
          </a>
        </div>`;

      swEventsHtml += temp;
    }

    let swEventsWrapper = document.querySelector('.sw-events .swiper-wrapper');
    swEventsWrapper.innerHTML = swEventsHtml;
    eventsSwiper = new Swiper('.sw-events', {
      slidesPerView: 3,
      spaceBetween: 27,
      navigation: {
        nextEl: '.events .sw-next',
        prevEl: '.events .sw-prev',
      },
      breakpoints: {
        1280: {
          slidesPerView: 4,
        },
      },
    });
  };

  fetchData('events', makeEventsSlide);
});
