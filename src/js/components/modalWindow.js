export const modalWindow = () => {
  const modal = document.querySelector('.modal');
	const modalContent = document.querySelector('.modal-content');
	const modalCloseBtn = document.querySelector('.modal-close');
	const form = document.querySelector('form');
	const formBox = document.querySelector('.modal-form');
	const productContentBox = document.querySelector('.modal-content__product');
	const modalCardImage = document.querySelector('.modal-content__image');
	const moreBtns = document.querySelectorAll('.more-btn');
	const productInfo = document.querySelectorAll('.product-description');
	const modalProductPriceBox = document.querySelector('.price-box');

	const widthScrollBar = window.innerWidth - document.getElementsByTagName('html')[0].clientWidth;
	moreBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const cardTarget = btn.parentNode;
			const productInfo = cardTarget.querySelector('.product-description');
			const mainImageCard = cardTarget.querySelector('.card__image--main');
			const cardProductName = cardTarget.querySelector('.card__title').textContent;
			// const btnFormCard = cardTarget.querySelector('.form__btn');

			const cardPriceProduct = cardTarget.querySelector('.card__price');
			const cloneCardPriceProduct = cardPriceProduct.cloneNode(true);
			cloneCardPriceProduct.classList.remove('card__price');
			cloneCardPriceProduct.classList.add('modal-content__price');

			

			const cloneProductInfo = productInfo.cloneNode(true);			
			const modalProductName = cloneProductInfo.querySelector('.product-description .product-description__title');

			modalProductName ? modalProductName.innerHTML = cardProductName : '';

			modal.classList.add('is-open');
			document.body.classList.add('disable-scroll');
			document.body.style.paddingRight = widthScrollBar + 'px';
			
			modalCardImage.src = mainImageCard.src;
			
			form.classList.add('modal-content__form');
			form.prepend(cloneCardPriceProduct);
			formBox.appendChild(form);
			productInfo ? productContentBox.appendChild(cloneProductInfo) : '' ;
		})
	});
	modalCloseBtn.addEventListener('click', () => {
		modal.classList.remove('is-open');
		document.body.classList.remove('disable-scroll');
		document.body.style.paddingRight = null;
		formBox.innerHTML = '';
		productContentBox.innerHTML = '';
		modalProductPriceBox.innerHTML = '';
		form.removeChild(form.querySelector('.price'));
	})
}