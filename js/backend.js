(function () {
	window.backend = {};
	window.data = {};
	window.data.vizards = [];
	window.backend.load = function () {
		//загрузка данных с сервера
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.timeout = 10000;
		xhr.open('GET', 'https://js.dump.academy/code-and-magick/data');
		xhr.addEventListener('load', function (e) {
			onLoad(xhr.response);
		});
		xhr.send();
	};
	window.backend.load()
	function onLoad(data) {
		window.data.vizards = data;
		window.renderVizard();
	};
})()