var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
var vizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var vizardList = document.querySelector('.setup-similar-list');
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
var surnames = ['да', 'Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomValue(arr) {
	let randomValue = arr[Math.floor(Math.random() * arr.length)];
	return randomValue;
}

var vizards = [
	{
		name: getRandomValue(names) + ' ' + getRandomValue(surnames),
		coatColor: getRandomValue(coatColors),
		eyesColor: getRandomValue(eyesColors)
	},
	{
		name: getRandomValue(names) + ' ' + getRandomValue(surnames),
		coatColor: getRandomValue(coatColors),
		eyesColor: getRandomValue(eyesColors)
	},
	{
		name: getRandomValue(names) + ' ' + getRandomValue(surnames),
		coatColor: getRandomValue(coatColors),
		eyesColor: getRandomValue(eyesColors)
	},
	{
		name: getRandomValue(names) + ' ' + getRandomValue(surnames),
		coatColor: getRandomValue(coatColors),
		eyesColor: getRandomValue(eyesColors)
	}
];
function renderVizard() {
	var vizardName = vizardTemplate.querySelector('.setup-similar-label');
	var vizardCoat = vizardTemplate.querySelector('.wizard-coat');
	var vizardEyes = vizardTemplate.querySelector('.wizard-eyes');
	for (var i = 0; i < vizards.length; i++){
		vizardName.textContent = vizards[i].name;
		vizardCoat.style.fill = vizards[i].coatColor;
		vizardEyes.style.fill = vizards[i].eyesColor;
		vizardList.appendChild(vizardTemplate.cloneNode(true));
	}
}
renderVizard();
/* Задача
В файле setup.js
1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.
2. Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей. Объекты должны содержать следующие поля:
o name, строка — случайно сгенерированное имя персонажа. Имя генерируется из массивов имен и фамилий: нужно случайным образом выбрать из массива имен имя, а из массива фамилий фамилию и сложить их. При желании имя и фамилию можно в случайном порядке менять местами:) Имена
 Иван
 Хуан Себастьян
 Мария
 Кристоф
 Виктор
 Юлия
 Люпита
 Вашингтон
Фамилии
 да Марья
 Верон
 Мирабелла
 Вальц
 Онопко
 Топольницкая
 Нионго
 Ирвинг
o coatColor, строка — случайный цвет мантии на выбор из следующих:
 rgb(101, 137, 164)
 rgb(241, 43, 107)
 rgb(146, 100, 161)
 rgb(56, 159, 117)
 rgb(215, 210, 55)
 rgb(0, 0, 0)
o eyesColor, строка — случайный цвет глаз персонажа на выбор из следующих:
 black
 red
 blue
 yellow
 green
3. На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
o Имя персонажа name запишите как текст в блок .setup-similar-label;
o Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
o Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.
4. Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list. Для вставки элементов используйте DocumentFragment.
5. Покажите блок .setup-similar, удалив у него CSS-класс hidden. */