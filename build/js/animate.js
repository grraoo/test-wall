// время уменьшено от заданного, для отладки, чтобы меньше не ждать =)
const TIME = 4000;

// модификаторы для паттернов в объявлениях без картинок
const patterns = [
  '--pattern-1',
  '--pattern-2',
  '--pattern-3'
];

// шаблон для объявления
var templateItem = document.querySelector('template').content.querySelector('.wall__item');

// общий контейнер для двух лент
var container = document.querySelector('.wall');

/**
Создаем новое объявление на основе данных из data.js
*/
var createItem = function(wallSection, post, direction) {
  // клонируем шаблон
  var newItem = templateItem.cloneNode(true);

  // Расставляем данные внутри шаблона
  var authorName = newItem.querySelector('.wall__author');
  var itemText = newItem.querySelector('.wall__text');
  authorName.innerText = post.author;
  textLength = post.text.length;
  itemText.innerText = textLength.toString() + post.text;
  if(textLength < 150) {
    itemText.style.fontSize = Math.max(Math.sqrt(35000 / textLength), 24) + 'px';
  } else {

  }
  if(post.media) {
    newItem.style = 'background-image: url('+post.media+')';
  } else {
    var mod = patterns[Math.floor(Math.random() * patterns.length)];
    changeClass(newItem, 'wall__item--pattern', true);
    changeClass(newItem, 'wall__item' + mod, true);
  }
  // внедряем новый элемент в начало ленты
  wallSection.insertBefore(newItem, wallSection.firstChild);
}
var counter = 0;

// удаляем уже ненужный элемент
var delOldItem = function(section, qnt){
  var oldItem = section.children[qnt];
  if(oldItem) {
    section.removeChild(oldItem);
  }
};

// Включаем/выключаем показ фонового баннера
var toggleBanner = function (container) {
  setTimeout(function() {
    changeClass(container, 'show-banner', T);
    setTimeout(function() {
      changeClass(container, 'show-banner', T);
      swipeWall(container);
    }, TIME );
  }, TIME);
}

// Пролистывание ленты
var swipeWall = function(container) {
  var section = container.children[counter % 2];
  delOldItem(section, 5);
  setTimeout(function() {
    // через нужный промежуток вставляем новые объявления, зацикленно из имеющихся данных
    createItem(section, data[counter % data.length], 0);
    counter++;
    if(counter % 8 != 0) {
      swipeWall(container);
    } else {
      // через каждые восемь запускаем показ фонового баннера
      console.log('ok');
      toggleBanner(container);
    }
  }, TIME);
};

swipeWall(container);
