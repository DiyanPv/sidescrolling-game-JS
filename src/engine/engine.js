function renderFrame(state, game) {
  const movementSpeed = 3;
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
  const { spaceship } = state;
  const { spaceshipElement } = game;
  //move player
  if (state.keys.KeyD) {
    spaceship.posX += movementSpeed;
  }
  if (state.keys.KeyW) {
    spaceship.posY -= movementSpeed;
  }
  if (state.keys.KeyA) {
    spaceship.posX -= movementSpeed;
  }
  if (state.keys.KeyS) {
    spaceship.posY += movementSpeed;
  }

  //render
  //   game.createSpaceShip().style.left = wizard.posX + `px`;
  spaceshipElement.style.left = spaceship.posX + `px`;
  spaceshipElement.style.top = spaceship.posY + `px`;
}

function start(state, game) {
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
}
