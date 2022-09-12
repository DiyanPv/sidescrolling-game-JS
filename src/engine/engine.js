function renderFrame() {
  window.requestAnimationFrame(renderFrame);
  console.log(`frame`);
}
