var templateItem = document.querySelector('template').content.querySelector('.wall__item');
var wallSections = [].slice.call(document.querySelectorAll('.wall__section'));

var animationClasses = ['wall__section--new-forward', 'wall__section--new-back'];

function newStep (section, i) {
  changeClass(section, animationClasses[i], true);
}

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
  newStep(wallSection, direction);

}

data.forEach(function(post, i) {
  console.log(post.author);
});

var counter = 0;
var delOldItem = function(section, qnt){

  var oldItem = section.children[qnt];
  if(oldItem) {
    section.removeChild(oldItem);
  }
};

var swipeWall = function() {

  delOldItem(wallSections[0], 5);
  setTimeout(function() {
    createItem(wallSections[0], data[counter], 0);
    counter++;
    console.log(wallSections[0].children.length);
    if(counter < data.length) {
      swipeWall();
    } else {
      console.log('ok');
      delOldItem(wallSections[0], 5);
    }
  }, 1500);

  };
  swipeWall();
