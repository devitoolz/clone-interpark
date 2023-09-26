window.addEventListener('load', () => {
  let ticketSwiper;

  const makeTicketSlide = (_data) => {
    let swTicketHtml = ``;

    for (let ticket in _data) {
      let obj = _data[ticket];
      let temp = `
        <div class="swiper-slide">
          <a href="${obj.link}" class="ticket-link">
            <div class="ticket-img">
                <img src="images/${obj.pic}" alt="${obj.title}" />
                <span class="ticket-rank">${obj.rank}</span>
            </div>
            <div class="ticket-info">
                <ul class="ticket-info-list">
                    <li>
                        <span class="ticket-title"><b>${obj.title}</b></span>
                    </li>
                    <li>
                        <span class="ticket-hall">${obj.hall}</span>
                    </li>
                    <li>
                        <span class="ticket-date">${obj.date}</span>
                    </li>
                    <li ${
                      obj.sale ? 'style=display:block' : 'style=display:none'
                    }><span class="ticket-sale">${obj.sale}</span></li>
                </ul>
            </div>
          </a>
        </div>`;
      swTicketHtml += temp;
    }

    let swTicketWrapper = document.querySelector('.sw-ticket .swiper-wrapper');
    swTicketWrapper.innerHTML = swTicketHtml;

    if (ticketSwiper) {
      ticketSwiper.destroy();
    }

    ticketSwiper = new Swiper('.sw-ticket', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
        nextEl: '.ticket .sw-next',
        prevEl: '.ticket .sw-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 27,
        },
      },
    });
  };

  fetchData('ticket', makeTicketSlide, '뮤지컬');

  const btns = document.querySelectorAll('.ticket .btns a');

  btns.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      fetchData('ticket', makeTicketSlide, btn.innerHTML);
      btns.forEach((btn) => {
        btn.classList.remove('btns-active');
      });
      btn.classList.add('btns-active');
    };
  });

  btns[0].classList.add('btns-active');
});
