(function () {
	window.backend = {};
	window.data = {};
	window.data.vizards = [];
	var serverStatus = document.querySelector('.server-status');
	window.backend.load = function () {
		//загрузка данных с сервера
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.timeout = 10000;
		xhr.open('GET', 'https://js.dump.academy/code-and-magick/data');
		xhr.addEventListener('load', function () {
			onLoad(xhr.response);
		});
		xhr.addEventListener('error', function () {
			onError(xhr.status);
		});
		xhr.addEventListener('timeout', function () {
			serverStatus.classList.remove('hidden');
			serverStatus.textContent = 'Превышено время подключение к серверу';
		})
		xhr.send();
	};
	window.backend.load()
	function onLoad(data) {
		window.data.vizards = data;
		serverStatus.classList.add('hidden');
		window.renderVizard();
	};
	function onError(errorStatus) {
		serverStatus.classList.remove('hidden');
		switch (errorStatus) {
			case 400:
				serverStatus.textContent = 'Неверны запрос';
				break;
			case 401:
				serverStatus.textContent = 'Ползователь не авторизован';
				break;
			case 404:
				serverStatus.textContent = 'Ничего не найдено';
				break;
			default:
				serverStatus.textContent = 'Ошибка сервера';
		}
	};
})()