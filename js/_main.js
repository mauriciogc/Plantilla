//Inicia
function iniJs() {
    'use strict';
    /*global ajustaAlto,fnWayPoint,scrollTo, $*/
    var w = window,
        d = document,
        wP = document.getElementsByClassName('waypoint'),
        x;

    //Preloader
    $('body').jpreLoader();

    $(w).on("resize", ajustaAlto);
    $(d).on("ready", ajustaAlto);

    //Parallax
    if ($(w).width() > 480) {
        $('.parallax-bg1').parallax("50%", 0.5);
    }

    //Animaciones
    $('.animar').appear();
    $(d.body).on('appear', '.animar', function () {
        var an = $(this).attr("data-animation");

        if (an === "shake" || an === "tada" || an === "bounceIn") {
            $(this).css('opacity', '1');
        }
        if ($(w).width() > 480) {
            $(this).each(function () {
                $(this).addClass(an);
            });
        }
    });

    //Header
    for (x = 0; x < wP.length; x += 1) {
        fnWayPoint(x, wP);
    }


    $('body').scrollTo(0);
    $.scrollTo(0);

    $('.hwpMenu').click(function (evt) {
        var dscrollid = this.getAttribute('data-scroll-id'),
            dscrollclass = this.getAttribute('data-scroll-class');
        if (dscrollid) {
            $('body').scrollTo(document.getElementById(dscrollid), 800);
        }

        if (dscrollclass) {
            $('body').scrollTo(document.getElementsByClassName(dscrollclass)[0], 800);
        }
    });
}


//ajustaAlto
var ajustaAlto = function () {
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
    fnWayPoint = function (x, wayPoints) {
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
    };

//Document Ready
$(document).ready(function () {
    "use strict";
    /* global iniJs */
    iniJs();
});

/*property
    addClass, appear, attr, body, className, click, css, each, element,
    getAttribute, getElementById, getElementsByClassName, handler, height,
    jpreLoader, length, offset, on, parallax, ready, removeClass, width, console
*/
