var ClOUD_X = 135;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var HISTOGRAM_HEIGHT = 150;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_MARGIN = 50;
var FONT_GAP = 15;
var LINE_HEIGHT = 20
var HISTOGRAM_X = ClOUD_X;
var COLOR_RED = 'rgba(255, 0, 0, 1)';

function getMaxValue(arr) {
	var maxValue = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxValue) {
			maxValue = arr[i];
		}
	};
	maxValue = Math.floor(maxValue)
	return maxValue;
}

window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
	ctx.fillRect(ClOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGTH);
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(ClOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGTH);
	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.fillStyle = '#000000';
	ctx.fillText('Ура вы победили!', FONT_GAP + ClOUD_X, CLOUD_Y + FONT_GAP);
	ctx.fillText('Список результатов:', FONT_GAP + ClOUD_X, CLOUD_Y + FONT_GAP + LINE_HEIGHT);
	var maxTime = this.getMaxValue(times);
	for (var i = 0; i < names.length; i++) {
		var RANDOM_BLUE = `rgba(0,0,255,0.${Math.floor(Math.random() * 9 + 1)})`;
		if (names[i] === 'Вы') {
			ctx.fillStyle = 'red';
		} else {
			ctx.fillStyle = RANDOM_BLUE;
		}

		ctx.fillRect(this.ClOUD_X + this.HISTOGRAM_MARGIN + (HISTOGRAM_WIDTH + this.HISTOGRAM_MARGIN) * i, CLOUD_HEIGTH - (HISTOGRAM_HEIGHT * this.Math.floor(times[i]) / maxTime + this.FONT_GAP + this.CLOUD_Y), HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT * this.Math.floor(times[i]) / maxTime);
		ctx.fillStyle = '#000000';
		ctx.fillText(Math.floor(times[i]), ClOUD_X + HISTOGRAM_MARGIN + (HISTOGRAM_WIDTH + HISTOGRAM_MARGIN) * i, (this.CLOUD_HEIGTH - HISTOGRAM_HEIGHT * this.Math.floor(times[i]) / maxTime) - this.HISTOGRAM_MARGIN);
		ctx.fillText(names[i], ClOUD_X + HISTOGRAM_MARGIN + (HISTOGRAM_WIDTH + HISTOGRAM_MARGIN) * i, this.CLOUD_HEIGTH - this.FONT_GAP);
	};
};

/* Задача
В новом файле js/stat.js определите функцию renderStatistics, которая будет являться методом объекта window, со следующими параметрами:
• ctx — канвас на котором рисуется игра.
• names — массив, с именами игроков прошедших уровень. Имя самого игрока — Вы. Массив имён формируется случайным образом.
• times — массив, по длине совпадающий с массивом names. Массив содержит время прохождения уровня соответствующего игрока из массива names. Время прохождения уровня задано в миллисекундах.
Эта функция будет вызываться каждый раз, когда игрок проходит уровень. Чтобы успешно пройти уровень, надо выстрелить фаерболом (клавиша Shift) в забор.
При вызове этой функции на канвас ctx должны быть выведены следующие элементы:
1. Белое облако с координатами [100, 10] высотой 270px и шириной 420px. Облако может быть, как правильным многоугольником, нарисованным методом fillRect, так и неправильным нарисованным с помощью методов beginPath, moveTo, closePath, fill и других.
2. Под облаком должна располагаться тень: многоугольник такой же формы, залитый цветом rgba(0, 0, 0, 0.7) (полупрозрачный чёрный), смещённый относительно белого на 10px вниз и вправо.
3. На облаке должен быть отрисован текст сообщения ’Ура вы победили!\nСписок результатов:’с помощью метода fillText. Текст должен быть набран шрифтом PT Mono размером 16px. NB! Особенностью отрисовки текста на канвасе является то, что он не поддерживает перенос, поэтому каждая новая строчка должна быть отрисована новым вызовом метода fillText или strokeText.
4. После сообщения о победе должна располагаться гистограмма времён участников. Параметры гистограммы следующие:
o Высота гистограммы 150px.
o Ширина колонки 40px.
o Расстояние между колонками 50px.
o Цвет колонки игрока Выrgba(255, 0, 0, 1).
o Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом. */