afdfygdyigasuidg;
/**
 * jQuery.AmLich v0.3.1
 * (https://github.com/ichuot/jquery-amlich)
 *
 * Copyright 2004 Ho Ngoc Duc [http://come.to/duc]. All Rights Reserved.
 * Permission to use, copy, modify, and redistribute this software and its
 * documentation for personal, non-commercial use is hereby granted provided that
 * this copyright notice appears in all copies.
 */
 !function(n) {
    function t(n, t, a, r, e) {
        this.day = n,
        this.month = t,
        this.year = a,
        this.leap = r,
        this.jd = e
    }
    function a(n) {
        return Math.floor(n)
    }
    function r(n, t, r) {
        var e = a((14 - t) / 12)
          , s = r + 4800 - e
          , i = t + 12 * e - 3
          , h = n + a((153 * i + 2) / 5) + 365 * s + a(s / 4) - a(s / 100) + a(s / 400) - 32045;
        return h
    }
    function e(n, a) {
        var e, s, h, d, l, o, c, u, g, m = new Array;
        for (e = new Array(29,30),
        s = new Array(12),
        h = a >> 17,
        d = 15 & a,
        l = e[a >> 16 & 1],
        o = r(1, 1, n),
        c = o + h,
        u = a >> 4,
        i = 0; i < 12; i++)
            s[12 - i - 1] = e[1 & u],
            u >>= 1;
        if (0 == d)
            for (g = 1; 12 >= g; g++)
                m.push(new t(1,g,n,0,c)),
                c += s[g - 1];
        else {
            for (g = 1; d >= g; g++)
                m.push(new t(1,g,n,0,c)),
                c += s[g - 1];
            for (m.push(new t(1,d,n,1,c)),
            c += l,
            g = d + 1; 12 >= g; g++)
                m.push(new t(1,g,n,0,c)),
                c += s[g - 1]
        }
        return m
    }
    function h(n) {
        var t;
        return t = 1300 > n ? x[n - 1200] : 1400 > n ? B[n - 1300] : 1500 > n ? S[n - 1400] : 1600 > n ? P[n - 1500] : 1700 > n ? Q[n - 1600] : 1800 > n ? q[n - 1700] : 1900 > n ? Y[n - 1800] : 2e3 > n ? F[n - 1900] : 2100 > n ? K[n - 2e3] : W[n - 2100],
        e(n, t)
    }
    function d(n, a) {
        if (n > _ || $ > n || a[0].jd > n)
            return new t(0,0,0,0,n);
        for (var r = a.length - 1; n < a[r].jd; )
            r--;
        var e = n - a[r].jd;
        return ret = new t(a[r].day + e,a[r].month,a[r].year,a[r].leap,n),
        ret
    }
    function l(n, t, a) {
        var e, s;
        return e = h(a),
        s = r(n, t, a),
        s < e[0].jd && (e = h(a - 1)),
        d(s, e)
    }
    function o(n, t) {
        var a, e, s, i, l, o, c, u, g;
        if (12 > n ? (o = n + 1,
        c = t) : (o = 1,
        c = t + 1),
        i = r(1, n, t),
        l = r(1, o, c),
        a = h(t),
        s = a[0].jd,
        u = new Array,
        i >= s)
            for (g = i; l > g; g++)
                u.push(d(g, a));
        else if (s > i && s > l)
            for (a = h(t - 1),
            g = i; l > g; g++)
                u.push(d(g, a));
        else if (s > i && l >= s) {
            for (e = h(t - 1),
            g = i; s > g; g++)
                u.push(d(g, e));
            for (g = s; l > g; g++)
                u.push(d(g, a))
        }
        return u
    }
    function c(n) {
        if (0 == n.day)
            return "";
        var t = g(n)
          , a = "Ng??y " + t[0] + ", th??ng " + t[1] + ", n??m " + t[2];
        return a
    }
    function u(n) {
        return X[(n + 6) % 10] + " " + z[(n + 8) % 12]
    }
    function g(n) {
        var t, a, r;
        return t = X[(n.jd + 9) % 10] + " " + z[(n.jd + 1) % 12],
        a = X[(12 * n.year + n.month + 3) % 10] + " " + z[(n.month + 1) % 12],
        1 == n.leap && (a += " (N)"),
        r = u(n.year),
        new Array(t,a,r)
    }
    function m(n, t, a, r) {
        var e, s = E[(n.jd + 1) % 7];
        return e = s + " " + t + "/" + a + "/" + r,
        e += " (",
        e = e + "Ng??y " + n.day + " th??ng " + n.month,
        1 == n.leap && (e += " nhu???n"),
        e
    }
    function y() {
        var n = m(an, tn.getDate(), tn.getMonth() + 1, tn.getFullYear());
        return n += " n??m " + u(an.year) + ")"
    }
    function p(n, t, a) {
        return n = null == n ? an.day : n,
        t = null == t ? an.month : t,
        a = null == a ? an.year : a,
        t > 4 || t >= 4 && n >= 15 ? a + 544 : a + 544 - 1
    }
    function f(n) {
        for (var t = (n + 1) % 12, a = J[t % 6], r = "", e = 0, s = 0; 12 > s; s++)
            "1" == a.charAt(s) && (r += z[s],
            r += " (" + (2 * s + 23) % 24 + "-" + (2 * s + 1) % 24 + ")",
            e++ < 5 && (r += ", "),
            3 == e && (r += "\n"));
        return r
    }
    function v(n) {
        var t, r, e, s, i, h, d, l, o;
        return t = (n - 2451545) / 36525,
        r = t * t,
        e = nn / 180,
        s = 357.5291 + 35999.0503 * t - 1559e-7 * r - 4.8e-7 * t * r,
        i = 280.46645 + 36000.76983 * t + 3032e-7 * r,
        h = (1.9146 - .004817 * t - 14e-6 * r) * Math.sin(e * s),
        h = h + (.019993 - 101e-6 * t) * Math.sin(2 * e * s) + 29e-5 * Math.sin(3 * e * s),
        l = i + h,
        o = 125.04 - 1934.136 * t,
        d = l - .00569 - .00478 * Math.sin(o * e),
        d *= e,
        d -= 2 * nn * a(d / (2 * nn))
    }
    function T(n, t) {
        return a(v(n - .5 - t / 24) / nn * 12)
    }
    function N(n) {
        return X[2 * (n - 1) % 10]
    }
    function b(n, t) {
        var a = "";
        return a += M(n, t)
    }
    function w(n) {
        var t = "N??m " + u(n) + " " + n
          , a = "";
        a += '<table align="center">\n',
        a += "<tbody>\n",
        a += "<tr>\n",
        a += '  <td colspan="3" class="amlich-tennam" onClick="showYearSelect();">' + t + "</td>\n",
        a += "</tr>\n";
        for (var r = 1; 12 >= r; r++)
            r % 3 == 1 && (a += "<tr>\n"),
            a += "<td>\n",
            a += M(r, n),
            a += "</td>\n",
            r % 3 == 0 && (a += "</tr>\n");
        return a += "</tbody>\n",
        a += "</table>\n"
    }
    function M(n, t) {
        var a, r, e, s, i = o(n, t);
        if (0 == i.length)
            return !1;
        var h = i[0]
          , d = (h.jd + 1) % 7
          , l = (u(h.year),
        "");
        for (l += '<table class="amlich" border="0" cellpadding="0" cellspacing="0" width="' + k.tableWidth + '">\n',
        l += "<tbody>\n",
        l += D(n, t),
        a = 0; 6 > a; a++) {
            for (l += "<tr>\n",
            r = 0; 7 > r; r++)
                e = 7 * a + r,
                d > e || e >= d + i.length ? (l += '<td class="ngaythang">\n',
                l += '  <div class="cn">&nbsp;</div>\n',
                l += '  <div class="am">&nbsp;</div>\n',
                l += "</td>\n") : (s = e - d + 1,
                h = i[e - d],
                l += I(h, s, n, t));
            l += "</tr>\n"
        }
        return l += "</tbody>\n",
        l += "</table>\n"
    }
    function j(n, t) {
        var a = n > 1 ? n - 1 : 12
          , r = n > 1 ? t : t - 1;
        return '<a class="prev-month" data-yy="' + r + '" data-mm="' + a + '" href="#">&nbsp;&lsaquo;&nbsp;</a>'
    }
    function A(n, t) {
        var a = 12 > n ? n + 1 : 1
          , r = 12 > n ? t : t + 1;
        return '<a class="next-month" data-yy="' + r + '" data-mm="' + a + '" href="#">&nbsp;&rsaquo;&nbsp;</a>'
    }
    function C(n, t) {
        return '<a class="prev-year" data-yy="' + (t - 1) + '" data-mm="' + n + '" href="#">&lsaquo;&lsaquo;</a>'
    }
    function L(n, t) {
        return '<a class="next-year" data-yy="' + (t + 1) + '" data-mm="' + n + '" href="#">&rsaquo;&rsaquo;</a>'
    }
    function D(n, t) {
        var a = ""
          , r = n + "/" + t;
        switch (k.type) {
        case "month":
            a += "<tr>\n",
            a += '  <td colspan="2" class="navi-l">' + C(n, t) + " &nbsp;" + j(n, t) + "</td>\n",
            a += '  <td colspan="3" class="tenthang">' + r + "</td>\n",
            a += '  <td colspan="2" class="navi-r">' + A(n, t) + " &nbsp;" + L(n, t) + "</td></tr>\n",
            a += "</tr>\n";
            break;
        case "year":
            a += "<tr>\n",
            a += '  <td colspan="7" class="tenthang">' + r + "</td>\n",
            a += "</tr>\n";
            break;
        case "calendar":
            var e = g(an)
              , s = G(tn.getDate(), tn.getMonth() + 1, an.day, an.month);
            a += "<tr>\n",
            a += '  <td colspan="7">\n',
            a += '    <table class="calendar" border="0" cellpadding="4" cellspacing="0" width="100%">\n',
            a += "      <tbody>\n",
            a += "        <tr>\n",
            a += '          <td colspan="2" class="calendar-month">Th??ng ' + (tn.getMonth() + 1) + " N??m " + tn.getFullYear() + "</td>\n",
            a += "        </tr>\n",
            a += "        <tr>\n",
            a += '          <td colspan="2" class="calendar-day">\n',
            a += '            <span class="day-num">' + tn.getDate() + "</span><br>\n",
            a += '            <span class="day-tuan">' + E[(an.jd + 1) % 7] + "</span>\n",
            a += "          </td>\n",
            a += "        </tr>\n",
            a += "        <tr>\n",
            a += '          <td width="50%" class="calendar-b-left" valign="top">\n',
            a += '            <span class="lunar-month-name">Th??ng ' + R[an.month - 1] + "</span><br>\n",
            a += '            <span class="lunar-day-num">' + an.day + "</span><br>\n",
            a += '            <span class="lunar-year-name"><strong>' + e[2] + "</strong></span>\n",
            a += "          </td>\n",
            a += '          <td width="50%" class="calendar-b-right" valign="top">\n',
            a += "            <span>Ng??y <strong>" + e[0] + "</strong></span><br>\n",
            a += "            <span>Th??ng <strong>" + e[1] + "</strong></span><br>\n",
            a += "            <span>Gi??? ?????u <strong>" + (N(an.jd) + " " + z[0]) + "</strong></span><br>\n",
            a += "            <span>Ti???t <strong>" + O[T(an.jd + 1, 7)] + "</strong></span><br>\n",
            a += "            <span>PL: <strong>" + p() + "</strong></span>\n",
            a += "          </td>\n",
            a += "        </tr>\n",
            a += '        <tr class="calendar-holiday">' + ("" != s ? '<td colspan="2">' + s + "</td>" : "") + "</tr>\n",
            a += "        <tr>\n",
            a += '          <td colspan="2" class="calendar-hoangdao">Gi??? ho??ng ?????o: ' + f(an.jd) + "</td>\n",
            a += "        </tr>\n",
            a += "      </tbody>\n",
            a += "    </table>\n",
            a += "  </td>\n",
            a += "</tr>\n",
            a += "<tr>\n",
            a += '  <td colspan="2" class="navi-l">' + C(n, t) + " &nbsp;" + j(n, t) + "</td>\n",
            a += '  <td colspan="3" class="tenthang">' + r + "</td>\n",
            a += '  <td colspan="2" class="navi-r">' + A(n, t) + " &nbsp;" + L(n, t) + "</td></tr>\n",
            a += "</tr>\n"
        }
        a += "<tr>\n";
        for (var i = 0; 6 >= i; i++)
            a += '  <td class="ngaytuan">' + U[i] + "</td>\n";
        return a += "</tr>\n"
    }
    function H(t, a) {
        var r = "";
        return n.each(Z.solar, function(n, e) {
            return e.d == t && e.m == a ? (r = e.i + " (" + e.d + "/" + e.m + " DL)",
            !1) : void 0
        }),
        r
    }
    function V(t, a) {
        var r = "";
        return n.each(Z.lunar, function(n, e) {
            return e.d == t && e.m == a ? (r = e.i + " (" + e.d + "/" + e.m + " ??L)",
            !1) : void 0
        }),
        r
    }
    function G(n, t, a, r) {
        var e = V(a, r)
          , s = "";
        return "" != e && (s = e),
        e = H(n, t),
        "" != e && (s = "" == s ? e : s + ", " + e),
        s
    }
    function I(n, t, a, r) {
        var e, s, i, h, e = "ngaythang", s = "t2t6", i = "am", d = "", l = "", o = (n.jd + 1) % 7;
        0 == o ? (s = "cn",
        h = "red") : 6 == o && (s = "t7",
        h = "green"),
        t == tn.getDate() && a == tn.getMonth() + 1 && r == tn.getFullYear() && (e = "homnay"),
        l = V(n.day, n.month),
        "" != l && (e = "leam",
        d = l),
        l = H(t, a),
        "" != l && (e = "leduong",
        d = "" == d ? l : d + ", " + l),
        d = "" == d ? c(n) : d,
        1 == n.day && 1 == n.month && (e = "tet"),
        1 == n.leap && (i = "am2");
        var u = n.day;
        (1 == t || 1 == u) && (u = n.day + "/" + n.month + (1 == n.leap ? "<sup>N</sup>" : ""));
        var g = ""
          , m = n.day + "," + n.month + "," + n.year + "," + n.leap;
        return m += "," + n.jd + "," + t + "," + a + "," + r,
        g += '<td class="' + e + '"',
        g += null != n ? ' title="' + d + '" data-args="' + m + '"' : "",
        g += ">\n",
        g += '  <div class="' + s + '">' + t + "</div>\n",
        g += '  <div class="' + i + '">' + u + "</div>\n",
        g += "</td>\n"
    }
    var k = {}
      , x = new Array(2256290,4625872,3361244,5786032,4367536,2796216,5270096,3847488,2407236,297654,3446192,2118514,4606320,3040505,5526704,4090448,2714711,5003968,3582816,145518,4756192,3197308,5687648,4248736,2808488,5158224,3823264,2403765,4990416,215342,2020018,4499792,3069145,5419680,3978576,2643799,5131680,3581360,2250100,296235,3385660,5663024,4221600,2796968,5286736,3820384,2403044,4892016,3560048,128294,4384048,3042490,5527200,3955536,2706134,5130976,3712224,2151636,4641376,200019,5682464,4109984,2840233,5264752,3951056,2466229,4891824,3451472,2026065,273234,2930090,5417824,4101552,2640758,5130608,3695792,2274483,4614736,3173179,353708,4238176,2829016,5261792,3843280,2413749,4764240,3323168,1897762,4371872,182622,5412272,4082096,2663798,5022896,3582544,2144852,4615488,3059052,5548896,4232048)
      , B = new Array(2967992,5261680,3826864,2387109,4774480,33e5,1889985,4368096,3052283,338222,3983712,2544983,5035168,3462480,2184531,4609696,3188432,1746385,4231856,174683,5286224,3715744,2339493,4762960,3427744,1887137,4367728,3035897,5526128,247443,2517815,5008032,3582800,2119507,4606816,3188348,5677792,4116832,2681192,322890,3725984,2252453,4740816,3427040,2065874,4367056,2937210,5417552,3978528,150900,4894112,3560912,2249651,4605360,3187376,1811121,4237904,2667865,5139232,232150,2446181,4756336,3425648,2008435,4477616,2910826,5298512,3955360,2599623,305774,3560160,2149091,4629856,3068603,5558944,4117840,2775769,5133984,3712720,148829,4870832,3320016,1893714,4371104,2930026,5287248,3952032,2533286,5023088,222491,2204020,4613424,3238556,5528224,4107088,2763737,5253984,3711856,2380517,4772192)
      , S = new Array(3335344,1864995,4250272,2972491,5396176,3943136,2532311,5022416,3592528,126357,4502816,3061404,5549472,4085200,2827705,5260720,3842736,2271925,4761936,207698,1895073,4238176,2905532,5393264,4081008,2511735,5001904,3565904,2189652,279978,3058524,5547744,4213472,2663912,5154144,3723936,2288294,4642128,3298976,121178,4363728,2902779,5392816,3974352,2544343,4895392,3454288,2121044,4599200,190811,1774961,4213168,2794745,5137584,3697296,2272934,4746064,3287904,1878754,272695,3098987,5294432,3859664,2517799,4905632,3431120,2111187,4597472,3183328,101677,4114768,2675929,5158048,3585680,2315686,4740528,3417552,1877426,4362928,182935,5400912,3830944,2405800,4893536,3560368,2108276,4597104,3166896,1757873,255637,2648793,5135008,3713872,2248405,4737760,3318640,2049251,4248224,2873675,5289296)
      , P = new Array(3954336,2398119,4888016,3558112,2140596,4498640,3068496,1682081,4109648,165229,5123488,3708336,2378613,4737392,3318960,1881268,4352656,2796892,5266256,246454,2528744,4887280,3557744,2124132,4510880,2943580,5428880,4085456,2829146,320110,3707616,2280150,4770128,3200160,1766562,4240784,2905820,5264816,3941840,158011,5018288,3451216,2077013,4484256,3059024,1649505,4082608,2762233,5252464,230699,2271910,4647248,3304096,1751715,4238160,2902907,5393120,3843440,2511575,306470,3463504,1989973,4478624,3053264,1725906,4082400,2663674,5154e3,3723856,134505,4633936,3290528,1878946,4232624,2967996,5392752,3974320,2405048,4876880,214740,2075476,4467616,3052400,3035890,5523824,3957993,6345888,4909648,3619494,370029,4598624,3245539,5673696,4114811,6596944,5166240,3725992,6075728,4740784,3419556)
      , Q = new Array(5809616,4362960,2937522,5417296,3978457,6318752,4894032,3561302,6048672,281179,3229043,5657264,4303179,6482256,5139104,3714472,6200144,4737888,3320548,363087,4477536,2871906,5297488,4020890,6444704,4888272,3623382,6048224,4629712,191821,5558864,4117819,66e5,5027232,3773864,6198704,4868528,3320180,5809328,273061,2943569,5270848,3845563,6433632,5018480,3558134,6048112,4613296,3175587,339365,4090715,6575824,5253856,3707879,6197984,4770144,3395925,5690528,4250192,185173,5396128,3843834,6432208,5018320,3582646,5941584,4502688,3062436,5549392,259418,6572960,5154224,3887736,6181552,4745520,3306837,5794464,4238160,2906962,337078,4040042,6333680,5001824,3467878,5952816,4479648,3061411,5543632,4213472,167069,5154e3,3723992,6206032,4633888,3265861,5680544,4363728,2905522,5392816,3974393)
      , q = new Array(6464688,5024336,3650647,6056768,4631968,3169124,5673840,4344176,2935153,329291,3828392,6216272,4872864,3321541,5809888,4494064,3166946,5425504,4052122,404810,5035344,3562327,6051488,4630224,3315156,5673680,4237660,2806960,5288608,232282,6204752,4869536,3451812,5809520,4477616,3060339,5531952,3959483,6449824,314037,3754839,6048608,4629872,3298020,5689696,4122940,6608160,5167776,3889961,386413,4868832,3450325,5939920,4378960,2943570,5420320,3987115,6335904,5002704,230587,6178224,4629168,3199668,5679696,4306220,6581024,5156192,3823081,6329200,304215,3450229,5919408,4483664,2972242,5397152,4041547,6465248,5018336,3589862,379478,4641952,3074725,5559632,4216480,2807201,5154256,3887833,6312624,4893008,208213,5812896,4371792,3042642,5393824,4040139,6464880,5132720,3582327,6055216,4614800)
      , Y = new Array(3193507,5679952,4336544,2927457,5415792,3953128,6345056,4908208,3631398,5823136,4479824,3217106,5647072,4104928,2679506,5163344,3724630,6075680,4634256,3300772,5789136,4335056,2926003,5415600,4040887,6334800,4895904,3519141,5942608,4478384,3156852,5645680,4215545,6574768,5138768,3698006,6183584,4631376,3299028,5786336,4367728,2966867,5296800,3926183,6346064,4872864,3452325,5936592,4606688,3058356,5547216,4117176,6599312,5027152,3692375,6172064,4756944,3296629,5786032,4367536,2991283,5270160,3845528,6318928,4991840,3511141,5935984,4606320,3172708,5432480,3992170,6478480,5135056,3746518,6171360,4756192,3328725,5687632,4248736,2872483,5289616,3823527,6313392,4990416,3577269,5935792,4499792,3070292,5551264,3978576,2648914,5133744,3811190,6169968,4739760,3320485,5695824,4221600,2800291,5286736)
      , F = new Array(3951576,6441696,5023088,3691733,6083168,4512080,3233108,5658272,4233936,2774482,5262048,3843510,6333648,4772432,3396181,5813568,4380320,2928034,5412272,4147575,6572400,5022896,3585205,6056528,4615488,3124052,5647200,4232560,2904818,5261680,3827046,6214816,4778576,3369621,5790416,4467552,3114723,5411552,4049111,6474064,5035168,3528870,5944656,4609696,3253684,5645776,4231888,2806450,5286224,3716439,6188192,4765008,3494741,5787040,4367792,3097971,5526192,3975592,6351184,5008032,3583654,5942096,4606816,3189476,5678448,4215392,2683491,5167424,3726151,6084256,4757200,3427797,5917392,4367568,2938036,5419600,3986776,6337856,4896160,3626406,6067632,4606384,3189108,5678256,4237904,2730578,5139744,3779911,6204256,4756336,3427061,5917040,4482224,2913443,5302864,4024920,6444704,4893392,3577557,6066912)
      , K = new Array(4639072,3070292,5559456,4119120,2782546,5133984,3712935,6202832,4887216,3320501,5810512,4371616,2931364,5287248,3954137,6441888,5023152,3625334,6050416,4614448,3176756,5532320,4107600,2775890,5262176,3712742,6202592,4772448,3336805,5690656,4250272,2971299,5396176,3951355,6441424,5022928,3657910,5943888,4502816,3071269,5551520,4085200,2774450,5261744,3843447,6202544,4762192,3387989,5795104,4238688,2968419,5395312,4082152,6343024,5002416,3631270,5954128,4479648,3122852,5548752,4215520,2675427,5163344,3724631,6214816,4643152,3300693,5789344,4368080,2905556,5395120,3975608,6465840,4895888,3454630,5942608,4609440,3058532,5547376,4215472,2797939,5138736,3697463,6187680,4762960,3353301,5778272,4367728,3035876,5296480,3860824,6346016,4905616,3496614,5920464,4598496,3189204,5546704,4116816,2681170)
      , W = new Array(5158176,3725095,6204832,4871600,3550645,5916080,4498096,3060404,5548368,3978585,6449952,5025104,3692390,6050672,4736368,3302772,5788336,4221264,2783571,5266080,3910311,6203088,4868832,3515109,5940560,4379296,3007140,5428560,4086459,6444704,5019344,3754422,6179504,4630736,3200181,5681808,4240720,2780498,5262752,3904871,6329712,4868528,3451253,5924016,4483728,2931348,5401424,4074336,2665313,5018992,3689190,6082912,4646048,3075365,5560976,4217680,2897619,5253856,3838935,6329040,4901200,3331414,5813408,4372112,3038612,5395888,4072954,6563248,5149360,3582646,6056272,4617376,3256997,5549392,4216224,2796403,5383536,3822455,6312624,4876624,3435862,5790368,4369232,3036884,5524192,3974512,2647250,5034592,3599014,5952848,4610720,3190181,5674448,4213456,2795955,5285072,3855031,6206032,4764992,3396950)
      , X = ["Gi??p", "???t", "B??nh", "??inh", "M???u", "K???", "Canh", "T??n", "Nh??m", "Qu??"]
      , z = ["T??", "S???u", "D???n", "M???o", "Th??n", "T???", "Ng???", "M??i", "Th??n", "D???u", "Tu???t", "H???i"]
      , E = ["Ch??? Nh???t", "Th??? Hai", "Th??? Ba", "Th??? T??", "Th??? N??m", "Th??? S??u", "Th??? B???y"]
      , J = ["110100101100", "001101001011", "110011010010", "101100110100", "001011001101", "010010110011"]
      , O = ["Xu??n ph??n", "Thanh minh", "C???c v??", "L???p h???", "Ti???u m??n", "Mang ch???ng", "H??? ch??", "Ti???u th???", "?????i th???", "L???p thu", "X??? th???", "B???ch l???", "Thu ph??n", "H??n l???", "S????ng gi??ng", "L???p ????ng", "Ti???u tuy???t", "?????i tuy???t", "????ng ch??", "Ti???u h??n", "?????i h??n", "L???p xu??n", "V?? th???y", "Kinh tr???p"]
      , R = ["M???t", "Hai", "Ba", "B???n", "N??m", "S??u", "B???y", "T??m", "Ch??n", "M?????i", "M?????i m???t", "M?????i hai"]
      , U = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
      , Z = {
        solar: [{
            d: 1,
            m: 1,
            i: "T???t D????ng l???ch"
        }, {
            d: 9,
            m: 1,
            i: "Ng??y H???c sinh - Sinh vi??n Vi???t Nam"
        }, {
            d: 3,
            m: 2,
            i: "Ng??y th??nh l???p ?????ng C???ng s???n Vi???t Nam"
        }, {
            d: 27,
            m: 2,
            i: "Ng??y Th???y thu???c Vi???t Nam"
        }, {
            d: 8,
            m: 3,
            i: "Ng??y Qu???c t??? Ph??? n???"
        }, {
            d: 8,
            m: 3,
            i: "Ng??y th??nh l???p ??o??n Thanh ni??n C???ng s???n H??? Ch?? Minh"
        }, {
            d: 26,
            m: 3,
            i: "Ng??y th??nh l???p ??o??n Thanh ni??n C???ng s???n H??? Ch?? Minh"
        }, {
            d: 21,
            m: 4,
            i: "Ng??y S??ch Vi???t Nam"
        }, {
            d: 30,
            m: 4,
            i: "Ng??y Th???ng nh???t ?????t n?????c"
        }, {
            d: 1,
            m: 5,
            i: "Ng??y Qu???c t??? Lao ?????ng"
        }, {
            d: 15,
            m: 5,
            i: "Ng??y th??nh l???p ?????i Thi???u ni??n Ti???n phong H??? Ch?? Minh"
        }, {
            d: 19,
            m: 5,
            i: "Ng??y sinh c???a Ch??? t???ch H??? Ch?? Minh"
        }, {
            d: 1,
            m: 6,
            i: "Ng??y Qu???c t??? Thi???u nhi"
        }, {
            d: 5,
            m: 6,
            i: "Ng??y B??c H??? ra ??i t??m ???????ng c???u n?????c"
        }, {
            d: 27,
            m: 7,
            i: "Ng??y Th????ng binh Li???t s??"
        }, {
            d: 19,
            m: 8,
            i: "Ng??y C??ch m???ng th??ng T??m th??nh c??ng"
        }, {
            d: 2,
            m: 9,
            i: "Ng??y Qu???c kh??nh"
        }, {
            d: 13,
            m: 10,
            i: "Ng??y Doanh nh??n Vi???t Nam"
        }, {
            d: 20,
            m: 10,
            i: "Ng??y th??nh l???p H???i Ph??? n??? Vi???t Nam"
        }, {
            d: 20,
            m: 11,
            i: "Ng??y Nh?? gi??o Vi???t Nam"
        }, {
            d: 22,
            m: 12,
            i: "Ng??y th??nh l???p Qu??n ?????i Nh??n d??n Vi???t Nam"
        }, {
            d: 24,
            m: 12,
            i: "Ng??y L??? Gi??ng Sinh"
        }],
        lunar: [{
            d: 1,
            m: 1,
            i: "T???t Nguy??n ????n"
        }, {
            d: 15,
            m: 1,
            i: "T???t Nguy??n ti??u"
        }, {
            d: 3,
            m: 3,
            i: "T???t H??n th???c"
        }, {
            d: 10,
            m: 3,
            i: "Gi??? T??? H??ng V????ng"
        }, {
            d: 15,
            m: 4,
            i: "L??? Ph???t ?????n"
        }, {
            d: 5,
            m: 5,
            i: "T???t ??oan ng???"
        }, {
            d: 15,
            m: 7,
            i: "Vu Lan"
        }, {
            d: 15,
            m: 8,
            i: "T???t Trung thu"
        }, {
            d: 23,
            m: 12,
            i: "??ng T??o ch???u tr???i"
        }]
    }
      , $ = r(31, 1, 1200)
      , _ = r(31, 12, 2199)
      , nn = Math.PI
      , tn = new Date
      , an = l(tn.getDate(), tn.getMonth() + 1, tn.getFullYear())
      , rn = tn.getMonth() + 1
      , en = tn.getFullYear();
    n.fn.amLich = function(a) {
        k = n.extend({
            type: "month",
            tableWidth: "500px"
        }, a);
        var r = this;
        switch (r.on("click", "td.ngaythang, td.homnay, td.tet, td.leam, td.leduong", function(a) {
            a.preventDefault();
            var e = n(this).attr("data-args");
            if (void 0 === e)
                return !1;
            var i = e.split(",")
              , h = parseInt(i[0])
              , d = parseInt(i[1])
              , l = parseInt(i[2])
              , o = parseInt(i[3])
              , c = parseInt(i[4])
              , u = parseInt(i[5])
              , y = parseInt(i[6])
              , v = parseInt(i[7])
              , b = new t(h,d,l,o,c)
              , w = g(b)
              , M = G(u, y, h, d);
            switch (s = "",
            k.type) {
            case "year":
            case "month":
                s += "??? " + m(b, u, y, v) + " ??m l???ch)\n",
                s += "??? Ng??y " + w[0] + ", th??ng " + w[1] + ", n??m " + w[2] + "\n",
                s += "??? Gi??? ?????u ng??y " + (N(c) + " " + z[0]) + "\n",
                s += "??? Ti???t " + O[T(c + 1, 7)] + "\n",
                s += "??? Gi??? ho??ng ?????o: " + f(c) + "\n",
                s += "??? PL: " + p(h, d, l) + "\n",
                s += "" != M ? "??? " + M : "",
                alert(s);
                break;
            case "calendar":
                r.find(".calendar .calendar-month").html("Th??ng " + y + " N??m " + v),
                r.find(".calendar .calendar-day .day-num").html(u),
                r.find(".calendar .calendar-day .day-tuan").html(E[(c + 1) % 7]),
                r.find(".calendar .lunar-day-num").html(h),
                r.find(".calendar .lunar-month-name").html("Th??ng " + R[d - 1] + (1 == o ? " (N)" : "")),
                r.find(".calendar .lunar-year-name").html("<strong>" + w[2] + "</strong>"),
                r.find(".calendar .calendar-holiday").html("" != M ? '<td colspan="2">' + M + "</td>" : ""),
                r.find(".calendar .calendar-hoangdao").html("Gi??? ho??ng ?????o: " + f(c)),
                s += "<span>Ng??y <strong>" + w[0] + "</strong></span><br>\n",
                s += "<span>Th??ng <strong>" + w[1] + "</strong></span><br>\n",
                s += "<span>Gi??? ?????u <strong>" + (N(c) + " " + z[0]) + "</strong></span><br>\n",
                s += "<span>Ti???t <strong>" + O[T(c + 1, 7)] + "</strong></span><br>",
                s += "<span>PL: <strong>" + p(h, d, l) + "</strong></span>\n",
                r.find(".calendar .calendar-b-right").html(s)
            }
        }),
        r.on("click", "a.prev-year, a.prev-month, a.next-month, a.next-year", function(t) {
            t.preventDefault();
            var a = n(this).data("yy")
              , e = n(this).data("mm");
            return r.html(b(e, a))
        }),
        r.on("click", "td.ngaytuan", function(n) {
            n.preventDefault()
        }),
        k.type) {
        case "month":
            return r.html(b(rn, en));
        case "year":
            return r.html(w(en));
        case "calendar":
            return r.html(b(rn, en));
        case "text":
            return r.html(y())
        }
    }
}(jQuery);
