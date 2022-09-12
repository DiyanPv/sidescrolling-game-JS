function gameplay() {
  const canvas = document.querySelector(`canvas`);
  const c = canvas.getContext(`2d`);
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  console.log(c);
  let gravity = 0.04;
  class Player {
    constructor() {
      (this.position = {
        x: 100,
        y: 100,
      }),
        (this.size = {
          width: 30,
          height: 30,
        }),
        (this.velocity = {
          x: 0,
          y: 0,
        });
    }
    draw() {
      c.fillStyle = `blue`;
      c.fillRect(
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
      );
    }
    update() {
      this.position.x += this.velocity.x;
      this.draw();
      if (
        this.position.y + this.size.height + this.velocity.y <=
        canvas.height
      ) {
        this.position.y += this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }
  class Platform {
    constructor() {
      (this.position = {
        x: 40,
        y: 100,
      }),
        (this.width = 300),
        (this.height = 50);
    }
    draw() {
      c.fillStyle = `black`;
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }

  const platform = new Platform();

  const player = new Player();
  const keys = {
    left: {
      pressed: false,
    },
    right: {
      pressed: false,
    },
  };

  function animate() {
    if (keys.right.pressed) {
      player.velocity.x = 1;
    } else if (keys.left.pressed) {
      player.velocity.x = -1;
    } else {
      player.velocity.x = 0;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    if (
      (player.position.y + player.size.height <= platform.position.y &&
        player.position.y + player.size.height + player.velocity.y >=platform.position.y  )
    ) {
      player.velocity.y = 0;
      gravity = 0;
    } if ( player.position.x <= platform.position.x - player.size.width || platform.position.x + platform.width <= player.position.x){
        gravity = 0.04
    }

    platform.draw();
    player.update();
  }
  animate();

  // Adding event listeners for player movement=> keyboard strokes

  addEventListener(`keydown`, (event) => {
    const key = event.code;
    switch (key) {
      case `KeyA`:
        keys.left.pressed = true;

        break;
      case `KeyW`:
        player.velocity.y -= 2;
        break;
      case `KeyD`:
        keys.right.pressed = true;
        break;
      case `KeyS`:
        break;
    }
  });
  ///event listener for clearing movement states
  addEventListener(`keyup`, (event) => {
    const key = event.code;
    switch (key) {
      case `KeyA`:
        keys.left.pressed = false;
        break;
      case `KeyW`:
        break;
      case `KeyD`:
        keys.right.pressed = false;

        break;
      case `KeyS`:
        break;
    }
  });
}
