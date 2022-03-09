
import documentReady from './modules/documentReady.js';
import { createLine } from './components/createLine.js';
import linkSmooth from './helpers/linkSmooth.js';
import slider from './components/slider.js';
import { animLogo, animRunLine, animTextHero } from './components/animation.js';
import { timer } from './components/timer.js';
import { runLine } from './components/runLine.js';
documentReady(()=>{
  linkSmooth();
  runLine();
  animLogo();
  animTextHero();
  animRunLine();
  document.querySelector('.timer') ? timer(): '';
  // slider();
})

