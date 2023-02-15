function renderFrame(state, game, timestamp) {
  let movementSpeed
  let spriteMovement
  let laserMovement

  if(window.innerWidth <= 450){
     movementSpeed = 4.5;
     spriteMovement = 1.7;
     laserMovement = 6;

  }else{
    movementSpeed = 8;
    spriteMovement = 2.8;
    laserMovement = 6;
  }



  let hasCollision = false;
  game.scoreScreen.textContent = `Your Score is : ${Math.floor(state.score)}`;
  const { spaceship, bug } = state;
  const { laser, bugElement, spaceshipElement } = game;
  //move player
  modifySpaceshipPosition();

  function modifySpaceshipPosition() {
    if (state.keys.Space) {
      if (timestamp > state.cannon.nextShootTimestamp) {
        game.shootLaser(spaceship, spaceshipElement);
        state.cannon.nextShootTimestamp = timestamp + state.cannon.fireRate;
      }
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

  //render bugs - movement and check for laser/bug collision
  document.querySelectorAll(`.monster`).forEach((monster) => {
    document.querySelectorAll(`.laser`).forEach((laser) => {
      detectCollision(monster, laser);
      if (hasCollision) {
        laser.remove();
        const monsterPosition = monster.getBoundingClientRect();
        monster.remove();
        state.score += state.killEnemy;
        game.spawnDeathAnimation();
        game.death.style.top = monsterPosition.y + `px`;
        game.death.style.left = monsterPosition.x + `px`;

        setTimeout(() => {
          document
            .querySelectorAll(`.deathAnimation`)
            .forEach((el) => el.remove());
        }, 140);
      }
    });
    //detect collision with spaceship
    if (detectCollision(spaceshipElement, monster)) {
      state.gameOver = true;
    }

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
      first.top + 25 > second.bottom ||
      first.bottom - 30 < second.top ||
      first.right - 30 < second.left ||
      first.left +30 > second.right
    );
    return hasCollision;
  }
  if (state.gameOver) {
    alert(`Game over!
You have reached score: ${Math.floor(state.score)}`);
    window.location.reload();
  } else {
    window.requestAnimationFrame(renderFrame.bind(null, state, game));
    state.score += state.scoreRate;
  }

  //adding score
}

function start(state, game) {
  window.requestAnimationFrame((timestamp) =>
    renderFrame(state, game, timestamp)
  );
}
