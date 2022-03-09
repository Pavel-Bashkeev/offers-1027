export const animLogo = () => {
  const timeLineLogo = gsap.timeline();
  timeLineLogo.fromTo("#left-fire", {y: "150%",x:"100%", opacity: 0}, {y: 0,x:0,duration: 1, opacity: 1, repeat: -1});
  timeLineLogo.fromTo("#rigth-fire", {y: "150%",x:"-100%", opacity: 0}, {y: 0,x:0,duration: .8, delay: .5, opacity: 1, repeat: -1}, '<');
}

export const animTextHero = () => {
  const timeLineTextHero = gsap.timeline({ defaults: { duration: 0.75,  ease: "power2.inOut" } });
  gsap.fromTo('.hero__preview', {x: "-100%", opacity: 0}, {x: 0, opacity: 1, duration: 0.75,ease: "power2.inOut"});
  timeLineTextHero.fromTo('.hero__title', {y: "100%", opacity: 0}, {y: 0, opacity: 1});
  timeLineTextHero.fromTo('.hero__subtitle', {y: 50, opacity: 0}, {y: 0,  opacity: 1},'<50%');
  timeLineTextHero.fromTo('.hero__delivery', {y: 50, opacity: 0}, {y: 0, opacity: 1},'<50%');
  timeLineTextHero.fromTo('.hero__timer', {y: 100, opacity: 0}, {y: 0, opacity: 1},'<50%');
}
export const animRunLine = () => {
  const timeLineRunLine = gsap.timeline({ defaults: { duration: 50,  ease: "none" } });
    timeLineRunLine.fromTo('.runline',{y: "100%", opacity: 0}, {y: 0, opacity: 1, delay: 1.5, duration:.5});

  const timeLineRunLineNew = gsap.timeline({ defaults: { duration: 45,  ease: "none", repeat: -1 } });
  // timeLineRunLine.fromTo('.runline__text',{x:"0"}, {x:"250%", onComplete: ()=> timeLineRunLineNew.play()});

  timeLineRunLineNew.fromTo('.runline__text',{x:"-250%"}, {x:"230%"});
}