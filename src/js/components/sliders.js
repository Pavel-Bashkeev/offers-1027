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
    
    item.addEventListener('mouseenter', () => {
      let sliderName = item.dataset.sliderName;
    const sliderBox = document.querySelector(`[data-slider-name=${sliderName}]`);
    const slideAvtive = sliderBox.querySelector('.swiper-slide-active');
    const slideAvtiveNext = sliderBox.querySelector('.swiper-slide-next');
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

export const reviewsSlider = () => {
  const reviewSlider = new Swiper('.reviews__slider .swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay:true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
      },
      640: {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        autoHeight: false,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 25,
      }
    }
  })
}