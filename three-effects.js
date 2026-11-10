import * as THREE from 'three';

// A quiet field of warm, floating lights gives the hero section subtle depth.
// It pauses when the hero leaves view and respects reduced-motion preferences.
const canvas = document.querySelector('#hero-three');
const hero = document.querySelector('.hero');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && hero) {
  try {
    const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: false, powerPreference: 'low-power'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.z = 23;

    const count = window.innerWidth < 650 ? 48 : 84;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const drift = new Float32Array(count);
    const phase = new Float32Array(count);
    const colorChoices = [new THREE.Color('#e2ae7f'), new THREE.Color('#eed7ae'), new THREE.Color('#c9855c')];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - .5) * 28;
      positions[i * 3 + 1] = (Math.random() - .5) * 16;
      positions[i * 3 + 2] = (Math.random() - .5) * 12;
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      drift[i] = .06 + Math.random() * .16;
      phase[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size: .17,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: .55,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const motes = new THREE.Points(geometry, material);
    scene.add(motes);

    let active = true;
    let pointerX = 0;
    let pointerY = 0;
    const render = time => {
      if (!reducedMotion && active) {
        const seconds = time * .00018;
        for (let i = 0; i < count; i++) {
          const yIndex = i * 3 + 1;
          const xIndex = i * 3;
          positions[yIndex] += drift[i] * .012;
          positions[xIndex] += Math.sin(seconds + phase[i]) * .002;
          if (positions[yIndex] > 9) positions[yIndex] = -9;
        }
        geometry.attributes.position.needsUpdate = true;
        camera.position.x += (pointerX * .55 - camera.position.x) * .012;
        camera.position.y += (pointerY * .3 - camera.position.y) * .012;
        camera.lookAt(0, 0, 0);
      }
      renderer.render(scene, camera);
    };

    const resize = () => {
      const bounds = hero.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      camera.aspect = bounds.width / bounds.height;
      camera.updateProjectionMatrix();
      renderer.setSize(bounds.width, bounds.height, false);
      if (reducedMotion) render(0);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(hero);
    resize();

    hero.addEventListener('pointermove', event => {
      const bounds = hero.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - .5;
      pointerY = .5 - (event.clientY - bounds.top) / bounds.height;
    }, {passive: true});
    hero.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; }, {passive: true});

    new IntersectionObserver(entries => {
      active = entries[0].isIntersecting;
      renderer.setAnimationLoop(active && !reducedMotion ? render : null);
      if (active && reducedMotion) render(0);
    }, {threshold: .02}).observe(hero);

    if (!reducedMotion) renderer.setAnimationLoop(render);
    else render(0);
  } catch (error) {
    // Keep the page usable on devices without WebGL support.
    canvas.hidden = true;
  }
}
