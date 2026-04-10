(function () {
  const images = [
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
  ];
  const delay = 6000; // 每张图片显示的毫秒数

  const css = `
    .bg-layer {
      position: fixed;
      inset: 0;
      z-index: -1;
      background-size: cover;
      background-position: center;
      transition: opacity 1.5s ease-in-out;
    }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  const a = document.createElement('div');
  const b = document.createElement('div');
  a.className = b.className = 'bg-layer';
  a.style.backgroundImage = `url('${images[0]}')`;
  a.style.opacity = '1';
  b.style.backgroundImage = `url('${images[1 % images.length]}')`;
  b.style.opacity = '0';
  document.body.prepend(b);
  document.body.prepend(a);

  let showA = true;
  let idx = 1;

  setInterval(function () {
    idx = (idx + 1) % images.length;
    if (showA) {
      b.style.backgroundImage = `url('${images[idx]}')`;
      a.style.opacity = '0';
      b.style.opacity = '1';
    } else {
      a.style.backgroundImage = `url('${images[idx]}')`;
      b.style.opacity = '0';
      a.style.opacity = '1';
    }
    showA = !showA;
  }, delay);
})();
