/* Nivel 9: interacciones. Sin dependencias, sin cookies y sin enviar datos a ningún sitio. */
(function () {
  'use strict';
  var D = document, B = D.body;
  var ROOT=(function(){var t=D.querySelector('script[src*="site.js"]');return t?t.src.replace(/site\.js.*$/,''):'/';})();
  var LEVELS = [{"short": "Se observa el principio científico", "long": "Hay un fenómeno o principio científico observado y descrito. Todavía no hay aplicación en mente."}, {"short": "Se imagina para qué serviría", "long": "Se formula un concepto de tecnología: una idea concreta de aplicación, aún sin pruebas."}, {"short": "La prueba de concepto funciona", "long": "Un experimento demuestra que la idea es viable en principio."}, {"short": "Se valida en el laboratorio", "long": "La tecnología se comprueba con éxito en condiciones de laboratorio."}, {"short": "Se prueba en condiciones cercanas a las reales", "long": "Se valida en un entorno relevante, parecido al de uso (para ciertas tecnologías clave, un entorno industrial)."}, {"short": "Se demuestra un prototipo en condiciones cercanas a las reales", "long": "Ya no solo se valida: se demuestra funcionando en un entorno relevante."}, {"short": "Un prototipo funciona en un entorno real", "long": "Un prototipo del sistema completo se demuestra en un entorno operativo."}, {"short": "El sistema está completo y cualificado", "long": "El sistema está terminado y ha superado las pruebas o cualificaciones necesarias."}, {"short": "Funciona en el mundo real", "long": "El sistema real está probado en su entorno operativo. En tecnologías clave, eso incluye fabricación competitiva."}];
  var QUESTIONS = [{"q": "¿Se ha observado y descrito el principio científico en el que se basa tu tecnología?", "hint": ""}, {"q": "¿Has formulado un concepto concreto de aplicación, es decir, para qué serviría?", "hint": ""}, {"q": "¿Tienes una prueba de concepto experimental que demuestre que la idea funciona?", "hint": "Un experimento propio, aunque sea a pequeña escala."}, {"q": "¿Está validada la tecnología en el laboratorio?", "hint": ""}, {"q": "¿Se ha probado en condiciones cercanas a las reales?", "hint": "Un entorno parecido al de uso, aunque no sea el definitivo."}, {"q": "¿Se ha demostrado un prototipo funcionando en esas condiciones?", "hint": ""}, {"q": "¿Un prototipo del sistema completo ha funcionado en un entorno real de uso?", "hint": ""}, {"q": "¿Está el sistema terminado y ha superado las pruebas o cualificaciones que le tocan?", "hint": ""}, {"q": "¿Funciona ya en condiciones reales de operación, de forma probada?", "hint": ""}];
  var RESULTS = {"0": ["Todavía no hay nivel", "Antes de pensar en el mercado, el primer paso es observar y describir el principio científico en el que se basa la idea."], "1": ["Nivel 1", "Hay un principio científico observado. Es el punto de partida de toda tecnología. Lo siguiente es imaginar para qué podría servir."], "2": ["Nivel 2", "Tienes un concepto de aplicación, aún sin pruebas. El siguiente paso suele ser un experimento que demuestre que funciona."], "3": ["Nivel 3", "Tu idea tiene una prueba de concepto. Es un buen momento para consultar a la oficina de transferencia de tu universidad sobre cómo proteger los resultados antes de publicarlos."], "4": ["Nivel 4", "La tecnología está validada en el laboratorio. Conviene hablar con la oficina de transferencia sobre su protección y empezar a pensar en qué entorno real se probaría."], "5": ["Nivel 5", "Se ha probado en condiciones cercanas a las reales. Es el momento de buscar una empresa interesada o ayudas para llevarla más lejos."], "6": ["Nivel 6", "Hay un prototipo demostrado en condiciones cercanas a las reales. Una empresa socia puede ayudarte a probarlo en un entorno de uso real."], "7": ["Nivel 7", "Un prototipo funciona en un entorno real. Estás cerca del mercado: toca valorar la licencia, la colaboración con una empresa o la creación de una spin-off."], "8": ["Nivel 8", "El sistema está completo y cualificado. Queda demostrar su funcionamiento continuado y preparar su llegada al mercado."], "9": ["Nivel 9", "Tu tecnología funciona en condiciones reales de operación. Es el nivel más alto de la escala."]};
  var EMAIL = "hola@nivel9.es";

  function $(s, c) { return (c || D).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || D).querySelectorAll(s)); }
  function swap(el) { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); }
  function say(el, msg) {
    if (!el) return;
    el.textContent = msg; el.classList.add('show');
    clearTimeout(el._t); el._t = setTimeout(function () { el.classList.remove('show'); }, 2600);
  }

  /* Menú lateral */
  (function () {
    var btn = $('#menu-btn'), drawer = $('#drawer'), scrim = $('#scrim'), closeBtn = $('#close-btn');
    if (!btn || !drawer) return;
    var main = $('#contenido'), foot = $('.site-foot');
    function setInert(v) {
      [main, foot].forEach(function (el) {
        if (!el) return;
        if (v) el.setAttribute('inert', ''); else el.removeAttribute('inert');
      });
    }
    function open() {
      drawer.removeAttribute('inert');
      drawer.classList.add('open'); scrim.classList.add('open');
      btn.setAttribute('aria-expanded', 'true'); btn.setAttribute('aria-label', 'Cerrar el menú');
      B.classList.add('locked'); setInert(true);
      requestAnimationFrame(function () { closeBtn.focus({ preventScroll: true }); });
    }
    function close(returnFocus) {
      drawer.classList.remove('open'); scrim.classList.remove('open');
      drawer.setAttribute('inert', '');
      btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Abrir el menú');
      B.classList.remove('locked'); setInert(false);
      if (returnFocus !== false) btn.focus({ preventScroll: true });
    }
    btn.addEventListener('click', function () { drawer.classList.contains('open') ? close() : open(); });
    closeBtn.addEventListener('click', function () { close(); });
    scrim.addEventListener('click', function () { close(); });
    D.addEventListener('keydown', function (ev) {
      if (!drawer.classList.contains('open')) return;
      if (ev.key === 'Escape') { ev.preventDefault(); close(); return; }
      if (ev.key === 'Tab') {
        var f = $$('a[href],button:not([disabled])', drawer);
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (ev.shiftKey && D.activeElement === first) { ev.preventDefault(); last.focus(); }
        else if (!ev.shiftKey && D.activeElement === last) { ev.preventDefault(); first.focus(); }
      }
    });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { close(false); }); });
  })();

  /* Barra de progreso de lectura en las piezas */
  (function () {
    var art = $('.article-body'), bar = $('.progress');
    if (!art || !bar) return;
    var span = $('span', bar), tick = false;
    bar.classList.add('on');
    function upd() {
      tick = false;
      var r = art.getBoundingClientRect();
      var total = Math.max(r.height - window.innerHeight * 0.5, 1);
      var done = Math.min(Math.max((-r.top + 120) / total, 0), 1);
      span.style.transform = 'scaleX(' + done.toFixed(4) + ')';
    }
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    window.addEventListener('resize', upd);
    upd();
  })();

  /* Escalera de niveles de la portada */
  (function () {
    var det = $('#detail'), btns = $$('.ladder button');
    if (!det || !btns.length) return;
    function show(n) {
      var L = LEVELS[n - 1];
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-n') === String(n))); });
      det.innerHTML = '<div class="swap"><p class="lvl"></p><h2></h2><p class="long"></p><p><a class="textlink"></a></p></div>';
      $('.lvl', det).textContent = 'Nivel ' + n + ' de 9';
      $('h2', det).textContent = L.short;
      $('.long', det).textContent = L.long;
      var a = $('a', det); a.textContent = 'Leer cómo se miden los niveles';
      a.href = ROOT + 'los-nueve-niveles.html#nivel-' + n;
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { show(parseInt(b.getAttribute('data-n'), 10)); }); });
  })();

  /* Filtros de noticias */
  (function () {
    var wrap = $('#filters'), list = $('#list'), count = $('#count');
    if (!wrap || !list) return;
    var btns = $$('button', wrap), items = $$('li', list);
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var t = b.getAttribute('data-tag'), n = 0;
        btns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        items.forEach(function (li) {
          var show = (t === 'all' || li.getAttribute('data-tag') === t);
          li.hidden = !show; if (show) n++;
        });
        count.textContent = n + (n === 1 ? ' pieza' : ' piezas');
      });
    });
  })();

  /* Test de nivel, pregunta a pregunta */
  (function () {
    var quiz = $('#quiz');
    if (!quiz) return;
    var body = $('#q-body'), count = $('#q-count'), meter = $('#q-meter');
    var idx = 0;
    function setMeter(f) { meter.style.transform = 'scaleX(' + f + ')'; }
    function focusHeading() { var h = $('h3', body); if (h) h.focus({ preventScroll: true }); }
    function render() {
      var Q = QUESTIONS[idx];
      count.textContent = 'Pregunta ' + (idx + 1) + ' de 9';
      setMeter(idx / 9);
      body.innerHTML = '<div class="qcard"><h3 tabindex="-1"></h3><p class="hint"></p><div class="answers">' +
        '<button type="button" class="btn" data-a="1">Sí</button><button type="button" class="btn ghost" data-a="0">No</button></div>' +
        '<button type="button" class="back">Volver a la anterior</button></div>';
      var card = $('.qcard', body);
      $('h3', card).textContent = Q.q;
      var h = $('.hint', card);
      if (Q.hint) { h.textContent = Q.hint; } else { h.remove(); }
      if (idx === 0) { $('.back', card).hidden = true; }
      swap(card);
      $$('.answers button', card).forEach(function (b) {
        b.addEventListener('click', function () { answer(b.getAttribute('data-a') === '1'); });
      });
      $('.back', card).addEventListener('click', function () { if (idx > 0) { idx--; render(); focusHeading(); } });
    }
    function answer(yes) {
      if (yes) {
        if (idx === 8) { finish(9); } else { idx++; render(); focusHeading(); }
      } else { finish(idx); }
    }
    function finish(level) {
      count.textContent = level === 9 ? 'Completado' : 'Resultado';
      setMeter(1);
      var R = RESULTS[String(level)], mini = '', n;
      for (n = 1; n <= 9; n++) {
        var c = n <= level ? 'done' : (n === level + 1 ? 'next' : '');
        mini += '<li data-c="' + c + '">' + n + '</li>';
      }
      body.innerHTML = '<div class="final"><h3 tabindex="-1"></h3><p class="r"></p>' +
        '<ol class="mini" aria-label="Niveles alcanzados">' + mini + '</ol>' +
        (level < 9 ? '<p class="next-q"></p>' : '') +
        '<p class="small">Orientación a partir de tus respuestas. No es una evaluación oficial ni sustituye la opinión de la oficina de transferencia de tu universidad.</p>' +
        '<p><button type="button" class="btn" id="use-level">Usar este nivel en mi ficha</button> <button type="button" class="btn ghost" id="again">Repetir el test</button></p></div>';
      var f = $('.final', body);
      $('h3', f).textContent = R[0];
      $('.r', f).textContent = R[1];
      if (level < 9) { $('.next-q', f).textContent = 'Para llegar al nivel ' + (level + 1) + ', tendrías que poder responder «Sí» a esto: ' + QUESTIONS[level].q; }
      if (level === 0) { $('#use-level', f).hidden = true; }
      swap(f);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          $$('.mini li', f).forEach(function (li, i) {
            li.style.transitionDelay = (i * 45) + 'ms';
            li.className = li.getAttribute('data-c');
          });
        });
      });
      focusHeading();
      $('#again', f).addEventListener('click', function () { idx = 0; render(); focusHeading(); });
      $('#use-level', f).addEventListener('click', function () {
        var sel = $('#f-nivel');
        if (sel) { sel.value = String(level); sel.dispatchEvent(new Event('change', { bubbles: true })); }
        var target = $('#ficha'); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
    render();
  })();

  /* Ficha de tecnología */
  (function () {
    var out = $('#ficha-out'), mail = $('#mail');
    if (!out) return;
    var ids = ['titulo', 'problema', 'quien', 'como', 'nivel', 'prot', 'busca'];
    function val(k) { return (D.getElementById('f-' + k).value || '').trim(); }
    function build() {
      return [
        'FICHA NIVEL 9', '',
        'Tecnología: ' + (val('titulo') || '—'),
        'Problema que resuelve: ' + (val('problema') || '—'),
        'Para quién es útil: ' + (val('quien') || '—'),
        'Cómo funciona: ' + (val('como') || '—'),
        'Nivel de madurez: ' + (val('nivel') ? val('nivel') + ' de 9' : 'sin indicar'),
        'Protección: ' + (val('prot') || 'sin indicar'),
        'Qué busca: ' + (val('busca') || 'sin indicar')
      ].join('\n');
    }
    function update() {
      var t = build();
      out.textContent = t;
      mail.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Ficha: ' + (val('titulo') || 'mi tecnología')) + '&body=' + encodeURIComponent(t);
    }
    ids.forEach(function (k) {
      var el = D.getElementById('f-' + k);
      el.addEventListener('input', update); el.addEventListener('change', update);
    });
    var toast = $('#toast');
    $('#copy').addEventListener('click', function () {
      var t = build();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(function () { say(toast, 'Copiada'); }, function () { say(toast, 'No se pudo copiar. Selecciona el texto a mano.'); });
      } else { say(toast, 'No se pudo copiar. Selecciona el texto a mano.'); }
    });
    $('#ficha-form').addEventListener('submit', function (ev) { ev.preventDefault(); });
    update();
  })();

  /* Consultas: pestañas y correo preparado */
  (function () {
    var tabs = $$('[role="tab"]');
    if (!tabs.length) return;
    var form = $('#consulta-form'), note = $('#c-note');
    var current = tabs[0].getAttribute('data-k'), label = {};
    tabs.forEach(function (t) { label[t.getAttribute('data-k')] = t.textContent; });
    function select(k, focus) {
      current = k;
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-k') === k;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        var p = D.getElementById('panel-' + t.getAttribute('data-k'));
        p.hidden = !on;
        if (on) { swap(p); if (focus) t.focus(); }
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t.getAttribute('data-k')); });
      t.addEventListener('keydown', function (ev) {
        var j = i;
        if (ev.key === 'ArrowRight') j = (i + 1) % tabs.length;
        else if (ev.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
        else return;
        ev.preventDefault(); select(tabs[j].getAttribute('data-k'), true);
      });
    });
    var h = location.hash.replace('#', '');
    if (h && D.getElementById('tab-' + h)) select(h);
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var msg = ($('#c-msg').value || '').trim(), name = ($('#c-nombre').value || '').trim();
      if (!msg) { say(note, 'Escribe tu mensaje para preparar el correo.'); $('#c-msg').focus(); return; }
      var body = (name ? 'Nombre: ' + name + '\n\n' : '') + msg;
      location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Consulta: ' + label[current]) + '&body=' + encodeURIComponent(body);
      say(note, 'Se abrirá tu programa de correo.');
    });
  })();
})();
