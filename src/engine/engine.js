function renderFrame(state, game) {
  const movementSpeed = 3;
  const spriteMovement = 10;
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
  const { spaceship, bug } = state;
  const { spaceshipElement, bugElement } = game;
  //move player
  modifySpaceshipPosition();
  function modifySpaceshipPosition() {
    if (state.keys.KeyD) {
      if (spaceship.posX <= window.innerWidth - (state.width + 4)) {
        spaceship.posX += movementSpeed;
      }
    }
    if (state.keys.KeyW) {
      if (spaceship.posY >= 0) {
        spaceship.posY -= movementSpeed;
      }
    }
    if (state.keys.KeyA) {
      if (spaceship.posX >= 0) {
        spaceship.posX -= movementSpeed;
      }
    }
    if (state.keys.KeyS) {
      if (spaceship.posY <= window.innerHeight - (state.height + 4)) {
        spaceship.posY += movementSpeed;
      }
    }
  }

  //bugs spawner
  game.spawnBug(bug);

  //render
  spaceshipElement.style.left = spaceship.posX + `px`;
  spaceshipElement.style.top = spaceship.posY + `px`;
}

function start(state, game) {
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
}
