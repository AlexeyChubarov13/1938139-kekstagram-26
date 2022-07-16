function randomNumber(min, max) {
  min = Math.min(Math.abs(min), Math.abs(max));
  max = Math.max(Math.abs(min), Math.abs(max));
  return Math.round(Math.random() * (max - min) + min);
}
randomNumber(0, 2);


const stringLength = function(stringnumber, maxstring) {
  return stringnumber.length <= maxstring;
};
stringLength('Привет мир', 7);
