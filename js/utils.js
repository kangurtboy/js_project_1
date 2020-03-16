//вспомогателные функции
(function() {
  window.utils = {};
	window.utils.getRandomValue = function (arr) {
	  //возврашение случайного элемента массива
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
	};
	window.utils.getMaxValue = function (arr) {
		//получение максмалное значение массива
		var maxValue = arr[0];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > maxValue) {
				maxValue = arr[i];
			}
		};
		maxValue = Math.floor(maxValue)
		return maxValue;
	}
})();
