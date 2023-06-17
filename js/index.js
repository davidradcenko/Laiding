// const buttons = document.querySelectorAll('.accordion-button');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const item = button.parentNode;
//     const isActive = item.classList.contains('active');

//     closeAllAccordions();

//     if (!isActive) {
//       item.classList.add('active');
//       button.querySelector('.accordion-icon').textContent = '-';
//     } else {
//       button.querySelector('.accordion-icon').textContent = '+';
//     }
//   });
// });

// function closeAllAccordions() {
//   const items = document.querySelectorAll('.item');
//   items.forEach(item => {
//     item.classList.remove('active');
//     item.querySelector('.accordion-icon').textContent = '+';
//   });
// }

// document.querySelector('.item:first-child').classList.add('active');
// document.querySelector('.item:first-child .accordion-icon').textContent = '-';


// 

const buttons = document.querySelectorAll('.accordion-button');
const mainImage = document.getElementById('main-image');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const item = button.parentNode;
        const isActive = item.classList.contains('active');

        if (!isActive) {
            closeAllAccordions();
            item.classList.add('active');
            button.querySelector('.accordion-icon').textContent = '-';
            updateMainImage(index);
        } else {
            // item.classList.remove('active');
            // button.querySelector('.accordion-icon').textContent = '+';
            // resetMainImage();
        }
    });
});

function closeAllAccordions() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-icon').textContent = '+';
    });
}

function updateMainImage(index) {
    switch (index) {
        case 0:
            mainImage.src = './img/Wallmer/Photos-Accordion/window.png';
            mainImage.alt = 'Изображение 1';
            break;
        case 1:
            mainImage.src = './img/Wallmer/Photos-Accordion/profileImage.png';
            mainImage.alt = 'Изображение 2';
            break;
        case 2:
            mainImage.src = './img/Wallmer/Photos-Accordion/window.png';
            mainImage.alt = 'Изображение 3';
            break;
        case 3:
            mainImage.src = './img/Wallmer/Photos-Accordion/window.png';
            mainImage.alt = 'Изображение 4';
            break;
            // Добавьте остальные варианты для других аккордеонов
        default:
            break;
    }
}
function resetMainImage() {
    
    mainImage.src = './img/Wallmer/Photos-Accordion/window.png'; // Вернуть изображение к исходному состоянию
    mainImage.alt = 'Изображение'; // Вернуть альтернативный текст к исходному состоянию


}

document.querySelector('.item:first-child').classList.add('active');
document.querySelector('.item:first-child .accordion-icon').textContent = '-';
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
    }else if(index === currentPosition + 2){
        item.classList.add('right-aligned');
    }
  });

}