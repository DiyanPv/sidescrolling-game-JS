let element = elements();
let state = initState();
function gameplay() {
  element.buttonStart.addEventListener(`click`, () => {
    element.startScreenElement.classList.add(`hidden`);
    element.gameScreenElement.style.display = `block`;
    start(state, element);
  });
}
