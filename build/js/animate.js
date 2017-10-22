const TIME = 1500;
var templateItem = document.querySelector('template').content.querySelector('.wall__item');

var wallSections = [].slice.call(document.querySelectorAll('.wall__section'));
var container = document.querySelector('.wall');

var createItem = function(wallSection, post, direction) {
  var newItem = templateItem.cloneNode(true);
  var authorName = newItem.querySelector('.wall__author');
  var itemText = newItem.querySelector('.wall__text');
  authorName.innerText = post.author;
  itemText.innerText = post.text;
  if(post.media) {
    newItem.style = 'background-image: url('+post.media+')';
  }
  wallSection.insertBefore(newItem, wallSection.firstChild);
}
var counter = 0;

data.forEach(function(post, i) {
  // counter++;
  console.log(post.author);
  console.log((i+1) % data.length);
});

var delOldItem = function(section, qnt){

  var oldItem = section.children[qnt];
  if(oldItem) {
    section.removeChild(oldItem);
  }
};

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

function toggleBanner(container) {
  setTimeout(function() {
    changeClass(container, 'show-banner', T);
    setTimeout(function() {
      changeClass(container, 'show-banner', T);
      swipeWall(container);
    }, TIME);
  }, TIME);
}

toggleBanner(container);
