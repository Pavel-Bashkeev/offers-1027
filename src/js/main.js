
import documentReady from './modules/documentReady.js';
import { createLine } from './components/createLine.js';
import linkSmooth from './helpers/linkSmooth.js';
import {reviewsSlider, sliderHeatedJacket, sliderHeatedVest, sliderHeatedVestCamouflage, sliderPants, sliderSneakers} from './components/sliders.js';
import { animLogo, animRunLine, animTextHero } from './components/animation.js';
import { timer } from './components/timer.js';
import { runLine } from './components/runLine.js';
import { modalWindow } from './components/modalWindow.js';
import { menuMobil } from './components/menuMob.js';
documentReady(()=>{
  linkSmooth();
  runLine();
  animLogo();
  animTextHero();
  animRunLine();
  document.querySelector('.timer') ? timer(): '';
  document.querySelector('.swiper-heated-jacket') ? sliderHeatedJacket() : '';
  document.querySelector('.swiper-heated-vest') ? sliderHeatedVest() : '';
  document.querySelector('.swiper-sneakers') ? sliderSneakers() : '';
  document.querySelector('.swiper-heated-vest-camouflage') ? sliderHeatedVestCamouflage() : '';
  document.querySelector('.swiper-pants') ? sliderPants() : '';
  reviewsSlider();
  modalWindow();
  menuMobil();
})

