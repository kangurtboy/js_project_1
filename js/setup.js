(function () {
	var setupBlock = document.querySelector(".setup");
	var setupSimilar = document.querySelector(".setup-similar");
	setupSimilar.classList.remove("hidden");
	var vizardTemplate = document
	  .querySelector("#similar-wizard-template")
	  .content.querySelector(".setup-similar-item");
	var vizardList = document.querySelector(".setup-similar-list");
	
	 window.renderVizard =  function () {
		//отрисовка персонажей
	  var vizardName = vizardTemplate.querySelector(".setup-similar-label");
	  var vizardCoat = vizardTemplate.querySelector(".wizard-coat");
	  var vizardEyes = vizardTemplate.querySelector(".wizard-eyes");
	  for (var i = 0; i < 4; i++) {
		vizardName.textContent = window.data.vizards[i].name;
		vizardCoat.style.fill = window.data.vizards[i].colorCoat;
		vizardEyes.style.fill = window.data.vizards[i].colorEyes;
		vizardList.appendChild(vizardTemplate.cloneNode(true));
	  }
	}
	
	window.onMainSetupChanging = function(e) {
	  //изменения главного персонажа;
	  var fireballInput = setupBlock.querySelector('[name="fireball-color"]');
	  var coatColorInput = setupBlock.querySelector('[name ="coat-color"]');
	  var eyesColorInput = setupBlock.querySelector('[name="eyes-color"]');
	  if (e.target.className.baseVal === "wizard-coat") {
		coatColorInput.value = window.utils.getRandomValue(window.data.coatColors);
		e.target.style.fill = coatColorInput.value;
	  } else if (e.target.className.baseVal === "wizard-eyes") {
		eyesColorInput.value = window.utils.getRandomValue(window.data.eyesColors);
		e.target.style.fill = eyesColorInput.value;
	  } else if (e.target.className === "setup-fireball") {
		fireballInput.value = window.utils.getRandomValue(window.data.fireballColors);
		e.target.style.backgroundColor = fireballInput.value;
	  }
	};
})();
