(function(){"use strict";$(window).load(function(){$("body").delay(550).css({overflow:"visible"})});$(document).ready(function(e){(function(e){e('a[href="#"]').click(function(e){e.preventDefault()})})(jQuery);e(".close").on("click",function(){e(this).parent().fadeOut()});e("html").css("overflow-x","hidden");e(function(){e("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);t=t.length?t:e("[name="+this.hash.slice(1)+"]");if(t.length){e("html,body").animate({scrollTop:t.offset().top-90},800);return false}}})});e("[data-countdown]").each(function(){var t=e(this),n=e(this).data("countdown");t.countdown(n,function(e){t.html(e.strftime("<div><p>%w</p><span>Weeks</span></div><div><p>%D</p><span>Days</span></div><div><p>%H</p><span>Hours</span></div><div><p>%M</p><span>Minutes</span></div><div><p>%S</p><span>Seconds</span></div>"))})});e("[data-countdown-mobile]").each(function(){var t=e(this),n=e(this).data("countdown-mobile");t.countdown(n,function(e){t.html(e.strftime("<div><p>%D</p><span>Days</span></div><div><p>%H</p><span>Hours</span></div><div><p>%M</p><span>Minutes</span></div>"))})})})})()