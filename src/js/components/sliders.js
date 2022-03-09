export const sliderHeatedJacket = () => {
  sliderTemplate('.swiper-heated-jacket');
}
export const sliderHeatedVest = () => {
  sliderTemplate('.swiper-heated-vest')
}
export const sliderSneakers = () => {
  sliderTemplate('.swiper-sneakers')
}
export const sliderHeatedVestCamouflage = () => {
  sliderTemplate('.swiper-heated-vest-camouflage')
}
export const sliderPants = () => {
  sliderTemplate('.swiper-pants')
}

function changeFistSlide() {
  const cardsBox = document.querySelectorAll('.card');
  cardsBox.forEach(item => {
    let sliderName = item.dataset.sliderName;
    const sliderBox = document.querySelector(`[data-slider-name=${sliderName}]`);
    const slideAvtive = sliderBox.querySelector('.swiper-slide-active');
    const slideAvtiveNext = sliderBox.querySelector('.swiper-slide-next');
    item.addEventListener('mouseenter', () => {
      slideAvtive.style.opacity = '0';
      slideAvtiveNext.style.opacity = '1';

      sliderBox.addEventListener('mouseleave', () => {
        slideAvtive.style.opacity = '1';
        slideAvtiveNext.style.opacity = '0';
      });
    })
  })

}

function sliderTemplate(selector) {
  const slider = new Swiper(selector, {
    slidePreView: 1,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
      init: () => {
        changeFistSlide()
      }
    }
  });
}