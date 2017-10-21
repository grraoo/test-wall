console.log(data);

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
  wallSection.insertBefore(newItem, wallSection.firstChild);
  newStep(wallSection, direction);

}

data.forEach(function(post, i) {
  console.log(post.author);
});

var counter = 0;

var swipeWall = function() {
  setTimeout(function() {
    console.log(counter);
    createItem(wallSections[0], data[counter], 0);
    counter++;
    if(counter < data.length) {

      swipeWall();

    } else {
      console.log('ok');
      setTimeout(function() {
        var oldItem = wallSections[0].children[4];
        wallSections[0].removeChild(oldItem);}, 1500
      );
    }
    setTimeout(function() {
      var oldItem = wallSections[0].children[4];
      if(oldItem) {
        wallSections[0].removeChild(oldItem);
      }
    }, 1500);
  }, 1500);
  };
  swipeWall();
