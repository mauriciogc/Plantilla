var globales = {
    op: {
        w: window,
        d: document
    },
    i: function () {
        'use strict';
        /*global $, Waypoint*/

        var t = this,
            o = t.op;

        $('body').jpreLoader();

        $(o.w).on("resize", t.aa);
        $(o.d).on("ready", t.aa);

        t.p();
        t.a();
        t.h();
        t.s();
    },
    p: function () {
        'use strict';
        var o = this.op;

        if ($(o.w).width() > 480) {
            $('.parallax-bg1').parallax("50%", 0.5);
        }
    },
    a: function () {
        'use strict';
        var o = this.op;

        $('.animar').appear();
        $(o.d.body).on('appear', '.animar', function () {
            var an = $(this).attr("data-animation");

            if (an === "shake" || an === "tada" || an === "bounceIn") {
                $(this).css('opacity', '1');
            }
            if ($(o.w).width() > 480) {
                $(this).each(function () {
                    $(this).addClass(an);
                });
            }
        });
    },
    h: function () {
        'use strict';
        var t = this,
            o = t.op,
            x,
            w = document.getElementsByClassName('waypoint');

        for (x = 0; x < w.length; x += 1) {
            t.wp(x, w);
        }
    },
    s: function () {
        'use strict';
        $('body').scrollTo(0);
        $.scrollTo(0);

        $('.hwpMenu').click(function (evt) {
            var i = this.getAttribute('data-scroll-id'),
                c = this.getAttribute('data-scroll-class');
            if (i) {
                $('body').scrollTo(document.getElementById(i), 800);
            }

            if (c) {
                $('body').scrollTo(document.getElementsByClassName(c)[0], 800);
            }
        });
    },
    aa: function () {
        'use strict';

        var dA = $('.domAlto'),
            ww = $(window).width(),
            wh = $(window).height(),
            dvC = $('.domAlto .vcenter'),
            daC = $('.domAlto .content'),
            cH,
            pH,
            tM;

        dA.css({
            'min-height': wh + 'px'
        });

        cH = dvC.height();
        pH = dA.height();
        tM = (pH - cH) / 2;

        dvC.css({
            "margin-top": tM + "px"
        });

        cH = daC.height();
        pH = dA.height();
        tM = (pH - cH) / 2;

        daC.css({
            "margin-top": tM + "px"
        });
    },
    wp: function (x, p) {
        "use strict";

        var hp = document.getElementById('headerWayPoint');

        return new Waypoint({
            element: p[x],
            offset: 20,
            handler: function (dire) {
                var u = this.element.getAttribute('data-animate-up'),
                    d = this.element.getAttribute('data-animate-down');
                if (dire === 'down' && d) {
                    hp.className = 'headerWayPoint ' + d;
                } else if (dire === 'up' && u) {
                    hp.className = 'headerWayPoint ' + u;
                }
            }
        });
    }
};

//Document Ready
$(document).ready(function () {
    "use strict";
    globales.i();
});

