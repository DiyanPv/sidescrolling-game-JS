function renderFrame(state, game, timestamp) {
  const movementSpeed = 4;
  const spriteMovement = 1;
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
  const { spaceship, bug } = state;
  const { spaceshipElement, bugElement } = game;
  //move player
  modifySpaceshipPosition();
  function modifySpaceshipPosition() {
    if (state.keys.Space) {
      game.shootLaser(spaceship, spaceshipElement);
    }
    if (state.keys.KeyD) {
      if (spaceship.posX <= window.innerWidth - (state.width + 4)) {
        spaceship.posX += movementSpeed;
        console.log(spaceship.posX);
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
  if (timestamp > bug.nextSpawn) {
    game.spawnBug(bug);
    bug.nextSpawn = timestamp + Math.random() + bug.maxSpawnTime;
  }

  //render wizard
  spaceshipElement.style.left = spaceship.posX + `px`;
  spaceshipElement.style.top = spaceship.posY + `px`;

  //render bugs - movement
  document.querySelectorAll(`.monster`).forEach((monster) => {
    let posY = parseInt(monster.style.top);
    if (posY < game.gameScreenElement.offsetHeight - 120) {
      monster.style.top = posY + spriteMovement + `px`;
    } else {
      monster.remove();
    }
  });
}

function start(state, game) {
  window.requestAnimationFrame((timestamp) =>
    renderFrame(state, game, timestamp)
  );
}
