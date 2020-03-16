//вспомогателные функции
(function() {
  window.utils = {};
	window.utils.getRandomValue = function (arr) {
	  //возврашение случайного элемента массива
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
  };
})();
