function gameplay() {
  const canvas = document.querySelector(`canvas`);
  const c = canvas.getContext(`2d`);
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  console.log(c);
  const gravity = 0.04;
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
        const moveState = (this.velocity.y += gravity);
        this.position.y += moveState;
      } else {
        this.velocity.y = 0;
      }
    }
  }
  class Platform {
    constructor() {
      (this.position = {
        x: 150,
        y: 800,
      }),
        (this.width = 300),
        (this.height = 50);
    }
    draw() {
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.fillStyle = `black`;
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
        player.velocity.y -= 3;
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
