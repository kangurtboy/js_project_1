//модул окна настройки персонажа
(function() {
  var setupBlock = document.querySelector(".setup");
  var setupClose = document.querySelector(".setup-close");
  var setupOpen = document.querySelector(".setup-open-icon");
  var mainSetup = setupBlock.querySelector(".setup-player");
  setupBlock.classList.add("hidden");
  var setupUserIcon = setupBlock.querySelector("[type='file']");
  var draggable = false;
  window.setupUserIcon = setupUserIcon;

  var onSetupOpen = function() {
    //открытие окно персонажа
    setupBlock.classList.remove("hidden");
  };
  var onSetupClose = function() {
    //закрытие окно персонажа
    var defultCoords = {
      //координаты по умолчание
      x: "calc(50% - 400px)",
      y: "80px"
    };
    setupBlock.style.left = defultCoords.x;
    setupBlock.style.top = defultCoords.y;
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
  var onMousedown = function(evt) {
    //drag&drop;
    draggable = false;
    var startCoords = {
      x: evt.offsetX + setupUserIcon.offsetParent.offsetLeft,
      y: evt.offsetY + setupUserIcon.offsetParent.offsetTop
    };

    function onMosemove(moveEvent) {
      draggable = true;
      setupBlock.style.left = moveEvent.clientX - startCoords.x + "px";
      setupBlock.style.top = moveEvent.clientY - startCoords.y + "px";
    }
    function onMouseup(e) {
      setupUserIcon.removeEventListener("mousedown", onmousedown);
      document.removeEventListener("mousemove", onMosemove);
      setupUserIcon.addEventListener("click", function(e) {
        if (draggable) {
          e.preventDefault();
        }
      });
    }
    setupUserIcon.addEventListener("mouseup", onMouseup);
    document.addEventListener("mousemove", onMosemove);
  };
  setupUserIcon.addEventListener("mousedown", onMousedown);

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
