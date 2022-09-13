let element = elements();
let state = initState();
function gameplay() {
  //array of available key Codes
  const availableKeys = [`KeyA`, `KeyD`, `KeyW`, `KeyS`];
  element.buttonStart.addEventListener(`click`, () => {
    element.startScreenElement.classList.add(`hidden`);
    element.gameScreenElement.style.display = `block`;
    element.gameScreenElement.appendChild(element.createSpaceShip(state));
    start(state, element);
  });

  window.addEventListener(`keydown`, (e) => {

    //move player
    const key = e.code;
    state.keys[e.code] = true;
  });

  window.addEventListener(`keyup`, (e) => {
    const key = e.code;
    state.keys[e.code] = false;
  });
}
