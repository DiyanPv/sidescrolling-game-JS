function renderFrame(state, game) {
  window.requestAnimationFrame(renderFrame.bind(null, state, game));

  console.log(state.keys);
}

function start(state, game) {
  window.requestAnimationFrame(renderFrame.bind(null, state, game));
}
