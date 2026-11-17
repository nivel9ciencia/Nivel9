/* Nivel 9: interacciones. Sin dependencias, sin cookies y sin enviar datos a ningún sitio. */
/* N9TOP */
try{if('scrollRestoration' in history)history.scrollRestoration='manual';}catch(e){}
if(!location.hash){try{window.scrollTo({top:0,left:0,behavior:'instant'});}catch(e){window.scrollTo(0,0);}}
(function () {
  'use strict';
  var D = document, B = D.body;
  var LEVELS = [{"short": "Se observa el principio científico", "long": "Hay un fenómeno o principio científico observado y descrito. Todavía no hay aplicación en mente."}, {"short": "Se imagina para qué serviría", "long": "Se formula un concepto de tecnología: una idea concreta de aplicación, aún sin pruebas."}, {"short": "La prueba de concepto funciona", "long": "Un experimento demuestra que la idea es viable en principio."}, {"short": "Se valida en el laboratorio", "long": "La tecnología se comprueba con éxito en condiciones de laboratorio."}, {"short": "Se prueba en condiciones cercanas a las reales", "long": "Se valida en un entorno relevante, parecido al de uso (para ciertas tecnologías clave, un entorno industrial)."}, {"short": "Se demuestra un prototipo en condiciones cercanas a las reales", "long": "Ya no solo se valida: se demuestra funcionando en un entorno relevante."}, {"short": "Un prototipo funciona en un entorno real", "long": "Un prototipo del sistema completo se demuestra en un entorno operativo."}, {"short": "El sistema está completo y cualificado", "long": "El sistema está terminado y ha superado las pruebas o cualificaciones necesarias."}, {"short": "Funciona en el mundo real", "long": "El sistema real está probado en su entorno operativo. En tecnologías clave, eso incluye fabricación competitiva."}];
  var EN = (document.documentElement.lang === 'en' || (B && B.getAttribute('data-lang') === 'en'));
  var LEVELS_EN = [{"short":"The scientific principle is observed","long":"A scientific phenomenon or principle is observed and described. There is no application in mind yet."},{"short":"A use is imagined","long":"A technology concept is formulated: a concrete idea of an application, still untested."},{"short":"Proof of concept works","long":"An experiment shows the idea is viable in principle."},{"short":"Validated in the lab","long":"The technology is successfully checked under laboratory conditions."},{"short":"Tested in near-real conditions","long":"Validated in a relevant environment, close to real use (for some key technologies, an industrial setting)."},{"short":"A prototype is demonstrated in near-real conditions","long":"No longer just validated: it is demonstrated working in a relevant environment."},{"short":"A prototype works in a real environment","long":"A prototype of the full system is demonstrated in an operational environment."},{"short":"The system is complete and qualified","long":"The system is finished and has passed the required tests or qualifications."},{"short":"It works in the real world","long":"The real system is proven in its operational environment. For key technologies, that includes competitive manufacturing."}];
  var QUESTIONS = [{"q": "¿Se ha observado y descrito el principio científico en el que se basa tu tecnología?", "hint": ""}, {"q": "¿Has formulado un concepto concreto de aplicación, es decir, para qué serviría?", "hint": ""}, {"q": "¿Tienes una prueba de concepto experimental que demuestre que la idea funciona?", "hint": "Un experimento propio, aunque sea a pequeña escala."}, {"q": "¿Está validada la tecnología en el laboratorio?", "hint": ""}, {"q": "¿Se ha probado en condiciones cercanas a las reales?", "hint": "Un entorno parecido al de uso, aunque no sea el definitivo."}, {"q": "¿Se ha demostrado un prototipo funcionando en esas condiciones?", "hint": ""}, {"q": "¿Un prototipo del sistema completo ha funcionado en un entorno real de uso?", "hint": ""}, {"q": "¿Está el sistema terminado y ha superado las pruebas o cualificaciones que le tocan?", "hint": ""}, {"q": "¿Funciona ya en condiciones reales de operación, de forma probada?", "hint": ""}];
  var RESULTS = {"0": ["Todavía no hay nivel", "Antes de pensar en el mercado, el primer paso es observar y describir el principio científico en el que se basa la idea."], "1": ["Nivel 1", "Hay un principio científico observado. Es el punto de partida de toda tecnología. Lo siguiente es imaginar para qué podría servir."], "2": ["Nivel 2", "Tienes un concepto de aplicación, aún sin pruebas. El siguiente paso suele ser un experimento que demuestre que funciona."], "3": ["Nivel 3", "Tu idea tiene una prueba de concepto. Es un buen momento para consultar a la oficina de transferencia de tu universidad sobre cómo proteger los resultados antes de publicarlos."], "4": ["Nivel 4", "La tecnología está validada en el laboratorio. Conviene hablar con la oficina de transferencia sobre su protección y empezar a pensar en qué entorno real se probaría."], "5": ["Nivel 5", "Se ha probado en condiciones cercanas a las reales. Es el momento de buscar una empresa interesada o ayudas para llevarla más lejos."], "6": ["Nivel 6", "Hay un prototipo demostrado en condiciones cercanas a las reales. Una empresa socia puede ayudarte a probarlo en un entorno de uso real."], "7": ["Nivel 7", "Un prototipo funciona en un entorno real. Estás cerca del mercado: toca valorar la licencia, la colaboración con una empresa o la creación de una spin-off."], "8": ["Nivel 8", "El sistema está completo y cualificado. Queda demostrar su funcionamiento continuado y preparar su llegada al mercado."], "9": ["Nivel 9", "Tu tecnología funciona en condiciones reales de operación. Es el nivel más alto de la escala."]};
  var EMAIL = "hola@nivel9.es";
  var INDEX = [{"t": "Inicio", "u": "/", "d": ""}, {"t": "Aprende con nosotros", "u": "/aprende.html", "d": "Qué es la transferencia tecnológica"}, {"t": "Información: qué es Nivel 9 y qué hacemos", "u": "/informacion.html", "d": "Sobre nosotros"}, {"t": "Qué hacemos", "u": "/servicios.html", "d": "Seguimiento, consultoría y pool"}, {"t": "Plazos de subvenciones", "u": "/plazos.html", "d": "Calendario de convocatorias"}, {"t": "Conecta con empresas", "u": "/empresas.html", "d": "Pool para encontrar socios"}, {"t": "Noticias", "u": "/noticias/", "d": "Piezas con fuentes"}, {"t": "Conectar", "u": "/conectar.html", "d": "Test y ficha"}, {"t": "Consultas", "u": "/consultas.html", "d": "Escríbenos"}, {"t": "Redes", "u": "/redes.html", "d": ""}, {"t": "Normas editoriales", "u": "/normas-editoriales.html", "d": ""}, {"t": "Los nueve niveles: cómo se mide lo cerca que está una idea de llegar al mercado", "u": "/noticias/los-nueve-niveles.html", "d": "Una escala que usa la Comisión Europea en sus programas de investigación, explicada sin jerga. De ahí sale el nombre de esta revista."}, {"t": "España es la 28.ª en innovación. ¿Dónde se queda la ciencia por el camino?", "u": "/noticias/espana-28-innovacion.html", "d": "Un repaso a las cifras oficiales sobre lo que se investiga en España y lo que llega al mercado, y a las barreras que señala el propio Ministerio de Ciencia."}, {"t": "Licencia, spin-off o colaboración: los tres caminos de la universidad a la empresa", "u": "/noticias/tres-vias.html", "d": "Cuando una investigación tiene salida comercial, hay tres vías habituales. Qué es cada una, cuándo encaja y quién interviene."}, {"t": "Cómo nace una spin-off universitaria: los ocho pasos de un caso real", "u": "/noticias/crear-una-spin-off.html", "d": "Un ejemplo de procedimiento, el de la Universidad Pablo de Olavide, para ver cómo se pasa de un proyecto de investigación a una empresa."}];
  if (EN) {
    INDEX = [
      {"t":"Home","u":"/en/","d":""},
      {"t":"What we do","u":"/en/services.html","d":"Funding tracking and transfer consulting"},
      {"t":"Funding deadlines","u":"/en/deadlines.html","d":"Calendar of national and European calls"},
      {"t":"Connect with companies","u":"/en/companies.html","d":"A pool to find partners"},
      {"t":"Learn with us","u":"/en/learn.html","d":"What technology transfer is"},
      {"t":"About","u":"/en/about.html","d":"What Nivel 9 is and what we do"},
      {"t":"Articles","u":"/noticias/","d":"Pieces with sources (in Spanish)"}
    ];
  }


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
      var L = (EN ? LEVELS_EN : LEVELS)[n - 1];
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-n') === String(n))); });
      det.innerHTML = '<div class="swap"><p class="lvl"></p><h2></h2><p class="long"></p><p><a class="textlink"></a></p></div>';
      $('.lvl', det).textContent = (EN ? 'Level ' + n + ' of 9' : 'Nivel ' + n + ' de 9');
      $('h2', det).textContent = L.short;
      $('.long', det).textContent = L.long;
      var a = $('a', det);
      a.textContent = (EN ? 'Read how the levels are measured' : 'Leer cómo se miden los niveles');
      a.href = (EN ? '/en/learn.html#niveles' : '/noticias/los-nueve-niveles.html#nivel-' + n);
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
    var form = $('#consulta-form'), note = $('#c-note');
    if (!form) return;
    var tabs = $$('[role="tab"][data-k]');
    if (!tabs.length) return;
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

  /* Buscador del menú */
  (function () {
    var inp = $('#dq'), res = $('#dres');
    if (!inp) return;
    function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
    inp.addEventListener('input', function () {
      var q = norm(inp.value.trim()); res.innerHTML = '';
      if (q.length < 2) { res.hidden = true; return; }
      var hits = INDEX.filter(function (x) { return norm(x.t + ' ' + x.d).indexOf(q) > -1; }).slice(0, 6);
      if (!hits.length) { var li = D.createElement('li'); li.className = 'none'; li.textContent = 'Sin resultados'; res.appendChild(li); }
      hits.forEach(function (x) {
        var li = D.createElement('li'), a = D.createElement('a'), s = D.createElement('small');
        a.href = x.u; a.textContent = x.t; s.textContent = x.d.length > 80 ? x.d.slice(0, 78) + '…' : x.d;
        a.appendChild(s); li.appendChild(a); res.appendChild(li);
      });
      res.hidden = false;
    });
  })();

  /* Volver arriba */
  (function () {
    var b = $('#totop'); if (!b) return; var tick = false;
    function upd() { tick = false; b.hidden = window.scrollY < 700; }
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    upd();
  })();

  /* Cifras que cuentan al entrar en pantalla */
  (function () {
    var els = $$('[data-count]');
    if (!els.length || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (!x.isIntersecting) return;
        io.unobserve(x.target); run(x.target);
      });
    }, { threshold: 0.6 });
    function run(el) {
      var end = parseInt(el.getAttribute('data-count'), 10), t0 = null, dur = 900;
      function f(t) {
        if (t0 === null) t0 = t;
        var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
        el.textContent = String(Math.round(end * e));
        if (p < 1) requestAnimationFrame(f); else el.textContent = String(end);
      }
      requestAnimationFrame(f);
    }
    setTimeout(function () { els.forEach(function (el) { el.textContent = el.getAttribute('data-count'); }); }, 8000);
    els.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top > window.innerHeight) { el.textContent = '0'; io.observe(el); }
    });
  })();

  /* Índice de la pieza y copiar enlace */
  (function () {
    var prose = $('.article-body .prose'); if (!prose) return;
    var hs = $$('h2', prose);
    if (hs.length >= 3) {
      var nav = D.createElement('nav'), t = D.createElement('p'), ul = D.createElement('ul');
      nav.className = 'toc'; nav.setAttribute('aria-label', 'En esta pieza');
      t.textContent = 'En esta pieza'; nav.appendChild(t);
      hs.forEach(function (h, i) {
        if (!h.id) h.id = 's-' + (i + 1);
        var li = D.createElement('li'), a = D.createElement('a');
        a.href = '#' + h.id; a.textContent = h.textContent; li.appendChild(a); ul.appendChild(li);
      });
      nav.appendChild(ul); prose.insertBefore(nav, prose.firstChild);
    }
    var by = $('.byline');
    if (by && navigator.clipboard) {
      var b = D.createElement('button'); b.type = 'button'; b.className = 'copylink'; b.textContent = 'Copiar enlace';
      b.addEventListener('click', function () {
        navigator.clipboard.writeText(location.href.split('#')[0]).then(function () {
          b.textContent = 'Enlace copiado'; setTimeout(function () { b.textContent = 'Copiar enlace'; }, 2000);
        }, function () {});
      });
      by.appendChild(b);
    }
  })();
})();

/* N9V3: aparición al hacer scroll y pestañas "quién eres" */
(function(){
  var d=document; d.documentElement.classList.add('js');
  var els=d.querySelectorAll('.svc li,.steps li,.whocards li,.dcard,.module,.lvlstrip li,.facts li,.crsban-in,.cbx,.pieces li,.who-panel,.crs-card,.bandstats li');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px'});
    Array.prototype.forEach.call(els,function(el){el.classList.add('rv');io.observe(el);});
    setTimeout(function(){Array.prototype.forEach.call(els,function(el){var r=el.getBoundingClientRect();if(r.top<window.innerHeight)el.classList.add('in');});},60);
  }
  var tabs=d.querySelectorAll('.who-tab');
  if(tabs.length){
    function sel(t){Array.prototype.forEach.call(tabs,function(x){var on=x===t;x.setAttribute('aria-selected',on?'true':'false');x.tabIndex=on?0:-1;var p=d.getElementById(x.getAttribute('aria-controls'));if(p)p.hidden=!on;});}
    Array.prototype.forEach.call(tabs,function(t,i){
      t.addEventListener('click',function(){sel(t);});
      t.addEventListener('keydown',function(ev){var k=ev.key;if(k==='ArrowRight'||k==='ArrowLeft'){ev.preventDefault();var n=tabs[(i+(k==='ArrowRight'?1:tabs.length-1))%tabs.length];sel(n);n.focus();}});
    });
    sel(tabs[0]);
  }
})();
