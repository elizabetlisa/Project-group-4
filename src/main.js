import modal from './js/modal';
import slider from './js/slider';

slider('.mySwiper');

let loadReviews = function (selector) {
  let itemList = document.querySelectorAll(selector);
};
let loadMore = function (selector) {
  let itemList = document.querySelectorAll(selector);
  let loadLimit = 1;
  let timeout = 500;
  //перевіряємо чи є у нас елементи для завантаження
  if (itemList.length !== 0) {
    //для кожного елемента проходимо ітерацію (цикл)
    for (let i = 0; i < loadLimit; i++) {
      //встановлюємо таймер для виконання, щоб симулювати завантаження з сервера
      setTimeout(() => {
        //додаємо елемент до відображення (знімаємо клас який його приховує)
        itemList[i].classList.remove('js-load-more');
      }, timeout);
    }
  } else {
    document.querySelector('.reviews-btn').innerText = 'No more reviews!';
  }
};
globalThis.loadMore = loadReviews;
globalThis.loadMore = loadMore;
