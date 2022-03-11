export async function menuMobil() {
  const burgerBtn = document.querySelector('.burger-btn');

  const menuLinks = document.querySelectorAll('.navigation__link');


  if (burgerBtn) {
    menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        if (burgerBtn.classList.contains('close-btn')) {
          burgerBtn.classList.remove('close-btn');
          closeMenu();
        }
      });
    });

    burgerBtn.addEventListener('click', () => {
      if (!burgerBtn.classList.contains('close-btn')) {
        burgerBtn.classList.add('close-btn');
        openMenu();
      } else {
        burgerBtn.classList.remove('close-btn');
        closeMenu();
      }
    });
  }
}
async function openMenu() {
  document.body.classList.add('disable-scroll');
  const timeLineMenuOpened = gsap.timeline({ defaults: { duration: .5, ease: "power3.inOut" } });
  timeLineMenuOpened.fromTo('.line--top', { x: "0", opacity: 1 }, { x: "-100%", opacity: 0 });
  gsap.fromTo('.navigation', { x: "-110%"}, {x: 0, duration: 0.01}, '<');
  timeLineMenuOpened.fromTo('.line--bottom', { x: "0", opacity: 1 }, { x: "100%", opacity: 0 }, '<5%');
  timeLineMenuOpened.fromTo('.line--middle-one', { rotate: 0 }, { rotate: -45, x: -5, y: 7 }, '<5%');
  timeLineMenuOpened.fromTo('.line--middle-two', { rotate: 0 }, { rotate: 45, x: -4, y: -1 }, '<5%');
  
}
async function closeMenu() {

  document.body.classList.remove('disable-scroll');
  const timeLineMenuClosed = gsap.timeline({ defaults: { duration: .5, ease: "power3.inOut" } });

  timeLineMenuClosed.to('.navigation', { x: "100%", duration: 0.01 },);

  timeLineMenuClosed.fromTo('.line--middle-one', { rotate: -45, x: -5, y: 7 }, { rotate: 0, x: 0, y: 0 }, '<5%');
  timeLineMenuClosed.fromTo('.line--middle-two', { rotate: 45, x: -4, y: -1 }, { rotate: 0, x: 0, y: 0 }, '<10%');
  timeLineMenuClosed.fromTo('.line--bottom', { x: "-100%", opacity: 0 }, { x: "0", opacity: 1 }, '<10%');
  timeLineMenuClosed.fromTo('.line--top', { x: "100%", opacity: 0 }, { x: "0", opacity: 1 }, '<10%');




}