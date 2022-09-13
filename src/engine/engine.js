function renderFrame(state, game, timestamp) {
  const movementSpeed = 4;
  const spriteMovement = 1;
  const laserMovement = 6;
  let hasCollision = false;
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
  const { spaceship, bug } = state;
  const { laser, bugElement, spaceshipElement } = game;
  //move player
  modifySpaceshipPosition();

  function modifySpaceshipPosition() {
    if (state.keys.Space) {
      game.shootLaser(spaceship, spaceshipElement);
    }
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
  if (timestamp > bug.nextSpawn) {
    game.spawnBug(bug);
    bug.nextSpawn = timestamp + Math.random() + bug.maxSpawnTime;
  }

  //render wizard
  spaceshipElement.style.left = spaceship.posX + `px`;
  spaceshipElement.style.top = spaceship.posY + `px`;

  //render bugs - movement
  document.querySelectorAll(`.monster`).forEach((monster) => {
    document.querySelectorAll(`.laser`).forEach((laser) => {
      detectCollision(monster, laser);
      if (hasCollision) {
        const monsterPosition = monster.getBoundingClientRect();
        monster.remove();
        game.spawnDeathAnimation();
        game.death.style.top = monsterPosition.y + `px`;
        game.death.style.left = monsterPosition.x + `px`;
        console.log(monsterPosition);
        setTimeout(() => {
          document
            .querySelectorAll(`.deathAnimation`)
            .forEach((el) => el.remove());
        }, 140);
      }
    });
    let posY = parseInt(monster.style.top);
    if (posY < game.gameScreenElement.offsetHeight - 120) {
      monster.style.top = posY + spriteMovement + `px`;
    } else {
      monster.remove();
    }
  });

  //render laser movement
  document.querySelectorAll(`.laser`).forEach((x) => {
    let posY = parseInt(x.style.top);

    if (posY >= 0) {
      x.style.top = posY - laserMovement + `px`;
    } else {
      x.remove();
    }
  });
  function detectCollision(objectA, objectB) {
    let first = objectA.getBoundingClientRect();
    let second = objectB.getBoundingClientRect();
    hasCollision = !(
      first.top > second.bottom ||
      first.bottom < second.top ||
      first.right < second.left ||
      first.left > second.right
    );
    return hasCollision;
  }
}

function start(state, game) {
  window.requestAnimationFrame((timestamp) =>
    renderFrame(state, game, timestamp)
  );
}
