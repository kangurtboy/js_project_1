(function() {
  var setupBlock = document.querySelector(".setup");
  var setupSimilar = document.querySelector(".setup-similar");
  setupSimilar.classList.remove("hidden");
  var vizardTemplate = document
    .querySelector("#similar-wizard-template")
    .content.querySelector(".setup-similar-item");
  var vizardList = document.querySelector(".setup-similar-list");
  var mainVizard = {
    //объект  главный персонаж
    name: vizardTemplate.querySelector(".setup-similar-label"),
    coat: vizardTemplate.querySelector(".wizard-coat"),
    eye: vizardTemplate.querySelector(".wizard-eyes"),
    fireballInput: setupBlock.querySelector('[name="fireball-color"]'),
    coatInput: setupBlock.querySelector('[name ="coat-color"]'),
    eyesInput: setupBlock.querySelector('[name="eyes-color"]')
  };
  function getRating(vizard) {
    //установка рейтинг похожести персонажей
    vizard.rank = 0;
    if (
      vizard.colorCoat === mainVizard.coatInput.value &&
      vizard.colorEyes === mainVizard.eyesInput.value
    ) {
      vizard.rank = 3;
    } else if (vizard.colorCoat === mainVizard.coatInput.value) {
      vizard.rank = 2;
    } else if (vizard.colorEyes === mainVizard.eyesInput.value) {
      vizard.rank = 1;
    }
  }
  function sortingVizards(vizards) {
    //сортировка персонажей
    window.data.vizards.forEach(vizard => {
      getRating(vizard);
    });
    vizards.sort(function(a, b) {
      return b.rank - a.rank;
    });
  }
  window.renderVizard = function() {
    vizardList.innerHTML = "";
    sortingVizards(window.data.vizards);
    //отрисовка персонажей
    for (var i = 0; i < 4; i++) {
      mainVizard.name.textContent = window.data.vizards[i].name;
      mainVizard.coat.style.fill = window.data.vizards[i].colorCoat;
      mainVizard.eye.style.fill = window.data.vizards[i].colorEyes;
      vizardList.appendChild(vizardTemplate.cloneNode(true));
    }
  };
  window.onMainSetupChanging = function(e) {
    //изменения главного персонажа;
    if (e.target.className.baseVal === "wizard-coat") {
      mainVizard.coatInput.value = window.utils.getRandomValue(
        window.data.coatColors
      );
      e.target.style.fill = mainVizard.coatInput.value;
      window.utils.debounce(
		window.renderVizard
	)
    } else if (e.target.className.baseVal === "wizard-eyes") {
      mainVizard.eyesInput.value = window.utils.getRandomValue(
        window.data.eyesColors
      );
		e.target.style.fill = mainVizard.eyesInput.value;
		window.utils.debounce(
			window.renderVizard
		)
     
    } else if (e.target.className === "setup-fireball") {
      mainVizard.fireballInput.value = window.utils.getRandomValue(
        window.data.fireballColors
      );
      e.target.style.backgroundColor = mainVizard.fireballInput.value;
    }
  };
})();
