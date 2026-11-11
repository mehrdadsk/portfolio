/* Denmark flag: subtle wind-driven cloth animation.
   This is limited to the separate strip below the navigation. */
(() => {
  "use strict";

  const strip = document.querySelector(".recruiter-home .denmark-flag-strip");
  const canvas = strip?.querySelector(".flag-wave-canvas");
  const ctx = canvas?.getContext("2d", { alpha: false });
  if (!strip || !ctx) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let frameId = 0;
  let lastPaint = 0;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

  function draw(t) {
    if (width <= 0 || height <= 0) return;

    const crossX = width * 0.3;
    const crossWidth = height * 0.55;
    const lineHeight = height * 0.27;
    const step = 2;

    for (let x = 0; x < width; x += step) {
      // Two wave frequencies create fabric folds rather than a sliding image.
      const wave = Math.sin(x * 0.029 - t * 1.4);
      const ripple = Math.sin(x * 0.064 - t * 2.1);
      const yShift = (wave + ripple * 0.29) * height * 0.066;
      const xShift = Math.sin(x * 0.022 - t * 1.35) * height * 0.050;

      // Slow traveling highlights and shadows simulate changing fabric angle.
      const light = clamp(0.91 + 0.105 * Math.sin(x * 0.029 - t * 1.4)
                          + 0.04 * Math.sin(x * 0.064 - t * 2.1), 0.77, 1.035);
      const red = [
        Math.round(clamp(200 * light, 0, 255)),
        Math.round(clamp(16 * light, 0, 255)),
        Math.round(clamp(46 * light, 0, 255))
      ];
      const white = Math.round(clamp(255 * light, 213, 255));
      const slice = Math.min(step + 0.5, width - x);

      ctx.fillStyle = "rgb(" + red.join(",") + ")";
      ctx.fillRect(x, 0, slice, height);

      ctx.fillStyle = "rgb(" + white + "," + white + "," + white + ")";
      if (Math.abs(x + xShift - crossX) < crossWidth / 2) {
        ctx.fillRect(x, 0, slice, height);
      } else {
        ctx.fillRect(x, (height - lineHeight) / 2 + yShift, slice, lineHeight);
      }
    }

    // A restrained highlight along the upper edge gives the strip depth.
    const lightEdge = ctx.createLinearGradient(0, 0, 0, height);
    lightEdge.addColorStop(0, "rgba(255,255,255,.15)");
    lightEdge.addColorStop(.30, "rgba(255,255,255,0)");
    lightEdge.addColorStop(.80, "rgba(0,0,0,0)");
    lightEdge.addColorStop(1, "rgba(0,0,0,.25)");
    ctx.fillStyle = lightEdge;
    ctx.fillRect(0, 0, width, height);
  }

  function resize() {
    const bounds = strip.getBoundingClientRect();
    width = Math.round(bounds.width);
    height = Math.round(bounds.height);
    if (!width || !height) return;
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.ceil(width * scale);
    canvas.height = Math.ceil(height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    draw(performance.now() / 1000);
  }

  function animate(now) {
    if (document.hidden || motion.matches) return;
    if (now - lastPaint > 1000 / 30) {
      draw(now / 1000);
      lastPaint = now;
    }
    frameId = window.requestAnimationFrame(animate);
  }

  function updateAnimation() {
    window.cancelAnimationFrame(frameId);
    strip.classList.toggle("is-animated", !motion.matches);
    resize();
    if (!motion.matches && !document.hidden) {
      frameId = window.requestAnimationFrame(animate);
    }
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(resize).observe(strip);
  } else {
    window.addEventListener("resize", resize, { passive: true });
  }

  if (motion.addEventListener) motion.addEventListener("change", updateAnimation);
  else motion.addListener(updateAnimation);

  document.addEventListener("visibilitychange", updateAnimation);
  updateAnimation();
})();
