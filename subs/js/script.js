  const snowflakes = [];

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.textContent = '❄';
    snowflake.className = 'snowflake';

    // random starting x position
    const startX = Math.random() * window.innerWidth;
    snowflake.style.left = startX + 'px';

    // random size
    const size = Math.random() * 7 + 15;
    snowflake.style.fontSize = size + 'px';

    // speed and drift
    const speed = Math.random() * 1 + 0.5; // vertical speed
    const amplitude = Math.random() * 50 + 30; // horizontal swing
    const frequency = Math.random() * 0.01 + 0.005; // wave frequency

    const flake = {
      el: snowflake,
      x: startX,
      y: -20,
      size,
      speed,
      amplitude,
      frequency,
      t: 0
    };

    snowflakes.push(flake);
    document.body.appendChild(snowflake);
  }

  function updateSnowflakes() {
    for (let i = snowflakes.length - 1; i >= 0; i--) {
      const flake = snowflakes[i];
      flake.y += flake.speed;
      flake.t += 1;
      const offsetX = Math.sin(flake.t * flake.frequency) * flake.amplitude;
      flake.el.style.transform = `translate(${flake.x + offsetX}px, ${flake.y}px)`;

      if (flake.y > window.innerHeight) {
        flake.el.remove();
        snowflakes.splice(i, 1);
      }
    }
    requestAnimationFrame(updateSnowflakes);
  }

  // spawn 1 snowflake per second
  setInterval(createSnowflake, 110);


  updateSnowflakes();
