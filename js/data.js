//данные персонажа
(function () {
	window.data.names = [
		"Иван",
		"Хуан",
		"Себастьян",
		"Мария",
		"Кристоф",
		"Виктор",
		"Юлия",
		"Люпита",
		"Вашингтон"
	  ];
	  window.data.surnames = [
		"да",
		"Марья",
		"Верон",
		"Мирабелла",
		"Вальц",
		"Онопко",
		"Топольницкая",
		"Нионго",
		"Ирвинг"
	  ];
	  window.data.coatColors = [
		"rgb(101, 137, 164)",
		"rgb(241, 43, 107)",
		"rgb(146, 100, 161)",
		"rgb(56, 159, 117)",
		"rgb(215, 210, 55)",
		"rgb(0, 0, 0)"
	  ];
	  window.data.eyesColors = ["black", "red", "blue", "yellow", "green"];
	  window.data.fireballColors = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
	  
	  window.data.vizards = [
		{
		  name: getRandomValue(names) + " " + getRandomValue(surnames),
		  coatColor: getRandomValue(coatColors),
		  eyesColor: getRandomValue(eyesColors)
		},
		{
		  name: getRandomValue(names) + " " + getRandomValue(surnames),
		  coatColor: getRandomValue(coatColors),
		  eyesColor: getRandomValue(eyesColors)
		},
		{
		  name: getRandomValue(names) + " " + getRandomValue(surnames),
		  coatColor: getRandomValue(coatColors),
		  eyesColor: getRandomValue(eyesColors)
		},
		{
		  name: getRandomValue(names) + " " + getRandomValue(surnames),
		  coatColor: getRandomValue(coatColors),
		  eyesColor: getRandomValue(eyesColors)
		}
	  ];
})();