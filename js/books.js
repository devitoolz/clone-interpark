window.addEventListener('load', () => {
  let booksSwiper;

  const makeBooksSlide = (_data) => {
    let swBooksHtml = ``;

    for (let book in _data) {
      let obj = _data[book];
      let temp = `
        <div class="swiper-slide">
          <a href="${obj.link}" class="books-link">
            <div class="books-img">
              <img src="images/${obj.img}" alt="${obj.alt}" />
            </div>
            <div class="books-info">
              <p class="books-info-title">${obj.title}</p>
              <p class="books-info-price"><em>${obj.price}</em>원</p>
            </div>
          </a>
        </div>
      `;
      swBooksHtml += temp;
    }

    let swBooksWrapper = document.querySelector('.sw-books .swiper-wrapper');
    swBooksWrapper.innerHTML = swBooksHtml;

    if (booksSwiper) {
      booksSwiper.destroy();
    }

    booksSwiper = new Swiper('.sw-books', {
      slidesPerView: 3,
      grid: {
        rows: 4,
        fill: 'row',
      },
      spaceBetween: 19,
      navigation: {
        nextEl: '.books .sw-next',
        prevEl: '.books .sw-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
          grid: {
            rows: 1,
          },
        },
        1280: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 27,
          grid: {
            rows: 1,
          },
        },
      },
    });
  };

  fetchData('books', makeBooksSlide, `MD's Pick`);

  const btns = document.querySelectorAll('.books .btns a');

  btns.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      fetchData('books', makeBooksSlide, btn.innerHTML);
      btns.forEach((btn) => {
        btn.classList.remove('btns-active');
      });
      btn.classList.add('btns-active');
    };
  });

  btns[0].classList.add('btns-active');
});
