const buttons = document.querySelectorAll('.accordion-button');
const mainImage = document.getElementById('main-image');
const block1 = document.getElementById('Wallmer-wind-1');
const block2 = document.getElementById('Wallmer-wind-2');
const block3 = document.getElementById('Wallmer-wind-3');
const block4 = document.getElementById('Wallmer-wind-4');
const block5 = document.getElementById('Wallmer-wind-5');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const item = button.parentNode;
    const isActive = item.classList.contains('active');

    if (!isActive) {
      closeAllAccordions();
      item.classList.add('active');
      button.querySelector('.accordion-icon').src = "./img/Wallmer/minus.svg";
      updateMainImage(index);
    } else {}
  });
});

function closeAllAccordions() {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.classList.remove('active');
    item.querySelector('.accordion-icon').src = "./img/Wallmer/add.svg";
  });
}

function updateMainImage(index) {
  switch (index) {
    case 0:
      block1.classList.add('classBlock')
      block2.classList.remove('classBlock')
      block3.classList.remove('classBlock')
      block4.classList.remove('classBlock')
      block5.classList.remove('classBlock')
      break;
    case 1:
      block1.classList.remove('classBlock')
      block2.classList.add('classBlock')
      block3.classList.remove('classBlock')
      block4.classList.remove('classBlock')
      block5.classList.remove('classBlock')
      break;
    case 2:
      block1.classList.remove('classBlock')
      block2.classList.remove('classBlock')
      block3.classList.add('classBlock')
      block4.classList.remove('classBlock')
      block5.classList.remove('classBlock')
      break;
    case 3:
      block1.classList.remove('classBlock')
      block2.classList.remove('classBlock')
      block3.classList.remove('classBlock')
      block4.classList.add('classBlock')
      block5.classList.remove('classBlock')
      break;
    case 4:
      block1.classList.remove('classBlock')
      block2.classList.remove('classBlock')
      block3.classList.remove('classBlock')
      block4.classList.remove('classBlock')
      block5.classList.add('classBlock')
      break;
    default:
      break;
  }
}

function resetMainImage() {
  mainImage.src = './img/Wallmer/Photos-Accordion/window.png';
  mainImage.alt = 'Изображение';
}
document.querySelector('.item:first-child').classList.add('active');
document.querySelector('.item:first-child .accordion-icon').src = "./img/Wallmer/minus.svg";
updateMainImage(0);



// slider


const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const sliderItems = document.querySelectorAll('.slider-item');

let currentPosition = 0;

prevButton.addEventListener('click', (event) => {
  event.preventDefault();
  currentPosition -= 1;
  if (currentPosition < 0) {
    currentPosition = sliderItems.length - 3;
  }
  updateSliderPosition();
});

nextButton.addEventListener('click', (event) => {
  event.preventDefault();
  currentPosition += 1;
  if (currentPosition > sliderItems.length - 3) {
    currentPosition = 0;
  }
  updateSliderPosition();
});

function updateSliderPosition() {
  const translateX = currentPosition * -(100 / 3);
  sliderContainer.style.transform = `translateX(${translateX}%)`;
  sliderContainer.style.transition = 'transform 0.3s ease-in-out';

  sliderItems.forEach((item, index) => {
    item.classList.remove('centered', 'right-aligned');

    if (index === currentPosition) {

    } else if (index === currentPosition + 1) {
      item.classList.add('centered');
    } else if (index === currentPosition + 2) {
      item.classList.add('right-aligned');
    }
  });

}