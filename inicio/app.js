(() => {
  const names = {'02':'Descubre las posiciones','03':'Juegos del kimono','04':'El mundo de los cinturones','05':'Laberintos del pequeño guerrero','06':'Encuentra las diferencias','07':'Colorea tu aventura','08':'Palabras y acertijos'};
  const gallery = document.getElementById('sample-gallery');
  const image = document.getElementById('sample-image');
  const caption = document.getElementById('sample-caption');
  const tabs = [...document.querySelectorAll('.sample-tab')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const delay = 5000;
  let current = Math.max(0, tabs.findIndex(tab => tab.classList.contains('active')));
  let hovered = false;
  let focused = gallery.contains(document.activeElement);
  let timer;

  const canPlay = () => !reducedMotion.matches && !hovered && !focused && !document.hidden;
  const selectSample = index => {
    current = index;
    const key = tabs[current].dataset.sample;
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === current);
      tab.setAttribute('aria-pressed', String(i === current));
    });
    image.src = `assets/actividad-${key}.webp`;
    image.alt = `${names[key]}: muestra real de una actividad`;
    caption.textContent = `${names[key]} · Una muestra real del material`;
  };
  const schedule = () => {
    window.clearTimeout(timer);
    caption.setAttribute('aria-live', canPlay() ? 'off' : 'polite');
    if (canPlay()) {
      timer = window.setTimeout(() => {
        if (canPlay()) selectSample((current + 1) % tabs.length);
        schedule();
      }, delay);
    }
  };

  tabs.forEach((tab, index) => tab.addEventListener('click', () => {
    selectSample(index);
    schedule();
  }));
  gallery.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'touch') {
      hovered = true;
      schedule();
    }
  });
  gallery.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'touch') {
      hovered = false;
      schedule();
    }
  });
  gallery.addEventListener('focusin', () => {
    focused = true;
    schedule();
  });
  gallery.addEventListener('focusout', event => {
    focused = gallery.contains(event.relatedTarget);
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', schedule);
  schedule();

  const questions = [...document.querySelectorAll('.faq details')];
  questions.forEach(question => question.addEventListener('toggle', () => { if(question.open) questions.forEach(other => {if(other!==question)other.open=false;}); }));
})();
