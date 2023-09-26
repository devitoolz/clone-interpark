window.addEventListener('load', () => {
  let tourSwiper;

  const makeTourSlide = (_data) => {
    let swTourHtml = ``;

    for (let tour in _data) {
      let obj = _data[tour];
      let temp = `
        <div class="swiper-slide">
          <a href="${obj.link}" class="tour-link">
            <div class="tour-img">
              <img src="images/${obj.pic}" alt="${obj.alt}" />
            </div>
            <div class="tour-info">
              <ul class="tour-info-list">
                <li ${obj.category ? "style='display:block'" : "style='display:none'"}>
                  <span class="tour-cate">${obj.category}</span>
                </li>
                <li>
                  <span class="tour-title">${obj.title}</span>
                </li>
                <li>
                  <span class="tour-place">${obj.place}</span>
                </li>
                <li>
                  <span class="tour-price"><b>${obj.price}</b>원~</span>
                </li>
              </ul>
            </div>
          </a>
        </div>`;
      swTourHtml += temp;
    }

    let swTourWrapper = document.querySelector('.sw-tour .swiper-wrapper');
    swTourWrapper.innerHTML = swTourHtml;

    if (tourSwiper) {
      tourSwiper.destroy();
    }

    tourSwiper = new Swiper('.sw-tour', {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 10,
      navigation: {
        nextEl: '.tour .sw-next',
        prevEl: '.tour .sw-prev',
      },
      breakpoints: {
        1024: {
          spaceBetween: 32,
          slidesPerView: 2,
          // 화면당 2개씩 슬라이드 이동
          slidesPerGroup: 2,
          grid: {
            rows: 1,
          },
        },
        1280: {
          spaceBetween: 26,
          slidesPerView: 3,
          // 화면당 4개씩 슬라이드 이동
          slidesPerGroup: 3,
          grid: {
            rows: 1,
          },
        },
      },
    });
  };

  fetchData('tour', makeTourSlide, '망설이면 품절');

  const btns = document.querySelectorAll('.tour .btns a');

  btns.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      fetchData('tour', makeTourSlide, btn.innerHTML);
      btns.forEach((btn) => {
        btn.classList.remove('btns-active');
      });
      btn.classList.add('btns-active');
    };
  });

  btns[0].classList.add('btns-active');
});
