export default () =>{
  const slider = new Swiper('.swiper', {
    slidePreView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoHeight: true,
  })
}