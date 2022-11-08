
const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSlider = document.querySelector('.slider');
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');


for (let i = 0; i < images.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = images[i].image;
	eleImg.classList.add('slider-img');
	
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSlider.append(eleImg);
}

const listEleImg = document.querySelectorAll('.slider-img');
const imgStyle = document.querySelectorAll('.dark')
let activeIndex = 0;

eleBtnDown.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');
	imgStyle[activeIndex].classList.remove('light')
	

	if (activeIndex === listEleImg.length - 1) {
		activeIndex = 0;
	}	else {
		activeIndex++;
	}
	listEleImg[activeIndex].classList.add('active');
	imgStyle[activeIndex].classList.add('light')

});


eleBtnUp.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');
	imgStyle[activeIndex].classList.remove('light')

	if (activeIndex === 0) {
		activeIndex = listEleImg.length - 1;
	}	else {
		activeIndex--;
	}

	listEleImg[activeIndex].classList.add('active');
	imgStyle[activeIndex].classList.add('light')
});


scrolling = setInterval(function (){
	listEleImg[activeIndex].classList.remove('active');
	imgStyle[activeIndex].classList.remove('light')
	

	if (activeIndex === listEleImg.length - 1) {
		activeIndex = 0;
	}	else {
		activeIndex++;
	}
	listEleImg[activeIndex].classList.add('active');
	imgStyle[activeIndex].classList.add('light')
}, 3000)


function start(){
	clearInterval(scrolling);
	scrolling = setInterval(function (){
		listEleImg[activeIndex].classList.remove('active');
		imgStyle[activeIndex].classList.remove('light')
		
	
		if (activeIndex === listEleImg.length - 1) {
			activeIndex = 0;
		}	else {
			activeIndex++;
		}
		listEleImg[activeIndex].classList.add('active');
		imgStyle[activeIndex].classList.add('light')
	}, 3000)
}

function stop(){
	clearInterval(scrolling);
}

function invert(){
	clearInterval(scrolling);

	scrolling = setInterval(function (){
		listEleImg[activeIndex].classList.remove('active');
		imgStyle[activeIndex].classList.remove('light')
		
		if (activeIndex === listEleImg.length - 1) {
			activeIndex = 0;
		}	else {
			activeIndex--;
		}
		listEleImg[activeIndex].classList.add('active');
		imgStyle[activeIndex].classList.add('light')
	}, 3000)
}


document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);
document.getElementById("invertBtn").addEventListener("click", invert);


let up = false;
document.getElementById("invertBtn").addEventListener('click', () => {
	up = !up;

	if (up) invert();
  	else start();
});
	



