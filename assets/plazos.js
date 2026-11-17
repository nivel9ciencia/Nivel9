/* Plazos: estado calculado con la fecha del visitante. Sin cookies ni envío de datos. Bilingüe. */
(function () {
  'use strict';
  var EN = (document.body.getAttribute('data-lang') === 'en');
  var T = EN ? {
    closed: 'Closed', deadline: 'Deadline', open: 'Open', nextcut: 'Next cut-off',
    opensOn: function (d, m) { return 'Opens ' + m + ' ' + d; },
    closesIn: function (n) { return n === 0 ? 'Closes today' : (n === 1 ? '1 day left' : n + ' days left'); },
    M: ['January','February','March','April','May','June','July','August','September','October','November','December']
  } : {
    closed: 'Cerrada', deadline: 'Cierre', open: 'Abierta', nextcut: 'Próximo corte',
    opensOn: function (d, m) { return 'Abre el ' + d + ' de ' + m; },
    closesIn: function (n) { return n === 0 ? 'Cierra hoy' : (n === 1 ? 'Queda 1 día' : 'Quedan ' + n + ' días'); },
    M: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  };
  var list = document.getElementById('plazos-list');
  if (list) {
    var rows = Array.prototype.slice.call(list.querySelectorAll('.plazo'));
    var DAY = 86400000, now = new Date(); now.setHours(0, 0, 0, 0);
    function d(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
    rows.forEach(function (r) {
      var close = d(r.dataset.close), open = r.dataset.open ? d(r.dataset.open) : null;
      var left = Math.round((close - now) / DAY);
      var badge = r.querySelector('[data-badge]'), txt = r.querySelector('[data-left]');
      var state;
      if (left < 0) { state = 'closed'; badge.textContent = T.closed; txt.textContent = ''; r.hidden = true; }
      else if (open && open > now) { state = 'soon'; badge.textContent = T.opensOn(open.getDate(), T.M[open.getMonth()]); txt.textContent = T.closesIn(left); }
      else { state = 'open'; badge.textContent = open ? T.open : T.nextcut; txt.textContent = T.closesIn(left); }
      r.dataset.state = state; r._close = close; if (state === 'open' && left <= 14) r.dataset.urgent = '1';
    });
    rows.sort(function (a, b) { return a._close - b._close; }).forEach(function (r) { list.appendChild(r); });
    var chips = document.querySelectorAll('.fchip');
    Array.prototype.forEach.call(chips, function (c) {
      c.addEventListener('click', function () {
        Array.prototype.forEach.call(chips, function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
        var f = c.dataset.f;
        rows.forEach(function (r) { r.hidden = r.dataset.state === 'closed' || (f !== 'all' && r.dataset.scope !== f); });
      });
    });
    // tarjeta "próximos plazos"
    var box = document.getElementById('next-list');
    if (box) {
      var live = rows.filter(function (r) { return r.dataset.state !== 'closed'; }).slice(0, 4);
      if (live.length) {
        box.innerHTML = '';
        live.forEach(function (r) {
          var li = document.createElement('li'), a = document.createElement('a'), dd = document.createElement('span'), n = document.createElement('span');
          a.href = EN ? '/en/deadlines.html' : '/plazos.html'; dd.className = 'nx-d'; n.className = 'nx-n';
          dd.textContent = r.querySelector('.pz-date strong').textContent;
          n.textContent = r.querySelector('h3').textContent;
          a.appendChild(dd); a.appendChild(n); li.appendChild(a); box.appendChild(li);
        });
      }
    }
  }

  /* Formulario del pool de empresas */
  var form = document.getElementById('pool-form');
  if (form) {
    var ok = document.getElementById('p-ok'), send = document.getElementById('p-send'),
        copy = document.getElementById('p-copy'), msg = document.getElementById('p-msg');
    var L = EN ? {
      labels: { 'p-tipo': 'Type', 'p-entidad': 'Organisation', 'p-area': 'Field/sector', 'p-ofreces': 'Offers', 'p-buscas': 'Looking for', 'p-email': 'Email' },
      need: 'Please tick the box to send your registration.', emailNeed: 'Please add a contact email.',
      copied: 'Details copied. Paste them into an email to hola@nivel9.es', subject: 'Company pool registration', head: 'COMPANY POOL — NIVEL 9'
    } : {
      labels: { 'p-tipo': 'Qué es', 'p-entidad': 'Entidad', 'p-area': 'Área/sector', 'p-ofreces': 'Ofrece', 'p-buscas': 'Busca', 'p-email': 'Correo' },
      need: 'Marca la casilla para enviar tu registro.', emailNeed: 'Añade un correo de contacto.',
      copied: 'Datos copiados. Pégalos en un correo a hola@nivel9.es', subject: 'Registro en el pool de empresas', head: 'POOL DE EMPRESAS — NIVEL 9'
    };
    function val(id) { var e = document.getElementById(id); return e ? e.value.trim() : ''; }
    function body() {
      var ids = ['p-tipo', 'p-entidad', 'p-area', 'p-ofreces', 'p-buscas', 'p-email'];
      var lines = [L.head, ''];
      ids.forEach(function (id) { lines.push(L.labels[id] + ': ' + (val(id) || '—')); });
      return lines.join('\n');
    }
    function refresh() {
      if (ok.checked) { send.removeAttribute('aria-disabled'); } else { send.setAttribute('aria-disabled', 'true'); }
    }
    ok.addEventListener('change', function () { refresh(); if (ok.checked) { msg.textContent = ''; msg.className = 'form-msg'; } });
    refresh();
    send.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (!ok.checked) { msg.textContent = L.need; msg.className = 'form-msg'; ok.focus(); return; }
      if (!val('p-email')) { msg.textContent = L.emailNeed; msg.className = 'form-msg'; document.getElementById('p-email').focus(); return; }
      location.href = 'mailto:hola@nivel9.es?subject=' + encodeURIComponent(L.subject) + '&body=' + encodeURIComponent(body());
    });
    copy.addEventListener('click', function () {
      var t = body();
      function done() { msg.textContent = L.copied; msg.className = 'form-msg ok'; }
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).then(done, done); }
      else { var ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta); done(); }
    });
    form.addEventListener('submit', function (ev) { ev.preventDefault(); });
  }

  /* Preinscripción a cursos */
  var cf = document.getElementById('course-form');
  if (cf) {
    var cok = document.getElementById('c-ok'), csend = document.getElementById('c-send'), ccopy = document.getElementById('c-copy'), cmsg = document.getElementById('c-msg');
    var CL = EN ? { head: 'COURSE PRE-REGISTRATION — NIVEL 9', subject: 'Course pre-registration', courses: 'Courses', profile: 'Profile', other: 'Other topic', email: 'Email',
      need: 'Please tick the box to send your pre-registration.', emailNeed: 'Please add a contact email.', pick: 'Please choose at least one course.', copied: 'Details copied. Paste them into an email to hola@nivel9.es' }
    : { head: 'PREINSCRIPCIÓN A CURSOS — NIVEL 9', subject: 'Preinscripción a cursos', courses: 'Cursos', profile: 'Perfil', other: 'Otro tema', email: 'Correo',
      need: 'Marca la casilla para enviar tu preinscripción.', emailNeed: 'Añade un correo de contacto.', pick: 'Elige al menos un curso.', copied: 'Datos copiados. Pégalos en un correo a hola@nivel9.es' };
    function cv(id) { var e = document.getElementById(id); return e ? e.value.trim() : ''; }
    function picked() { return Array.prototype.map.call(cf.querySelectorAll('input[name="c-curso"]:checked'), function (x) { return x.value; }); }
    function cbody() {
      var l = [CL.head, '']; var pk = picked();
      l.push(CL.courses + ':'); pk.forEach(function (c) { l.push(' - ' + c); });
      l.push(CL.profile + ': ' + (cv('c-perfil') || '—')); l.push(CL.other + ': ' + (cv('c-otro') || '—')); l.push(CL.email + ': ' + (cv('c-email') || '—'));
      return l.join('\n');
    }
    function crefresh() { if (cok.checked) csend.removeAttribute('aria-disabled'); else csend.setAttribute('aria-disabled', 'true'); }
    cok.addEventListener('change', function () { crefresh(); if (cok.checked) { cmsg.textContent = ''; cmsg.className = 'form-msg'; } });
    crefresh();
    function check() {
      if (!picked().length) { cmsg.textContent = CL.pick; cmsg.className = 'form-msg'; return false; }
      if (!cok.checked) { cmsg.textContent = CL.need; cmsg.className = 'form-msg'; cok.focus(); return false; }
      if (!cv('c-email')) { cmsg.textContent = CL.emailNeed; cmsg.className = 'form-msg'; document.getElementById('c-email').focus(); return false; }
      return true;
    }
    csend.addEventListener('click', function (ev) { ev.preventDefault(); if (!check()) return; location.href = 'mailto:hola@nivel9.es?subject=' + encodeURIComponent(CL.subject) + '&body=' + encodeURIComponent(cbody()); });
    ccopy.addEventListener('click', function () {
      var t = cbody();
      function done() { cmsg.textContent = CL.copied; cmsg.className = 'form-msg ok'; }
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).then(done, done); }
      else { var ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta); done(); }
    });
    cf.addEventListener('submit', function (ev) { ev.preventDefault(); });
  }
})();
