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

      spaceship.style.left = initialState.spaceship.posX + `px`;
      spaceship.style.top = initialState.spaceship.posY + `px`;
      this.spaceshipElement = spaceship;
      return spaceship;
    },
    spawnBug(state) {
      const bugElement = document.createElement(`div`);
      bugElement.classList.add(`monster`);
      bugElement.style.top = 0 + `px`;
      bugElement.style.left =
        Math.floor(Math.random() * (gameScreenElement.offsetWidth - 120)) +
        `px`;
      gameScreenElement.appendChild(bugElement);
      this.bugElement = bugElement;
      return bugElement;
    },
  };
}
