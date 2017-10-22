const TIME = 4000;
const patterns = [
  '--pattern-1',
  '--pattern-2',
  '--pattern-3'
];
var templateItem = document.querySelector('template').content.querySelector('.wall__item');

var wallSections = [].slice.call(document.querySelectorAll('.wall__section'));
var container = document.querySelector('.wall');

var createItem = function(wallSection, post, direction) {
  var newItem = templateItem.cloneNode(true);
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

  wallSection.insertBefore(newItem, wallSection.firstChild);
}
var counter = 0;

var delOldItem = function(section, qnt){
  var oldItem = section.children[qnt];
  if(oldItem) {
    section.removeChild(oldItem);
  }
};
var toggleBanner = function (container) {
  setTimeout(function() {
    changeClass(container, 'show-banner', T);
    setTimeout(function() {
      changeClass(container, 'show-banner', T);
      swipeWall(container);
    }, TIME );
  }, TIME);
}
var swipeWall = function(container) {
  var section = container.children[counter % 2];
  delOldItem(section, 5);
  setTimeout(function() {
    createItem(section, data[counter % data.length], 0);
    counter++;
    if(counter % 8 != 0) {
      swipeWall(container);
    }
    else {
      console.log('ok');
      toggleBanner(container);
    }
  }, TIME);
};



swipeWall(container);
