//модул окна настройки персонажа
(function() {
  var setupBlock = document.querySelector(".setup");
  var setupClose = document.querySelector(".setup-close");
  var setupOpen = document.querySelector(".setup-open-icon");
  var mainSetup = setupBlock.querySelector(".setup-player");
  setupBlock.classList.add("hidden");
  var onSetupOpen = function() {
    //открытие окно персонажа
    setupBlock.classList.remove("hidden");
  };
  var onSetupClose = function() {
    //закрытие окно персонажа
    setupBlock.classList.add("hidden");
  };
  var onSetupEnter = function(element, func) {
    //универсалная функция при нажании кнопки enter;
    element.addEventListener("keydown", function(e) {
      if (e.keyCode === 13) {
        func();
      }
    });
  };

  setupOpen.addEventListener("click", onSetupOpen);
  setupClose.addEventListener("click", onSetupClose);
  document.body.addEventListener("keydown", function(e) {
    //закрытие окно персонажа по нажание клавиши Esc
    if (!setupBlock.classList.contains("hidden") && e.keyCode === 27) {
      onSetupClose();
    }
  });
  setupOpen.addEventListener("focus", function(e) {
    onSetupEnter(setupOpen, onSetupOpen);
  });

  setupClose.addEventListener("focus", function(e) {
    onSetupEnter(setupClose, onSetupClose);
  });
  mainSetup.addEventListener("click", onMainSetupChanging);
})();
