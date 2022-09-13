function initState() {
  const state = {
    player: `Player 1`,
    wizard: {
      startX: 90,
      startY: window.innerHeight - 98
    },
    width: 98,
    height: 98,
    keys: {},
  };
  return state;
}
