function elements() {
  const gameScreenElement = document.querySelector(`.gamescreen`);
  const startScreenElement = document.querySelector(`.start-screen-div`);
  const buttonStart = document.querySelector(`.butonStart`);
  const scoreScreen = document.querySelector(`.score-screen`);
  const buttonMoveLeft = document.createElement(`div`);
  buttonMoveLeft.classList.add(`btnMove`);
  const buttonMoveRight = document.createElement(`div`);
  buttonMoveRight.classList.add(`btnMove`);

  const buttonMoveDown = document.createElement(`div`);
  buttonMoveDown.classList.add(`btnMove`);

  const buttonMoveUp = document.createElement(`div`);
  buttonMoveUp.classList.add(`btnMove`);
  const buttonShoot = document.createElement(`div`);
  buttonShoot.classList.add(`btnShoot`);
  return {
    gameScreenElement,
    startScreenElement,
    buttonStart,
    scoreScreen,
    buttonMoveUp,
    buttonMoveDown,
    buttonMoveRight,
    buttonMoveLeft,
    buttonShoot,
    createSpaceShip(initialState) {
      let spaceship = document.createElement(`div`);
      spaceship.classList.add(`spaceship`);
      gameScreenElement.appendChild(spaceship);
      spaceship.style.width = initialState.width + `px`;
      spaceship.style.height = initialState.height + `px`;

      spaceship.style.left = initialState.spaceship.posX + `px`;
      spaceship.style.top =
        initialState.spaceship.posY + spaceship.style.width + `px`;
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
    shootLaser(spaceshipPosition, spaceshipElement) {
      let laserElement = document.createElement(`div`);
      laserElement.classList.add(`laser`);
      laserElement.style.top =
        spaceshipPosition.posY - spaceshipElement.offsetHeight + `px`;
      laserElement.style.left =
        spaceshipPosition.posX + laserElement.offsetWidth + 25 + `px`;
      gameScreenElement.appendChild(laserElement);
      this.laser = laserElement;
      return laserElement;
    },
    spawnDeathAnimation() {
      let death = document.createElement(`div`);
      death.classList.add(`deathAnimation`);
      gameScreenElement.appendChild(death);
      this.death = death;
    },
  };
}
