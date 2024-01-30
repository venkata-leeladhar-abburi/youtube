'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function r(a) {
    return ea(a())
}

function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var u = this || self;

function ha(a, b) {
    var c = v("CLOSURE_FLAGS");
    a = c && c[a];
    return null != a ? a : b
}

function v(a, b) {
    a = a.split(".");
    b = b || u;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ia(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function la(a, b, c) {
    la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return la.apply(null, arguments)
}

function x(a, b) {
    a = a.split(".");
    var c = u;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Oa = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Ob = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}

function na(a) {
    return a
};

function oa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
ma(oa, Error);
oa.prototype.name = "CustomError";

function pa() {};

function qa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function ra(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function sa(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function ta(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function ua(a) {
    for (const b in a) return !1;
    return !0
}

function va(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = va(a[c]);
    return b
}
const wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function xa(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < wa.length; f++) c = wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var ya;

function za(a, b) {
    this.h = a === Aa && b || ""
}
za.prototype.toString = function() {
    return this.h
};

function Ba(a) {
    return new za(Aa, a)
}
var Aa = {};
Ba("");
var Ca = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    },
    Da = {};
var Ea = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var Fa = ha(610401301, !1),
    Ga = ha(572417392, !0);

function Ha() {
    var a = u.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Ia;
const Ja = u.navigator;
Ia = Ja ? Ja.userAgentData || null : null;

function Ka(a) {
    return Fa ? Ia ? Ia.brands.some(({
        brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1
}

function y(a) {
    return -1 != Ha().indexOf(a)
};

function La() {
    return Fa ? !!Ia && 0 < Ia.brands.length : !1
}

function Ma() {
    return La() ? Ka("Chromium") : (y("Chrome") || y("CriOS")) && !(La() ? 0 : y("Edge")) || y("Silk")
};
var Na = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Oa(a) {
    return a ? decodeURI(a) : a
}

function Pa(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Pa(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Qa(a) {
    var b = [],
        c;
    for (c in a) Pa(c, a[c], b);
    return b.join("&")
};

function Ra() {
    this.l = this.l;
    this.i = this.i
}
Ra.prototype.l = !1;
Ra.prototype.dispose = function() {
    this.l || (this.l = !0, this.m())
};
Ra.prototype.addOnDisposeCallback = function(a, b) {
    this.l ? void 0 !== b ? a.call(b) : a() : (this.i || (this.i = []), this.i.push(void 0 !== b ? la(a, b) : a))
};
Ra.prototype.m = function() {
    if (this.i)
        for (; this.i.length;) this.i.shift()()
};

function Sa(a) {
    var b = v("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || u.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Ta(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Ua[c]) c = Ua[c];
                else {
                    c = String(c);
                    if (!Ua[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Ua[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Ua[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: b
    }
}

function Ta(a, b) {
    b || (b = {});
    b[Va(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Va(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Ta(a, b));
    return c
}

function Va(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Ua = {};
var Wa = La() ? !1 : y("Trident") || y("MSIE");

function Xa(a, b) {
    a.l(b);
    100 > a.i && (a.i++, b.next = a.h, a.h = b)
}
class Ya {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};

function Za(a) {
    u.setTimeout(() => {
        throw a;
    }, 0)
};
class $a {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = ab.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var ab = new Ya(() => new bb, a => a.reset());
class bb {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let cb, db = !1,
    eb = new $a,
    gb = (a, b) => {
        cb || fb();
        db || (cb(), db = !0);
        eb.add(a, b)
    },
    fb = () => {
        const a = u.Promise.resolve(void 0);
        cb = () => {
            a.then(hb)
        }
    };
var hb = () => {
    let a;
    for (; a = eb.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Za(b)
        }
        Xa(ab, a)
    }
    db = !1
};

function z(a) {
    this.h = 0;
    this.v = void 0;
    this.l = this.i = this.j = null;
    this.m = this.s = !1;
    if (a != pa) try {
        var b = this;
        a.call(void 0, function(c) {
            ib(b, 2, c)
        }, function(c) {
            ib(b, 3, c)
        })
    } catch (c) {
        ib(this, 3, c)
    }
}

function jb() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
jb.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var kb = new Ya(function() {
    return new jb
}, function(a) {
    a.reset()
});

function lb(a, b, c) {
    var d = kb.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function mb(a) {
    if (a instanceof z) return a;
    var b = new z(pa);
    ib(b, 2, a);
    return b
}
z.prototype.then = function(a, b, c) {
    return nb(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
z.prototype.$goog_Thenable = !0;
z.prototype.F = function(a, b) {
    return nb(this, null, a, b)
};
z.prototype.catch = z.prototype.F;
z.prototype.cancel = function(a) {
    if (0 == this.h) {
        var b = new ob(a);
        gb(function() {
            pb(this, b)
        }, this)
    }
};

function pb(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? pb(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : qb(c), rb(c, e, 3, b)))
            }
            a.j = null
        } else ib(a, 3, b)
}

function sb(a, b) {
    a.i || 2 != a.h && 3 != a.h || tb(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function nb(a, b, c, d) {
    var e = lb(null, null, null);
    e.h = new z(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof ob ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    sb(a, e);
    return e.h
}
z.prototype.K = function(a) {
    this.h = 0;
    ib(this, 2, a)
};
z.prototype.N = function(a) {
    this.h = 0;
    ib(this, 3, a)
};

function ib(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.K,
                f = a.N;
            if (d instanceof z) {
                sb(d, lb(e || pa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            ub(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.v = c, a.h = b, a.j = null, tb(a), 3 != b || c instanceof ob || vb(a, c))
    }
}

function ub(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function tb(a) {
    a.s || (a.s = !0, gb(a.B, a))
}

function qb(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
z.prototype.B = function() {
    for (var a; a = qb(this);) rb(this, a, this.h, this.v);
    this.s = !1
};

function rb(a, b, c, d) {
    if (3 == c && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, wb(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : wb(b, c, d)
    } catch (e) {
        xb.call(null, e)
    }
    Xa(kb, b)
}

function wb(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function vb(a, b) {
    a.m = !0;
    gb(function() {
        a.m && xb.call(null, b)
    })
}
var xb = Za;

function ob(a) {
    oa.call(this, a)
}
ma(ob, oa);
ob.prototype.name = "cancel";

function yb() {
    throw Error("Invalid UTF8");
}

function zb(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Ab = void 0,
    Bb;
const Cb = "undefined" !== typeof TextDecoder;
!y("Android") || Ma();
Ma();
var Db = y("Safari") && !(Ma() || (La() ? 0 : y("Coast")) || (La() ? 0 : y("Opera")) || (La() ? 0 : y("Edge")) || (La() ? Ka("Microsoft Edge") : y("Edg/")) || (La() ? Ka("Opera") : y("OPR")) || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")) && !(y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod"));
var Eb = {},
    Fb = null;

function Gb(a, b) {
    void 0 === b && (b = 0);
    Hb();
    b = Eb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Ib(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Jb(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Jb(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                p = Fb[l];
            if (null != p) return p;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Hb();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Hb() {
    if (!Fb) {
        Fb = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Eb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Fb[f] && (Fb[f] = e)
            }
        }
    }
};
var Kb = "undefined" !== typeof Uint8Array,
    Lb = !Wa && "function" === typeof btoa;

function Mb(a) {
    if (!Lb) return Gb(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const Nb = /[-_.]/g,
    Ob = {
        "-": "+",
        _: "/",
        ".": "="
    };

function Pb(a) {
    return Ob[a] || ""
}

function Qb(a) {
    if (!Lb) return Ib(a);
    Nb.test(a) && (a = a.replace(Nb, Pb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function Rb(a) {
    return Kb && null != a && a instanceof Uint8Array
}
let Sb;
var Tb = {};
let Ub;

function Vb(a) {
    if (a !== Tb) throw Error("illegal external caller");
}

function Wb() {
    return Ub || (Ub = new Xb(null, Tb))
}

function Yb(a) {
    Vb(Tb);
    var b = a.h;
    b = null == b || Rb(b) ? b : "string" === typeof b ? Qb(b) : null;
    return null == b ? b : a.h = b
}
var Xb = class {
    constructor(a, b) {
        Vb(b);
        this.h = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    sizeBytes() {
        const a = Yb(this);
        return a ? a.length : 0
    }
};

function Zb(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function $b() {
    return Error("Failed to read varint, encoding is invalid.")
}

function ac(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function bc(a) {
    if ("string" === typeof a) return {
        buffer: Qb(a),
        M: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        M: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        M: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        M: !1
    };
    if (a.constructor === Xb) return {
        buffer: Yb(a) || Sb || (Sb = new Uint8Array(0)),
        M: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        M: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};

function cc() {
    return "function" === typeof BigInt
}
var dc = !Ga;
const ec = "function" === typeof Uint8Array.prototype.slice;
let fc = 0,
    gc = 0;

function hc(a) {
    const b = 0 > a;
    a = Math.abs(a);
    let c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    if (b) {
        const [d, e] = ic(c, a);
        a = e;
        c = d
    }
    fc = c >>> 0;
    gc = a >>> 0
}

function jc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (2097151 >= b) var c = "" + (4294967296 * b + a);
    else cc() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + kc(c) + kc(a));
    return c
}

function kc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a
}

function lc() {
    var a = fc,
        b = gc;
    if (b & 2147483648)
        if (cc()) a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else {
            const [c, d] = ic(a, b);
            a = "-" + jc(c, d)
        }
    else a = jc(a, b);
    return a
}

function ic(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b]
};

function mc(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw $b();
    nc(a, c);
    return e
}

function nc(a, b) {
    a.h = b;
    if (b > a.i) throw ac(a.i, b);
}

function oc(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw ac(b, a.i - c);
    a.h = d;
    return c
}
var pc = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            da: d = !1
        } = {}) {
            this.da = d;
            a && (a = bc(a), this.j = a.buffer, this.m = a.M, this.l = b || 0, this.i = void 0 !== c ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.da = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            nc(this, this.h + a)
        }
    },
    qc = [];

function rc(a, {
    na: b = !1
} = {}) {
    a.na = b
}

function sc(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = mc(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw Zb(c, a.j);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function tc(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) tc(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        nc(a, b);
                        break a
                    }
                throw $b();
            }
            break;
        case 1:
            a.h.advance(8);
            break;
        case 2:
            2 != a.i ? tc(a) : (b = mc(a.h) >>> 0, a.h.advance(b));
            break;
        case 5:
            a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!sc(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.i) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                tc(a)
            } while (1);
            break;
        default:
            throw Zb(a.i, a.j);
    }
}

function uc(a, b, c) {
    const d = a.h.i,
        e = mc(a.h) >>> 0,
        f = a.h.h + e;
    let g = f - d;
    0 >= g && (a.h.i = f, c(b, a, void 0, void 0, void 0), g = f - a.h.h);
    if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${e} bytes, instead read ${e-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
    a.h.h = f;
    a.h.i = d
}
var vc = class {
        constructor(a, b) {
            if (qc.length) {
                const c = qc.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new pc(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            rc(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
        advance(a) {
            this.h.advance(a)
        }
    },
    wc = [];
class xc {
    constructor(a, b, c) {
        this.ba = a;
        this.h = b;
        this.ta = c
    }
};

function yc(a) {
    return Array.prototype.slice.call(a)
};
var A;
A = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
[...Object.values({
    Ab: 1,
    yb: 2,
    xb: 4,
    Fb: 8,
    Eb: 16,
    Db: 32,
    Ua: 64,
    Kb: 128,
    bb: 256,
    ab: 512,
    zb: 1024,
    Ya: 2048,
    Jb: 4096,
    Za: 8192
})];
var zc = A ? (a, b) => {
    a[A] |= b
} : (a, b) => {
    void 0 !== a.D ? a.D |= b : Object.defineProperties(a, {
        D: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    })
};

function Ac(a) {
    const b = C(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = yc(a)), D(a, b | 1))
}
var Bc = A ? (a, b) => {
    a[A] &= ~b
} : (a, b) => {
    void 0 !== a.D && (a.D &= ~b)
};

function Cc(a, b, c) {
    return c ? a | b : a & ~b
}
var C = A ? a => a[A] | 0 : a => a.D | 0,
    E = A ? a => a[A] : a => a.D,
    D = A ? (a, b) => {
        a[A] = b;
        return a
    } : (a, b) => {
        void 0 !== a.D ? a.D = b : Object.defineProperties(a, {
            D: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    };

function Dc() {
    var a = [];
    zc(a, 1);
    return a
}

function Ec(a, b) {
    D(b, (a | 0) & -14591)
}

function Fc(a, b) {
    D(b, (a | 34) & -14557)
}

function Gc(a) {
    a = a >> 14 & 1023;
    return 0 === a ? 536870912 : a
};
var Hc = {},
    Ic = {};

function Jc(a) {
    return !(!a || "object" !== typeof a || a.h !== Ic)
}

function Kc(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let Lc, Mc = !Ga;

function Nc(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = C(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    D(a, d | 1);
    return !0
}
var Oc;
const Pc = [];
D(Pc, 55);
Oc = Object.freeze(Pc);

function Qc(a) {
    if (a & 2) throw Error();
}
let Rc;

function Sc(a, b) {
    (b = Rc ? b[Rc] : void 0) && (a[Rc] = yc(b))
}
let Tc, Uc;
class Vc {}
class Wc {}
Object.freeze(new Vc);
Object.freeze(new Wc);

function Xc(a) {
    a = Error(a);
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = "warning";
    return a
};

function Yc(a) {
    return a.displayName || a.name || "unknown type name"
}
const Zc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

function $c(a) {
    const b = typeof a;
    return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Zc.test(a)
}

function ad(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
        if (!a) return;
        a = +a
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
}

function bd(a, b) {
    b = !!b;
    if (!$c(a)) throw Xc("int64");
    if ("string" === typeof a)
        if ($c(a), b = Math.trunc(Number(a)), Number.isSafeInteger(b)) a = String(b);
        else {
            if (b = a.indexOf("."), -1 !== b && (a = a.substring(0, b)), !cd(a)) {
                if (16 > a.length) hc(Number(a));
                else if (cc()) a = BigInt(a), fc = Number(a & BigInt(4294967295)) >>> 0, gc = Number(a >> BigInt(32) & BigInt(4294967295));
                else {
                    b = +("-" === a[0]);
                    gc = fc = 0;
                    var c = a.length;
                    for (let d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
                        const f = Number(a.slice(d, e));
                        gc *= 1E6;
                        fc = 1E6 * fc + f;
                        4294967296 <= fc && (gc += Math.trunc(fc /
                            4294967296), gc >>>= 0, fc >>>= 0)
                    }
                    if (b) {
                        const [d, e] = ic(fc, gc);
                        fc = d;
                        gc = e
                    }
                }
                a = lc()
            }
        }
    else if (b) $c(a), a = Math.trunc(a), Number.isSafeInteger(a) ? a = String(a) : (b = String(a), cd(b) ? a = b : (hc(a), a = lc()));
    else if ($c(a), a = Math.trunc(a), !Number.isSafeInteger(a)) {
        hc(a);
        b = fc;
        c = gc;
        if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
        b = 4294967296 * c + (b >>> 0);
        a = a ? -b : b
    }
    return a
}

function cd(a) {
    return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
}

function dd(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a
}

function ed(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${Yc(b)} but got ${a&&Yc(a.constructor)}`);
    return a
}

function fd(a, b, c) {
    if (null != a && "object" === typeof a && a.X === Hc) return a;
    if (Array.isArray(a)) {
        var d = C(a),
            e = d;
        0 === e && (e |= c & 32);
        e |= c & 2;
        e !== d && D(a, e);
        return new b(a)
    }
};
let gd, hd, id;

function jd(a) {
    switch (typeof a) {
        case "boolean":
            return hd || (hd = [0, void 0, !0]);
        case "number":
            return 0 < a ? void 0 : 0 === a ? id || (id = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
    }
}

function kd(a, b, c) {
    null == a && (a = gd);
    gd = void 0;
    if (null == a) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -16760833 | (b & 1023) << 14)
    } else {
        if (!Array.isArray(a)) throw Error();
        d = C(a);
        if (d & 64) return a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error();
        a: {
            c = a;
            const e = c.length;
            if (e) {
                const f = e - 1;
                if (Kc(c[f])) {
                    d |= 256;
                    b = f - (+!!(d & 512) - 1);
                    if (1024 <= b) throw Error();
                    d = d & -16760833 | (b & 1023) << 14;
                    break a
                }
            }
            if (b) {
                b = Math.max(b, e - (+!!(d & 512) - 1));
                if (1024 < b) throw Error();
                d = d & -16760833 | (b & 1023) << 14
            }
        }
    }
    D(a, d);
    return a
};

function ld(a, b) {
    return md(b)
}

function md(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a) {
                if (Array.isArray(a)) return Mc || !Nc(a, void 0, 9999) ? a : void 0;
                if (Rb(a)) return Mb(a);
                if (a instanceof Xb) {
                    const b = a.h;
                    return null == b ? "" : "string" === typeof b ? b : a.h = Mb(b)
                }
            }
    }
    return a
};

function nd(a, b, c) {
    const d = yc(a);
    var e = d.length;
    const f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
        b = d[b] = {};
        for (const g in f) b[g] = c(f[g])
    }
    Sc(d, a);
    return d
}

function od(a, b, c, d, e, f) {
    if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && C(a) & 1 ? void 0 : f && C(a) & 2 ? a : pd(a, b, c, void 0 !== d, e, f);
        else if (Kc(a)) {
            const g = {};
            for (let h in a) g[h] = od(a[h], b, c, d, e, f);
            a = g
        } else a = b(a, d);
        return a
    }
}

function pd(a, b, c, d, e, f) {
    const g = d || c ? C(a) : 0;
    d = d ? !!(g & 32) : void 0;
    const h = yc(a);
    for (let k = 0; k < h.length; k++) h[k] = od(h[k], b, c, d, e, f);
    c && (Sc(h, a), c(g, h));
    return h
}

function qd(a) {
    return a.X === Hc ? a.toJSON() : md(a)
};

function rd(a, b, c = Fc) {
    if (null != a) {
        if (Kb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            var d = C(a);
            if (d & 2) return a;
            b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
            return b ? D(a, (d | 34) & -12293) : pd(a, rd, d & 4 ? Fc : c, !0, !1, !0)
        }
        a.X === Hc && (c = a.o, d = E(c), a = d & 2 ? a : sd(a, c, d, !0));
        return a
    }
}

function sd(a, b, c, d) {
    a = a.constructor;
    gd = b = td(b, c, d);
    b = new a(b);
    gd = void 0;
    return b
}

function td(a, b, c) {
    const d = c || b & 2 ? Fc : Ec,
        e = !!(b & 32);
    a = nd(a, b, f => rd(f, e, d));
    zc(a, 32 | (c ? 2 : 0));
    return a
}

function ud(a) {
    const b = a.o,
        c = E(b);
    return c & 2 ? sd(a, b, c, !1) : a
};

function vd(a, b) {
    a = a.o;
    return wd(a, E(a), b)
}

function wd(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= Gc(b)) {
        if (b & 256) return a[a.length - 1][c]
    } else {
        var e = a.length;
        if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
        b = c + (+!!(b & 512) - 1);
        if (b < e) return a[b]
    }
}

function xd(a, b, c) {
    const d = a.o;
    let e = E(d);
    Qc(e);
    F(d, e, b, c);
    return a
}

function F(a, b, c, d, e) {
    const f = Gc(b);
    if (c >= f || e) {
        let g = b;
        if (b & 256) e = a[a.length - 1];
        else {
            if (null == d) return g;
            e = a[f + (+!!(b & 512) - 1)] = {};
            g |= 256
        }
        e[c] = d;
        c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
        g !== b && D(a, g);
        return g
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b
}

function yd(a) {
    return void 0 !== zd(a, I, 2)
}

function Ad(a, b, c, d) {
    var e = b & 2;
    let f = wd(a, b, c);
    Array.isArray(f) || (f = Oc);
    const g = !(d & 2);
    d = !(d & 1);
    const h = !!(b & 32);
    let k = C(f);
    0 !== k || !h || e || g ? k & 1 || (k |= 1, D(f, k)) : (k |= 33, D(f, k));
    e ? (a = !1, k & 2 || (zc(f, 34), a = !!(4 & k)), (d || a) && Object.freeze(f)) : (e = !!(2 & k) || !!(2048 & k), d && e ? (f = yc(f), d = 1, h && !g && (d |= 32), D(f, d), F(a, b, c, f)) : g && k & 32 && !e && Bc(f, 32));
    return f
}

function Bd(a) {
    return !!(2 & a) && !!(4 & a) || !!(2048 & a)
}

function Cd(a, b, c, d) {
    const e = a.o;
    let f = E(e);
    Qc(f);
    (c = Dd(e, f, c)) && c !== b && null != d && (f = F(e, f, c));
    F(e, f, b, d);
    return a
}

function Ed(a, b, c) {
    a = a.o;
    return Dd(a, E(a), b) === c ? c : -1
}

function Dd(a, b, c) {
    let d = 0;
    for (let e = 0; e < c.length; e++) {
        const f = c[e];
        null != wd(a, b, f) && (0 !== d && (b = F(a, b, d)), d = f)
    }
    return d
}

function Fd(a, b, c, d) {
    let e = E(a);
    Qc(e);
    const f = wd(a, e, c, d);
    let g;
    if (null != f && f.X === Hc) return b = ud(f), b !== f && F(a, e, c, b, d), b.o;
    if (Array.isArray(f)) {
        const h = C(f);
        h & 2 ? g = td(f, h, !1) : g = f;
        g = kd(g, b[0], b[1])
    } else g = kd(void 0, b[0], b[1]);
    g !== f && F(a, e, c, g, d);
    return g
}

function zd(a, b, c) {
    a = a.o;
    let d = E(a);
    const e = wd(a, d, c, !1);
    b = fd(e, b, d);
    b !== e && null != b && F(a, d, c, b, !1);
    return b
}

function Gd(a, b, c) {
    b = zd(a, b, c);
    if (null == b) return b;
    a = a.o;
    let d = E(a);
    if (!(d & 2)) {
        const e = ud(b);
        e !== b && (b = e, F(a, d, c, b, !1))
    }
    return b
}

function Hd(a, b, c, d, e, f) {
    var g = !!(2 & b),
        h = g ? 1 : 2;
    const k = 1 === h;
    h = 2 === h;
    e = !!e;
    f && (f = !g);
    g = wd(a, b, d);
    g = Array.isArray(g) ? g : Oc;
    var l = C(g);
    const p = !!(4 & l);
    if (!p) {
        var m = l;
        0 === m && (m = Id(m, b, e));
        m = Cc(m, 1, !0);
        l = g;
        var q = b;
        const n = !!(2 & m);
        n && (q = Cc(q, 2, !0));
        let t = !n,
            w = !0,
            B = 0,
            H = 0;
        for (; B < l.length; B++) {
            const G = fd(l[B], c, q);
            if (G instanceof c) {
                if (!n) {
                    const Z = !!(C(G.o) & 2);
                    t && (t = !Z);
                    w && (w = Z)
                }
                l[H++] = G
            }
        }
        H < B && (l.length = H);
        m = Cc(m, 4, !0);
        m = Cc(m, 16, w);
        m = Cc(m, 8, t);
        D(l, m);
        n && Object.freeze(l);
        l = m
    }
    c = !!(8 & l) || k && !g.length;
    if (f && !c) {
        Bd(l) &&
            (g = yc(g), l = Id(l, b, e), b = F(a, b, d, g));
        f = g;
        c = l;
        for (l = 0; l < f.length; l++) m = f[l], q = ud(m), m !== q && (f[l] = q);
        c = Cc(c, 8, !0);
        c = Cc(c, 16, !f.length);
        D(f, c);
        l = c
    }
    Bd(l) || (f = l, k ? l = Cc(l, !g.length || 16 & l && (!p || 32 & l) ? 2 : 2048, !0) : e || (l = Cc(l, 32, !1)), l !== f && D(g, l), k && Object.freeze(g));
    h && Bd(l) && (g = yc(g), l = Id(l, b, e), D(g, l), F(a, b, d, g));
    return g
}

function J(a, b, c, d) {
    null != d ? ed(d, b) : d = void 0;
    return xd(a, c, d)
}

function Jd(a, b, c, d, e) {
    null != e ? ed(e, b) : e = void 0;
    Cd(a, c, d, e)
}

function Id(a, b, c) {
    a = Cc(a, 2, !!(2 & b));
    a = Cc(a, 32, !!(32 & b) && c);
    return a = Cc(a, 2048, !1)
}

function Kd(a, b, c, d) {
    a = a.o;
    const e = E(a);
    Qc(e);
    b = Hd(a, e, c, b, !0);
    c = null != d ? ed(d, c) : new c;
    b.push(c);
    C(c.o) & 2 ? Bc(b, 8) : Bc(b, 16)
}

function Ld(a, b) {
    a = vd(a, b);
    return null == a || "string" === typeof a ? a : void 0
}

function Md(a, b) {
    a = Ld(a, b);
    return null != a ? a : ""
}

function Nd(a, b, c) {
    if (null != c) {
        if ("number" !== typeof c) throw Xc("int32");
        if (!Number.isFinite(c)) throw Xc("int32");
        c |= 0
    }
    return xd(a, b, c)
}

function Od(a, b, c) {
    xd(a, b, null == c ? c : bd(c))
}

function K(a, b, c) {
    return xd(a, b, dd(c))
}

function L(a, b, c) {
    if (null != c) {
        if (!Number.isFinite(c)) throw Xc("enum");
        c |= 0
    }
    return xd(a, b, c)
};
var M = class {
    constructor(a, b, c) {
        this.o = kd(a, b, c)
    }
    toJSON() {
        if (Lc) var a = Pd(this, this.o, !1);
        else a = pd(this.o, qd, void 0, void 0, !1, !1), a = Pd(this, a, !0);
        return a
    }
    clone() {
        const a = this.o;
        return sd(this, a, E(a), !1)
    }
    M() {
        return !!(C(this.o) & 2)
    }
};
M.prototype.X = Hc;

function Pd(a, b, c) {
    const d = a.constructor.A;
    var e = E(c ? a.o : b),
        f = Gc(e),
        g = !1;
    if (d && Mc) {
        if (!c) {
            b = yc(b);
            var h;
            if (b.length && Kc(h = b[b.length - 1]))
                for (g = 0; g < d.length; g++)
                    if (d[g] >= f) {
                        Object.assign(b[b.length - 1] = {}, h);
                        break
                    }
            g = !0
        }
        f = b;
        c = !c;
        h = E(a.o);
        a = Gc(h);
        h = +!!(h & 512) - 1;
        var k;
        for (let H = 0; H < d.length; H++) {
            var l = d[H];
            if (l < a) {
                l += h;
                var p = f[l];
                null == p ? f[l] = c ? Oc : Dc() : c && p !== Oc && Ac(p)
            } else {
                if (!k) {
                    var m = void 0;
                    f.length && Kc(m = f[f.length - 1]) ? k = m : f.push(k = {})
                }
                p = k[l];
                null == k[l] ? k[l] = c ? Oc : Dc() : c && p !== Oc && Ac(p)
            }
        }
    }
    k = b.length;
    if (!k) return b;
    let q, n;
    if (Kc(m = b[k - 1])) {
        a: {
            var t = m;f = {};c = !1;
            for (var w in t) {
                a = t[w];
                if (Array.isArray(a)) {
                    h = a;
                    if (Nc(a, d, +w) || !dc && Jc(a) && 0 === a.size) a = null;
                    a != h && (c = !0)
                }
                null != a ? f[w] = a : c = !0
            }
            if (c) {
                for (let H in f) {
                    t = f;
                    break a
                }
                t = null
            }
        }
        t != m && (q = !0);k--
    }
    for (e = +!!(e & 512) - 1; 0 < k; k--) {
        w = k - 1;
        m = b[w];
        if (!(null == m || Nc(m, d, w - e) || !dc && Jc(m) && 0 === m.size)) break;
        n = !0
    }
    if (!q && !n) return b;
    var B;
    g ? B = b : B = Array.prototype.slice.call(b, 0, k);
    b = B;
    g && (b.length = k);
    t && b.push(t);
    return b
};

function Qd(a) {
    return Array.isArray(a) ? a[0] instanceof xc ? a : [Rd, a] : [a, void 0]
}
const Sd = Symbol();

function Td(a) {
    let b = a[Sd];
    if (!b) {
        const c = Ud(a),
            d = Vd(a),
            e = d.m;
        b = e ? (f, g) => e(f, g, d) : (f, g) => {
            for (; sc(g) && 4 != g.i;) {
                var h = g.l,
                    k = d[h];
                if (!k) {
                    var l = d.extensions;
                    l && (l = l[h]) && (k = d[h] = Wd(l))
                }
                if (!k || !k(g, f, h)) {
                    k = g;
                    h = k.j;
                    tc(k);
                    if (k.na) k = void 0;
                    else {
                        l = k.h.h - h;
                        k.h.h = h;
                        b: {
                            k = k.h;h = l;
                            if (0 == h) {
                                k = Wb();
                                break b
                            }
                            const p = oc(k, h);k.da && k.m ? h = k.j.subarray(p, p + h) : (k = k.j, l = p, h = p + h, h = l === h ? Sb || (Sb = new Uint8Array(0)) : ec ? k.slice(l, h) : new Uint8Array(k.subarray(l, h)));k = 0 == h.length ? Wb() : new Xb(h, Tb)
                        }
                    }
                    h = f;
                    k && (Rc || (Rc = Symbol()), (l = h[Rc]) ? l.push(k) : h[Rc] = [k])
                }
            }
            c === Xd || c === Yd || c.l || (f[Uc || (Uc = Symbol())] = c)
        };
        a[Sd] = b
    }
    return b
}

function Wd(a) {
    a = Qd(a);
    const b = a[0].ba;
    if (a = a[1]) {
        const c = Td(a),
            d = Vd(a).P;
        return (e, f, g) => b(e, f, g, d, c)
    }
    return b
}
let Xd;

function Zd() {}

function $d(a, b) {
    ae(this, a);
    ae(this, b)
}

function be(a, b, c, d) {
    a in c && !(a in d) && (c = Qd(c[a]), ce(d, a, de(c[0], c[1])), d[a] ? ee(a, d, b) : d[a] = null)
}

function ae(a, b) {
    const c = a.extensions,
        d = a.P[1] ? 0 : -1,
        e = b.length;
    for (let g = 0; g < e; g++) {
        var f = b[g];
        if (f && "object" === typeof f)
            if (g === e - 1 && Kc(f))
                for (const h in f) {
                    const k = +h;
                    if (Number.isNaN(k)) continue;
                    const l = f[h];
                    l && "object" === typeof l && be(k, l, c, a)
                } else be(g - d, f, c, a)
    }
}
let Yd;
const fe = Symbol();

function ce(a, b, c) {
    const d = c[1];
    let e;
    if (d) {
        const f = d[fe];
        e = f ? f.P : jd(d[0]);
        a[b] = null != f ? f : d
    }
    e && e === hd ? (a = a.h || (a.h = []), Array.isArray(a) ? a.push(b) : a.add(b)) : c[0] && (a = a.i || (a.i = []), Array.isArray(a) ? a.push(b) : a.add(b))
}

function de(a, b) {
    return [a.h, !b || 0 < b[0] ? void 0 : b]
}

function Ud(a) {
    var b = a[fe];
    if (b) return b;
    b = ge(a, a[fe] = {}, de, de, ce);
    if (b.extensions) b.j = $d;
    else if (b.j = Zd, !b.i && !b.h) {
        let c = !0;
        for (let d in b) {
            isNaN(d) || (c = !1);
            break
        }
        c ? (b = jd(a[0]) === hd, b = a[fe] = b ? Yd || (Yd = {
            j: Zd,
            P: jd(!0)
        }) : Xd || (Xd = {
            j: Zd
        })) : b.l = !0
    }
    return b
}

function ee(a, b, c) {
    var d;
    (d = b[a]) ? Array.isArray(d) && (b[a] = d = Ud(d)): d = void 0;
    if (d) {
        var e = b.i;
        (e = (e ? Array.isArray(e) ? b.i = new Set(e) : e : Tc || (Tc = new Set)).has(a)) || (e = b.h, e = (e ? Array.isArray(e) ? b.h = new Set(e) : e : Tc || (Tc = new Set)).has(a));
        if (e) {
            if (Array.isArray(c))
                for (a = 0; a < c.length; a++) {
                    b = c[a];
                    if (b instanceof M) b = b.o;
                    else if (!Array.isArray(b)) throw Error();
                    he(b, d)
                }
        } else {
            if (c instanceof M) c = c.o;
            else if (!Array.isArray(c)) throw Error();
            he(c, d)
        }
    }
}

function he(a, b) {
    if (b !== Xd && b !== Yd) {
        b.l || (a[Uc || (Uc = Symbol())] = b);
        var c = a.length,
            d = b.P[1] ? 0 : -1;
        for (let f = 0; f < a.length; f++) {
            var e = a[f];
            if (e && "object" === typeof e)
                if (f === c - 1 && Kc(e))
                    for (const g in e) {
                        const h = +g;
                        if (Number.isNaN(h)) continue;
                        const k = e[g];
                        k && "object" === typeof k && ee(h, b, k)
                    } else ee(f - d, b, e)
        }
    }
}

function ie(a, b, c) {
    a[b] = c
}

function ge(a, b, c, d, e = ie) {
    b.P = jd(a[0]);
    let f = 0;
    var g = a[++f];
    g && g.constructor === Object && (b.extensions = g, g = a[++f], "function" === typeof g && (b.m = g, b.s = a[++f], g = a[++f]));
    const h = {};
    for (; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
        for (var k = 0; k < g.length; k++) h[g[k]] = g;
        g = a[++f]
    }
    for (k = 1; void 0 !== g;) {
        "number" === typeof g && (k += g, g = a[++f]);
        let m;
        var l = void 0;
        g instanceof xc ? m = g : (m = je, f--);
        if (m.ta) {
            g = a[++f];
            l = a;
            var p = f;
            "function" == typeof g && (g = g(), l[p] = g);
            l = g
        }
        g = a[++f];
        p = k + 1;
        "number" === typeof g && 0 > g && (p -=
            g, g = a[++f]);
        for (; k < p; k++) {
            const q = h[k];
            e(b, k, l ? d(m, l, q) : c(m, q))
        }
    }
    return b
}
const ke = Symbol(),
    le = Symbol();

function me(a, b) {
    const c = a.ba;
    return b ? (d, e, f) => c(d, e, f, b) : c
}

function ne(a, b, c) {
    const d = a.ba;
    let e, f;
    return (g, h, k) => d(g, h, k, f || (f = Vd(b).P), e || (e = Td(b)), c)
}

function Vd(a) {
    let b = a[le];
    if (b) return b;
    Ud(a);
    b = ge(a, a[le] = {}, me, ne);
    le in a && ke in a && (a.length = 0);
    return b
}
var oe;
oe = new xc(function(a, b, c) {
    if (2 !== a.i) return !1;
    var d = mc(a.h) >>> 0;
    a = a.h;
    var e = oc(a, d);
    a = a.j;
    if (Cb) {
        var f = a,
            g;
        (g = Bb) || (g = Bb = new TextDecoder("utf-8", {
            fatal: !0
        }));
        d = e + d;
        f = 0 === e && d === f.length ? f : f.subarray(e, d);
        try {
            var h = g.decode(f)
        } catch (l) {
            if (void 0 === Ab) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (p) {}
                try {
                    g.decode(new Uint8Array([97])), Ab = !0
                } catch (p) {
                    Ab = !1
                }
            }!Ab && (Bb = void 0);
            throw l;
        }
    } else {
        h = e;
        d = h + d;
        e = [];
        let l = null;
        let p;
        for (; h < d;) {
            var k = a[h++];
            128 > k ? e.push(k) : 224 > k ? h >= d ? yb() : (p = a[h++], 194 > k || 128 !== (p & 192) ?
                (h--, yb()) : e.push((k & 31) << 6 | p & 63)) : 240 > k ? h >= d - 1 ? yb() : (p = a[h++], 128 !== (p & 192) || 224 === k && 160 > p || 237 === k && 160 <= p || 128 !== ((g = a[h++]) & 192) ? (h--, yb()) : e.push((k & 15) << 12 | (p & 63) << 6 | g & 63)) : 244 >= k ? h >= d - 2 ? yb() : (p = a[h++], 128 !== (p & 192) || 0 !== (k << 28) + (p - 144) >> 30 || 128 !== ((g = a[h++]) & 192) || 128 !== ((f = a[h++]) & 192) ? (h--, yb()) : (k = (k & 7) << 18 | (p & 63) << 12 | (g & 63) << 6 | f & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : yb();
            8192 <= e.length && (l = zb(l, e), e.length = 0)
        }
        h = zb(l, e)
    }
    F(b, E(b), c, h);
    return !0
}, !1, !1);
var Rd = new xc(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        uc(a, Fd(b, d, c, !0), e);
        return !0
    }, !1, !0),
    je = new xc(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        uc(a, Fd(b, d, c), e);
        return !0
    }, !1, !0),
    pe;
pe = new xc(function(a, b, c, d, e) {
    if (2 !== a.i) return !1;
    d = kd(void 0, d[0], d[1]);
    let f = E(b);
    Qc(f);
    let g = Ad(b, f, c, 3);
    f = E(b);
    C(g) & 4 && (g = yc(g), D(g, (C(g) | 1) & -2079), F(b, f, c, g));
    g.push(d);
    uc(a, d, e);
    return !0
}, !0, !0);
Ba("csi.gstatic.com");
Ba("googleads.g.doubleclick.net");
Ba("partner.googleadservices.com");
Ba("pubads.g.doubleclick.net");
Ba("securepubads.g.doubleclick.net");
Ba("tpc.googlesyndication.com");

function qe(a, b = `unexpected value ${a}!`) {
    throw Error(b);
};

function re(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.startsWith("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !==
        c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};

function se() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        p = l = 0
    }

    function b(m) {
        for (var q = g, n = 0; 64 > n; n += 4) q[n / 4] = m[n] << 24 | m[n + 1] << 16 | m[n + 2] << 8 | m[n + 3];
        for (n = 16; 80 > n; n++) m = q[n - 3] ^ q[n - 8] ^ q[n - 14] ^ q[n - 16], q[n] = (m << 1 | m >>> 31) & 4294967295;
        m = e[0];
        var t = e[1],
            w = e[2],
            B = e[3],
            H = e[4];
        for (n = 0; 80 > n; n++) {
            if (40 > n)
                if (20 > n) {
                    var G = B ^ t & (w ^ B);
                    var Z = 1518500249
                } else G = t ^ w ^ B, Z = 1859775393;
            else 60 > n ? (G = t & w | B & (t | w), Z = 2400959708) : (G = t ^ w ^ B, Z = 3395469782);
            G = ((m << 5 | m >>> 27) & 4294967295) + G + H + Z + q[n] & 4294967295;
            H = B;
            B = w;
            w = (t << 30 | t >>> 2) & 4294967295;
            t = m;
            m = G
        }
        e[0] = e[0] + m & 4294967295;
        e[1] = e[1] + t & 4294967295;
        e[2] =
            e[2] + w & 4294967295;
        e[3] = e[3] + B & 4294967295;
        e[4] = e[4] + H & 4294967295
    }

    function c(m, q) {
        if ("string" === typeof m) {
            m = unescape(encodeURIComponent(m));
            for (var n = [], t = 0, w = m.length; t < w; ++t) n.push(m.charCodeAt(t));
            m = n
        }
        q || (q = m.length);
        n = 0;
        if (0 == l)
            for (; n + 64 < q;) b(m.slice(n, n + 64)), n += 64, p += 64;
        for (; n < q;)
            if (f[l++] = m[n++], p++, 64 == l)
                for (l = 0, b(f); n + 64 < q;) b(m.slice(n, n + 64)), n += 64, p += 64
    }

    function d() {
        var m = [],
            q = 8 * p;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var n = 63; 56 <= n; n--) f[n] = q & 255, q >>>= 8;
        b(f);
        for (n = q = 0; 5 > n; n++)
            for (var t = 24; 0 <= t; t -= 8) m[q++] = e[n] >> t & 255;
        return m
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, p;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Da: function() {
            for (var m = d(), q = "", n = 0; n < m.length; n++) q += "0123456789ABCDEF".charAt(Math.floor(m[n] / 16)) + "0123456789ABCDEF".charAt(m[n] % 16);
            return q
        }
    }
};

function te(a, b, c) {
    var d = String(u.location.href);
    return d && a && b ? [b, ue(re(d), a, c || null)].join(" ") : null
}

function ue(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], qa(d, function(h) {
        e.push(h)
    }), ve(e.join(" "));
    var f = [],
        g = [];
    qa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    qa(d, function(h) {
        e.push(h)
    });
    a = ve(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function ve(a) {
    var b = se();
    b.update(a);
    return b.Da().toLowerCase()
};
const we = {};

function xe() {
    this.h = document || {
        cookie: ""
    }
}
xe.prototype.isEnabled = function() {
    if (!u.navigator.cookieEnabled) return !1;
    if (this.h.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        qa: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
xe.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.ec, g = c.fc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.qa);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
xe.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = Ea(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
xe.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        qa: 0,
        path: b,
        domain: c
    });
    return d
};
xe.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = Ea(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function ye() {
    return !!we.FPA_SAMESITE_PHASE2_MOD || !1
}

function ze(a, b, c, d) {
    (a = u[a]) || "undefined" === typeof document || (a = (new xe).get(b));
    return a ? te(a, c, d) : null
};
const Ae = self;
class Be {
    constructor() {
        this.promise = new Promise(a => {
            this.resolve = a
        })
    }
};

function N(a) {
    Ra.call(this);
    this.K = 1;
    this.s = [];
    this.v = 0;
    this.h = [];
    this.j = {};
    this.ca = !!a
}
ma(N, Ra);
N.prototype.N = function(a, b, c) {
    var d = this.j[a];
    d || (d = this.j[a] = []);
    var e = this.K;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.K = e + 3;
    d.push(e);
    return e
};
N.prototype.F = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.j[b];
        0 != this.v ? (this.s.push(a), this.h[a + 1] = () => {}) : (c && sa(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
N.prototype.B = function(a, b) {
    var c = this.j[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.ca)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Ce(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.v++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.v--, 0 < this.s.length && 0 == this.v)
                        for (; c = this.s.pop();) this.F(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Ce(a, b, c) {
    gb(function() {
        a.apply(b, c)
    })
}
N.prototype.clear = function(a) {
    if (a) {
        var b = this.j[a];
        b && (b.forEach(this.F, this), delete this.j[a])
    } else this.h.length = 0, this.j = {}
};
N.prototype.m = function() {
    N.Oa.m.call(this);
    this.clear();
    this.s.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let O = {};
var De = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
O.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
O.jc = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var Ee = {
        Aa: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ea: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    Fe = {
        Aa: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ea: function(a) {
            return [].concat.apply([], a)
        }
    };
O.Na = function() {
    De ? (O.xa = Uint8Array, O.va = Uint16Array, O.wa = Int32Array, O.assign(O, Ee)) : (O.xa = Array, O.va = Array, O.wa = Array, O.assign(O, Fe))
};
O.Na();
try {
    new Uint8Array(1)
} catch (a) {};

function Ge(a) {
    for (var b = a.length; 0 <= --b;) a[b] = 0
}
Ge(Array(576));
Ge(Array(60));
Ge(Array(512));
Ge(Array(256));
Ge(Array(29));
Ge(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var He = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Ie = class {
    constructor(a) {
        this.name = a
    }
};
var Je = new Ie("rawColdConfigGroup");
var Ke = new Ie("rawHotConfigGroup");

function Le(a, b) {
    return Nd(a, 1, b)
}
var Me = class extends M {
    constructor(a) {
        super(a)
    }
};
var Ne = class extends M {
    constructor(a) {
        super(a)
    }
};
Ne.A = [1];
var Oe = class extends M {
    constructor(a) {
        super(a)
    }
};
var Pe = class extends M {
    constructor(a) {
        super(a)
    }
};
var Qe = class extends M {
    constructor(a) {
        super(a)
    }
};
Qe.A = [2];
var Re = class extends M {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = vd(this, 36);
        a = null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
        return null != a ? a : 0
    }
    setHomeGroupInfo(a) {
        return J(this, Qe, 81, a)
    }
    clearLocationPlayabilityToken() {
        return xd(this, 89)
    }
};
Re.A = [9, 66, 32, 86, 100, 101];
var Te = class extends M {
        constructor(a) {
            super(a)
        }
        getKey() {
            return Md(this, 1)
        }
        L() {
            return Md(this, Ed(this, Se, 2))
        }
    },
    Se = [2, 3, 4, 5, 6];
var Ue = class extends M {
    constructor(a) {
        super(a)
    }
};
Ue.A = [15, 26, 28];
var Ve = class extends M {
    constructor(a) {
        super(a)
    }
};
Ve.A = [5];
var We = class extends M {
    constructor(a) {
        super(a)
    }
};
var Xe = class extends M {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return L(this, 5, a)
    }
};
Xe.A = [12];
var Ye = class extends M {
    constructor(a) {
        super(a)
    }
    j(a) {
        return J(this, Re, 1, a)
    }
};
Ye.A = [12];
var Ze = class extends M {
    constructor(a) {
        super(a)
    }
    getKey() {
        return Md(this, 1)
    }
    L() {
        return Md(this, 2)
    }
};
var $e = class extends M {
    constructor(a) {
        super(a)
    }
};
$e.A = [4, 5];
var af = class extends M {
    constructor(a) {
        super(a)
    }
};
var bf = class extends M {
        constructor(a) {
            super(a)
        }
    },
    cf = [2, 3, 4, 5];
var df = class extends M {
    constructor(a) {
        super(a)
    }
};
var ef = class extends M {
    constructor(a) {
        super(a)
    }
};
var ff = class extends M {
    constructor(a) {
        super(a)
    }
};
var gf = class extends M {
    constructor(a) {
        super(a)
    }
};
gf.A = [10, 17];
var hf = class extends M {
    constructor(a) {
        super(a)
    }
};
var I = class extends M {
    constructor(a) {
        super(a)
    }
    setTrackingParams(a) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Xb(a, Tb) : Wb();
            else if (a.constructor !== Xb)
            if (Rb(a)) a = a.length ? new Xb(new Uint8Array(a), Tb) : Wb();
            else throw Error();
        return xd(this, 1, a)
    }
};
var jf = class extends M {
    constructor(a) {
        super(a)
    }
};
var kf = class extends M {
    constructor(a) {
        super(a)
    }
};
var lf = class extends M {
    constructor(a) {
        super(a)
    }
    getVideoData() {
        return Gd(this, kf, 15)
    }
};
lf.A = [4];

function mf(a, b) {
    J(a, I, 1, b)
}
var nf = class extends M {
    constructor(a) {
        super(a)
    }
};

function of (a, b) {
    return J(a, I, 1, b)
}
var pf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 2, a)
    }
};

function qf(a, b) {
    return J(a, I, 2, b)
}
var rf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
};
rf.A = [3];
var sf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
    hasVe() {
        return yd(this)
    }
};
var tf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
    hasVe() {
        return yd(this)
    }
};
var uf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
    hasVe() {
        return yd(this)
    }
};
var vf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
    hasVe() {
        return yd(this)
    }
};
var wf = class extends M {
    constructor(a) {
        super(a)
    }
};
var xf = class extends M {
    constructor(a) {
        super(a)
    }
};
var P = class extends M {
        constructor(a) {
            super(a, 497)
        }
    },
    yf = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331,
        332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486, 491, 495, 496
    ];
var zf = {
    wb: 0,
    cb: 1,
    jb: 2,
    kb: 4,
    qb: 8,
    lb: 16,
    mb: 32,
    vb: 64,
    ub: 128,
    fb: 256,
    hb: 512,
    ob: 1024,
    gb: 2048,
    ib: 4096,
    eb: 8192,
    nb: 16384,
    rb: 32768,
    pb: 65536,
    sb: 131072,
    tb: 262144
};
var Af = class extends M {
    constructor(a) {
        super(a)
    }
};
var Cf = class extends M {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Cd(this, 1, Bf, dd(a))
        }
        getPlaylistId() {
            return Ld(this, Ed(this, Bf, 2))
        }
    },
    Bf = [1, 2];
var Df = class extends M {
    constructor() {
        super()
    }
};
Df.A = [3];
var Ef = new Ie("recordNotificationInteractionsEndpoint");
var Ff = ["notification/convert_endpoint_to_url"],
    Gf = ["notification/record_interactions"],
    Hf = ["notification_registration/set_registration"];
var If = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Jf = ["notifications_register", "notifications_check_registration"];
var Kf = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Lf = null;

function Q(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Mf().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Nf() {
    return Q("IndexedDBCheck", "testing IndexedDB").then(() => Of("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Of(a) {
    const b = new Kf("Error accessing DB");
    return Mf().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Mf() {
    return Lf ? Promise.resolve(Lf) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Lf = d, a(Lf);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Mf()
        };
        c.onupgradeneeded = Pf
    })
}

function Pf(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Qf = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function Rf(a) {
    if (1 === a.length) return a[0];
    var b = Qf.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Qf).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Sf(a) {
    return `/youtubei/v1/${Rf(a)}`
};
var Tf = class extends M {
    constructor(a) {
        super(a)
    }
};
var Uf = class extends M {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};
const Vf = u.window;
let Wf, Xf;
const Yf = (null == Vf ? void 0 : null == (Wf = Vf.yt) ? void 0 : Wf.config_) || (null == Vf ? void 0 : null == (Xf = Vf.ytcfg) ? void 0 : Xf.data_) || {};
x("yt.config_", Yf);

function R(...a) {
    a = arguments;
    1 < a.length ? Yf[a[0]] = a[1] : 1 === a.length && Object.assign(Yf, a[0])
}

function S(a, b) {
    return a in Yf ? Yf[a] : b
}

function Zf() {
    return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function $f() {
    const a = Yf.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const ag = [];

function bg(a) {
    ag.forEach(b => b(a))
}

function cg(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            dg(b)
        }
    } : a
}

function dg(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b));
    bg(a)
}

function eg(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b))
};
const fg = /^[\w.]*$/,
    gg = {
        q: !0,
        search_query: !0
    };

function hg(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 === h.length && h[0] || 2 === h.length) try {
            const k = ig(h[0] || ""),
                l = ig(h[1] || "");
            if (k in c) {
                const p = c[k];
                Array.isArray(p) ? ta(p, l) : c[k] = [p, l]
            } else c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(hg);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: jg === l ? "unchanged" : l
            }];
            gg.hasOwnProperty(e) || eg(d)
        }
    }
    return c
}
const jg = String(hg);

function kg(a) {
    "?" === a.charAt(0) && (a = a.substring(1));
    return hg(a, "&")
}

function lg(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = kg(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Qa(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function mg(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Na)[1] || null,
        d = Oa(a.match(Na)[3] || null);
    c && d ? (a = a.match(Na), b = b.match(Na), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Oa(b.match(Na)[3] || null) === d && (Number(b.match(Na)[4] || null) || null) === (Number(a.match(Na)[4] || null) || null) : !0;
    return a
}

function ig(a) {
    return a && a.match(fg) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function T(a) {
    a = ng(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function og(a, b) {
    a = ng(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function pg() {
    return S("EXPERIMENTS_TOKEN", "")
}

function ng(a) {
    return S("EXPERIMENT_FLAGS", {})[a]
}

function qg() {
    const a = [],
        b = S("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = S("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};

function rg(a, b) {
    "function" === typeof a && (a = cg(a));
    return window.setTimeout(a, b)
};
var sg = "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    tg = [...sg, "client_dev_set_cookie"];
[...sg];
let ug = !1;

function vg(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = wg(a, b);
    const d = xg(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || u;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = p => {
                    p = p || {};
                    k ? b.onSuccess && b.onSuccess.call(e, p, h) : b.onError && b.onError.call(e, p, h);
                    b.onFinish && b.onFinish.call(e, p, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = rg(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || u))
    }, a))
}

function wg(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = S("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = lg(a, b || {}, !0);
    return a
}

function xg(a, b) {
    const c = S("XSRF_FIELD_NAME"),
        d = S("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = S("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Oa(a.match(Na)[3] || null) && !b.withCredentials && Oa(a.match(Na)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (T("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e &&
        (e = kg(e), xa(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Qa(e));
    f = e || f && !ua(f);
    !ug && f && "POST" != b.method && (ug = !0, dg(Error("AJAX request with postData should use POST")));
    return e
};
const yg = [{
    ga: a => `Cannot read property '${a.key}'`,
    Y: {
        Error: [{
            u: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            u: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            u: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    ga: a => `Cannot call '${a.key}'`,
    Y: {
        TypeError: [{
            u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            u: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            u: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            u: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    ga: a => `${a.key} is not defined`,
    Y: {
        ReferenceError: [{
            u: /(.*) is not defined/,
            groups: ["key"]
        }, {
            u: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var Ag = {
    H: [],
    G: [{
        callback: zg,
        weight: 500
    }]
};

function zg(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function Bg() {
    if (!Cg) {
        var a = Cg = new Dg;
        a.H.length = 0;
        a.G.length = 0;
        Eg(a, Ag)
    }
    return Cg
}

function Eg(a, b) {
    b.H && a.H.push.apply(a.H, b.H);
    b.G && a.G.push.apply(a.G, b.G)
}
var Dg = class {
        constructor() {
            this.G = [];
            this.H = []
        }
    },
    Cg;
const Fg = new N;

function Gg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Hg(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Hg(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = Hg(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Hg(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function Ig(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += Jg(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = Gg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? Jg(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += Jg(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = Kg(a), d += c[b].length;
    else c[b] = Kg(a), d += c[b].length;
    return d
}

function Jg(a, b, c, d) {
    c += `.${a}`;
    a = Kg(b);
    d[c] = a;
    return c.length + a.length
}

function Kg(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function Lg() {
    Mg.h || (Mg.h = new Mg);
    return Mg.h
}

function Ng(a, b) {
    a = {};
    var c = [],
        d = re(String(u.location.href));
    var e = [];
    var f = u.__SAPISID || u.__APISID || u.__3PSAPISID || u.__OVERRIDE_SID;
    ye() && (f = f || u.__1PSAPISID);
    if (f) f = !0;
    else {
        if ("undefined" !== typeof document) {
            var g = new xe;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
            ye() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (g = (f = d = 0 == d.indexOf("https:") || 0 == d.indexOf("chrome-extension:") || 0 == d.indexOf("moz-extension:")) ? u.__SAPISID : u.__APISID, g || "undefined" ===
        typeof document || (g = new xe, g = g.get(f ? "SAPISID" : "APISID") || g.get("__Secure-3PAPISID")), (f = g ? te(g, f ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && ye() && ((d = ze("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = ze("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = 0 == e.length ? null : e.join(" ")) a.Authorization = e, e = b = null == b ? void 0 : b.sessionIndex, void 0 === e && (e = Number(S("SESSION_INDEX", 0)), e = isNaN(e) ? 0 : e), T("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
        e.toString()), "INNERTUBE_HOST_OVERRIDE" in Yf || (a["X-Origin"] = window.location.origin), void 0 === b && "DELEGATED_SESSION_ID" in Yf && (a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID"));
    return a
}
var Mg = class {
    constructor() {
        this.Pa = !0
    }
};
var Og = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function Pg(a) {
    switch (a) {
        case "DESKTOP":
            return 1;
        case "UNKNOWN_PLATFORM":
            return 0;
        case "TV":
            return 2;
        case "GAME_CONSOLE":
            return 3;
        case "MOBILE":
            return 4;
        case "TABLET":
            return 5
    }
};
x("ytglobal.prefsUserPrefsPrefs_", v("ytglobal.prefsUserPrefsPrefs_") || {});

function Qg() {
    if (void 0 !== S("DATASYNC_ID")) return S("DATASYNC_ID");
    throw new Kf("Datasync ID not set", "unknown");
};

function Rg(a, b) {
    return Sg(a, 0, b)
}

function Tg(a) {
    const b = v("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a()
}
var Ug = class {
    h(a) {
        Sg(a, 1)
    }
};

function Vg() {
    Wg.h || (Wg.h = new Wg);
    return Wg.h
}

function Sg(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = v("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : rg(a, c || 0)
}
var Wg = class extends Ug {
        V(a) {
            if (void 0 === a || !Number.isNaN(Number(a))) {
                var b = v("yt.scheduler.instance.cancelJob");
                b ? b(a) : window.clearTimeout(a)
            }
        }
        start() {
            const a = v("yt.scheduler.instance.start");
            a && a()
        }
    },
    Xg = Vg();
const Yg = [];
let Zg, $g = !1;

function ah(a) {
    $g || (Zg ? Zg.handleError(a) : (Yg.push({
        type: "ERROR",
        payload: a
    }), 10 < Yg.length && Yg.shift()))
}

function bh(a, b) {
    $g || (Zg ? Zg.W(a, b) : (Yg.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < Yg.length && Yg.shift()))
};

function ch(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function dh(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const eh = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    fh = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    gh = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var U = class extends Kf {
        constructor(a, b = {}, c = eh[a], d = fh[a], e = gh[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, U.prototype)
        }
    },
    hh = class extends U {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, eh.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, hh.prototype)
        }
    },
    ih = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, ih.prototype)
        }
    };
const jh = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function kh(a, b, c, d) {
    b = dh(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof U) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", a);
    if (Db && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof ih) return new U("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && jh.some(f => e.message.includes(f))) return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Wb: e.name
    })];
    e.level = "WARNING";
    return e
}

function lh(a, b, c) {
    return new U("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function mh(a) {
    if (!a) throw Error();
    throw a;
}

function nh(a) {
    return a
}
var oh = class {
    constructor(a) {
        this.h = a
    }
};

function ph(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof qh ? rh(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function sh(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof qh ? rh(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function rh(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof qh ? rh(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var qh = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new qh(new oh((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) qh.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new qh(new oh((b, c) => {
            a instanceof qh ? a.then(b, c) : b(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : nh,
            d = null != b ? b : mh;
        return new qh(new oh((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                ph(this, this, c, e, f)
            }), this.i.push(() => {
                sh(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? ph(this, this, c, e, f) : "REJECTED" === this.state.status && sh(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function th(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function uh(a) {
    return new Promise((b, c) => {
        th(a, b, c)
    })
}

function V(a) {
    return new qh(new oh((b, c) => {
        th(a, b, c)
    }))
};

function vh(a, b) {
    return new qh(new oh((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};
const wh = window;
var W = wh.ytcsi && wh.ytcsi.now ? wh.ytcsi.now : wh.performance && wh.performance.timing && wh.performance.now && wh.performance.timing.navigationStart ? () => wh.performance.timing.navigationStart + wh.performance.now() : () => (new Date).getTime();

function xh(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            C: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.C ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const p = Math.round(W());
            try {
                var k = a.h.transaction(b, e.mode),
                    l = d;
                const m = new yh(k),
                    q = yield zh(m, l), n = Math.round(W());
                Ah(a, p, n, g, void 0, b.join(), e);
                return q
            } catch (m) {
                l = Math.round(W());
                const q = kh(m, a.h.name, b.join(), a.h.version);
                if (q instanceof U && !q.h || g >= f) Ah(a, p, l, g, q, b.join(), e), h = q
            }
        }
        return Promise.reject(h)
    })
}

function Bh(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Ch(a)
}

function Dh(a, b, c, d) {
    return xh(a, [b], {
        mode: "readwrite",
        C: !0
    }, e => {
        e = e.objectStore(b);
        return V(e.h.put(c, d))
    })
}

function Ah(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof U && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && bh("QUOTA_EXCEEDED", {
        dbName: dh(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof U && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), bh("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Eh(a, !1, d, f, b, g.tag), ah(e)) : Eh(a, !0, d, f, b, g.tag)
}

function Eh(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    bh("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Fh = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(W());
        this.i = !1
    }
    add(a, b, c) {
        return xh(this, [a], {
            mode: "readwrite",
            C: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return xh(this, [a], {
            mode: "readwrite",
            C: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return xh(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return xh(this, [a], {
            mode: "readwrite",
            C: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return xh(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return xh(this, [a], {
            mode: "readonly",
            C: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Gh(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Hh(a).then(d => vh(d, c))
}

function Ih(a, b) {
    return Gh(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}

function Jh(a, b, c) {
    const d = [];
    return Gh(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.L()), e.continue()
    }).then(() => d)
}
var Ch = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return V(this.h.clear()).then(() => {})
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Ih(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? V(this.h.getAll(a, b)) : Jh(this, a, b)
    }
    index(a) {
        try {
            return new Kh(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new ih(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function zh(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var yh = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = U;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new U("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new Ch(a), this.j.set(a, b));
        return b
    }
};

function Lh(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Hh(a).then(f => vh(f, c))
}

function Mh(a, b, c) {
    const d = [];
    return Lh(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.L()), e.continue()
    }).then(() => d)
}
var Kh = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return Lh(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? V(this.h.getAll(a, b)) : Mh(this, a, b)
    }
    getKey(a) {
        return V(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Hh(a) {
    return V(a).then(b => b ? new Nh(a, b) : null)
}
var Nh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Hh(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Hh(this.request)
    }
    delete() {
        return V(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    L() {
        return this.cursor.value
    }
    update(a) {
        return V(this.cursor.update(a))
    }
};

function Oh(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.Ba,
            h = c.blocking,
            k = c.Qa,
            l = c.upgrade,
            p = c.closed;
        let m;
        const q = () => {
            m || (m = new Fh(f.result, {
                closed: p
            }));
            return m
        };
        f.addEventListener("upgradeneeded", n => {
            try {
                if (null === n.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                n.dataLoss && "none" !== n.dataLoss && bh("IDB_DATA_CORRUPTED", {
                    reason: n.dataLossMessage || "unknown reason",
                    dbName: dh(a)
                });
                const t = q(),
                    w = new yh(f.transaction);
                l && l(t, B => n.oldVersion < B && n.newVersion >= B, w);
                w.done.catch(B => {
                    e(B)
                })
            } catch (t) {
                e(t)
            }
        });
        f.addEventListener("success", () => {
            const n = f.result;
            h && n.addEventListener("versionchange", () => {
                h(q())
            });
            n.addEventListener("close", () => {
                bh("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: dh(a),
                    dbVersion: n.version
                });
                k && k()
            });
            d(q())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Ph(a, b, c = {}) {
    return Oh(a, b, c)
}

function Qh(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.Ba;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield uh(c)
        } catch (c) {
            throw kh(c, a, "", -1);
        }
    })
};

function Rh(a, b) {
    return new U("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function Sh(a, b) {
    if (!b) throw lh("openWithToken", dh(a.name));
    return a.open()
}
var Th = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return Ph(a, b, c)
    }
    delete(a = {}) {
        return Qh(this.name, a)
    }
    open() {
        if (!this.j) throw Rh(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Qa: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.i(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const p of Object.keys(h.R)) {
                            const {
                                O: m,
                                ac: q = Number.MAX_VALUE
                            } = h.R[p];
                            !(f.h.version >= m) || f.h.version >= q || f.h.objectStoreNames.contains(p) || l.push(p)
                        }
                        if (0 !== l.length) {
                            const p = Object.keys(e.options.R),
                                m = k.objectStoreNames();
                            if (e.m < og("ytidb_reopen_db_retries", 0)) return e.m++, k.close(), ah(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: p,
                                foundObjectStores: m
                            })), d();
                            if (e.l < og("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), ah(new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: p,
                                foundObjectStores: m
                            })), d();
                            throw new hh(m, p);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k && "An attempt was made to open a database using a lower version than the existing version." ===
                            k.message) {
                            g = yield e.i(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.h.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.j = !1, Rh(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !T("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw kh(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const Uh = new Th("YtIdbMeta", {
    R: {
        databases: {
            O: 1
        }
    },
    upgrade(a, b) {
        b(1) && Bh(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function Vh(a, b) {
    return r(function*() {
        return xh(yield Sh(Uh, b), ["databases"], {
            C: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return V(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function Wh(a, b) {
    return r(function*() {
        if (a) return (yield Sh(Uh, b)).delete("databases", a)
    })
};
let Xh;
const Yh = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function Zh() {
    return r(function*() {
        return !0
    })
}

function $h() {
    if (void 0 !== Xh) return Xh;
    $g = !0;
    return Xh = Zh().then(a => {
        $g = !1;
        return a
    })
}

function ai() {
    return v("ytglobal.idbToken_") || void 0
}

function bi() {
    const a = ai();
    return a ? Promise.resolve(a) : $h().then(b => {
        (b = b ? Yh : void 0) && x("ytglobal.idbToken_", b);
        return b
    })
};
new Be;

function ci(a) {
    try {
        Qg();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new U("AUTH_INVALID", {
        dbName: a
    }), ah(a), a;
    b = Qg();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function di(a, b, c, d) {
    return r(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield bi();
        if (!e) throw e = lh("openDbImpl", a, b), T("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), ah(e), e;
        ch(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : ci(a);
        try {
            return yield Vh(f, e), yield Ph(f.actualName, b, d)
        } catch (g) {
            try {
                yield Wh(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function ei(a, b, c = {}) {
    return di(a, b, !1, c)
}

function fi(a, b, c = {}) {
    return di(a, b, !0, c)
}

function gi(a, b = {}) {
    return r(function*() {
        const c = yield bi();
        if (c) {
            ch(a);
            var d = ci(a);
            yield Qh(d.actualName, b);
            yield Wh(d.actualName, c)
        }
    })
}

function hi(a, b = {}) {
    return r(function*() {
        const c = yield bi();
        c && (ch(a), yield Qh(a, b), yield Wh(a, c))
    })
};

function ii(a, b) {
    let c;
    return () => {
        c || (c = new ji(a, b));
        return c
    }
}
var ji = class extends Th {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        ch(a)
    }
    i(a, b, c = {}) {
        return (this.options.aa ? fi : ei)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.aa ? hi : gi)(this.name, a)
    }
};

function ki(a, b) {
    return ii(a, b)
};
var li = ki("ytGcfConfig", {
    R: {
        coldConfigStore: {
            O: 1
        },
        hotConfigStore: {
            O: 1
        }
    },
    aa: !1,
    upgrade(a, b) {
        b(1) && (Bh(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), Bh(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function mi(a) {
    return Sh(li(), a)
}

function ni(a, b, c) {
    return r(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: W()
            },
            e = yield mi(c);
        yield e.clear("hotConfigStore");
        return yield Dh(e, "hotConfigStore", d)
    })
}

function oi(a, b, c, d) {
    return r(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: W()
            },
            f = yield mi(d);
        yield f.clear("coldConfigStore");
        return yield Dh(f, "coldConfigStore", e)
    })
}

function pi(a) {
    return r(function*() {
        let b = void 0;
        yield xh(yield mi(a), ["coldConfigStore"], {
            mode: "readwrite",
            C: !0
        }, c => Lh(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.L()
        }));
        return b
    })
}

function qi(a) {
    return r(function*() {
        let b = void 0;
        yield xh(yield mi(a), ["hotConfigStore"], {
            mode: "readwrite",
            C: !0
        }, c => Lh(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.L()
        }));
        return b
    })
};
var ri = class extends Ra {
    constructor() {
        super();
        this.j = [];
        this.h = [];
        const a = v("yt.gcf.config.hotUpdateCallbacks");
        a ? (this.j = [...a], this.h = a) : (this.h = [], x("yt.gcf.config.hotUpdateCallbacks", this.h))
    }
    m() {
        for (const b of this.j) {
            var a = this.h;
            const c = a.indexOf(b);
            0 <= c && a.splice(c, 1)
        }
        this.j.length = 0;
        super.m()
    }
};

function si(a, b, c) {
    return r(function*() {
        if (T("start_client_gcf")) {
            c && (a.j = c, x("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            x("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = ai();
            if (d) {
                if (!c) {
                    var e;
                    c = null == (e = yield qi(d)) ? void 0 : e.config
                }
                yield ni(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function ti(a, b, c) {
    return r(function*() {
        if (T("start_client_gcf")) {
            a.coldHashData = b;
            x("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = ai();
            if (d) {
                if (!c) {
                    let e;
                    c = null == (e = yield pi(d)) ? void 0 : e.config
                }
                c && (yield oi(c, b, c.configData, d))
            }
        }
    })
}
var ui = class {
    constructor() {
        this.h = 0;
        this.i = new ri
    }
};

function vi() {
    return "INNERTUBE_API_KEY" in Yf && "INNERTUBE_API_VERSION" in Yf
}

function wi() {
    return {
        innertubeApiKey: S("INNERTUBE_API_KEY"),
        innertubeApiVersion: S("INNERTUBE_API_VERSION"),
        ea: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Fa: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ga: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        pa: S("INNERTUBE_CONTEXT_HL"),
        oa: S("INNERTUBE_CONTEXT_GL"),
        Ha: S("INNERTUBE_HOST_OVERRIDE") || "",
        Ja: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ia: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function xi(a) {
    const b = {
        client: {
            hl: a.pa,
            gl: a.oa,
            clientName: a.Fa,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.ea
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = u.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = pg();
    "" !== c && (b.client.experimentsToken = c);
    c = qg();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    yi(void 0, b);
    zi(a, void 0, b);
    T("start_client_gcf") && Ai(void 0, b);
    S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: S("DELEGATED_SESSION_ID")
    });
    !T("fill_delegate_context_in_gel_killswitch") && (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Object;
    c = a.assign;
    var d = b.client,
        e = S("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(kg(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" ===
            e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function yi(a, b) {
    const c = v("yt.embedded_player.embed_url");
    c && (a ? (b = Gd(a, Ve, 7) || new Ve, K(b, 4, c), J(a, Ve, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function zi(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = Gd(b, Pe, 62)) ? d : new Pe;
            K(c, 6, a.appInstallData);
            J(b, Pe, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function Bi(a, b, c = {}) {
    let d = {};
    S("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Nb || S("AUTHORIZATION");
    b || (a ? b = `Bearer ${v("gapi.auth.getToken")().Mb}` : (a = Ng(Lg()), T("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function Ai(a, b) {
    if (!ui.h) {
        var c = new ui;
        ui.h = c
    }
    c = ui.h;
    var d = W() - c.h;
    if (0 !== c.h && d < og("send_config_hash_timer")) c = void 0;
    else {
        d = v("yt.gcf.config.coldConfigData");
        var e = v("yt.gcf.config.hotHashData"),
            f = v("yt.gcf.config.coldHashData");
        d && e && f && (c.h = W());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (e = c)
        if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
            if (a) {
                let g;
                b = null != (g = Gd(a, Pe, 62)) ? g : new Pe;
                K(b, 1, c);
                K(b, 3, d);
                K(b, 5, e);
                J(a, Pe, 62, b)
            } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
};
"undefined" !== typeof TextEncoder && new TextEncoder;

function Ci(a) {
    this.version = 1;
    this.args = a
};

function Di() {
    var a = Ei;
    this.topic = "screen-created";
    this.h = a
}
Di.prototype.toString = function() {
    return this.topic
};
const Fi = v("ytPubsub2Pubsub2Instance") || new N;
N.prototype.subscribe = N.prototype.N;
N.prototype.unsubscribeByKey = N.prototype.F;
N.prototype.publish = N.prototype.B;
N.prototype.clear = N.prototype.clear;
x("ytPubsub2Pubsub2Instance", Fi);
const Gi = v("ytPubsub2Pubsub2SubscribedKeys") || {};
x("ytPubsub2Pubsub2SubscribedKeys", Gi);
const Hi = v("ytPubsub2Pubsub2TopicToKeys") || {};
x("ytPubsub2Pubsub2TopicToKeys", Hi);
const Ii = v("ytPubsub2Pubsub2IsAsync") || {};
x("ytPubsub2Pubsub2IsAsync", Ii);
x("ytPubsub2Pubsub2SkipSubKey", null);

function Ji(a, b) {
    const c = Ki();
    c && c.publish.call(c, a.toString(), a, b)
}

function Li(a) {
    var b = Mi;
    const c = Ki();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = v("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (Gi[d]) try {
                if (f && b instanceof Di && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.sa) {
                            const n = new h;
                            h.sa = n.version
                        }
                        var l = h.sa
                    } catch (n) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var p = l.construct; {
                            var m = k.args;
                            const n = m.length;
                            if (0 < n) {
                                const t = Array(n);
                                for (k = 0; k < n; k++) t[k] = m[k];
                                var q = t
                            } else q = []
                        }
                        f = p.call(l, h, q)
                    } catch (n) {
                        throw n.message = "yt.pubsub2.Data.deserialize(): " + n.message, n;
                    }
                } catch (n) {
                    throw n.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + n.message, n;
                }
                a.call(window, f)
            } catch (n) {
                dg(n)
            }
        }, Ii[b.toString()] ? v("yt.scheduler.instance") ? Xg.h(g) : rg(g, 0) : g())
    });
    Gi[d] = !0;
    Hi[b.toString()] || (Hi[b.toString()] = []);
    Hi[b.toString()].push(d);
    return d
}

function Ni() {
    var a = Oi;
    const b = Li(function(c) {
        a.apply(void 0, arguments);
        Pi(b)
    });
    return b
}

function Pi(a) {
    const b = Ki();
    b && ("number" === typeof a && (a = [a]), qa(a, c => {
        b.unsubscribeByKey(c);
        delete Gi[c]
    }))
}

function Ki() {
    return v("ytPubsub2Pubsub2Instance")
};
let Qi = void 0,
    Ri = void 0;
var Si = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrCowatchPartyEvent: 492,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
    crossDeviceNotificationTransfer: 487,
    androidIntentEvent: 488,
    unpluggedAmbientInterludesCounterfactualEvent: 489,
    keyPlaysPlayback: 490,
    shortsCreationFallbackEvent: 493,
    vssData: 491,
    castMatch: 494,
    miniAppPerformanceMetrics: 495,
    userFeedbackEvent: 496
};
const Ti = ["client.name", "client.version"];

function Ui(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Ti.includes(b.key) : !1);
    return a
};
var Vi = ki("ServiceWorkerLogsDatabase", {
    R: {
        SWHealthLog: {
            O: 1
        }
    },
    aa: !0,
    upgrade: (a, b) => {
        b(1) && Bh(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Wi(a, b) {
    return r(function*() {
        var c = yield Sh(Vi(), b), d = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Ui(e.clientError));
        e.interface = d;
        return Dh(c, "SWHealthLog", e)
    })
};
x("ytNetworklessLoggingInitializationOptions", u.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function Xi(a, b, c, d) {
    !S("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && eg(new Kf("Missing VISITOR_DATA when sending innertube request.", b, c, d));
    if (!a.isReady()) throw a = new Kf("innertube xhrclient not ready", b, c, d), dg(a), a;
    c = {
        headers: d.headers || {},
        method: "POST",
        postParams: c,
        postBody: d.postBody,
        postBodyFormat: d.postBodyFormat || "JSON",
        onTimeout: () => {
            d.onTimeout()
        },
        onFetchTimeout: d.onTimeout,
        onSuccess: (k, l) => {
            if (d.onSuccess) d.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (d.onSuccess) d.onSuccess(k)
        },
        onError: (k, l) => {
            if (d.onError) d.onError(l)
        },
        onFetchError: k => {
            if (d.onError) d.onError(k)
        },
        timeout: d.timeout,
        withCredentials: !0,
        compress: d.compress
    };
    c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
    let e = "";
    var f = a.config_.Ha;
    f && (e = f);
    var g = a.config_.Ja || !1;
    f = Bi(g, e, d);
    Object.assign(c.headers, f);
    (f = c.headers.Authorization) && !e && g && (c.headers["x-origin"] = window.location.origin);
    b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
    g = {
        alt: "json"
    };
    let h = a.config_.Ia && f;
    h = h && f.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    a = lg(`${e}${b}`, g || {}, !0);
    try {
        vg(a,
            c)
    } catch (k) {
        if ("InvalidAccessError" == k.name) eg(Error("An extension is blocking network request."));
        else throw k;
    }
}
class Yi {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : vi() && (this.config_ = wi())
    }
    isReady() {
        !this.config_ && vi() && (this.config_ = wi());
        return !!this.config_
    }
};
let Zi = 0;
x("ytDomDomGetNextId", v("ytDomDomGetNextId") || (() => ++Zi));
x("ytEventsEventsListeners", u.ytEventsEventsListeners || {});
x("ytEventsEventsCounter", u.ytEventsEventsCounter || {
    count: 0
});

function $i() {
    const a = v("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0)
};
u.ytPubsubPubsubInstance || new N;
var aj = Symbol("injectionDeps"),
    bj = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    cj = class {
        constructor() {
            this.key = ui
        }
    };

function dj(a) {
    var b = {
        ha: ej,
        ra: fj.h
    };
    a.i.set(b.ha, b);
    const c = a.j.get(b.ha);
    c && c.cc(a.resolve(b.ha))
}

function gj(a, b, c, d = !1) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (void 0 !== d.ra) var e = d.ra;
    else if (d.Sa) e = d[aj] ? hj(a, d[aj], c) : [], e = d.Sa(...e);
    else if (d.Ra) {
        e = d.Ra;
        const f = e[aj] ? hj(a, e[aj], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.kc || a.h.set(b, e);
    return e
}

function hj(a, b, c) {
    return b ? b.map(d => d instanceof cj ? gj(a, d.key, c, !0) : gj(a, d, c)) : []
}
var ij = class {
    constructor() {
        this.i = new Map;
        this.j = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof cj ? gj(this, a.key, [], !0) : gj(this, a, [])
    }
};
let jj;

function kj() {
    jj || (jj = new ij);
    return jj
};
let lj = window;

function mj() {
    let a, b;
    return "h5vcc" in lj && (null == (a = lj.h5vcc.traceEvent) ? 0 : a.traceBegin) && (null == (b = lj.h5vcc.traceEvent) ? 0 : b.traceEnd) ? 1 : "performance" in lj && lj.performance.mark && lj.performance.measure ? 2 : 0
}

function nj(a) {
    const b = mj();
    switch (b) {
        case 1:
            lj.h5vcc.traceEvent.traceBegin("YTLR", a);
            break;
        case 2:
            lj.performance.mark(`${a}-start`);
            break;
        case 0:
            break;
        default:
            qe(b, "unknown trace type")
    }
}

function oj(a) {
    var b = mj();
    switch (b) {
        case 1:
            lj.h5vcc.traceEvent.traceEnd("YTLR", a);
            break;
        case 2:
            b = `${a}-start`;
            const c = `${a}-end`;
            lj.performance.mark(c);
            lj.performance.measure(a, b, c);
            break;
        case 0:
            break;
        default:
            qe(b, "unknown trace type")
    }
};
var pj = T("web_enable_lifecycle_monitoring") && 0 !== mj(),
    qj = T("web_enable_lifecycle_monitoring");

function rj(a) {
    let b;
    return null != (b = a.priority) ? b : 0
}

function sj(a) {
    var b = Array.from(a.h.keys()).sort((c, d) => rj(a.h[d]) - rj(a.h[c]));
    for (const c of b) b = a.h[c], void 0 === b.jobId || b.Z || (a.scheduler.V(b.jobId), Sg(b.fa, 10))
}
var tj = class {
    constructor(a) {
        this.scheduler = Vg();
        this.i = new Be;
        this.h = a;
        for (let b = 0; b < this.h.length; b++) {
            const c = this.h[b];
            a = () => {
                c.fa();
                this.h[b].Z = !0;
                this.h.every(e => !0 === e.Z) && this.i.resolve()
            };
            const d = Sg(a, rj(c));
            this.h[b] = Object.assign({}, c, {
                fa: a,
                jobId: d
            })
        }
    }
    cancel() {
        for (const a of this.h) void 0 === a.jobId || a.Z || this.scheduler.V(a.jobId), a.Z = !0;
        this.i.resolve()
    }
};

function uj(a, b, c) {
    qj && console.groupCollapsed && console.groupEnd && (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`), console.log("with message: ", c), console.groupEnd())
}

function vj(a, b) {
    const c = b.filter(e => 10 === wj(a, e)),
        d = b.filter(e => 10 !== wj(a, e));
    return a.l.ic ? (...e) => r(function*() {
        yield xj(c, ...e);
        yj(a, d, ...e)
    }) : (...e) => {
        zj(c, ...e);
        yj(a, d, ...e)
    }
}

function wj(a, b) {
    let c, d;
    return null != (d = null != (c = a.j) ? c : b.priority) ? d : 0
}

function xj(a, ...b) {
    return r(function*() {
        Vg();
        for (const c of a) {
            let d;
            Tg(() => {
                Aj(c.name);
                const e = c.callback(...b);
                "function" === typeof(null == e ? void 0 : e.then) ? d = e.then(() => {
                    Bj(c.name)
                }): Bj(c.name)
            });
            d && (yield d)
        }
    })
}

function yj(a, b, ...c) {
    b = b.map(d => ({
        fa: () => {
            Aj(d.name);
            d.callback(...c);
            Bj(d.name)
        },
        priority: wj(a, d)
    }));
    b.length && (a.i = new tj(b))
}

function zj(a, ...b) {
    Vg();
    for (const c of a) Tg(() => {
        Aj(c.name);
        c.callback(...b);
        Bj(c.name)
    })
}

function Aj(a) {
    pj && a && nj(a)
}

function Bj(a) {
    pj && a && oj(a)
}
var Cj = class {
    constructor() {
        this.state = "none";
        this.plugins = [];
        this.j = void 0;
        this.l = {};
        pj && nj(this.state)
    }
    get currentState() {
        return this.state
    }
    install(a) {
        this.plugins.push(a);
        return this
    }
    transition(a, b) {
        pj && oj(this.state);
        var c = this.transitions.find(d => Array.isArray(d.from) ? d.from.find(e => e === this.state && d.U === a) : d.from === this.state && d.U === a);
        if (c) {
            this.i && (sj(this.i), this.i = void 0);
            uj(this, a, b);
            this.state = a;
            pj && nj(this.state);
            c = c.action.bind(this);
            const d = this.plugins.filter(e => e[a]).map(e => e[a]);
            c(vj(this, d), b)
        } else throw Error(`no transition specified from ${this.state} to ${a}`);
    }
};

function Dj() {
    Ej || (Ej = new Fj);
    return Ej
}
var Fj = class extends Cj {
        constructor() {
            super();
            this.h = null;
            this.j = 10;
            this.transitions = [{
                    from: "none",
                    U: "application_navigating",
                    action: this.m
                }, {
                    from: "application_navigating",
                    U: "none",
                    action: this.s
                }, {
                    from: "application_navigating",
                    U: "application_navigating",
                    action: () => {}
                },
                {
                    from: "none",
                    U: "none",
                    action: () => {}
                }
            ]
        }
        m(a, b) {
            this.h = Rg(() => {
                "application_navigating" === this.currentState && this.transition("none")
            }, 5E3);
            a(null == b ? void 0 : b.event)
        }
        s(a, b) {
            this.h && (Xg.V(this.h), this.h = null);
            a(null == b ? void 0 : b.event)
        }
    },
    Ej;
let Gj = [];
x("yt.logging.transport.getScrapedGelPayloads", function() {
    return Gj
});

function Hj(a, b) {
    const c = Ij(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (1 >= d.length && Ij(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (Jj(b.auth, h[0])) {
            var f = b.isJspb;
            Jj(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) && Jj(b.cttAuthInfo, h[2]) && (f = b.tier, f = void 0 === f ? "undefined" : JSON.stringify(f), Jj(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function Jj(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b
}
var Kj = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = Ij(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = Hj(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = Hj(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = Hj(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    }
};
Kj.prototype.getSequenceCount = Kj.prototype.getSequenceCount;
Kj.prototype.extractMatchingEntries = Kj.prototype.extractMatchingEntries;
Kj.prototype.smartExtractMatchingEntries = Kj.prototype.smartExtractMatchingEntries;
Kj.prototype.storePayload = Kj.prototype.storePayload;

function Ij(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
};

function Lj(a, b) {
    if (a) return a[b.name]
};
/*

 SPDX-License-Identifier: Apache-2.0
*/
const Mj = og("initial_gel_batch_timeout", 2E3),
    Nj = og("gel_queue_timeout_max_ms", 6E4),
    Oj = Math.pow(2, 16) - 1,
    Pj = og("gel_min_batch_size", 5);
let Qj = void 0;
class Rj {
    constructor() {
        this.l = this.h = this.i = 0;
        this.j = !1
    }
}
const Sj = new Rj,
    Tj = new Rj,
    Uj = new Rj,
    Vj = new Rj;
let Wj, Xj = !0,
    Yj = 1;
const Zj = new Map,
    ak = u.ytLoggingTransportTokensToCttTargetIds_ || {},
    bk = u.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let ck = {};

function dk() {
    let a = v("yt.logging.ims");
    a || (a = new Kj, x("yt.logging.ims", a));
    return a
}

function ek(a, b) {
    if ("log_event" === a.endpoint) {
        fk();
        var c = gk(a),
            d = hk(a.payload) || "",
            e = ik(d),
            f = 200;
        if (e) {
            if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch")) return;
            f = jk(e.tier);
            if (400 === f) {
                kk(a, b);
                return
            }
        }
        ck[c] = !0;
        e = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: f
        };
        dk().storePayload(e, a.payload);
        lk(b, c, !1, e, mk(d))
    }
}

function nk(a, b, c) {
    if ("log_event" === b.endpoint) {
        fk();
        var d = gk(b, !0),
            e = ik(a),
            f = 200;
        if (e) {
            if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch")) return;
            f = jk(e.tier);
            if (400 === f) {
                ok(a, b, c);
                return
            }
        }
        ck[d] = !0;
        e = {
            cttAuthInfo: d,
            isJspb: !0,
            tier: f
        };
        dk().storePayload(e, b.payload.toJSON());
        lk(c, d, !0, e, mk(a))
    }
}

function lk(a, b, c = !1, d, e = !1) {
    a && (Qj = new a);
    a = og("tvhtml5_logging_max_batch_ads_fork") || og("web_logging_max_batch") || 100;
    const f = W(),
        g = pk(c, d.tier),
        h = g.l;
    e && (g.j = !0);
    e = 0;
    d && (e = dk().getSequenceCount(d));
    const k = () => {
        qk({
            writeThenSend: !0
        }, T("flush_only_full_queue") ? b : void 0, c, d.tier)
    };
    1E3 <= e ? k() : e >= a ? Wj || (Wj = rk(() => {
        k();
        Wj = void 0
    }, 0)) : 10 <= f - h && (sk(c, d.tier), g.l = f)
}

function kk(a, b) {
    if ("log_event" === a.endpoint) {
        fk();
        var c = gk(a),
            d = new Map;
        d.set(c, [a.payload]);
        var e = hk(a.payload) || "";
        b && (Qj = new b);
        return new z((f, g) => {
            Qj && Qj.isReady() ? tk(d, Qj, f, g, {
                bypassNetworkless: !0
            }, !0, mk(e)) : f()
        })
    }
}

function ok(a, b, c) {
    if ("log_event" === b.endpoint) {
        fk();
        var d = gk(b, !0),
            e = new Map;
        e.set(d, [b.payload.toJSON()]);
        c && (Qj = new c);
        return new z(f => {
            Qj && Qj.isReady() ? uk(e, Qj, f, {
                bypassNetworkless: !0
            }, !0, mk(a)) : f()
        })
    }
}

function gk(a, b = !1) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new Cf;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Cd(d, 2, Bf, dd(c.playlistId));
            bk[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), ak[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function qk(a = {}, b, c = !1, d) {
    new z((e, f) => {
        const g = pk(c, d),
            h = g.j;
        g.j = !1;
        vk(g.i);
        vk(g.h);
        g.h = 0;
        Qj && Qj.isReady() ? void 0 === d && T("enable_web_tiered_gel") ? wk(e, f, a, b, c, 300, h) : wk(e, f, a, b, c, d, h) : (sk(c, d), e())
    })
}

function wk(a, b, c = {}, d, e = !1, f = 200, g = !1) {
    var h = Qj,
        k = new Map;
    const l = new Map,
        p = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        m = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (void 0 !== d) e ? (b = T("enable_web_tiered_gel") ? dk().smartExtractMatchingEntries({
        keys: [p, m],
        sizeLimit: 1E3
    }) : dk().extractMatchingEntries(m), k.set(d, b), uk(k, h, a, c, !1, g)) : (k = T("enable_web_tiered_gel") ? dk().smartExtractMatchingEntries({
        keys: [p, m],
        sizeLimit: 1E3
    }) : dk().extractMatchingEntries(m), l.set(d, k), tk(l, h, a, b, c, !1, g));
    else if (e) {
        for (const q of Object.keys(ck)) b = T("enable_web_tiered_gel") ?
            dk().smartExtractMatchingEntries({
                keys: [p, m],
                sizeLimit: 1E3
            }) : dk().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: q
            }), 0 < b.length && k.set(q, b), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete ck[q];
        uk(k, h, a, c, !1, g)
    } else {
        for (const q of Object.keys(ck)) d = T("enable_web_tiered_gel") ? dk().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: q,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: q
            }],
            sizeLimit: 1E3
        }) : dk().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: q
        }), 0 < d.length && l.set(q,
            d), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete ck[q];
        tk(l, h, a, b, c, !1, g)
    }
}

function sk(a = !1, b = 200) {
    const c = () => {
            qk({
                writeThenSend: !0
            }, void 0, a, b)
        },
        d = pk(a, b);
    var e = d === Vj || d === Uj ? 5E3 : Nj;
    T("web_gel_timeout_cap") && !d.h && (e = rk(() => {
        c()
    }, e), d.h = e);
    vk(d.i);
    e = S("LOGGING_BATCH_TIMEOUT", og("web_gel_debounce_ms", 1E4));
    T("shorten_initial_gel_batch_timeout") && Xj && (e = Mj);
    e = rk(() => {
        0 < og("gel_min_batch_size") ? dk().getSequenceCount({
            cttAuthInfo: void 0,
            isJspb: a,
            tier: b
        }) >= Pj && c() : c()
    }, e);
    d.i = e
}

function tk(a, b, c, d, e = {}, f, g) {
    const h = Math.round(W());
    let k = a.size;
    const l = xk(g);
    for (const [p, m] of a) {
        a = p;
        g = m;
        const q = va({
            context: xi(b.config_ || wi())
        });
        if (!ia(g) && !T("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        q.events = g;
        (g = ak[a]) && yk(q, a, g);
        delete ak[a];
        const n = "visitorOnlyApprovedKey" === a;
        zk(q, h, n);
        Ak(e);
        const t = H => {
            T("start_client_gcf") && Xg.h(() => r(function*() {
                yield Bk(H)
            }));
            k--;
            k || c()
        };
        let w = 0;
        const B = () => {
            w++;
            if (e.bypassNetworkless && 1 === w) try {
                Xi(b, l, q, Ck({
                    writeThenSend: !0
                }, n, t, B, f)), Xj = !1
            } catch (H) {
                dg(H), d()
            }
            k--;
            k || c()
        };
        try {
            Xi(b, l, q, Ck(e, n, t, B, f)), Xj = !1
        } catch (H) {
            dg(H), d()
        }
    }
}

function uk(a, b, c, d = {}, e, f) {
    const g = Math.round(W()),
        h = {
            value: a.size
        };
    var k = new Map([...a]);
    for (const [H] of k) {
        var l = H,
            p = a.get(l);
        k = new Df;
        var m = b.config_ || wi(),
            q = new Ye,
            n = new Re;
        K(n, 1, m.pa);
        K(n, 2, m.oa);
        L(n, 16, m.Ga);
        K(n, 17, m.innertubeContextClientVersion);
        if (m.ea) {
            var t = m.ea,
                w = new Pe;
            t.coldConfigData && K(w, 1, t.coldConfigData);
            t.appInstallData && K(w, 6, t.appInstallData);
            t.coldHashData && K(w, 3, t.coldHashData);
            t.hotHashData && K(w, 5, t.hotHashData);
            J(n, Pe, 62, w)
        }
        if ((t = u.devicePixelRatio) && 1 != t) {
            if (null != t && "number" !==
                typeof t) throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);
            xd(n, 65, t)
        }
        t = pg();
        "" !== t && K(n, 54, t);
        t = qg();
        if (0 < t.length) {
            w = new Ue;
            for (let G = 0; G < t.length; G++) {
                const Z = new Te;
                K(Z, 1, t[G].key);
                Cd(Z, 2, Se, dd(t[G].value));
                Kd(w, 15, Te, Z)
            }
            J(q, Ue, 5, w)
        }
        yi(q);
        zi(m, n);
        T("start_client_gcf") && Ai(n);
        S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (m = new Xe, K(m, 3, S("DELEGATED_SESSION_ID")));
        !T("fill_delegate_context_in_gel_killswitch") && (t = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
            (w = Gd(q, Xe, 3) || new Xe, m = q, t = K(w, 18, t), J(m, Xe, 3, t));
        m = n;
        t = S("DEVICE", "");
        for (const [G, Z] of Object.entries(kg(t))) t = G, w = Z, "cbrand" === t ? K(m, 12, w) : "cmodel" === t ? K(m, 13, w) : "cbr" === t ? K(m, 87, w) : "cbrver" === t ? K(m, 88, w) : "cos" === t ? K(m, 18, w) : "cosver" === t ? K(m, 19, w) : "cplatform" === t && L(m, 42, Pg(w));
        q.j(n);
        J(k, Ye, 1, q);
        if (n = bk[l]) a: {
            if (Ld(n, Ed(n, Bf, 1))) q = 1;
            else if (n.getPlaylistId()) q = 2;
            else break a;J(k, Cf, 4, n);n = Gd(k, Ye, 1) || new Ye;m = Gd(n, Xe, 3) || new Xe;t = new We;K(t, 2, l);L(t, 1, q);Kd(m, 12, We, t);J(n, Xe, 3, m)
        }
        delete bk[l];
        l = "visitorOnlyApprovedKey" === l;
        Dk() || Od(k, 2, g);
        !l && (q = S("EVENT_ID")) && (n = Ek(), m = new Af, K(m, 1, q), Od(m, 2, n), J(k, Af, 5, m));
        Ak(d);
        if (T("jspb_serialize_with_worker")) {
            if (!Ri)
                if (q = S("WORKER_SERIALIZATION_URL")) {
                    if (q = q.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) {
                        if (void 0 === ya)
                            if (n = null, (m = u.trustedTypes) && m.createPolicy) {
                                try {
                                    n = m.createPolicy("goog#html", {
                                        createHTML: na,
                                        createScript: na,
                                        createScriptURL: na
                                    })
                                } catch (G) {
                                    u.console && u.console.error(G.message)
                                }
                                ya = n
                            } else ya = n;
                        q = (n = ya) ? n.createScriptURL(q) :
                            q;
                        q = new Ca(q, Da)
                    } else q = null;
                    Ri = q
                } else Ri = null;
            q = Ri || void 0;
            Qi || void 0 === q || (Qi = new Worker(q instanceof Ca && q.constructor === Ca ? q.h : "type_error:TrustedResourceUrl", void 0));
            if ((q = Qi) && d.writeThenSend) {
                Zj.set(Yj, {
                    client: b,
                    resolve: c,
                    networklessOptions: d,
                    isIsolated: e,
                    useVSSEndpoint: f,
                    dangerousLogToVisitorSession: l,
                    requestsOutstanding: h
                });
                q.postMessage({
                    op: "gelBatchToSerialize",
                    batchRequest: k.toJSON(),
                    clientEvents: p,
                    key: Yj
                });
                Yj++;
                break
            }
        }
        if (p) {
            q = [];
            for (n = 0; n < p.length; n++) try {
                q.push(new P(p[n]))
            } catch (G) {
                dg(new Kf("Transport failed to deserialize " +
                    String(p[n])))
            }
            p = q
        } else p = [];
        for (const G of p) Kd(k, 3, P, G);
        p = {
            startTime: W(),
            ticks: {},
            infos: {}
        };
        a: {
            Lc = !0;
            try {
                var B = JSON.stringify(k.toJSON(), ld);
                break a
            } finally {
                Lc = !1
            }
            B = void 0
        }
        k = B;
        p.ticks.geljspc = W();
        T("log_jspb_serialize_latency") && .001 > Math.random() && Ji("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            lc: p
        });
        Fk(k, b, c, d, e, f, l, h)
    }
}

function Fk(a, b, c, d = {}, e, f, g, h = {
    value: 0
}) {
    f = xk(f);
    d = Ck(d, g, k => {
        T("start_client_gcf") && Xg.h(() => r(function*() {
            yield Bk(k)
        }));
        h.value--;
        h.value || c()
    }, () => {
        h.value--;
        h.value || c()
    }, e);
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    Xi(b, f, "", d);
    Xj = !1
}

function Ak(a) {
    T("always_send_and_write") && (a.writeThenSend = !1)
}

function Ck(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        networklessOptions: a,
        dangerousLogToVisitorSession: b,
        Pb: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: T("compress_gel") || T("compress_gel_lr")
    };
    Dk() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
    return a
}

function zk(a, b, c) {
    Dk() || (a.requestTimeMs = String(b));
    T("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = S("EVENT_ID")) && (c = Ek(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function Ek() {
    let a = S("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * Oj / 2));
    a++;
    a > Oj && (a = 1);
    R("BATCH_CLIENT_COUNTER", a);
    return a
}

function yk(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function fk() {
    var a;
    (a = v("yt.logging.transport.enableScrapingForTest")) || (a = ng("il_payload_scraping"), a = "enable_il_payload_scraping" !== (void 0 !== a ? String(a) : ""));
    a || (Gj = [], x("yt.logging.transport.enableScrapingForTest", !0), x("yt.logging.transport.scrapedPayloadsForTesting", Gj), x("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")), x("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
        x("yt.logging.transport.scrapeClientEvent", !0))
}

function Dk() {
    return T("use_request_time_ms_header") || T("lr_use_request_time_ms_header")
}

function rk(a, b) {
    return !1 === T("embeds_transport_use_scheduler") ? rg(a, b) : T("logging_avoid_blocking_during_navigation") || T("lr_logging_avoid_blocking_during_navigation") ? Rg(() => {
        "none" === Dj().currentState ? a() : Dj().install({
            none: {
                callback: a
            }
        })
    }, b) : Rg(a, b)
}

function vk(a) {
    T("transport_use_scheduler") ? Xg.V(a) : window.clearTimeout(a)
}

function Bk(a) {
    return r(function*() {
        var b, c = null == a ? void 0 : null == (b = a.responseContext) ? void 0 : b.globalConfigGroup;
        b = Lj(c, Ke);
        const d = null == c ? void 0 : c.hotHashData,
            e = Lj(c, Je);
        c = null == c ? void 0 : c.coldHashData;
        const f = kj().resolve(new cj);
        f && (d && (b ? yield si(f, d, b): yield si(f, d)), c && (e ? yield ti(f, c, e): yield ti(f, c)))
    })
}

function pk(a, b = 200) {
    return a ? 300 === b ? Vj : Tj : 300 === b ? Uj : Sj
}

function ik(a) {
    if (T("enable_web_tiered_gel")) {
        a = Si[a || ""];
        var b, c;
        if (null == kj().resolve(new cj)) var d = void 0;
        else {
            var e = null != (d = v("yt.gcf.config.hotConfigGroup")) ? d : S("RAW_HOT_CONFIG_GROUP");
            d = null == e ? void 0 : null == (b = e.loggingHotConfig) ? void 0 : null == (c = b.eventLoggingConfig) ? void 0 : c.payloadPolicies
        }
        if (b = d)
            for (c = 0; c < b.length; c++)
                if (b[c].payloadNumber === a) return b[c]
    }
}

function hk(a) {
    a = Object.keys(a);
    for (const b of a)
        if (Si[b]) return b
}

function jk(a) {
    switch (a) {
        case "DELAYED_EVENT_TIER_UNSPECIFIED":
            return 0;
        case "DELAYED_EVENT_TIER_DEFAULT":
            return 100;
        case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
            return 200;
        case "DELAYED_EVENT_TIER_FAST":
            return 300;
        case "DELAYED_EVENT_TIER_IMMEDIATE":
            return 400;
        default:
            return 200
    }
}

function mk(a) {
    return "gelDebuggingEvent" === a
}

function xk(a = !1) {
    return a && T("vss_through_gel_video_stats") ? "video_stats" : "log_event"
};
const Gk = u.ytLoggingGelSequenceIdObj_ || {};

function Hk(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || W());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = $i();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !T("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, b = {
        index: Ik(b),
        groupKey: b
    }, a.sequence = b, d.endOfSequence && delete Gk[d.sequenceGroup]);
    (d.sendIsolatedPayload ? kk : ek)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}

function Jk(a = !1) {
    qk(void 0, void 0, a)
}

function Ik(a) {
    Gk[a] = a in Gk ? Gk[a] + 1 : 0;
    return Gk[a]
};
let Kk = Yi,
    Lk = [];

function X(a, b, c = {}) {
    let d = Kk;
    S("ytLoggingEventsDefaultDisabled", !1) && Kk === Yi && (d = null);
    T("web_all_payloads_via_jspb") && !c.timestamp && (c.lact = $i(), c.timestamp = W());
    Hk(a, b, d, c)
};
const Mk = u.ytLoggingGelSequenceIdObj_ || {};

function Nk(a, b, c, d = {}) {
    var e = Math.round(d.timestamp || W());
    Od(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
    e = new xf;
    if (d.lact) Od(e, 1, isFinite(d.lact) ? d.lact : -1);
    else if (d.timestamp) Od(e, 1, -1);
    else {
        var f = $i();
        Od(e, 1, isFinite(f) ? f : -1)
    }
    if (d.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
        f = d.sequenceGroup;
        const g = Ik(f),
            h = new wf;
        Od(h, 2, g);
        K(h, 1, f);
        J(e, wf, 3, h);
        d.endOfSequence && delete Mk[d.sequenceGroup]
    }
    J(b, xf, 33, e);
    (d.sendIsolatedPayload ? ok : nk)(a, {
        endpoint: "log_event",
        payload: b,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
};

function Ok(a, b, c = {}) {
    let d = !1;
    S("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
    Nk(a, b, d ? null : Yi, c)
};

function Pk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, uf, 72, yf, a);
    c ? Nk("visualElementShown", d, c, b) : Ok("visualElementShown", d, b)
}

function Qk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, tf, 73, yf, a);
    c ? Nk("visualElementHidden", d, c, b) : Ok("visualElementHidden", d, b)
}

function Rk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, sf, 78, yf, a);
    c ? Nk("visualElementGestured", d, c, b) : Ok("visualElementGestured", d, b)
}

function Sk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, vf, 208, yf, a);
    c ? Nk("visualElementStateChanged", d, c, b) : Ok("visualElementStateChanged", d, b)
}

function Tk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, pf, 156, yf, a);
    c ? Nk("screenCreated", d, c, b) : Ok("screenCreated", d, b)
}

function Uk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, rf, 215, yf, a);
    c ? Nk("visualElementAttached", d, c, b) : Ok("visualElementAttached", d, b)
};
var Vk = new Set,
    Wk = 0,
    Xk = 0,
    Yk = 0,
    Zk = [];
const $k = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function al(a) {
    bl(a)
}

function cl(a) {
    bl(a, "WARNING")
}

function bl(a, b = "ERROR") {
    var c = {};
    c.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
    dl(a, c, b)
}

function dl(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (T("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Wk)) {
            d = Zk;
            var e = Sa(a);
            const m = e.message || "Unknown Error",
                q = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${q}: ${m}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let n = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(n = Ig(a.args[h], `params.${h}`, b, n), 500 <= n); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const t = a.params;
                if ("object" === typeof a.params)
                    for (h in t) {
                        if (!t[h]) continue;
                        const w = `params.${h}`,
                            B = Kg(t[h]);
                        b[w] = B;
                        n +=
                            w.length + B.length;
                        if (500 < n) break
                    } else b.params = Kg(t)
            }
            if (d.length)
                for (h = 0; h < d.length && !(n = Ig(d[h], `params.context.${h}`, b, n), 500 <= n); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: m,
                name: q,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = Bg();
                for (k of a.H)
                    if (b.message && b.message.match(k.Ka)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.G)
                    if (l.callback(b)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var p of yg)
                if (p.Y[k.name]) {
                    l = p.Y[k.name];
                    for (const t of l)
                        if (l = k.message.match(t.u)) {
                            k.params["params.error.original"] = l[0];
                            a = t.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = p.ga(b);
                            break
                        }
                }
            k.params || (k.params = {});
            p = Bg();
            k.params["params.errorServiceSignature"] = `msg=${p.H.length}&cb=${p.G.length}`;
            k.params["params.serviceWorker"] = "true";
            u.document && u.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            Ba("sample").constructor !== za && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            0 === k.sampleWeight || Vk.has(k.message) || el(k, c)
        }
    }
}

function el(a, b = "ERROR") {
    if ("ERROR" === b) {
        Fg.B("handleError", a);
        if (T("record_app_crashed_web") && 0 === Yk && 1 === a.sampleWeight)
            if (Yk++, T("errors_via_jspb")) {
                var c = new hf;
                c = L(c, 1, 1);
                if (!T("report_client_error_with_app_crash_ks")) {
                    var d = new gf;
                    var e = new ff;
                    var f = new ef;
                    var g = new df;
                    g = K(g, 1, a.message);
                    f = J(f, df, 3, g);
                    e = J(e, ef, 5, f);
                    d = J(d, ff, 9, e);
                    J(c, gf, 4, d)
                }
                d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
                Jd(d, hf, 20, yf, c);
                Ok("appCrashed", d)
            } else c = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, T("report_client_error_with_app_crash_ks") ||
                (c.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: a.message
                            }
                        }
                    }
                }), X("appCrashed", c);
        Xk++
    } else "WARNING" === b && Fg.B("handleWarning", a);
    a: {
        if (T("errors_via_jspb")) {
            if (fl()) var h = void 0;
            else {
                c = new af;
                K(c, 1, a.stack);
                a.fileName && K(c, 4, a.fileName);
                var k = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== k.length && (1 !== k.length || isNaN(Number(k[0])) ? 2 !== k.length || isNaN(Number(k[0])) || isNaN(Number(k[1])) || (Nd(c, 2, Number(k[0])), Nd(c, 3, Number(k[1]))) : Nd(c, 2, Number(k[0])));
                k = new df;
                K(k, 1,
                    a.message);
                K(k, 3, a.name);
                Nd(k, 6, a.sampleWeight);
                "ERROR" === b ? L(k, 2, 2) : "WARNING" === b ? L(k, 2, 1) : L(k, 2, 0);
                var l = new bf;
                xd(l, 1, !0);
                Jd(l, af, 3, cf, c);
                c = new $e;
                K(c, 3, window.location.href);
                d = S("FEXP_EXPERIMENTS", []);
                for (f = 0; f < d.length; f++) {
                    g = c.o;
                    e = d[f];
                    var p = E(g);
                    Qc(p);
                    g = Ad(g, p, 5, 2);
                    p = C(g);
                    e = bd(e, !!(4 & p) && !!(4096 & p));
                    g.push(e)
                }
                d = Zf();
                if (!$f() && d)
                    for (var m of Object.keys(d)) e = new Ze, K(e, 1, m), K(e, 2, String(d[m])), Kd(c, 4, Ze, e);
                if (m = a.params)
                    for (h of Object.keys(m)) d = new Ze, K(d, 1, `client.${h}`), K(d, 2, String(m[h])),
                        Kd(c, 4, Ze, d);
                m = S("SERVER_NAME");
                h = S("SERVER_VERSION");
                m && h && (d = new Ze, K(d, 1, "server.name"), K(d, 2, m), Kd(c, 4, Ze, d), m = new Ze, K(m, 1, "server.version"), K(m, 2, h), Kd(c, 4, Ze, m));
                h = new ef;
                J(h, $e, 1, c);
                J(h, bf, 2, l);
                J(h, df, 3, k)
            }
            if (!h) break a;
            m = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
            Jd(m, ef, 163, yf, h);
            Ok("clientError", m)
        } else {
            h = {};
            if (fl()) h = void 0;
            else {
                c = {
                    stackTrace: a.stack
                };
                a.fileName && (c.filename = a.fileName);
                m = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== m.length && (1 !== m.length || isNaN(Number(m[0])) ?
                    2 !== m.length || isNaN(Number(m[0])) || isNaN(Number(m[1])) || (c.lineNumber = Number(m[0]), c.columnNumber = Number(m[1])) : c.lineNumber = Number(m[0]));
                m = {
                    level: "ERROR_LEVEL_UNKNOWN",
                    message: a.message,
                    errorClassName: a.name,
                    sampleWeight: a.sampleWeight
                };
                "ERROR" === b ? m.level = "ERROR_LEVEL_ERROR" : "WARNING" === b && (m.level = "ERROR_LEVEL_WARNNING");
                c = {
                    isObfuscated: !0,
                    browserStackInfo: c
                };
                h.pageUrl = window.location.href;
                h.kvPairs = [];
                S("FEXP_EXPERIMENTS") && (h.experimentIds = S("FEXP_EXPERIMENTS"));
                d = Zf();
                if (!$f() && d)
                    for (l of Object.keys(d)) h.kvPairs.push({
                        key: l,
                        value: String(d[l])
                    });
                if (l = a.params)
                    for (k of Object.keys(l)) h.kvPairs.push({
                        key: `client.${k}`,
                        value: String(l[k])
                    });
                k = S("SERVER_NAME");
                l = S("SERVER_VERSION");
                k && l && (h.kvPairs.push({
                    key: "server.name",
                    value: k
                }), h.kvPairs.push({
                    key: "server.version",
                    value: l
                }));
                h = {
                    errorMetadata: h,
                    stackTrace: c,
                    logMessage: m
                }
            }
            if (!h) break a;
            X("clientError", h)
        }
        if ("ERROR" === b || T("errors_flush_gel_always_killswitch")) b: {
            if (T("web_fp_via_jspb")) {
                b = Lk;
                Lk = [];
                if (b)
                    for (const q of b) Hk(q.S, q.payload, Kk, q.options);
                Jk(!0);
                if (!T("web_fp_via_jspb_and_json")) break b
            }
            Jk()
        }
    }
    try {
        Vk.add(a.message)
    } catch (q) {}
    Wk++
}

function fl() {
    for (const a of $k) {
        const b = Ha();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
}

function gl(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};

function hl(a) {
    return r(function*() {
        var b = yield u.fetch(a.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if ("yt.sw.adr" === b[c][0]) {
                    b = new Uf(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function il(a = !1) {
    const b = jl.h;
    return r(function*() {
        if (a || !b.h) b.h = hl(b).then(b.j).catch(c => {
            delete b.h;
            bl(c)
        });
        return b.h
    })
}
var jl = class {
    constructor() {
        this.i = kl("/sw.js_data")
    }
    j(a) {
        const b = Gd(a, Tf, 2);
        if (b) {
            var c = Md(b, 5);
            c && (u.__SAPISID = c);
            null != Ld(b, 10) ? R("EOM_VISITOR_DATA", Md(b, 10)) : null != Ld(b, 7) && R("VISITOR_DATA", Md(b, 7));
            if (null != ad(vd(b, 4))) {
                c = String;
                var d = ad(vd(b, 4));
                R("SESSION_INDEX", c(null != d ? d : 0))
            }
            null != Ld(b, 8) && R("DELEGATED_SESSION_ID", Md(b, 8));
            null != Ld(b, 11) && R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", Md(b, 11))
        }
        return a
    }
};

function ll(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var ml = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.I.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            ll(this, a)
        }
    }
};
let nl = Date.now().toString();

function ol() {
    const a = Array(16);
    for (var b = 0; 16 > b; b++) {
        var c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(256 * Math.random())
    }
    if (nl)
        for (b = 1, c = 0; c < nl.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ nl.charCodeAt(c), b++;
    return a
}

function pl() {
    if (window.crypto && window.crypto.getRandomValues) try {
        const a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (let c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (a) {}
    return ol()
};
let ql = u.ytLoggingDocDocumentNonce_;
if (!ql) {
    const a = pl(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    ql = b.join("")
}
var rl = ql;
var sl = {
    Wa: 0,
    Ta: 1,
    Va: 2,
    Bb: 3,
    Xa: 4,
    Lb: 5,
    Cb: 6,
    Ib: 7,
    Gb: 8,
    Hb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let tl = 1;

function ul(a) {
    return new vl({
        trackingParams: a
    })
}

function wl(a) {
    const b = tl++;
    return new vl({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0,
        loggingDirectives: void 0
    })
}
var vl = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new I;
        void 0 !== this.h.trackingParams ? a.setTrackingParams(this.h.trackingParams) : (void 0 !== this.h.veType && Nd(a, 2, this.h.veType), void 0 !== this.h.veCounter && Nd(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && Nd(a, 3, this.h.elementIndex), this.h.isCounterfactual && xd(a, 5, !0));
        if (void 0 !== this.h.dataElement) {
            var b = this.h.dataElement.getAsJspb();
            J(a, I, 7, b)
        }
        void 0 !== this.h.youtubeData && J(a, Oe, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams &&
            !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
};

function xl(a = 0) {
    return S("client-screen-nonce-store", {})[a]
}

function yl(a, b = 0) {
    let c = S("client-screen-nonce-store");
    c || (c = {}, R("client-screen-nonce-store", c));
    c[b] = a
}

function zl(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function Al(a = 0) {
    return S(zl(a))
}

function Bl(a = 0) {
    return (a = Al(a)) ? new vl({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function Cl() {
    let a = S("csn-to-ctt-auth-info");
    a || (a = {}, R("csn-to-ctt-auth-info", a));
    return a
}

function Dl() {
    return Object.values(S("client-screen-nonce-store", {})).filter(a => void 0 !== a)
}

function El(a = 0) {
    a = xl(a);
    if (!a && !S("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function Fl(a) {
    for (const b of Object.values(sl))
        if (El(b) === a) return !0;
    return !1
}

function Gl(a, b, c) {
    const d = Cl();
    (c = El(c)) && delete d[c];
    b && (d[a] = b)
}

function Hl(a) {
    return Cl()[a]
}

function Il(a, b, c = 0, d) {
    if (a !== xl(c) || b !== S(zl(c)))
        if (Gl(a, d, c), yl(a, c), R(zl(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (T("web_time_via_jspb")) {
                            const e = new jf;
                            K(e, 1, rl);
                            K(e, 2, a);
                            const f = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
                            Jd(f, jf, 111, yf, e);
                            Ok("foregroundHeartbeatScreenAssociated", f)
                        } else X("foregroundHeartbeatScreenAssociated", {
                            clientDocumentNonce: rl,
                            clientScreenNonce: a
                        })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};

function Jl() {
    var a = S("INNERTUBE_CONTEXT");
    if (!a) return bl(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = va(a);
    T("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = pg();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    ml.h || (ml.h = new ml);
    b = ml.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    if (e = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function Kl(a) {
    var b = a;
    if (a = S("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Na);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
class Ll {}
var Ml = class extends Ll {};
const Nl = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends Ml {})
};

function Ol(a = !0) {
    a = a ? pl() : ol();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
};
class Ei extends Ci {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Mi = new Di,
    Pl = [];
let Rl = Ql,
    Sl = 0;
const Tl = new Map,
    Ul = new Map,
    Vl = new Map;

function Wl(a, b, c, d, e, f, g, h) {
    const k = Rl(),
        l = new vl({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = Xl({}, k);
    e && (f.cttAuthInfo = e);
    var p = () => {
        cl(new Kf("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (T("il_via_jspb")) {
        e = of ((new pf).h(k), l.getAsJspb());
        c && c.visualElement ? (p = new nf, c.clientScreenNonce && K(p, 2, c.clientScreenNonce), mf(p, c.visualElement.getAsJspb()), g && L(p, 4, zf[g]), J(e, nf, 5, p)) : c && p();
        d && K(e, 3, d);
        if (T("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
            c = new Ne;
            h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
            for (var m of h) m.screenVeType && (h = Le(new Me, m.screenVeType), Kd(c, 1, Me, h));
            J(e, Ne, 7, c)
        }
        Tk(e, f, a)
    } else m = {
            csn: k,
            pageVe: l.getAsJson()
        }, T("expectation_logging") &&
        h && h.screenCreatedLoggingExpectations && (m.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations), c && c.visualElement ? (m.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (m.implicitGesture.gestureType = g)) : c && p(), d && (m.cloneCsn = d), a ? Hk("screenCreated", m, a, f) : X("screenCreated", m, f);
    Ji(Mi, new Ei(k));
    Tl.clear();
    Ul.clear();
    Vl.clear();
    return k
}

function Yl(a, b, c, d, e = !1) {
    Zl(a, b, c, [d], e)
}

function Zl(a, b, c, d, e = !1) {
    const f = Xl({
        cttAuthInfo: Hl(b) || void 0
    }, b);
    for (const h of d) {
        var g = h.getAsJson();
        (ua(g) || !g.trackingParams && !g.veType) && cl(Error("Child VE logged with no data"));
        if (T("no_client_ve_attach_unless_shown")) {
            const k = $l(h, b);
            if (g.veType && !Ul.has(k) && !Vl.has(k) && !e) {
                Tl.set(k, [a, b, c, h]);
                return
            }
            g = $l(c, b);
            Tl.has(g) ? am(c, b) : Vl.set(g, !0)
        }
    }
    d = d.filter(h => {
        h.csn !== b ? (h.csn = b, h = !0) : h = !1;
        return h
    });
    if (T("il_via_jspb")) {
        const h = qf((new rf).h(b), c.getAsJspb());
        ra(d, k => {
            k = k.getAsJspb();
            Kd(h, 3, I, k)
        });
        "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, void 0, h) : Uk(h, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: ra(d, h => h.getAsJson())
    }, "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, c) : a ? Hk("visualElementAttached", c, a, f) : X("visualElementAttached", c, f)
}

function bm(a, b, c, d, e, f) {
    cm(a, b, c, e, f)
}

function cm(a, b, c, d, e) {
    dm(c, b);
    const f = Xl({
        cttAuthInfo: Hl(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new uf).h(b), c = c.getAsJspb(), c = J(d, I, 2, c), c = L(c, 4, 1), e && J(c, lf, 3, e), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, void 0, c) : Pk(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, e) : a ? Hk("visualElementShown", e, a, f) : X("visualElementShown", e, f))
}

function em(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = Xl({
        cttAuthInfo: Hl(b) || void 0,
        endOfSequence: d
    }, b);
    T("il_via_jspb") ? (e = (new tf).h(b), c = c.getAsJspb(), c = J(e, I, 2, c), L(c, 4, d ? 16 : 8), "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, void 0, c) : Qk(c, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, d) : a ? Hk("visualElementHidden", d, a, f) : X("visualElementHidden", d, f))
}

function fm(a, b, c, d) {
    var e = void 0;
    dm(c, b);
    e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = Xl({
        cttAuthInfo: Hl(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new sf).h(b), c = c.getAsJspb(), c = J(d, I, 2, c), L(c, 4, zf[e]), "UNDEFINED_CSN" === b ? Y("visualElementGestured", f, void 0, c) : Rk(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementGestured", f, e) : a ? Hk("visualElementGestured", e, a, f) : X("visualElementGestured", e, f))
}

function Ql() {
    if (T("enable_web_96_bit_csn")) var a = Ol();
    else if (T("enable_web_96_bit_csn_no_crypto")) a = Ol(!1);
    else {
        a = Math.random() + "";
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        a = Gb(b, 3)
    }
    return a
}

function Y(a, b, c, d) {
    Pl.push({
        S: a,
        payload: c,
        J: d,
        options: b
    });
    Sl || (Sl = Ni())
}

function Oi(a) {
    if (Pl) {
        for (const b of Pl)
            if (T("il_via_jspb") && b.J) switch (b.J.h(a.csn), b.S) {
                case "screenCreated":
                    Tk(b.J, b.options);
                    break;
                case "visualElementAttached":
                    Uk(b.J, b.options);
                    break;
                case "visualElementShown":
                    Pk(b.J, b.options);
                    break;
                case "visualElementHidden":
                    Qk(b.J, b.options);
                    break;
                case "visualElementGestured":
                    Rk(b.J, b.options);
                    break;
                case "visualElementStateChanged":
                    Sk(b.J, b.options);
                    break;
                default:
                    cl(new Kf("flushQueue unable to map payloadName to JSPB setter"))
            } else b.payload && (b.payload.csn =
                a.csn, X(b.S, b.payload, b.options));
        Pl.length = 0
    }
    Sl = 0
}

function $l(a, b) {
    return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`
}

function dm(a, b) {
    if (T("no_client_ve_attach_unless_shown")) {
        var c = $l(a, b);
        Ul.set(c, !0);
        am(a, b)
    }
}

function am(a, b) {
    a = $l(a, b);
    Tl.has(a) && (b = Tl.get(a) || [], Yl(b[0], b[1], b[2], b[3], !0), Tl.delete(a))
}

function Xl(a, b) {
    T("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
    return a
};
x("ytLoggingLatencyUsageStats_", u.ytLoggingLatencyUsageStats_ || {});
const gm = window;
class hm {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var im = gm.performance || gm.mozPerformance || gm.msPerformance || gm.webkitPerformance || new hm;
la(im.clearResourceTimings || im.webkitClearResourceTimings || im.mozClearResourceTimings || im.msClearResourceTimings || im.oClearResourceTimings || pa, im);
const jm = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse", "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];

function km(a) {
    var b = {
            Rb: {}
        },
        c = Lg();
    if (void 0 !== fj.h) {
        const d = fj.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new Kf("InnerTubeTransportService is already initialized", a);
    } else fj.h = new fj(b, a, c)
}

function lm(a, b) {
    return r(function*() {
        var c;
        const d = null == a ? void 0 : null == (c = a.ka) ? void 0 : c.sessionIndex;
        c = yield mb(Ng(0, {
            sessionIndex: d
        }));
        return Promise.resolve(Object.assign({}, mm(b), c))
    })
}

function nm(a, b, c) {
    return r(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.I) ? 0 : d.context) {
            d = b.I.context;
            for (var e of []) yield e.Zb(d)
        }
        var f;
        if (null == (f = a.i) ? 0 : f.hc(b.input, b.I)) return yield a.i.Vb(b.input, b.I);
        var g;
        if ((f = null == (g = b.config) ? void 0 : g.bc) && a.h.has(f)) var h = a.h.get(f);
        else {
            g = JSON.stringify(b.I);
            let m;
            e = null != (m = null == (h = b.T) ? void 0 : h.headers) ? m : {};
            b.T = Object.assign({}, b.T, {
                headers: Object.assign({}, e, c)
            });
            h = Object.assign({}, b.T);
            "POST" === b.T.method && (h = Object.assign({}, h, {
                body: g
            }));
            h = a.l.fetch(b.input,
                h, b.config);
            f && a.h.set(f, h)
        }
        h = yield h;
        var k;
        let l;
        if (h && "error" in h && (null == (k = h) ? 0 : null == (l = k.error) ? 0 : l.details)) {
            k = h.error.details;
            for (const m of k)(k = m["@type"]) && -1 < jm.indexOf(k) && (delete m["@type"], h = m)
        }
        f && a.h.has(f) && a.h.delete(f);
        let p;
        !h && (null == (p = a.i) ? 0 : p.Qb(b.input, b.I)) && (h = yield a.i.Ub(b.input, b.I));
        return h || void 0
    })
}

function om(a, b, c) {
    var d = {
        ka: {
            identity: Og
        }
    };
    b.context || (b.context = Jl());
    return new z(e => r(function*() {
        var f = Kl(c);
        f = mg(f) ? "same-origin" : "cors";
        if (a.j.Pa) {
            var g, h = null == d ? void 0 : null == (g = d.ka) ? void 0 : g.sessionIndex;
            g = Ng(0, {
                sessionIndex: h
            });
            f = Object.assign({}, mm(f), g)
        } else f = yield lm(d, f);
        g = Kl(c);
        h = {};
        S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = S("INNERTUBE_API_KEY"));
        T("json_condensed_response") && (h.prettyPrint = "false");
        g = lg(g, h || {}, !1);
        h = {
            method: "POST",
            mode: mg(g) ? "same-origin" : "cors",
            credentials: mg(g) ? "same-origin" : "include"
        };
        var k = {};
        const l = {};
        for (const p of Object.keys(k)) k[p] && (l[p] = k[p]);
        0 < Object.keys(l).length && (h.headers = l);
        e(nm(a, {
            input: g,
            T: h,
            I: b,
            config: d
        }, f))
    }))
}

function mm(a) {
    const b = {
        "Content-Type": "application/json"
    };
    S("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = S("EOM_VISITOR_DATA") : S("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = S("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = S("LOGGED_IN", !1);
    S("DEBUG_SETTINGS_METADATA") && (b["X-Debug-Settings-Metadata"] = S("DEBUG_SETTINGS_METADATA"));
    "cors" !== a && ((a = S("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = S("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a =
        S("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = S("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var fj = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ia || (a.ia = {});
        a.ia = Object.assign({}, Nl, a.ia)
    }
};
var ej = new bj;
let pm;

function qm() {
    if (!pm) {
        const a = kj();
        km({
            fetch: (b, c) => mb(fetch(new Request(b, c)))
        });
        dj(a);
        pm = a.resolve(ej)
    }
    return pm
};

function rm(a) {
    return r(function*() {
        yield sm();
        cl(a)
    })
}

function tm(a) {
    return r(function*() {
        yield sm();
        bl(a)
    })
}

function um(a) {
    r(function*() {
        var b = yield bi();
        b ? yield Wi(a, b): (yield il(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            S: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            S: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && X(b.S, b.payload))
    })
}

function sm() {
    return r(function*() {
        try {
            yield il()
        } catch (a) {}
    })
};

function vm() {
    wm.h || (wm.h = new wm);
    return wm.h
}

function xm(a, b, c) {
    const d = El(c);
    return null === a.csn || d === a.csn || c ? d : (a = new Kf("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), cl(a), null)
}

function ym(a) {
    return Math.floor(Number(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "")) || 1
}
var wm = class {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    s() {
        this.clear();
        this.csn = El()
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.h.clear();
        this.csn = null
    }
    B(a, b, c) {
        b = this.i(a);
        var d = a.visualElement ? a.visualElement : b,
            e = this.m.has(d),
            f = this.h.get(d);
        this.m.add(d);
        this.h.set(d, !0);
        a.impressionLog && !e && a.impressionLog();
        if (b || a.visualElement)
            if (c = xm(this, a, c)) {
                var g = !(!a.data || !a.data.loggingDirectives);
                if (ym(a) || g) {
                    d = a.visualElement ?
                        a.visualElement : ul(b);
                    var h = a.interactionLoggingClientData;
                    b = a.interactionLoggingClientDataJspbType;
                    g || e ? ym(a) & 4 ? f || (a = this.client, dm(d, c), e = Xl({
                            cttAuthInfo: Hl(c) || void 0
                        }, c), T("il_via_jspb") ? (f = (new uf).h(c), d = d.getAsJspb(), f = J(f, I, 2, d), f = L(f, 4, 4), b && J(f, lf, 3, b), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, void 0, f) : Pk(f, e, a)) : (b = {
                            csn: c,
                            ve: d.getAsJson(),
                            eventType: 4
                        }, h && (b.clientData = h), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, b) : a ? Hk("visualElementShown", b, a, e) : X("visualElementShown", b, e))) :
                        ym(a) & 1 && !e && cm(this.client, c, d, h, b) : cm(this.client, c, d, h, b)
                }
            }
    }
    v(a, b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.l.has(e);
        const f = this.h.get(e);
        this.l.add(e);
        this.h.set(e, !1);
        if (!1 === f) return !0;
        if (!d && !a.visualElement) return !1;
        c = xm(this, a, c);
        if (!c || !ym(a) && a.data && a.data.loggingDirectives) return !1;
        d = a.visualElement ? a.visualElement : ul(d);
        ym(a) & 8 ? em(this.client, c, d) : ym(a) & 2 && !b && (a = this.client, b = Xl({
            cttAuthInfo: Hl(c) || void 0
        }, c), T("il_via_jspb") ? (e = (new tf).h(c), d = d.getAsJspb(), d =
            J(e, I, 2, d), d = L(d, 4, 2), "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, void 0, d) : Qk(d, b, a)) : (d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, d) : a ? Hk("visualElementHidden", d, a, b) : X("visualElementHidden", d, b)));
        return !0
    }
    i(a) {
        let b;
        const c = a.data || (null == (b = a.props) ? void 0 : b.data);
        let d, e;
        if (T("il_use_view_model_logging_context") && (null == c ? 0 : null == (d = c.context) ? 0 : null == (e = d.loggingContext) ? 0 : e.loggingDirectives)) return c.context.loggingContext.loggingDirectives.trackingParams ||
            "";
        let f, g;
        if (null == c ? 0 : null == (f = c.rendererContext) ? 0 : null == (g = f.loggingContext) ? 0 : g.loggingDirectives) return c.rendererContext.loggingContext.loggingDirectives.trackingParams || "";
        if (null == c ? 0 : c.loggingDirectives) return c.loggingDirectives.trackingParams || "";
        let h;
        return (null == (h = a.veContainer) ? 0 : h.trackingParams) ? a.veContainer.trackingParams : (null == c ? void 0 : c.trackingParams) || ""
    }
};

function zm() {
    Am.h || (Am.h = new Am)
}

function Bm(a) {
    zm();
    cg(vm().B).bind(vm())(a, void 0, 8)
}

function Cm(a) {
    zm();
    cg(vm().v).bind(vm())(a, void 0, 8)
}
var Am = class {
    j(a) {
        cg(vm().j).bind(vm())(a)
    }
    clear() {
        cg(vm().clear).bind(vm())()
    }
};

function Dm() {
    Em.h || (Em.h = new Em);
    return Em.h
}

function Fm(a, b, c = {}) {
    a.i.add(c.layer || 0);
    a.m = () => {
        Gm(a, b, c);
        const d = Bl(c.layer);
        if (d) {
            for (const e of a.B) Hm(a, e[0], e[1] || d, c.layer);
            for (const e of a.F) Im(a, e[0], e[1])
        }
    };
    El(c.layer) || a.m();
    if (c.ma)
        for (const d of c.ma) Jm(a, d, c.layer);
    else bl(Error("Delayed screen needs a data promise."))
}

function Gm(a, b, c = {}) {
    var d = void 0;
    c.layer || (c.layer = 0);
    d = void 0 !== c.La ? c.La : c.layer;
    const e = El(d);
    d = Bl(d);
    let f;
    d && (void 0 !== c.parentCsn ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && "UNDEFINED_CSN" !== e && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = S("EVENT_ID");
    "UNDEFINED_CSN" === e && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    T("combine_ve_grafts") && e && Km(a, e);
    T("no_client_ve_attach_unless_shown") && d && e && am(d, e);
    let k;
    try {
        k = Wl(a.client, b, f, c.la, c.cttAuthInfo, g, c.Tb, c.loggingExpectations)
    } catch (m) {
        gl(m, {
            dc: b,
            rootVe: d,
            Yb: void 0,
            Sb: e,
            Xb: f,
            la: c.la
        });
        bl(m);
        return
    }
    Il(k, b, c.layer, c.cttAuthInfo);
    e && "UNDEFINED_CSN" !== e && d && !Fl(e) && em(a.client, e, d, !0);
    a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = k || "");
    zm();
    cg(vm().s).bind(vm())();
    const l = Bl(c.layer);
    e && "UNDEFINED_CSN" !== e && l && (T("web_mark_root_visible") || T("music_web_mark_root_visible")) && cg(bm)(void 0, k, l, void 0, void 0, void 0);
    a.i.delete(c.layer || 0);
    a.m = void 0;
    let p;
    null == (p = a.ca.get(c.layer)) || p.forEach((m, q) => {
        m ? Hm(a, q, m, c.layer) :
            l && Hm(a, q, l, c.layer)
    });
    Lm(a)
}

function Mm(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    cg(() => {
        [28631].includes(b) || (cl(new Kf("createClientScreen() called with a non-page VE", b)), b = 83769);
        c.isHistoryNavigation || a.h.push({
            rootVe: b,
            key: c.key || ""
        });
        a.B = [];
        a.F = [];
        c.ma ? Fm(a, b, c) : Gm(a, b, c)
    })()
}

function Jm(a, b, c = 0) {
    cg(() => {
        b.then(d => {
            a.i.has(c) && a.m && a.m();
            const e = El(c),
                f = Bl(c);
            if (e && f) {
                var g;
                (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) && Yl(a.client, e, f, ul(d.response.trackingParams));
                var h;
                (null == d ? 0 : null == (h = d.playerResponse) ? 0 : h.trackingParams) && Yl(a.client, e, f, ul(d.playerResponse.trackingParams))
            }
        })
    })()
}

function Hm(a, b, c, d = 0) {
    cg(() => {
        if (a.i.has(d)) return a.B.push([b, c]), !0;
        const e = El(d),
            f = c || Bl(d);
        if (e && f) {
            if (T("combine_ve_grafts")) {
                const g = a.l.get(f.toString());
                g ? g.push(b) : (a.v.set(f.toString(), f), a.l.set(f.toString(), [b]));
                a.N || (a.N = Rg(() => {
                    Km(a, e)
                }, 1200))
            } else Yl(a.client, e, f, b);
            return !0
        }
        return !1
    })()
}

function Nm(a, b) {
    return cg(() => {
        const c = ul(b);
        Hm(a, c, void 0, 8);
        return c
    })()
}

function Km(a, b) {
    if (void 0 === b) {
        const c = Dl();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Km(a, c[d])
    } else a.l.forEach((c, d) => {
        (d = a.v.get(d)) && Zl(a.client, b, d, c)
    }), a.l.clear(), a.v.clear(), a.N = void 0
}

function Om(a, b, c = 0) {
    (c = El(c)) && fm(a.client, c, b)
}

function Pm(a, b, c, d = 0) {
    if (!b) return !1;
    d = El(d);
    if (!d) return !1;
    fm(a.client, d, ul(b), c);
    return !0
}

function Qm(a, b) {
    const c = b.getScreenLayer && b.getScreenLayer();
    b.visualElement ? Om(a, b.visualElement, c) : (zm(), b = cg(vm().i).bind(vm())(b), Pm(a, b, void 0, c))
}

function Im(a, b, c, d = 0) {
    const e = El(d);
    d = b || Bl(d);
    if (e && d)
        if (a = a.client, b = Xl({
                cttAuthInfo: Hl(e) || void 0
            }, e), T("il_via_jspb")) {
            const f = new vf;
            f.h(e);
            c = f;
            d = d.getAsJspb();
            J(c, I, 2, d);
            "UNDEFINED_CSN" === e ? Y("visualElementStateChanged", b, void 0, f) : Sk(f, b, a)
        } else c = {
            csn: e,
            ve: d.getAsJson(),
            clientData: c
        }, "UNDEFINED_CSN" === e ? Y("visualElementStateChanged", b, c) : a ? Hk("visualElementStateChanged", c, a, b) : X("visualElementStateChanged", c, b)
}

function Lm(a) {
    for (var b = 0; b < a.s.length; b++) {
        var c = a.s[b];
        try {
            c()
        } catch (d) {
            bl(d)
        }
    }
    a.s.length = 0;
    for (b = 0; b < a.K.length; b++) {
        c = a.K[b];
        try {
            c()
        } catch (d) {
            bl(d)
        }
    }
}
var Em = class {
    constructor() {
        this.B = [];
        this.F = [];
        this.h = [];
        this.s = [];
        this.K = [];
        this.l = new Map;
        this.v = new Map;
        this.i = new Set;
        this.ca = new Map
    }
    j(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return Pm(this, a.clickTrackingParams, b, c)
    }
    stateChanged(a, b, c = 0) {
        this.visualElementStateChanged(ul(a), b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.i.has(c) ? this.F.push([a, b]) : Im(this, a, b, c)
    }
};
const Rm = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    Sm = RegExp("^(?:[a-z]+:)?//", "i");

function Tm(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (Q("IDToken", b), Um()) : "notifications_check_registration" === a && Vm(b)
}

function Wm() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function Xm(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function Ym(a) {
    return r(function*() {
        const b = Xm(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Sf(Ff);
        return Zm().then(e => om(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? $m(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                tm(g);
                Promise.reject(g)
            })
        }))
    })
}

function an(a, b) {
    var c = El(8);
    if (null == c || !b) return a;
    a = Sm.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function $m(a, b) {
    a.deviceId && Q("DeviceId", a.deviceId);
    a.timestampSec && Q("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Dm();
    Mm(d);
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: an(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && bn(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = {
            screenLayer: 8,
            visualElement: Nm(d, g.data.clickTrackingParams)
        }, Bm(h);
        cn(a.displayCap)
    }).catch(() => {})
}

function bn(a) {
    if (!Lj(a, Ef)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: Lj(a, Ef).serializedInteractionsRequest
        },
        c = Sf(Gf);
    return Zm().then(d => om(d, b, c)).then(d => d)
}

function cn(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
                let f;
                var c = ul(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
                const g = {
                        screenLayer: 8,
                        visualElement: c
                    },
                    h = wl(82046),
                    k = Dm();
                Hm(k, h, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: h
                };
                Bm(c);
                Qm(k, c);
                Cm(g)
            }
        }
    })
}

function Vm(a) {
    const b = [dn(a), Of("RegistrationTimestamp").then(en), fn(), gn(), hn()];
    Promise.all(b).catch(() => {
        Q("IDToken", a);
        Um();
        return Promise.resolve()
    })
}

function en(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function dn(a) {
    return Of("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function fn() {
    return Of("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function gn() {
    return Of("Endpoint").then(a => jn().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function hn() {
    return Of("application_server_key").then(a => kn().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function ln() {
    var a = Notification.permission;
    if (Rm[a]) return Rm[a]
}

function Um() {
    Q("RegistrationTimestamp", 0);
    Promise.all([jn(), mn(), nn(), kn()]).then(([a, b, c, d]) => {
        b = b ? If(b) : null;
        c = c ? If(c) : null;
        d = d ? Gb(new Uint8Array(d), 4) : null;
        on(a, b, c, d)
    }).catch(() => {
        on()
    })
}

function on(a = null, b = null, c = null, d = null) {
    Nf().then(e => {
        e && (Q("Endpoint", a), Q("P256dhKey", b), Q("AuthKey", c), Q("application_server_key", d), Q("Permission", Notification.permission), Promise.all([Of("DeviceId"), Of("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || He.length;
                for (k = 0; 256 > k; k++) f[k] = He[0 | Math.random() * h];
                h = f.join("")
            }
            pn(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function pn(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: ln()
                    }
                }
            },
            h = Sf(Hf);
        return Zm().then(k => om(k, g, h).then(() => {
            Q("DeviceId", a);
            Q("RegistrationTimestamp", Date.now());
            Q("TimestampLowerBound", Date.now())
        }, l => {
            rm(l)
        }))
    })
}

function jn() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function mn() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function nn() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function kn() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Zm() {
    return r(function*() {
        try {
            return yield il(!0), qm()
        } catch (a) {
            return yield rm(a), Promise.reject(a)
        }
    })
};
let qn = self.location.origin + "/";

function kl(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? Ae.registration.scope : qn;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let rn = void 0;

function sn(a) {
    return r(function*() {
        rn || (rn = yield a.open("yt-appshell-assets"));
        return rn
    })
}

function tn(a, b) {
    return r(function*() {
        const c = yield sn(a), d = b.map(e => un(c, e));
        return Promise.all(d)
    })
}

function vn(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function wn(a, b) {
    return r(function*() {
        const c = yield sn(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function xn(a, b, c) {
    return r(function*() {
        yield(yield sn(a)).put(b, c)
    })
}

function yn(a, b) {
    r(function*() {
        yield(yield sn(a)).delete(b)
    })
}

function un(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var zn = ki("yt-serviceworker-metadata", {
    R: {
        auth: {
            O: 1
        },
        ["resource-manifest-assets"]: {
            O: 2
        }
    },
    aa: !0,
    upgrade(a, b) {
        b(1) && Bh(a, "resource-manifest-assets");
        b(2) && Bh(a, "auth")
    },
    version: 2
});
let An = null;

function Bn(a) {
    return Sh(zn(), a)
}

function Cn() {
    return r(function*() {
        const a = yield bi();
        if (a) return Dn.h || (Dn.h = new Dn(a)), Dn.h
    })
}

function En(a, b) {
    return r(function*() {
        yield xh(yield Bn(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return V(d.h.put(b, e)).then(() => {
                An = e;
                let f = !0;
                return Gh(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function Fn(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield xh(yield Bn(a.token), ["resource-manifest-assets"], "readonly", e => Gh(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.L().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function Gn(a) {
    return r(function*() {
        An || (yield xh(yield Bn(a.token), ["resource-manifest-assets"], "readonly", b => Gh(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            An = c.getKey()
        })));
        return An
    })
}
var Dn = class {
    constructor(a) {
        this.token = a
    }
};

function Hn() {
    return r(function*() {
        const a = yield bi();
        if (a) return In.h || (In.h = new In(a)), In.h
    })
}

function Jn(a, b) {
    return r(function*() {
        yield Dh(yield Bn(a.token), "auth", b, "shell_identifier_key")
    })
}

function Kn(a) {
    return r(function*() {
        return (yield(yield Bn(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function Ln(a) {
    return r(function*() {
        yield(yield Bn(a.token)).clear("auth")
    })
}
var In = class {
    constructor(a) {
        this.token = a
    }
};

function Mn() {
    r(function*() {
        const a = yield Hn();
        a && (yield Ln(a))
    })
};
var Nn = class extends M {
        constructor(a) {
            super(a)
        }
        hasUrl() {
            return null != Ld(this, 1)
        }
    },
    On = [0, oe];

function Pn(a) {
    a = a.o;
    const b = E(a);
    return Hd(a, b, Nn, 1, !1, !(2 & b))
}
var Qn = class extends M {
    constructor(a) {
        super(a)
    }
};
Qn.A = [1];
var Rn = function(a, b) {
    return (c, d) => {
        a: {
            if (wc.length) {
                const f = wc.pop();
                rc(f, d);
                f.h.init(c, void 0, void 0, d);
                c = f
            } else c = new vc(c, d);
            try {
                const f = new a,
                    g = f.o;
                Td(b)(g, c);
                var e = f;
                break a
            } finally {
                c.h.clear(), c.l = -1, c.i = -1, 100 > wc.length && wc.push(c)
            }
            e = void 0
        }
        return e
    }
}(Qn, [0,
    pe, On
]);

function Sn(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(Tn(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function Tn(a) {
    return Pn(Rn(decodeURIComponent(a))).reduce((b, c) => {
        (c = Md(c, 1)) && b.push(c);
        return b
    }, [])
};

function Un(a) {
    return r(function*() {
        const b = yield il();
        if (b && null != Ld(b, 3)) {
            var c = yield Hn();
            c && (c = yield Kn(c), Ld(b, 3) !== c && (yn(a.caches, a.h), Mn()))
        }
    })
}

function Vn(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield Wn(a.i), b = yield Sn(c), yield tn(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield Xn(), yield xn(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield Yn(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function Zn(a) {
    return r(function*() {
        yield Un(a);
        return Vn(a)
    })
}

function Wn(a) {
    return r(function*() {
        try {
            return yield u.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function Xn() {
    return r(function*() {
        var a = yield il();
        let b;
        a && null != Ld(a, 3) && (b = Md(a, 3));
        return b ? (a = yield Hn()) ? Promise.resolve(Jn(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function Yn(a, b, c) {
    return r(function*() {
        const d = yield Cn();
        if (d) try {
            yield En(d, b)
        } catch (e) {
            yield rm(e)
        }
        b.push(c);
        try {
            yield wn(a.caches, b)
        } catch (e) {
            yield rm(e)
        }
        return Promise.resolve()
    })
}

function $n(a, b) {
    return r(function*() {
        return vn(a.caches, b)
    })
}

function ao(a) {
    return r(function*() {
        return vn(a.caches, a.h)
    })
}
var bo = class {
    constructor() {
        var a = self.caches;
        let b = kl("/app_shell");
        T("service_worker_forward_exp_params") && (b += self.location.search);
        var c = kl("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var co = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function eo(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield $n(a.h, c.url);
        if (d) return um({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: W()
        }), d;
        fo(c);
        return go(b)
    })
}

function ho(a, b) {
    return r(function*() {
        const c = yield io(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield ao(a.h);
        if (d) return jo(a), ko(d, b);
        lo(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function mo(a, b) {
    b = new URL(b);
    if (!a.config.ja.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.za)
        if (a = b.get(c.key), void 0 === c.value || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function no(a, b) {
    return r(function*() {
        const c = yield ao(a.h);
        if (!c) return lo(a), go(b);
        jo(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(W() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return ko(c, b);
        d = yield io(b);
        return d.response && d.response.ok ? d.response : ko(c, b)
    })
}

function go(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !oo(b) ? b : u.fetch(a.request))
}

function fo(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    Cn().then(c => {
        if (c) {
            var d = Gn(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = Fn(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                rm(e)
            }).finally(() => {
                um({
                    appShellAssetLoadReport: b,
                    timestamp: W()
                })
            })
        } else um({
            appShellAssetLoadReport: b,
            timestamp: W()
        })
    })
}

function jo(a) {
    um({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: W()
    })
}

function lo(a) {
    um({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: W()
    })
}

function ko(a, b) {
    if (!T("sw_nav_preload_pbj")) return a;
    const c = new co,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !oo(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function io(a) {
    return r(function*() {
        try {
            return {
                response: yield go(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function oo(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var xo = class {
    constructor() {
        var a = po;
        var b = {
            Ca: qo,
            Ma: ro([so, /\/signin/, /\/logout/]),
            ja: ["/", "/feed/downloads"],
            za: to([{
                key: "feature",
                value: "ytca"
            }]),
            ya: uo(T("kevlar_sw_app_wide_fallback") ? vo : wo)
        };
        this.h = a;
        this.config = b
    }
};
const yo = /^\/$/,
    wo = [yo, /^\/feed\/downloads$/],
    vo = [yo, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function uo(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const zo = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function ro(a) {
    a = uo(a);
    return new RegExp(`${zo.source}(${a.source})`)
}
const Ao = uo([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    qo = new RegExp(`${zo.source}(${Ao.source})`),
    so = /purge_shell=1/;

function to(a = []) {
    const b = [];
    for (const c of tg) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
ro([so]);
to();
var Co = class {
    constructor() {
        var a = po,
            b = Bo,
            c = self;
        if (u.URLPattern) {
            var d = [];
            T("service_worker_static_routing_exclude_embed") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/embed*"
                    })
                },
                source: "network"
            });
            T("service_worker_static_routing_exclude_innertube") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/youtubei/v1/*"
                    })
                },
                source: "network"
            })
        } else d = [];
        this.h = c;
        this.i = a;
        this.s = b;
        this.F = Jf;
        this.j = d
    }
    init() {
        this.h.oninstall = this.v.bind(this);
        this.h.onactivate = this.l.bind(this);
        this.h.onfetch =
            this.m.bind(this);
        this.h.onmessage = this.B.bind(this)
    }
    v(a) {
        this.h.skipWaiting();
        if (T("service_worker_static_routing_registration") && 0 < this.j.length && a.registerRouter) try {
            a.registerRouter(this.j)
        } catch (c) {}
        const b = Zn(this.i).catch(c => {
            rm(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), T("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return r(function*() {
            var c = b.s,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Ma.test(e.url)) jl.h && (delete jl.h.h, u.__SAPISID = void 0, R("VISITOR_DATA", void 0), R("SESSION_INDEX", void 0), R("DELEGATED_SESSION_ID", void 0), R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
                void 0)), d = a.respondWith, c = c.h, yn(c.caches, c.h), Mn(), c = go(a), d.call(a, c);
            else if (c.config.Ca.test(e.url)) a.respondWith(eo(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.config.ja;
                (!T("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.config.ya.test(f.pathname)) ? a.respondWith(ho(c, a)): mo(c, e.url) ? a.respondWith(no(c, a)) : d && a.respondWith(go(a))
            }
        })
    }
    B(a) {
        const b = a.data;
        this.F.includes(b.type) ? Tm(a) : "refresh_shell" === b.type && Vn(this.i).catch(c => {
            rm(c)
        })
    }
};

function Do() {
    let a = v("ytglobal.storage_");
    a || (a = new Eo, x("ytglobal.storage_", a));
    return a
}
var Eo = class {
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return Fo()
        })
    }
};

function Fo() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
x("ytglobal.storageClass_", Eo);

function Go(a, b) {
    Do().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Ho(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Ho(null == c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Io {
    constructor() {
        var a = Jo;
        this.handleError = Ko;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= og("ytidb_transaction_ended_event_rate_limit_session", .2)
    }
    W(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                T("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                T("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Go(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= og("ytidb_transaction_ended_event_rate_limit_transaction",
                    .1) && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    }
}

function Ho(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
Eg(Bg(), {
    H: [{
        Ka: /Failed to fetch/,
        weight: 500
    }],
    G: []
});
var {
    handleError: Ko = al,
    W: Jo = X
} = {
    handleError: tm,
    W: function(a, b) {
        return r(function*() {
            yield sm();
            X(a, b)
        })
    }
};
for (Zg = new Io; 0 < Yg.length;) {
    const a = Yg.shift();
    switch (a.type) {
        case "ERROR":
            Zg.handleError(a.payload);
            break;
        case "EVENT":
            Zg.W(a.eventType, a.payload)
    }
}
jl.h = new jl;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(bn(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = ul(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = wl(74726);
            b = Dm();
            Hm(b, d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            Bm(c);
            Qm(b, c)
        }
        Cm(a)
    }
};
self.onpush = function(a) {
    a.waitUntil(Of("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return Ym(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(Wm())
};
self.onpushsubscriptionchange = function() {
    Um()
};
const po = new bo,
    Bo = new xo;
(new Co).init();