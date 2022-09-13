function renderFrame(state, game) {
  const movementSpeed = 3;
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
  const { spaceship } = state;
  const { spaceshipElement } = game;
  //move player
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
    if (spaceship.posY <= window.innerHeight - (state.height + 2)) {
      spaceship.posY += movementSpeed;
    }
  }

  //render
  spaceshipElement.style.left = spaceship.posX + `px`;
  spaceshipElement.style.top = spaceship.posY + `px`;
}

function start(state, game) {
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
}
