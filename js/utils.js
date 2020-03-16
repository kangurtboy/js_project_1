//вспомогателные функции
(function() {
  window.utils = {};
	window.utils = function getRandomValue(arr) {
	  //возврашение случайного элемента массива
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
  };
})();
