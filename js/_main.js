var globales = {
    options: {
        w: window,
        d: document
    },
    init: function () {
        'use strict';
        /*global $*/

        var t = this,
            o = t.options;

        $('body').jpreLoader();

        $(o.w).on("resize", t.ajustarAlto);
        $(o.d).on("ready", t.ajustarAlto);

        t.parallax();
        t.animation();
        t.header();
        t.scroll();
    },
    parallax: function () {
        'use strict';
        var o = this.options;

        if ($(o.w).width() > 480) {
            $('.parallax-bg1').parallax("50%", 0.5);
        }
    },
    animation: function () {
        'use strict';
        var o = this.options;

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
    header: function () {
        'use strict';
        var t = this,
            o = t.options,
            x,
            wP = document.getElementsByClassName('waypoint');

        for (x = 0; x < wP.length; x += 1) {
            t.fnWayPoint(x, wP);
        }
    },
    scroll: function () {
        'use strict';
        $('body').scrollTo(0);
        $.scrollTo(0);

        $('.hwpMenu').click(function (evt) {
            var dsID = this.getAttribute('data-scroll-id'),
                dsClass = this.getAttribute('data-scroll-class');
            if (dsID) {
                $('body').scrollTo(document.getElementById(dsID), 800);
            }

            if (dsClass) {
                $('body').scrollTo(document.getElementsByClassName(dsClass)[0], 800);
            }
        });
    },
    ajustarAlto: function () {
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
    fnWayPoint: function (x, wayPoints) {
        "use strict";
        /*global ajustaAlto, Waypoint, $*/
        var headWayPoint = document.getElementById('headerWayPoint');

        return new Waypoint({
            element: wayPoints[x],
            offset: 20,
            handler: function (dire) {
                var up = this.element.getAttribute('data-animate-up'),
                    down = this.element.getAttribute('data-animate-down');
                if (dire === 'down' && down) {
                    headWayPoint.className = 'headerWayPoint ' + down;
                } else if (dire === 'up' && up) {
                    headWayPoint.className = 'headerWayPoint ' + up;
                }
            }
        });
    }
};

//Document Ready
$(document).ready(function () {
    "use strict";
    /* global globales,window */
    globales.init();
});

