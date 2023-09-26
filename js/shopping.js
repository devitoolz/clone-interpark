window.addEventListener('load', () => {
  let shoppingSwiper;

  const makeShoppingSlide = (_data) => {
    let swShoppingHtml = ``;

    for (let good in _data) {
      let obj = _data[good];
      let temp = `
          <div class="swiper-slide">
            <a href="${obj.link}" class="good">
              <img src="images/${obj.pic}" alt="${obj.product}" />
              <div class="good-info">
                <ul class="good-info-list">
                  <li>
                    <b><span>${obj.ratio}%</span> ${obj.price}원</b>
                  </li>
                  <li><p>${obj.product}</p></li>
                </ul>
              </div>
            </a>
          </div>`;
      swShoppingHtml += temp;
    }

    let swShoppingWrapper = document.querySelector('.sw-shopping .swiper-wrapper');
    swShoppingWrapper.innerHTML = swShoppingHtml;

    if (shoppingSwiper) {
      shoppingSwiper.destroy();
    }

    shoppingSwiper = new Swiper('.sw-shopping', {
      slidesPerView: 5,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 10,
      navigation: {
        nextEl: '.shopping .sw-next',
        prevEl: '.shopping .sw-prev',
      },
      breakpoints: {
        1024: {
          spaceBetween: 32,
          slidesPerView: 3,
          // 화면당 3개씩 슬라이드 이동
          slidesPerGroup: 3,
          grid: {
            rows: 1,
          },
        },
        1280: {
          spaceBetween: 26,
          slidesPerView: 4,
          // 화면당 4개씩 슬라이드 이동
          slidesPerGroup: 4,
          grid: {
            rows: 1,
          },
        },
      },
    });
  };

  fetchData('shopping', makeShoppingSlide, '쎈딜');

  const btns = document.querySelectorAll('.shopping .btns a');

  btns.forEach((btn) => {
    btn.onclick = (e) => {
      if (btn.innerHTML !== '소담상회') {
        e.preventDefault();
        fetchData('shopping', makeShoppingSlide, btn.innerHTML);
        btns.forEach((btn) => {
          btn.classList.remove('btns-active');
        });
        btn.classList.add('btns-active');
      }
    };
  });

  btns[0].classList.add('btns-active');
});
