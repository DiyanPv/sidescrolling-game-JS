function renderFrame(state, game) {
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
  game.createSpaceShip(state);
  console.log(game);
}

function start(state, game) {
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
}
