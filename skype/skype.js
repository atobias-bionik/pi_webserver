! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
}([function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(1),
        r = o(2),
        i = o(3),
        c = o(4);
    window.swc = window.swc || {}, swc.SDK = swc.SDK || {};
    var a, s = /\d+.\d+.\d+/,
        u = "swc-",
        f = window.document,
        l = {};

    function m(e) {
        return !(null === e || void 0 === e || "" !== e && "true" !== e.toLowerCase())
    }

    function d(e) {
        try {
            return a.getAttribute("data-" + e)
        } catch (e) {
            return
        }
    }

    function w(e) {
        return l[u + e]
    }

    function p(e, t, o, n) {
        var r = t + ".0";
        /\d+\.\d+\.\d+\.\d+/.test(r) || (r = "1.0.0.0");
        var i = "https://config.edge.skype.com/config/v1/SkypeWebControl/" + r + "?" + ["Environment=" + encodeURIComponent(e.toUpperCase()), "Host=" + encodeURIComponent(j()), "Platform=" + encodeURIComponent(K().toString()), "AuthType=" + encodeURIComponent(x()), "clientId=" + encodeURIComponent(b()), "callback=jsonSwcEcsRolloutCallback"].join("&");
        window.jsonSwcEcsRolloutCallback = function(r) {
            try {
                swc.EcsOptions = {
                    Environment: e,
                    Host: j(),
                    Platform: K().toString(),
                    clientId: b(),
                    AuthType: x()
                }, swc.EcsConfig = r.SWC, swc.EcsConfig.environment = e, swc.EcsConfig.version = r.SWC_Rollout.version, t && (0 === t.indexOf("fb-") || s.test(t)) && (swc.EcsConfig.version = t), o(r.SWC_Rollout)
            } catch (e) {
                n && n(e)
            }
            delete window.jsonSwcEcsRolloutCallback
        }, I(i)
    }
    window.location.search.substring(1).split("&").filter(function(e) {
            return 0 === e.indexOf(u)
        }).forEach(function(e) {
            var t = e.split("=");
            l[decodeURIComponent(t[0])] = decodeURIComponent(t[1]) || ""
        }),
        function() {
            for (var e = /((sdk\/(v\d+))|(\d+\.\d+\.\d+))\/(sdk)(.min)?.js$/g, t = 0; t < f.scripts.length; t++) {
                var o = document.scripts[t];
                e.test(o.src) && (a = o)
            }
        }();
    var v, y = function(e, t, o) {
        return (S(e) || C(e)) && function(e, t) {
            var o = /\/v\//g,
                n = C(t);
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var i = e[r];
                    if (!i.replace) continue;
                    i = i.replace(s, t), n && (i = i.replace(o, "/fb/")), e[r] = i
                }
        }(t, e), swc.SDK || (swc.SDK = {}), swc.SDK.host = j(), swc.SDK.version = function() {
            if (!a) return null;
            var e = /sdk\/([\S]+)\//g.exec(a.src);
            if (e) return e[1];
            return null
        }(), swc.SDK.platformId = K(), swc.SDK.authType = x(), swc.SDK.deviceId = b(), swc.SDK.environment = D(), t
    };

    function g() {
        var e = D(),
            t = k(),
            o = function(e) {
                throw Error("Init Failed")
            },
            r = function(o) {
                y(t, o, e),
                    function(e, t, o) {
                        var n = function() {
                            return o && o()
                        };
                        try {
                            if (C(t) || S(t) && c.versionCompare(t, "0.98.1") > 0) {
                                return P("telemetry-bundle", e, t, !0, function() {
                                    swc.Telemetry && (swc.Telemetry.init(e), swc.Telemetry.Context.SDK.setEnvironment(e), swc.Telemetry.Context.SDK.setVersion(t), swc.Telemetry.Context.SDK.setHost(j()), swc.Telemetry.Context.SDK.setPlatformId(swc.SDK.platformId), swc.Telemetry.Context.SDK.setAuthType && swc.Telemetry.Context.SDK.setAuthType(x()));
                                    n()
                                }, n)
                            }
                        } catch (e) {}
                        n()
                    }(e, o.version, function() {
                        return function(e, t) {
                            swc.isManualBoot = (o = m(w("manual-boot") || d("manual-boot")), n = m(w("disable-autostart") || d("disable-autostart")), !(!o && !n)), P("sdk-loader", e, t, !0);
                            var o, n
                        }(e, o.version)
                    })
            };
        n.shouldPolyfill() ? I(O(e) + "/vendors/polyfills.min.js", !0, function() {
            return p(e, t, r, o)
        }) : p(e, t, r, o)
    }

    function b() {
        var e = localStorage.getItem("swc-deviceId");
        return e || (e = r.guid.generate(), localStorage.setItem("swc-deviceId", e)), e
    }

    function h(e) {
        if (!e) return !1;
        var t = e.toLowerCase();
        return "prod" === t || "df" === t || "int" === t || "ppe" === t
    }

    function S(e) {
        return !!e && s.test(e)
    }

    function C(e) {
        if (!e) return !1;
        return /(^(fb-)|(pr-))(\d+)-/g.test(e)
    }

    function I(e, t, o, n) {
        void 0 === t && (t = !1);
        var r = function() {
                return n && n("failed to load " + e)
            },
            i = setTimeout(r, 5e3),
            c = document.createElement("script");
        c.src = e, t && (c.crossOrigin = "anonymous"), c.type = "text/javascript", c.onload = function() {
            clearTimeout(i), o && o()
        }, c.onabort = r;
        var a = document.body || document.head;
        a && a.appendChild(c)
    }

    function P(e, t, o, n, r, i) {
        void 0 === n && (n = !1), I(function(e, t, o) {
            var n = O(e),
                r = 0 === t.indexOf("fb-") ? "fb" : "v";
            return n + "/" + r + "/" + t + "/" + o
        }(t, o, "int" === t ? e + ".js" : e + ".min.js"), n, r, i)
    }

    function k() {
        return w("version") || d("version")
    }

    function x() {
        if (!v) {
            var e = (w("auth-type") || d("auth-type") || "").toLowerCase();
            v = "msa" === e || "aad" === e ? e : "msa"
        }
        return v
    }

    function D() {
        var e = a && a.src.indexOf("latest-swc.") > -1 ? "df" : "prod",
            t = (k() || "").toLowerCase(),
            o = ((h(t) ? t : C(t) ? "int" : void 0) || w("env") || w("environment") || d("environment") || "").toLowerCase();
        return (h(o) ? o : e).toLowerCase()
    }

    function O(e) {
        return "prod" === e ? "https://swc.cdn.skype.com" : "https://latest-swc.cdn.skype.com"
    }

    function j() {
        try {
            return window.location.hostname
        } catch (e) {
            return null
        }
    }

    function K() {
        var e = w("platform-id") || d("platform-id");
        return i.PlatformUtils.getPlatformId(e)
    }
    t.default = (swc.SDK.start = g, void g())
}, function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shouldPolyfill = function() {
        return !(Array.prototype.find && Element.prototype.matches && Object.assign && window.CustomEvent && window.Promise)
    }
}, function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.guid = {
        generate: function() {
            var e = new Uint16Array(8);
            (window.crypto || window.msCrypto).getRandomValues(e);
            var t = 0,
                o = function() {
                    return (4369 | e[t++]).toString(16)
                };
            return o() + o() + "-" + o() + "-" + o() + "-" + o() + "-" + o() + o() + o()
        },
        isGuid: function(e) {
            return /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/.test(e)
        }
    }
}, function(e, t, o) {
    "use strict";
    var n, r, i;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), window.swc = window.swc || {},
        function(e) {
            e[e.iwapp = 927] = "iwapp", e[e.todo = 927] = "todo", e[e.wac = 928] = "wac", e[e.powerbi = 930] = "powerbi", e[e.sharepoint = 931] = "sharepoint", e[e.adminportal = 932] = "adminportal", e[e.yammer = 933] = "yammer", e[e.dynamics365 = 934] = "dynamics365", e[e.dynamicsnav = 934] = "dynamicsnav"
        }(n || (n = {})),
        function(e) {
            e[e.outlook = 915] = "outlook", e[e.interviews = 916] = "interviews", e[e.bing = 917] = "bing", e[e.msn = 918] = "msn", e[e.azureportal = 919] = "azureportal", e[e.onedrive = 920] = "onedrive", e[e.scom = 921] = "scom", e[e.office = 927] = "office", e[e.word = 928] = "word", e[e.excel = 929] = "excel", e[e.powerpoint = 930] = "powerpoint", e[e.sharepoint = 931] = "sharepoint", e[e.adminportal = 932] = "adminportal", e[e.yammer = 933] = "yammer", e[e.dynamics = 934] = "dynamics", e[e["office default"] = 935] = "office default"
        }(r || (r = {})),
        function(e) {
            e[e["outlook.live.com"] = 915] = "outlook.live.com", e[e["outlook-sdf.live.com"] = 915] = "outlook-sdf.live.com", e[e["interviews.skype.com"] = 916] = "interviews.skype.com", e[e["interviews-df.skype.com"] = 916] = "interviews-df.skype.com", e[e["interviews-int.skype.com"] = 916] = "interviews-int.skype.com", e[e["www.bing.com"] = 917] = "www.bing.com", e[e["www.staging-bing-int.com"] = 917] = "www.staging-bing-int.com", e[e["www.bing-int.com"] = 917] = "www.bing-int.com", e[e["www.msn.com"] = 918] = "www.msn.com", e[e["int.msn.com"] = 918] = "int.msn.com", e[e["int1.msn.com"] = 918] = "int1.msn.com", e[e["wtskype2.azurewebsites.net"] = 919] = "wtskype2.azurewebsites.net", e[e["azuresupportextension-ms.hosting.portal.azure.net"] = 919] = "azuresupportextension-ms.hosting.portal.azure.net", e[e["portal.azure.com"] = 919] = "portal.azure.com", e[e["rc.portal.azure.com"] = 919] = "rc.portal.azure.com", e[e["ms.portal.azure.com"] = 919] = "ms.portal.azure.com", e[e["onedrive.live.com"] = 920] = "onedrive.live.com", e[e["www.skype.com"] = 921] = "www.skype.com", e[e["www.office.com"] = 927] = "www.office.com", e[e["microsoft-my.sharepoint.com"] = 931] = "microsoft-my.sharepoint.com", e[e["www.onedrive.com"] = 920] = "www.onedrive.com", e[e["word.office.com"] = 928] = "word.office.com", e[e["word.live.com"] = 928] = "word.live.com", e[e["excell.office.com"] = 929] = "excell.office.com", e[e["excell.live.com"] = 929] = "excell.live.com", e[e["powerpoint.office.com"] = 930] = "powerpoint.office.com", e[e["powerpoint.live.com"] = 930] = "powerpoint.live.com", e[e["sharepoint.office.com"] = 931] = "sharepoint.office.com", e[e["adminportal.office.com"] = 932] = "adminportal.office.com", e[e["www.yammer.com"] = 933] = "www.yammer.com", e[e["dynamics.office.com"] = 934] = "dynamics.office.com", e[e[".office.com"] = 935] = ".office.com"
        }(i || (i = {}));
    var c = function() {
        function e() {}
        return e.getPlatformId = function(e) {
            if (void 0 === e && (e = null), this._platformId) return this._platformId;
            if (swc.SDK && swc.SDK.platformId && swc.SDK.platformId > 0) return this._platformId = swc.SDK.platformId, this._platformId;
            var t = -1;
            return e && (t = this.getPlatformIdByAttribute(e)), t <= 0 && (t = this.getPlatformIdByDomain()), t > 0 ? t : 912
        }, e.getPlatformIdByAttribute = function(e) {
            if (e) {
                e = e.trim().toLowerCase();
                var t = parseInt(e, 10);
                return t && t > 0 ? t : this.getPlatformIdForOffice(e)
            }
            return -1
        }, e.getPlatformName = function() {
            var e = this.getPlatformId();
            return r[e] ? r[e] : "other"
        }, e.getPlatformIdForOffice = function(e) {
            return n[e] || 935
        }, e.getPlatformIdByDomain = function() {
            var t = e.getHost();
            if (i.hasOwnProperty(t)) return i[t];
            for (var o in i)
                if ("." === o.charAt(0) && t.indexOf(o) > 0) return i[o];
            return -1
        }, e.getHost = function() {
            try {
                var e = window.location.hostname;
                return !e && e.length > 0 ? e : ("file:" === window.location.protocol.toLowerCase() && (e = "local"), e)
            } catch (e) {
                return null
            }
        }, e
    }();
    t.PlatformUtils = c
}, function(e, t, o) {
    "use strict";

    function n(e) {
        return parseInt(e, 10)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.versionCompare = function(e, t) {
        try {
            var o = e.split("."),
                r = o[0],
                i = o[1],
                c = o[2],
                a = t.split("."),
                s = a[0],
                u = a[1],
                f = a[2],
                l = n(r) - n(s);
            if (0 === l) {
                var m = n(i) - n(u);
                if (0 === m) {
                    var d = n(c) - n(f);
                    return 0 === d ? 0 : d > 0 ? 1 : -1
                }
                return m > 0 ? 1 : -1
            }
            return l > 0 ? 1 : -1
        } catch (e) {
            return 0
        }
    }
}]);
