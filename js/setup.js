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




/* Задача
В файлеsetup.js опишите следующие сценарии взаимодействия пользователя с сайтом:
1. Открытие/закрытие окна настройки персонажа:
o Окно.setup должно открываться по нажатию на блок.setup-open. Открытие окна производится удалением класса hidden у блока
o Окно.setup должно закрываться по нажатию на элемент.setup-close, расположенный внутри окна
Добавить обработчики для альтернативного ввода с клавиатуры keydown для кнопок открытия/закрытия диалога настройки персонажа:
3. Когда иконка пользователя в фокусе .setup-open-icon, то окно настройки персонажа должно открываться по нажатию кнопки ENTER
Не забудьте добавить tabindex="0" для иконки пользователя, чтобы она фокусировалась.
4. Когда окно настройки персонажа открыто, нажатие на клавишу ESC должно закрывать диалог
Если фокус находится на форме ввода имени, то окно закрываться не должно.
5. Если окно открыто и фокус находится на кнопке закрытия окна, то нажатие клавиши ENTERдолжно приводить к закрытию диалога
6. Если диалог открыт, нажатие на кнопку «Сохранить» приводит к отправке формы
7. Если диалог открыт и фокус находится на кнопке «Сохранить», нажатие на ENTER приводит к отправке формы
2. Валидация ввода имени персонажа. Имя персонажа вводится в поле .setup-user-name. Добавьте следующие ограничения:
o имя персонажа не может содержать менее 2 символов;
o максимальная длина имени персонажа — 25 символов.
Для указания ограничений на ввод используйте стандартные возможности форм HTML5.
3. Изменение цвета мантии персонажа по нажатию. Цвет мантии .setup-wizard .wizard-coat должен обновляться по нажатию на неё. Цвет мантии задаётся через изменение инлайнового CSS-свойства fill для элемента. Цвет должен сменяться произвольным образом на один из следующих цветов:
o rgb(101, 137, 164)
o rgb(241, 43, 107)
o rgb(146, 100, 161)
o rgb(56, 159, 117)
o rgb(215, 210, 55)
o rgb(0, 0, 0)
4. Изменение цвета глаз персонажа по нажатию. Цвет глаз волшебника меняется по нажатию на блок .setup-wizard .wizard-eyes. Возможные варианты цвета глаз персонажа:
o black
o red
o blue
o yellow
o green
5. Изменение цвета фаерболов по нажатию. Цвет задаётся через изменение фона у блока .setup-fireball-wrap. Возможные варианты цвета:
o #ee4830
o #30a8ee
o #5ce6c0
o #e848d5
o #e6e848
Для того, чтобы на сервер отправились правильные данные, при изменении параметров персонажа должно изменяться и значение соответствующего скрытого инпута.
6. Форма должна отправляться на урл https://js.dump.academy/code-and-magick методом POST с типом multipart/form-data
Ограничений на алгоритм выбора цвета нет: это может быть случайный выбор, а может быть изменение цвета по порядку в списке.
Пример того, как может выглядеть персонаж после изменений: */