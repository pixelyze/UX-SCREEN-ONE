$(document).ready(function() {

  $('.loader').ClassyLoader({
      percentage: 55,
      speed: 20,
      fontSize: '20px',
      roundedLine: true,
      diameter: 50,
      lineColor: 'rgba(243,88,57,1)',
      remainingLineColor: 'rgba(200,200,200,0.4)',
      lineWidth: 20,
      width:170,
      height:170
  });

  $('.loader2').ClassyLoader({
      percentage: 20,
      speed: 20,
      fontSize: '20px',
      roundedLine: true,
      diameter: 50,
      lineColor: 'rgba(21,101,192,1)',
      remainingLineColor: 'rgba(200,200,200,0.4)',
      lineWidth: 20,
      width:170,
      height:170
  });

  $('.loader3').ClassyLoader({
      percentage: 90,
      speed: 20,
      fontSize: '20px',
      roundedLine: true,
      diameter: 50,
      lineColor: 'rgba(0,230,118,1)',
      remainingLineColor: 'rgba(200,200,200,0.4)',
      lineWidth: 20,
      width:170,
      height:170
  });

  $('.loader4').ClassyLoader({
      percentage: 40,
      speed: 20,
      fontSize: '20px',
      roundedLine: true,
      diameter: 50,
      lineColor: 'rgba(253,216,53,1)',
      remainingLineColor: 'rgba(200,200,200,0.4)',
      lineWidth: 20,
      width:170,
      height:170
  });


});


(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        function t() {
            var e = o(this),
                t = e.data();
            t && (t.triggerInView ? (i.scroll(function() {
                a(e, t)
            }), a(e, t)) : n(e, t))
        }

        function a(e, t) {
            var a = -20;
            !e.hasClass(r) && o.Utils.isInView(e, {
                topoffset: a
            }) && n(e, t)
        }

        function n(e, t) {
            e.ClassyLoader(t).addClass(r)
        }
        var i = o(e),
            r = "js-is-in-view";
        o("[data-classyloader]").each(t)
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        function t() {
            var e = o(this),
                t = e.data();
            t && (t.triggerInView ? (i.scroll(function() {
                a(e, t)
            }), a(e, t)) : n(e, t))
        }

        function a(e, t) {
            var a = -20;
            !e.hasClass(r) && o.Utils.isInView(e, {
                topoffset: a
            }) && n(e, t)
        }

        function n(e, t) {
            e.ClassyLoader(t).addClass(r)
        }
        var i = o(e),
            r = "js-is-in-view";
        o("[data-classyloader]").each(t)
    })
}