parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {}
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    dY0a: [
      function (require, module, exports) {
        'use strict';
        function t(t, i) {
          if (!(t instanceof i))
            throw new TypeError('Cannot call a class as a function');
        }
        function i(t, i) {
          for (var a = 0; a < i.length; a++) {
            var s = i[a];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              'value' in s && (s.writable = !0),
              Object.defineProperty(t, s.key, s);
          }
        }
        function a(t, a, s) {
          return a && i(t.prototype, a), s && i(t, s), t;
        }
        function s(t, i) {
          for (var a = [], s = 0; s < t; s++) a[s] = new r(i);
          return a;
        }
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.generateStars = s);
        var r = (function () {
          function i(a) {
            var s = a.width,
              r = a.height,
              n = a.limit;
            t(this, i),
              (this.orbitRadius = e(h(s, r))),
              (this.radius = e(60, this.orbitRadius) / 12),
              (this.orbitX = s / 2),
              (this.orbitY = r / 2),
              (this.timePassed = e(0, n)),
              (this.speed = e(this.orbitRadius) / 5e4),
              (this.alpha = e(2, 10) / 10);
          }
          return (
            a(i, [
              {
                key: 'draw',
                value: function (t, i) {
                  var a =
                      Math.sin(this.timePassed) * this.orbitRadius +
                      this.orbitX,
                    s =
                      Math.cos(this.timePassed) * this.orbitRadius +
                      this.orbitY,
                    r = e(10);
                  1 === r && this.alpha > 0
                    ? (this.alpha -= 0.05)
                    : 2 === r && this.alpha < 1 && (this.alpha += 0.05),
                    (t.globalAlpha = this.alpha),
                    t.drawImage(
                      i,
                      a - this.radius / 2,
                      s - this.radius / 2,
                      this.radius,
                      this.radius
                    ),
                    (this.timePassed += this.speed);
                }
              }
            ]),
            i
          );
        })();
        function e(t, i) {
          var a = void 0 === i ? t : i,
            s = a === t ? 0 : t;
          return (
            s > a && (s = a = s), Math.floor(Math.random() * (a - s + 1)) + s
          );
        }
        function h(t, i) {
          var a = Math.max(t, i);
          return Math.round(Math.sqrt(a * a + a * a)) / 2;
        }
      },
      {}
    ],
    H4In: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.drawCanvas = l);
        var t = require('./star');
        function e(t, e) {
          return i(t) || a(t, e) || n(t, e) || r();
        }
        function r() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function n(t, e) {
          if (t) {
            if ('string' == typeof t) return o(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === r && t.constructor && (r = t.constructor.name),
              'Map' === r || 'Set' === r
                ? Array.from(t)
                : 'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? o(t, e)
                : void 0
            );
          }
        }
        function o(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function a(t, e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
            var r = [],
              n = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = t[Symbol.iterator]();
                !(n = (i = l.next()).done) &&
                (r.push(i.value), !e || r.length !== e);
                n = !0
              );
            } catch (h) {
              (o = !0), (a = h);
            } finally {
              try {
                n || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return r;
          }
        }
        function i(t) {
          if (Array.isArray(t)) return t;
        }
        function l(e, r) {
          var n = r.width,
            o = r.height,
            a = r.hue,
            i = void 0 === a ? 217 : a,
            l = r.maxStars,
            u = void 0 === l ? 1400 : l,
            d = document.createElement('canvas'),
            f = d.getContext('2d'),
            s = {main: [e, e.getContext('2d')], cache: [d, f]},
            g = (0, t.generateStars)(u, {width: n, height: o, limit: u});
          c(s, {width: 100, height: 100, hue: i}),
            h(g, s, {width: n, height: o, hue: i});
        }
        function h(t, r, n) {
          var o = n.width,
            a = n.height,
            i = n.hue,
            l = e(r.main, 2),
            c = l[0],
            u = l[1],
            d = e(r.cache, 1)[0];
          (c.width = o),
            (c.height = a),
            (u.globalCompositeOperation = 'source-over'),
            (u.globalAlpha = 0.8),
            (u.fillStyle = 'hsla('.concat(i, ', 64%, 6%, 1)')),
            u.fillRect(0, 0, o, a),
            (u.globalCompositeOperation = 'lighter');
          for (var f = 1, s = t.length; f < s; f++) t[f].draw(u, d);
          window.requestAnimationFrame(function () {
            return h(t, r, n);
          });
        }
        function c(t, r) {
          var n = r.width,
            o = r.height,
            a = r.hue,
            i = e(t.cache, 2),
            l = i[0],
            h = i[1];
          (l.width = n), (l.height = o);
          var c = l.width / 2,
            d = u(h, {size: c, hue: a});
          (h.fillStyle = d),
            h.beginPath(),
            h.arc(c, c, c, 0, 2 * Math.PI),
            h.fill();
        }
        function u(t, e) {
          var r = e.size,
            n = e.hue,
            o = t.createRadialGradient(r, r, 0, r, r, r);
          return (
            o.addColorStop(0.025, '#fff'),
            o.addColorStop(0.1, 'hsl('.concat(n, ', 61%, 33%)')),
            o.addColorStop(0.25, 'hsl('.concat(n, ', 64%, 6%)')),
            o.addColorStop(1, 'transparent'),
            o
          );
        }
      },
      {'./star': 'dY0a'}
    ],
    KUU8: [
      function (require, module, exports) {
        'use strict';
        var e = require('./draw');
        function n(e) {
          e.document.documentElement.style.setProperty(
            '--app-height',
            ''.concat(e.innerHeight, 'px')
          );
        }
        function t(n) {
          (0, e.drawCanvas)(document.getElementById('canvas'), {
            width: n.innerWidth,
            height: n.innerHeight
          });
        }
        !(function (e) {
          var i = e.document;
          e.addEventListener('resize', function () {
            return n(e);
          }),
            i.addEventListener('DOMContentLoaded', function () {
              return t(e);
            });
        })(window);
      },
      {'./draw': 'H4In'}
    ]
  },
  {},
  ['KUU8'],
  null
);
