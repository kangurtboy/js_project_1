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
	var maxTime = window.utils.getMaxValue(times);
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
