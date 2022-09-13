function initState() {
  let startX = 90;
  let startY = window.innerHeight - 98;
  const state = {
    player: `Player 1`,
    spaceship: {
      posX: startX,
      posY: startY,
    },
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
    keys: {},
  };
  return state;
}
