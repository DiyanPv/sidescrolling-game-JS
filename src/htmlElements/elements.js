function elements() {
  const gameScreenElement = document.querySelector(`.gamescreen`);
  const startScreenElement = document.querySelector(`.start-screen-div`);
  const buttonStart = document.querySelector(`.butonStart`);
  return {
    gameScreenElement,
    startScreenElement,
    buttonStart,
    createSpaceShip(initialState) {
      let spaceship = document.createElement(`div`);
      spaceship.classList.add(`spaceship`);
      gameScreenElement.appendChild(spaceship);
      spaceship.style.width = initialState.width + `px`;
      spaceship.style.height = initialState.height + `px`;

      spaceship.style.left = initialState.startX + `px`;
      spaceship.style.top = initialState.startY + `px`;
    },
  };
}
