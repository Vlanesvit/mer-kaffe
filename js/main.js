const mainBlockFirst = document.querySelector('.main__block-1')
const mainButtonFirst = document.querySelector('.main__block-1 .main__button')

const mainBlockTwo = document.querySelector('.main__block-2')
const mainButtonTwo = document.querySelector('.main__block-2 .main__button')

mainButtonFirst.addEventListener('click', function (e) {
	e.preventDefault();
	mainBlockFirst.classList.remove('_active');
	mainBlockTwo.classList.add('_active');
})

mainButtonTwo.addEventListener('click', function (e) {
	e.preventDefault();
	mainBlockTwo.classList.remove('_active');
	mainBlockFirst.classList.add('_active');
})

//========================================================================================================================================================

const mainTabsButtons = document.querySelectorAll('.main__content .tabs__navigation .tabs__title');
mainTabsButtons.forEach(button => {
	button.addEventListener('click', function (e) {
		e.preventDefault();

		if (button.classList.contains('tabs-change-color')) {
			document.documentElement.classList.add('_white-version');
		} else {
			document.documentElement.classList.remove('_white-version');

		}
	})
});