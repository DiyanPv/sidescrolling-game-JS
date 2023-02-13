let element = elements();
let state = initState();
function checkMobileMovement(){
  element.buttonMoveDown.addEventListener(`pointerdown`, (e) => {
    state.keys["KeyS"] = true;
  });
  element.buttonMoveUp.addEventListener(`pointerdown`, (e) => {
    state.keys["KeyW"] = true;
  });
  element.buttonMoveRight.addEventListener(`pointerdown`, (e) => {
    state.keys["KeyD"] = true;
  });
  element.buttonMoveLeft.addEventListener(`pointerdown`, (e) => {
    state.keys["KeyA"] = true;
  });
  element.buttonShoot.addEventListener(`pointerdown`, (e) => {
    state.keys[`Space`] = true;
  });
  
  element.buttonMoveDown.addEventListener(`pointerup`, (e) => {
    state.keys["KeyS"] = false;
  });
  element.buttonMoveUp.addEventListener(`pointerup`, (e) => {
    state.keys["KeyW"] = false;
  });
  element.buttonMoveRight.addEventListener(`pointerup`, (e) => {
    state.keys["KeyD"] = false;
  });
  element.buttonMoveLeft.addEventListener(`pointerup`, (e) => {
    state.keys["KeyA"] = false;
  });
  element.buttonShoot.addEventListener(`pointerup`, (e) => {
    state.keys[`Space`] = false;
  });
}
function gameplay() {
  //array of available key Codes
  const availableKeys = [`KeyA`, `KeyD`, `KeyW`, `KeyS`, `Space`];
  element.buttonStart.addEventListener(`click`, () => {
    element.startScreenElement.classList.add(`hidden`);
    element.gameScreenElement.style.display = `block`;
    element.gameScreenElement.appendChild(element.createSpaceShip(state));
    if (window.innerWidth <= 550) {
      //creating button elements if window is a mobile one (<550px)
      element.gameScreenElement.appendChild(element.buttonMoveDown);
      element.gameScreenElement.appendChild(element.buttonMoveUp);
      element.gameScreenElement.appendChild(element.buttonMoveRight);
      element.gameScreenElement.appendChild(element.buttonMoveLeft);

      element.gameScreenElement.appendChild(element.buttonShoot);

      element.buttonMoveDown.classList.add(`down`);
      element.buttonMoveUp.classList.add(`up`);
      element.buttonMoveLeft.classList.add(`left`);
      element.buttonMoveRight.classList.add(`right`);
    }
    start(state, element);
  });

  window.addEventListener(`keydown`, (e) => {
    const key = e.code;
    state.keys[e.code] = true;
  });

  window.addEventListener(`keyup`, (e) => {
    const key = e.code;
    console.log(key);
    state.keys[e.code] = false;
  });
}

checkMobileMovement();
