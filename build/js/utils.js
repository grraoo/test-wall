/**
 * Работаем с классами
 * @param item Dom-node
 * @param myClass string - класс
 * @param flag string/bool
 *
 */
var T = 'toggle';
var changeClass = function (item, myClass, flag) {
  if (flag == 'toggle') {
    item.classList.toggle(myClass);
  } else if (flag) {
    item.classList.add(myClass);
  } else {
    item.classList.remove(myClass);
  }
};
