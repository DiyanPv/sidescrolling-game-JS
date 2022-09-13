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
    keys: {},
  };
  return state;
}
