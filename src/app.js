let element = elements();
function gameplay() {
  element.buttonStart.addEventListener(`click`, () => {
    element.startScreenElement.classList.add(`hidden`);
    element.gameScreenElement.style.display = `block`;
    renderFrame();
  });
}
