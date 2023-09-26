const fetchData = (json, makeSlide, type) => {
  fetch(`data/${json}.json`)
    .then((res) => res.json())
    .then((result) => {
      if (type) {
        makeSlide(result[type]);
      } else {
        makeSlide(result);
      }
    })
    .catch((err) => console.log(err));
};

window.onload = function () {
  // 모달창 처리
  let body = document.querySelector('body');
  body.classList.add('modal-active');
  let modal = document.querySelector('.modal');
  modal.onclick = function () {
    body.classList.remove('modal-active');
    this.style.display = 'none';
  };
  // 위로 이동하기
  // .gotop 을 js에 저장하자.
  const goTop = document.querySelector('.gotop');
  // goTop 클릭을 처리한다
  goTop.addEventListener('click', function () {
    // 위로 슬라이딩 코드
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};
