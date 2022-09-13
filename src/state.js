function initState() {
  let startX = 90;
  let startY = window.innerHeight - 98;
  const state = {
    scoreRate: 0.1,
    killEnemy: 100,
    score: 0,
    player: `Player 1`,
    spaceship: {
      posX: startX,
      posY: startY,
    },
    gameOver: false,
    width: 98,
    height: 98,
    bug: {
      maxSpawnTime: 800,
      nextSpawn: 0,
      height: 120,
      width: 120,
      posX: Math.random(),
      posY: Math.random(),
    },
    cannon: {
      nextShootTimestamp: 30,
      fireRate: 200,
    },
    keys: {},
  };
  return state;
}
