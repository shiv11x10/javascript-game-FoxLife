import game from "./gameState.js";
import initButtons from "./buttons.js";

import { TICK_RATE } from "./constants";
// const TICK_RATE = 3000;

// function tick() {
//   console.log("tick", Date.now());
// }

async function init() {
  console.log("starting game");
  initButtons(game.handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
