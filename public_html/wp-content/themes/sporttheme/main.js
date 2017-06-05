var mod_pagespeed_DfCYbvWDHc = "!function(a,b){function c(){function a(){\"undefined\"!=typeof _wpmejsSettings&&(c=b.extend(!0,{},_wpmejsSettings)),c.success=c.success||function(a){var b,c;\"flash\"===a.pluginType&&(b=a.attributes.autoplay&&\"false\"!==a.attributes.autoplay,c=a.attributes.loop&&\"false\"!==a.attributes.loop,b&&a.addEventListener(\"canplay\",function(){a.play()},!1),c&&a.addEventListener(\"ended\",function(){a.play()},!1))},b(\".wp-audio-shortcode, .wp-video-shortcode\").not(\".mejs-container\").filter(function(){return!b(this).parent().hasClass(\".mejs-mediaelement\")}).mediaelementplayer(c)}var c={};return{initialize:a}}a.wp=a.wp||{},mejs.plugins.silverlight[0].types.push(\"video/x-ms-wmv\"),mejs.plugins.silverlight[0].types.push(\"audio/x-ms-wma\"),a.wp.mediaelement=new c,b(a.wp.mediaelement.initialize)}(window,jQuery);";
var mod_pagespeed_nNmZ39MQQj = "if(\"undefined\"==typeof jQuery)throw new Error(\"Bootstrap requires jQuery\");+function(a){\"use strict\";function b(){var a=document.createElement(\"bootstrap\"),b={WebkitTransition:\"webkitTransitionEnd\",MozTransition:\"transitionend\",OTransition:\"oTransitionEnd otransitionend\",transition:\"transitionend\"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){\"use strict\";var b='[data-dismiss=\"alert\"]',c=function(c){a(c).on(\"click\",b,this.close)};c.prototype.close=function(b){function c(){f.trigger(\"closed.bs.alert\").remove()}var d=a(this),e=d.attr(\"data-target\");e||(e=d.attr(\"href\"),e=e&&e.replace(/.*(?=#[^\\s]*$)/,\"\"));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass(\"alert\")?d:d.parent()),f.trigger(b=a.Event(\"close.bs.alert\")),b.isDefaultPrevented()||(f.removeClass(\"in\"),a.support.transition&&f.hasClass(\"fade\")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data(\"bs.alert\");e||d.data(\"bs.alert\",e=new c(this)),\"string\"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on(\"click.bs.alert.data-api\",b,c.prototype.close)}(jQuery),+function(a){\"use strict\";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:\"loading...\"},b.prototype.setState=function(a){var b=\"disabled\",c=this.$element,d=c.is(\"input\")?\"val\":\"html\",e=c.data();a+=\"Text\",e.resetText||c.data(\"resetText\",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){\"loadingText\"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle=\"buttons\"]'),b=!0;if(a.length){var c=this.$element.find(\"input\");\"radio\"===c.prop(\"type\")&&(c.prop(\"checked\")&&this.$element.hasClass(\"active\")?b=!1:a.find(\".active\").removeClass(\"active\")),b&&c.prop(\"checked\",!this.$element.hasClass(\"active\")).trigger(\"change\")}b&&this.$element.toggleClass(\"active\")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data(\"bs.button\"),f=\"object\"==typeof c&&c;e||d.data(\"bs.button\",e=new b(this,f)),\"toggle\"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on(\"click.bs.button.data-api\",\"[data-toggle^=button]\",function(b){var c=a(b.target);c.hasClass(\"btn\")||(c=c.closest(\".btn\")),c.button(\"toggle\"),b.preventDefault()})}(jQuery),+function(a){\"use strict\";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(\".carousel-indicators\"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,\"hover\"==this.options.pause&&this.$element.on(\"mouseenter\",a.proxy(this.pause,this)).on(\"mouseleave\",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:\"hover\",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(\".item.active\"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one(\"slid.bs.carousel\",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?\"next\":\"prev\",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(\".next, .prev\").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide(\"next\")},b.prototype.prev=function(){return this.sliding?void 0:this.slide(\"prev\")},b.prototype.slide=function(b,c){var d=this.$element.find(\".item.active\"),e=c||d[b](),f=this.interval,g=\"next\"==b?\"left\":\"right\",h=\"next\"==b?\"first\":\"last\",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(\".item\")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event(\"slide.bs.carousel\",{relatedTarget:e[0],direction:g});if(!e.hasClass(\"active\")){if(this.$indicators.length&&(this.$indicators.find(\".active\").removeClass(\"active\"),this.$element.one(\"slid.bs.carousel\",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass(\"active\")})),a.support.transition&&this.$element.hasClass(\"slide\")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(\" \")).addClass(\"active\"),d.removeClass([\"active\",g].join(\" \")),i.sliding=!1,setTimeout(function(){i.$element.trigger(\"slid.bs.carousel\")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass(\"active\"),e.addClass(\"active\"),this.sliding=!1,this.$element.trigger(\"slid.bs.carousel\")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data(\"bs.carousel\"),f=a.extend({},b.DEFAULTS,d.data(),\"object\"==typeof c&&c),g=\"string\"==typeof c?c:f.slide;e||d.data(\"bs.carousel\",e=new b(this,f)),\"number\"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on(\"click.bs.carousel.data-api\",\"[data-slide], [data-slide-to]\",function(b){var c,d=a(this),e=a(d.attr(\"data-target\")||(c=d.attr(\"href\"))&&c.replace(/.*(?=#[^\\s]+$)/,\"\")),f=a.extend({},e.data(),d.data()),g=d.attr(\"data-slide-to\");g&&(f.interval=!1),e.carousel(f),(g=d.attr(\"data-slide-to\"))&&e.data(\"bs.carousel\").to(g),b.preventDefault()}),a(window).on(\"load\",function(){a('[data-ride=\"carousel\"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){\"use strict\";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass(\"width\");return a?\"width\":\"height\"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass(\"in\")){var b=a.Event(\"show.bs.collapse\");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find(\"> .panel > .in\");if(c&&c.length){var d=c.data(\"bs.collapse\");if(d&&d.transitioning)return;c.collapse(\"hide\"),d||c.data(\"bs.collapse\",null)}var e=this.dimension();this.$element.removeClass(\"collapse\").addClass(\"collapsing\")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass(\"collapsing\").addClass(\"in\")[e](\"auto\"),this.transitioning=0,this.$element.trigger(\"shown.bs.collapse\")};if(!a.support.transition)return f.call(this);var g=a.camelCase([\"scroll\",e].join(\"-\"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass(\"in\")){var b=a.Event(\"hide.bs.collapse\");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass(\"collapsing\").removeClass(\"collapse\").removeClass(\"in\"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger(\"hidden.bs.collapse\").removeClass(\"collapsing\").addClass(\"collapse\")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass(\"in\")?\"hide\":\"show\"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data(\"bs.collapse\"),f=a.extend({},b.DEFAULTS,d.data(),\"object\"==typeof c&&c);e||d.data(\"bs.collapse\",e=new b(this,f)),\"string\"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on(\"click.bs.collapse.data-api\",\"[data-toggle=collapse]\",function(b){var c,d=a(this),e=d.attr(\"data-target\")||b.preventDefault()||(c=d.attr(\"href\"))&&c.replace(/.*(?=#[^\\s]+$)/,\"\"),f=a(e),g=f.data(\"bs.collapse\"),h=g?\"toggle\":d.data(),i=d.attr(\"data-parent\"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent=\"'+i+'\"]').not(d).addClass(\"collapsed\"),d[f.hasClass(\"in\")?\"addClass\":\"removeClass\"](\"collapsed\")),f.collapse(h)})}(jQuery),+function(a){\"use strict\";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass(\"open\")&&(d.trigger(b=a.Event(\"hide.bs.dropdown\")),b.isDefaultPrevented()||d.removeClass(\"open\").trigger(\"hidden.bs.dropdown\"))})}function c(b){var c=b.attr(\"data-target\");c||(c=b.attr(\"href\"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\\s]*$)/,\"\"));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=\".dropdown-backdrop\",e=\"[data-toggle=dropdown]\",f=function(b){a(b).on(\"click.bs.dropdown\",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(\".disabled, :disabled\")){var f=c(e),g=f.hasClass(\"open\");if(b(),!g){if(\"ontouchstart\"in document.documentElement&&!f.closest(\".navbar-nav\").length&&a('<div class=\"dropdown-backdrop\"/>').insertAfter(a(this)).on(\"click\",b),f.trigger(d=a.Event(\"show.bs.dropdown\")),d.isDefaultPrevented())return;f.toggleClass(\"open\").trigger(\"shown.bs.dropdown\"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(\".disabled, :disabled\")){var f=c(d),g=f.hasClass(\"open\");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a(\"[role=menu] li:not(.divider):visible a\",f);if(h.length){var i=h.index(h.filter(\":focus\"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data(\"bs.dropdown\");d||c.data(\"bs.dropdown\",d=new f(this)),\"string\"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on(\"click.bs.dropdown.data-api\",b).on(\"click.bs.dropdown.data-api\",\".dropdown form\",function(a){a.stopPropagation()}).on(\"click.bs.dropdown.data-api\",e,f.prototype.toggle).on(\"keydown.bs.dropdown.data-api\",e+\", [role=menu]\",f.prototype.keydown)}(jQuery),+function(a){\"use strict\";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?\"hide\":\"show\"](a)},b.prototype.show=function(b){var c=this,d=a.Event(\"show.bs.modal\",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on(\"click.dismiss.modal\",'[data-dismiss=\"modal\"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass(\"fade\");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass(\"in\").attr(\"aria-hidden\",!1),c.enforceFocus();var e=a.Event(\"shown.bs.modal\",{relatedTarget:b});d?c.$element.find(\".modal-dialog\").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event(\"hide.bs.modal\"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off(\"focusin.bs.modal\"),this.$element.removeClass(\"in\").attr(\"aria-hidden\",!0).off(\"click.dismiss.modal\"),a.support.transition&&this.$element.hasClass(\"fade\")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off(\"focusin.bs.modal\").on(\"focusin.bs.modal\",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on(\"keyup.dismiss.bs.modal\",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off(\"keyup.dismiss.bs.modal\")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger(\"hidden.bs.modal\")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass(\"fade\")?\"fade\":\"\";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class=\"modal-backdrop '+c+'\" />').appendTo(document.body),this.$element.on(\"click.dismiss.modal\",a.proxy(function(a){a.target===a.currentTarget&&(\"static\"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass(\"in\"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass(\"in\"),a.support.transition&&this.$element.hasClass(\"fade\")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data(\"bs.modal\"),g=a.extend({},b.DEFAULTS,e.data(),\"object\"==typeof c&&c);f||e.data(\"bs.modal\",f=new b(this,g)),\"string\"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on(\"click.bs.modal.data-api\",'[data-toggle=\"modal\"]',function(b){var c=a(this),d=c.attr(\"href\"),e=a(c.attr(\"data-target\")||d&&d.replace(/.*(?=#[^\\s]+$)/,\"\")),f=e.data(\"modal\")?\"toggle\":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one(\"hide\",function(){c.is(\":visible\")&&c.focus()})}),a(document).on(\"show.bs.modal\",\".modal\",function(){a(document.body).addClass(\"modal-open\")}).on(\"hidden.bs.modal\",\".modal\",function(){a(document.body).removeClass(\"modal-open\")})}(jQuery),+function(a){\"use strict\";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init(\"tooltip\",a,b)};b.DEFAULTS={animation:!0,placement:\"top\",selector:!1,template:'<div class=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>',trigger:\"hover focus\",title:\"\",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(\" \"),f=e.length;f--;){var g=e[f];if(\"click\"==g)this.$element.on(\"click.\"+this.type,this.options.selector,a.proxy(this.toggle,this));else if(\"manual\"!=g){var h=\"hover\"==g?\"mouseenter\":\"focus\",i=\"hover\"==g?\"mouseleave\":\"blur\";this.$element.on(h+\".\"+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+\".\"+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:\"manual\",selector:\"\"}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&\"number\"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data(\"bs.\"+this.type);return clearTimeout(c.timeout),c.hoverState=\"in\",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){\"in\"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data(\"bs.\"+this.type);return clearTimeout(c.timeout),c.hoverState=\"out\",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){\"out\"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event(\"show.bs.\"+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass(\"fade\");var d=\"function\"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\\s?auto?\\s?/i,f=e.test(d);f&&(d=d.replace(e,\"\")||\"top\"),c.detach().css({top:0,left:0,display:\"block\"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m=\"body\"==this.options.container?window.innerWidth:j.outerWidth(),n=\"body\"==this.options.container?window.innerHeight:j.outerHeight(),o=\"body\"==this.options.container?0:j.offset().left;d=\"bottom\"==d&&g.top+g.height+i-l>n?\"top\":\"top\"==d&&g.top-l-i<0?\"bottom\":\"right\"==d&&g.right+h>m?\"left\":\"left\"==d&&g.left-h<o?\"right\":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger(\"shown.bs.\"+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css(\"margin-top\"),10),h=parseInt(d.css(\"margin-left\"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass(\"in\");var i=d[0].offsetWidth,j=d[0].offsetHeight;if(\"top\"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,\"left\")}else this.replaceArrow(j-f,j,\"top\");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+\"%\":\"\")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(\".tooltip-inner\")[this.options.html?\"html\":\"text\"](b),a.removeClass(\"fade in top bottom left right\")},b.prototype.hide=function(){function b(){\"in\"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event(\"hide.bs.\"+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass(\"in\"),a.support.transition&&this.$tip.hasClass(\"fade\")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger(\"hidden.bs.\"+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr(\"title\")||\"string\"!=typeof a.attr(\"data-original-title\"))&&a.attr(\"data-original-title\",a.attr(\"title\")||\"\").attr(\"title\",\"\")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},\"function\"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return\"bottom\"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:\"top\"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:\"left\"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr(\"data-original-title\")||(\"function\"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(\".tooltip-arrow\")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data(\"bs.\"+this.type):this;c.tip().hasClass(\"in\")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off(\".\"+this.type).removeData(\"bs.\"+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data(\"bs.tooltip\"),f=\"object\"==typeof c&&c;e||d.data(\"bs.tooltip\",e=new b(this,f)),\"string\"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){\"use strict\";var b=function(a,b){this.init(\"popover\",a,b)};if(!a.fn.tooltip)throw new Error(\"Popover requires tooltip.js\");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:\"right\",trigger:\"click\",content:\"\",template:'<div class=\"popover\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(\".popover-title\")[this.options.html?\"html\":\"text\"](b),a.find(\".popover-content\")[this.options.html?\"html\":\"text\"](c),a.removeClass(\"fade top bottom left right in\"),a.find(\".popover-title\").html()||a.find(\".popover-title\").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr(\"data-content\")||(\"function\"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(\".arrow\")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data(\"bs.popover\"),f=\"object\"==typeof c&&c;e||d.data(\"bs.popover\",e=new b(this,f)),\"string\"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){\"use strict\";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is(\"body\")?a(window):a(c),this.$body=a(\"body\"),this.$scrollElement=this.$element.on(\"scroll.bs.scroll-spy.data-api\",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr(\"href\"))&&e.replace(/.*(?=#[^\\s]+$)/,\"\")||\"\")+\" .nav li > a\",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?\"offset\":\"position\";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data(\"target\")||d.attr(\"href\"),f=/^#\\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(\".active\").removeClass(\"active\");var c=this.selector+'[data-target=\"'+b+'\"],'+this.selector+'[href=\"'+b+'\"]',d=a(c).parents(\"li\").addClass(\"active\");d.parent(\".dropdown-menu\").length&&(d=d.closest(\"li.dropdown\").addClass(\"active\")),d.trigger(\"activate.bs.scrollspy\")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data(\"bs.scrollspy\"),f=\"object\"==typeof c&&c;e||d.data(\"bs.scrollspy\",e=new b(this,f)),\"string\"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on(\"load\",function(){a('[data-spy=\"scroll\"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){\"use strict\";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest(\"ul:not(.dropdown-menu)\"),d=b.data(\"target\");if(d||(d=b.attr(\"href\"),d=d&&d.replace(/.*(?=#[^\\s]*$)/,\"\")),!b.parent(\"li\").hasClass(\"active\")){var e=c.find(\".active:last a\")[0],f=a.Event(\"show.bs.tab\",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent(\"li\"),c),this.activate(g,g.parent(),function(){b.trigger({type:\"shown.bs.tab\",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass(\"active\").find(\"> .dropdown-menu > .active\").removeClass(\"active\"),b.addClass(\"active\"),g?(b[0].offsetWidth,b.addClass(\"in\")):b.removeClass(\"fade\"),b.parent(\".dropdown-menu\")&&b.closest(\"li.dropdown\").addClass(\"active\"),d&&d()}var f=c.find(\"> .active\"),g=d&&a.support.transition&&f.hasClass(\"fade\");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass(\"in\")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data(\"bs.tab\");e||d.data(\"bs.tab\",e=new b(this)),\"string\"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on(\"click.bs.tab.data-api\",'[data-toggle=\"tab\"], [data-toggle=\"pill\"]',function(b){b.preventDefault(),a(this).tab(\"show\")})}(jQuery),+function(a){\"use strict\";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on(\"scroll.bs.affix.data-api\",a.proxy(this.checkPosition,this)).on(\"click.bs.affix.data-api\",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET=\"affix affix-top affix-bottom\",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(\":visible\")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;\"object\"!=typeof f&&(h=g=f),\"function\"==typeof g&&(g=f.top()),\"function\"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?\"bottom\":null!=g&&g>=d?\"top\":!1;this.affixed!==i&&(this.unpin&&this.$element.css(\"top\",\"\"),this.affixed=i,this.unpin=\"bottom\"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass(\"affix\"+(i?\"-\"+i:\"\")),\"bottom\"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data(\"bs.affix\"),f=\"object\"==typeof c&&c;e||d.data(\"bs.affix\",e=new b(this,f)),\"string\"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on(\"load\",function(){a('[data-spy=\"affix\"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);";
var mod_pagespeed_UAr_xDJcYB = ";window.Modernizr=(function(window,document,undefined){var version='2.6.2',Modernizr={},enableClasses=true,docElement=document.documentElement,mod='modernizr',modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement('input'),smile=':)',toString={}.toString,prefixes=' -webkit- -moz- -o- -ms- '.split(' '),omPrefixes='Webkit Moz O ms',cssomPrefixes=omPrefixes.split(' '),domPrefixes=omPrefixes.toLowerCase().split(' '),ns={'svg':'http://www.w3.org/2000/svg'},tests={},inputs={},attrs={},classes=[],slice=classes.slice,featureName,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement('div'),body=document.body,fakeBody=body||document.createElement('body');if(parseInt(nodes,10)){while(nodes--){node=document.createElement('div');node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node);}}style=['&#173;','<style id=\"s',mod,'\">',rule,'</style>'].join('');div.id=mod;(body?div:fakeBody).innerHTML+=style;fakeBody.appendChild(div);if(!body){fakeBody.style.background='';fakeBody.style.overflow='hidden';docOverflow=docElement.style.overflow;docElement.style.overflow='hidden';docElement.appendChild(fakeBody);}ret=callback(div,rule);if(!body){fakeBody.parentNode.removeChild(fakeBody);docElement.style.overflow=docOverflow;}else{div.parentNode.removeChild(div);}return!!ret;},isEventSupported=(function(){var TAGNAMES={'select':'input','change':'input','submit':'form','reset':'form','error':'img','load':'img','abort':'img'};function isEventSupported(eventName,element){element=element||document.createElement(TAGNAMES[eventName]||'div');eventName='on'+eventName;var isSupported=eventName in element;if(!isSupported){if(!element.setAttribute){element=document.createElement('div');}if(element.setAttribute&&element.removeAttribute){element.setAttribute(eventName,'');isSupported=is(element[eventName],'function');if(!is(element[eventName],'undefined')){element[eventName]=undefined;}element.removeAttribute(eventName);}}element=null;return isSupported;}return isEventSupported;})(),_hasOwnProperty=({}).hasOwnProperty,hasOwnProp;if(!is(_hasOwnProperty,'undefined')&&!is(_hasOwnProperty.call,'undefined')){hasOwnProp=function(object,property){return _hasOwnProperty.call(object,property);};}else{hasOwnProp=function(object,property){return((property in object)&&is(object.constructor.prototype[property],'undefined'));};}if(!Function.prototype.bind){Function.prototype.bind=function bind(that){var target=this;if(typeof target!=\"function\"){throw new TypeError();}var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F();var result=target.apply(self,args.concat(slice.call(arguments)));if(Object(result)===result){return result;}return self;}else{return target.apply(that,args.concat(slice.call(arguments)));}};return bound;};}function setCss(str){mStyle.cssText=str;}function setCssAll(str1,str2){return setCss(prefixes.join(str1+';')+(str2||''));}function is(obj,type){return typeof obj===type;}function contains(str,substr){return!!~(''+str).indexOf(substr);}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,\"-\")&&mStyle[prop]!==undefined){return prefixed=='pfx'?prop:true;}}return false;}function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined){if(elem===false)return props[i];if(is(item,'function')){return item.bind(elem||obj);}return item;}}return false;}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+' '+cssomPrefixes.join(ucProp+' ')+ucProp).split(' ');if(is(prefixed,\"string\")||is(prefixed,\"undefined\")){return testProps(props,prefixed);}else{props=(prop+' '+(domPrefixes).join(ucProp+' ')+ucProp).split(' ');return testDOMProps(props,prefixed,elem);}}tests['flexbox']=function(){return testPropsAll('flexWrap');};tests['canvas']=function(){var elem=document.createElement('canvas');return!!(elem.getContext&&elem.getContext('2d'));};tests['canvastext']=function(){return!!(Modernizr['canvas']&&is(document.createElement('canvas').getContext('2d').fillText,'function'));};tests['webgl']=function(){return!!window.WebGLRenderingContext;};tests['touch']=function(){var bool;if(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch){bool=true;}else{injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''),function(node){bool=node.offsetTop===9;});}return bool;};tests['geolocation']=function(){return'geolocation'in navigator;};tests['postmessage']=function(){return!!window.postMessage;};tests['websqldatabase']=function(){return!!window.openDatabase;};tests['indexedDB']=function(){return!!testPropsAll(\"indexedDB\",window);};tests['hashchange']=function(){return isEventSupported('hashchange',window)&&(document.documentMode===undefined||document.documentMode>7);};tests['history']=function(){return!!(window.history&&history.pushState);};tests['draganddrop']=function(){var div=document.createElement('div');return('draggable'in div)||('ondragstart'in div&&'ondrop'in div);};tests['websockets']=function(){return'WebSocket'in window||'MozWebSocket'in window;};tests['rgba']=function(){setCss('background-color:rgba(150,255,150,.5)');return contains(mStyle.backgroundColor,'rgba');};tests['hsla']=function(){setCss('background-color:hsla(120,40%,100%,.5)');return contains(mStyle.backgroundColor,'rgba')||contains(mStyle.backgroundColor,'hsla');};tests['multiplebgs']=function(){setCss('background:url(https://),url(https://),red url(https://)');return(/(url\\s*\\(.*?){3}/).test(mStyle.background);};tests['backgroundsize']=function(){return testPropsAll('backgroundSize');};tests['borderimage']=function(){return testPropsAll('borderImage');};tests['borderradius']=function(){return testPropsAll('borderRadius');};tests['boxshadow']=function(){return testPropsAll('boxShadow');};tests['textshadow']=function(){return document.createElement('div').style.textShadow==='';};tests['opacity']=function(){setCssAll('opacity:.55');return(/^0.55$/).test(mStyle.opacity);};tests['cssanimations']=function(){return testPropsAll('animationName');};tests['csscolumns']=function(){return testPropsAll('columnCount');};tests['cssgradients']=function(){var str1='background-image:',str2='gradient(linear,left top,right bottom,from(#9f9),to(white));',str3='linear-gradient(left top,#9f9, white);';setCss((str1+'-webkit- '.split(' ').join(str2+str1)+prefixes.join(str3+str1)).slice(0,-str1.length));return contains(mStyle.backgroundImage,'gradient');};tests['cssreflections']=function(){return testPropsAll('boxReflect');};tests['csstransforms']=function(){return!!testPropsAll('transform');};tests['csstransforms3d']=function(){var ret=!!testPropsAll('perspective');if(ret&&'webkitPerspective'in docElement.style){injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',function(node,rule){ret=node.offsetLeft===9&&node.offsetHeight===3;});}return ret;};tests['csstransitions']=function(){return testPropsAll('transition');};tests['fontface']=function(){var bool;injectElementWithStyles('@font-face {font-family:\"font\";src:url(\"https://\")}',function(node,rule){var style=document.getElementById('smodernizr'),sheet=style.sheet||style.styleSheet,cssText=sheet?(sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||''):'';bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(' ')[0])===0;});return bool;};tests['generatedcontent']=function(){var bool;injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:\"',smile,'\";visibility:hidden;font:3px/1 a}'].join(''),function(node){bool=node.offsetHeight>=3;});return bool;};tests['video']=function(){var elem=document.createElement('video'),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('video/ogg; codecs=\"theora\"').replace(/^no$/,'');bool.h264=elem.canPlayType('video/mp4; codecs=\"avc1.42E01E\"').replace(/^no$/,'');bool.webm=elem.canPlayType('video/webm; codecs=\"vp8, vorbis\"').replace(/^no$/,'');}}catch(e){}return bool;};tests['audio']=function(){var elem=document.createElement('audio'),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('audio/ogg; codecs=\"vorbis\"').replace(/^no$/,'');bool.mp3=elem.canPlayType('audio/mpeg;').replace(/^no$/,'');bool.wav=elem.canPlayType('audio/wav; codecs=\"1\"').replace(/^no$/,'');bool.m4a=(elem.canPlayType('audio/x-m4a;')||elem.canPlayType('audio/aac;')).replace(/^no$/,'');}}catch(e){}return bool;};tests['localstorage']=function(){try{localStorage.setItem(mod,mod);localStorage.removeItem(mod);return true;}catch(e){return false;}};tests['sessionstorage']=function(){try{sessionStorage.setItem(mod,mod);sessionStorage.removeItem(mod);return true;}catch(e){return false;}};tests['webworkers']=function(){return!!window.Worker;};tests['applicationcache']=function(){return!!window.applicationCache;};tests['svg']=function(){return!!document.createElementNS&&!!document.createElementNS(ns.svg,'svg').createSVGRect;};tests['inlinesvg']=function(){var div=document.createElement('div');div.innerHTML='<svg/>';return(div.firstChild&&div.firstChild.namespaceURI)==ns.svg;};tests['smil']=function(){return!!document.createElementNS&&/SVGAnimate/.test(toString.call(document.createElementNS(ns.svg,'animate')));};tests['svgclippaths']=function(){return!!document.createElementNS&&/SVGClipPath/.test(toString.call(document.createElementNS(ns.svg,'clipPath')));};function webforms(){Modernizr['input']=(function(props){for(var i=0,len=props.length;i<len;i++){attrs[props[i]]=!!(props[i]in inputElem);}if(attrs.list){attrs.list=!!(document.createElement('datalist')&&window.HTMLDataListElement);}return attrs;})('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));Modernizr['inputtypes']=(function(props){for(var i=0,bool,inputElemType,defaultView,len=props.length;i<len;i++){inputElem.setAttribute('type',inputElemType=props[i]);bool=inputElem.type!=='text';if(bool){inputElem.value=smile;inputElem.style.cssText='position:absolute;visibility:hidden;';if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){docElement.appendChild(inputElem);defaultView=document.defaultView;bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=='textfield'&&(inputElem.offsetHeight!==0);docElement.removeChild(inputElem);}else if(/^(search|tel)$/.test(inputElemType)){}else if(/^(url|email)$/.test(inputElemType)){bool=inputElem.checkValidity&&inputElem.checkValidity()===false;}else{bool=inputElem.value!=smile;}}inputs[props[i]]=!!bool;}return inputs;})('search tel url email datetime date month week time datetime-local number range color'.split(' '));}for(var feature in tests){if(hasOwnProp(tests,feature)){featureName=feature.toLowerCase();Modernizr[featureName]=tests[feature]();classes.push((Modernizr[featureName]?'':'no-')+featureName);}}Modernizr.input||webforms();Modernizr.addTest=function(feature,test){if(typeof feature=='object'){for(var key in feature){if(hasOwnProp(feature,key)){Modernizr.addTest(key,feature[key]);}}}else{feature=feature.toLowerCase();if(Modernizr[feature]!==undefined){return Modernizr;}test=typeof test=='function'?test():test;if(typeof enableClasses!==\"undefined\"&&enableClasses){docElement.className+=' '+(test?'':'no-')+feature;}Modernizr[feature]=test;}return Modernizr;};setCss('');modElem=inputElem=null;;(function(window,document){var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined');}());}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true;}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild);}function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements;}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data;}return data;}function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document;}if(supportsUnknownElements){return ownerDocument.createElement(nodeName);}if(!data){data=getExpandoData(ownerDocument);}var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode();}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();}else{node=data.createElem(nodeName);}return node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node;}function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document;}if(supportsUnknownElements){return ownerDocument.createDocumentFragment();}data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i]);}return clone;}function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag();}ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName);}return createElement(nodeName,ownerDocument,data);};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+getElements().join().replace(/\\w+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c(\"'+nodeName+'\")';})+');return n}')(html5,data.frag);}function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document;}var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}'+'mark{background:#FF0;color:#000}');}if(!supportsUnknownElements){shivMethods(ownerDocument,data);}return ownerDocument;}var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video','shivCSS':(options.shivCSS!==false),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==false),'type':'default','shivDocument':shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5;shivDocument(document);}(this,document));Modernizr._version=version;Modernizr._prefixes=prefixes;Modernizr._domPrefixes=domPrefixes;Modernizr._cssomPrefixes=cssomPrefixes;Modernizr.hasEvent=isEventSupported;Modernizr.testProp=function(prop){return testProps([prop]);};Modernizr.testAllProps=testPropsAll;Modernizr.testStyles=injectElementWithStyles;Modernizr.prefixed=function(prop,obj,elem){if(!obj){return testPropsAll(prop,'pfx');}else{return testPropsAll(prop,obj,elem);}};docElement.className=docElement.className.replace(/(^|\\s)no-js(\\s|$)/,'$1$2')+(enableClasses?' js '+classes.join(' '):'');return Modernizr;})(this,this.document);(function(a,b,c){function d(a){return\"[object Function]\"==o.call(a)}function e(a){return\"string\"==typeof a}function f(){}function g(a){return!a||\"loaded\"==a||\"complete\"==a||\"uninitialized\"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){(\"c\"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){\"img\"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),\"object\"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height=\"0\",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),\"img\"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||\"j\",e(a)?i(\"c\"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName(\"script\")[0],o={}.toString,p=[],q=0,r=\"MozAppearance\"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&\"[object Opera]\"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?\"object\":l?\"script\":\"img\",v=l?\"script\":u,w=Array.isArray||function(a){return\"[object Array]\"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split(\"!\"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split(\"=\"),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(\".\").pop().split(\"?\").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split(\"/\").pop().split(\"?\")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&\"css\"==i.url.split(\".\").pop().split(\"?\").shift()?\"c\":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState=\"loading\",b.addEventListener(\"DOMContentLoaded\",A=function(){b.removeEventListener(\"DOMContentLoaded\",A,0),b.readyState=\"complete\"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement(\"script\"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement(\"link\"),j,c=i?h:c||f;e.href=a,e.rel=\"stylesheet\",e.type=\"text/css\";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};;";
var mod_pagespeed_2_80Ym1ei4 = "(function($){$.prettyPhoto={version:'3.1.6'};$.fn.prettyPhoto=function(pp_settings){pp_settings=jQuery.extend({hook:'rel',animation_speed:'fast',ajaxcallback:function(){},slideshow:5000,autoplay_slideshow:false,opacity:0.80,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:'/',theme:'pp_default',horizontal_padding:20,hideflash:false,wmode:'opaque',autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class=\"pp_pic_holder\"> \\\n						<div class=\"ppt\">&nbsp;</div> \\\n						<div class=\"pp_top\"> \\\n							<div class=\"pp_left\"></div> \\\n							<div class=\"pp_middle\"></div> \\\n							<div class=\"pp_right\"></div> \\\n						</div> \\\n						<div class=\"pp_content_container\"> \\\n							<div class=\"pp_left\"> \\\n							<div class=\"pp_right\"> \\\n								<div class=\"pp_content\"> \\\n									<div class=\"pp_loaderIcon\"></div> \\\n									<div class=\"pp_fade\"> \\\n										<a href=\"#\" class=\"pp_expand\" title=\"Expand the image\">Expand</a> \\\n										<div class=\"pp_hoverContainer\"> \\\n											<a class=\"pp_next\" href=\"#\">next</a> \\\n											<a class=\"pp_previous\" href=\"#\">previous</a> \\\n										</div> \\\n										<div id=\"pp_full_res\"></div> \\\n										<div class=\"pp_details\"> \\\n											<div class=\"pp_nav\"> \\\n												<a href=\"#\" class=\"pp_arrow_previous\">Previous</a> \\\n												<p class=\"currentTextHolder\">0/0</p> \\\n												<a href=\"#\" class=\"pp_arrow_next\">Next</a> \\\n											</div> \\\n											<p class=\"pp_description\"></p> \\\n											<div class=\"pp_social\">{pp_social}</div> \\\n											<a class=\"pp_close\" href=\"#\">Close</a> \\\n										</div> \\\n									</div> \\\n								</div> \\\n							</div> \\\n							</div> \\\n						</div> \\\n						<div class=\"pp_bottom\"> \\\n							<div class=\"pp_left\"></div> \\\n							<div class=\"pp_middle\"></div> \\\n							<div class=\"pp_right\"></div> \\\n						</div> \\\n					</div> \\\n					<div class=\"pp_overlay\"></div>',gallery_markup:'<div class=\"pp_gallery\"> \\\n								<a href=\"#\" class=\"pp_arrow_previous\">Previous</a> \\\n								<div> \\\n									<ul> \\\n										{gallery} \\\n									</ul> \\\n								</div> \\\n								<a href=\"#\" class=\"pp_arrow_next\">Next</a> \\\n							</div>',image_markup:'<img id=\"fullResImage\" src=\"{path}\" />',flash_markup:'<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"{width}\" height=\"{height}\"><param name=\"wmode\" value=\"{wmode}\" /><param name=\"allowfullscreen\" value=\"true\" /><param name=\"allowscriptaccess\" value=\"always\" /><param name=\"movie\" value=\"{path}\" /><embed src=\"{path}\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" allowscriptaccess=\"always\" width=\"{width}\" height=\"{height}\" wmode=\"{wmode}\"></embed></object>',quicktime_markup:'<object classid=\"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\" codebase=\"http://www.apple.com/qtactivex/qtplugin.cab\" height=\"{height}\" width=\"{width}\"><param name=\"src\" value=\"{path}\"><param name=\"autoplay\" value=\"{autoplay}\"><param name=\"type\" value=\"video/quicktime\"><embed src=\"{path}\" height=\"{height}\" width=\"{width}\" autoplay=\"{autoplay}\" type=\"video/quicktime\" pluginspage=\"http://www.apple.com/quicktime/download/\"></embed></object>',iframe_markup:'<iframe src =\"{path}\" width=\"{width}\" height=\"{height}\" frameborder=\"no\"></iframe>',inline_markup:'<div class=\"pp_inline\">{content}</div>',custom_markup:'',social_tools:'<div class=\"twitter\"><a href=\"http://twitter.com/share\" class=\"twitter-share-button\" data-count=\"none\">Tweet</a>\u003cscript type=\"text/javascript\" src=\"http://platform.twitter.com/widgets.js\"><\/script></div><div class=\"facebook\"><iframe src=\"//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:500px; height:23px;\" allowTransparency=\"true\"></iframe></div>'},pp_settings);var matchedObjects=this,percentBased=false,pp_dimensions,pp_open,pp_contentHeight,pp_contentWidth,pp_containerHeight,pp_containerWidth,windowHeight=$(window).height(),windowWidth=$(window).width(),pp_slideshow;doresize=true,scroll_pos=_get_scroll();$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){_center_overlay();_resize_overlay();});if(pp_settings.keyboard_shortcuts){$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){if(typeof $pp_pic_holder!='undefined'){if($pp_pic_holder.is(':visible')){switch(e.keyCode){case 37:$.prettyPhoto.changePage('previous');e.preventDefault();break;case 39:$.prettyPhoto.changePage('next');e.preventDefault();break;case 27:if(!settings.modal)$.prettyPhoto.close();e.preventDefault();break;};};};});};$.prettyPhoto.initialize=function(){settings=pp_settings;if(settings.theme=='pp_default')settings.horizontal_padding=16;theRel=$(this).attr(settings.hook);galleryRegExp=/\\[(?:.*)\\]/;isSet=(galleryRegExp.exec(theRel))?true:false;pp_images=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return $(n).attr('href');}):$.makeArray($(this).attr('href'));pp_titles=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return($(n).find('img').attr('alt'))?$(n).find('img').attr('alt'):\"\";}):$.makeArray($(this).find('img').attr('alt'));pp_descriptions=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return($(n).attr('title'))?$(n).attr('title'):\"\";}):$.makeArray($(this).attr('title'));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=false;set_position=jQuery.inArray($(this).attr('href'),pp_images);rel_index=(isSet)?set_position:$(\"a[\"+settings.hook+\"^='\"+theRel+\"']\").index($(this));_build_overlay(this);if(settings.allow_resize)$(window).bind('scroll.prettyphoto',function(){_center_overlay();});$.prettyPhoto.open();return false;}\n$.prettyPhoto.open=function(event){if(typeof settings==\"undefined\"){settings=pp_settings;pp_images=$.makeArray(arguments[0]);pp_titles=(arguments[1])?$.makeArray(arguments[1]):$.makeArray(\"\");pp_descriptions=(arguments[2])?$.makeArray(arguments[2]):$.makeArray(\"\");isSet=(pp_images.length>1)?true:false;set_position=(arguments[3])?arguments[3]:0;_build_overlay(event.target);}if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden');_checkPosition($(pp_images).size());$('.pp_loaderIcon').show();if(settings.deeplinking)setHashtag();if(settings.social_tools){facebook_like_link=settings.social_tools.replace('{location_href}',encodeURIComponent(location.href));$pp_pic_holder.find('.pp_social').html(facebook_like_link);}if($ppt.is(':hidden'))$ppt.css('opacity',0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find('.currentTextHolder').text((set_position+1)+settings.counter_separator_label+$(pp_images).size());if(typeof pp_descriptions[set_position]!='undefined'&&pp_descriptions[set_position]!=\"\"){$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));}else{$pp_pic_holder.find('.pp_description').hide();}movie_width=(parseFloat(getParam('width',pp_images[set_position])))?getParam('width',pp_images[set_position]):settings.default_width.toString();movie_height=(parseFloat(getParam('height',pp_images[set_position])))?getParam('height',pp_images[set_position]):settings.default_height.toString();percentBased=false;if(movie_height.indexOf('%')!=-1){movie_height=parseFloat(($(window).height()*parseFloat(movie_height)/100)-150);percentBased=true;}if(movie_width.indexOf('%')!=-1){movie_width=parseFloat(($(window).width()*parseFloat(movie_width)/100)-150);percentBased=true;}$pp_pic_holder.fadeIn(function(){(settings.show_title&&pp_titles[set_position]!=\"\"&&typeof pp_titles[set_position]!=\"undefined\")?$ppt.html(unescape(pp_titles[set_position])):$ppt.html('&nbsp;');imgPreloader=\"\";skipInjection=false;switch(_getFileType(pp_images[set_position])){case'image':imgPreloader=new Image();nextImage=new Image();if(isSet&&set_position<$(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image();if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find('#pp_full_res')[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){pp_dimensions=_fitToViewport(imgPreloader.width,imgPreloader.height);_showContent();};imgPreloader.onerror=function(){alert('Image cannot be loaded. Make sure the path is correct and image exist.');$.prettyPhoto.close();};imgPreloader.src=pp_images[set_position];break;case'youtube':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=getParam('v',pp_images[set_position]);if(movie_id==\"\"){movie_id=pp_images[set_position].split('youtu.be/');movie_id=movie_id[1];if(movie_id.indexOf('?')>0)movie_id=movie_id.substr(0,movie_id.indexOf('?'));if(movie_id.indexOf('&')>0)movie_id=movie_id.substr(0,movie_id.indexOf('&'));}movie='http://www.youtube.com/embed/'+movie_id;(getParam('rel',pp_images[set_position]))?movie+=\"?rel=\"+getParam('rel',pp_images[set_position]):movie+=\"?rel=1\";if(settings.autoplay)movie+=\"&autoplay=1\";toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case'vimeo':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=pp_images[set_position];var regExp=/http(s?):\\/\\/(www\\.)?vimeo.com\\/(\\d+)/;var match=movie_id.match(regExp);movie='http://player.vimeo.com/video/'+match[3]+'?title=0&amp;byline=0&amp;portrait=0';if(settings.autoplay)movie+=\"&autoplay=1;\";vimeo_width=pp_dimensions['width']+'/embed/?moog_width='+pp_dimensions['width'];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);break;case'quicktime':pp_dimensions=_fitToViewport(movie_width,movie_height);pp_dimensions['height']+=15;pp_dimensions['contentHeight']+=15;pp_dimensions['containerHeight']+=15;toInject=settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case'flash':pp_dimensions=_fitToViewport(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf('flashvars')+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf('?'));toInject=settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);break;case'iframe':pp_dimensions=_fitToViewport(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf('iframe')-1);toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);break;case'ajax':doresize=false;pp_dimensions=_fitToViewport(movie_width,movie_height);doresize=true;skipInjection=true;$.get(pp_images[set_position],function(responseHTML){toInject=settings.inline_markup.replace(/{content}/g,responseHTML);$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();});break;case'custom':pp_dimensions=_fitToViewport(movie_width,movie_height);toInject=settings.custom_markup;break;case'inline':myClone=$(pp_images[set_position]).clone().append('<br clear=\"all\" />').css({'width':settings.default_width}).wrapInner('<div id=\"pp_full_res\"><div class=\"pp_inline\"></div></div>').appendTo($('body')).show();doresize=false;pp_dimensions=_fitToViewport($(myClone).width(),$(myClone).height());doresize=true;$(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());break;};if(!imgPreloader&&!skipInjection){$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();};});return false;};$.prettyPhoto.changePage=function(direction){currentGalleryPage=0;if(direction=='previous'){set_position--;if(set_position<0)set_position=$(pp_images).size()-1;}else if(direction=='next'){set_position++;if(set_position>$(pp_images).size()-1)set_position=0;}else{set_position=direction;};rel_index=set_position;if(!doresize)doresize=true;if(settings.allow_expand){$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');}_hideContent(function(){$.prettyPhoto.open();});};$.prettyPhoto.changeGalleryPage=function(direction){if(direction=='next'){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0;}else if(direction=='previous'){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage;}else{currentGalleryPage=direction;};slide_speed=(direction=='next'||direction=='previous')?settings.animation_speed:0;slide_to=currentGalleryPage*(itemsPerPage*itemWidth);$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);};$.prettyPhoto.startSlideshow=function(){if(typeof pp_slideshow=='undefined'){$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){$.prettyPhoto.stopSlideshow();return false;});pp_slideshow=setInterval($.prettyPhoto.startSlideshow,settings.slideshow);}else{$.prettyPhoto.changePage('next');};}\n$.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});clearInterval(pp_slideshow);pp_slideshow=undefined;}\n$.prettyPhoto.close=function(){if($pp_overlay.is(\":animated\"))return;$.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){$(this).remove();});$pp_overlay.fadeOut(settings.animation_speed,function(){if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible');$(this).remove();$(window).unbind('scroll.prettyphoto');clearHashtag();settings.callback();doresize=true;pp_open=false;delete settings;});};function _showContent(){$('.pp_loaderIcon').hide();projectedTop=scroll_pos['scrollTop']+((windowHeight/2)-(pp_dimensions['containerHeight']/2));if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find('.pp_content').animate({height:pp_dimensions['contentHeight'],width:pp_dimensions['contentWidth']},settings.animation_speed);$pp_pic_holder.animate({'top':projectedTop,'left':((windowWidth/2)-(pp_dimensions['containerWidth']/2)<0)?0:(windowWidth/2)-(pp_dimensions['containerWidth']/2),width:pp_dimensions['containerWidth']},settings.animation_speed,function(){$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed);if(isSet&&_getFileType(pp_images[set_position])==\"image\"){$pp_pic_holder.find('.pp_hoverContainer').show();}else{$pp_pic_holder.find('.pp_hoverContainer').hide();}if(settings.allow_expand){if(pp_dimensions['resized']){$('a.pp_expand,a.pp_contract').show();}else{$('a.pp_expand').hide();}}if(settings.autoplay_slideshow&&!pp_slideshow&&!pp_open)$.prettyPhoto.startSlideshow();settings.changepicturecallback();pp_open=true;});_insert_gallery();pp_settings.ajaxcallback();};function _hideContent(callback){$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){$('.pp_loaderIcon').show();callback();});};function _checkPosition(setCount){(setCount>1)?$('.pp_nav').show():$('.pp_nav').hide();};function _fitToViewport(width,height){resized=false;_getDimensions(width,height);imageWidth=width,imageHeight=height;if(((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight))&&doresize&&settings.allow_resize&&!percentBased){resized=true,fitting=false;while(!fitting){if((pp_containerWidth>windowWidth)){imageWidth=(windowWidth-200);imageHeight=(height/width)*imageWidth;}else if((pp_containerHeight>windowHeight)){imageHeight=(windowHeight-200);imageWidth=(width/height)*imageHeight;}else{fitting=true;};pp_containerHeight=imageHeight,pp_containerWidth=imageWidth;};if((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight)){_fitToViewport(pp_containerWidth,pp_containerHeight)};_getDimensions(imageWidth,imageHeight);};return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(pp_containerHeight),containerWidth:Math.floor(pp_containerWidth)+(settings.horizontal_padding*2),contentHeight:Math.floor(pp_contentHeight),contentWidth:Math.floor(pp_contentWidth),resized:resized};};function _getDimensions(width,height){width=parseFloat(width);height=parseFloat(height);$pp_details=$pp_pic_holder.find('.pp_details');$pp_details.width(width);detailsHeight=parseFloat($pp_details.css('marginTop'))+parseFloat($pp_details.css('marginBottom'));$pp_details=$pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({'position':'absolute','top':-10000});detailsHeight+=$pp_details.height();detailsHeight=(detailsHeight<=34)?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find('.ppt');$pp_title.width(width);titleHeight=parseFloat($pp_title.css('marginTop'))+parseFloat($pp_title.css('marginBottom'));$pp_title=$pp_title.clone().appendTo($('body')).css({'position':'absolute','top':-10000});titleHeight+=$pp_title.height();$pp_title.remove();pp_contentHeight=height+detailsHeight;pp_contentWidth=width;pp_containerHeight=pp_contentHeight+titleHeight+$pp_pic_holder.find('.pp_top').height()+$pp_pic_holder.find('.pp_bottom').height();pp_containerWidth=width;}function _getFileType(itemSrc){if(itemSrc.match(/youtube\\.com\\/watch/i)||itemSrc.match(/youtu\\.be/i)){return'youtube';}else if(itemSrc.match(/vimeo\\.com/i)){return'vimeo';}else if(itemSrc.match(/\\b.mov\\b/i)){return'quicktime';}else if(itemSrc.match(/\\b.swf\\b/i)){return'flash';}else if(itemSrc.match(/\\biframe=true\\b/i)){return'iframe';}else if(itemSrc.match(/\\bajax=true\\b/i)){return'ajax';}else if(itemSrc.match(/\\bcustom=true\\b/i)){return'custom';}else if(itemSrc.substr(0,1)=='#'){return'inline';}else{return'image';};};function _center_overlay(){if(doresize&&typeof $pp_pic_holder!='undefined'){scroll_pos=_get_scroll();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=(windowHeight/2)+scroll_pos['scrollTop']-(contentHeight/2);if(projectedTop<0)projectedTop=0;if(contentHeight>windowHeight)return;$pp_pic_holder.css({'top':projectedTop,'left':(windowWidth/2)+scroll_pos['scrollLeft']-(contentwidth/2)});};};function _get_scroll(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};};};function _resize_overlay(){windowHeight=$(window).height(),windowWidth=$(window).width();if(typeof $pp_overlay!=\"undefined\")$pp_overlay.height($(document).height()).width(windowWidth);};function _insert_gallery(){if(isSet&&settings.overlay_gallery&&_getFileType(pp_images[set_position])==\"image\"){itemWidth=52+5;navWidth=(settings.theme==\"facebook\"||settings.theme==\"pp_default\")?50:30;itemsPerPage=Math.floor((pp_dimensions['containerWidth']-100-navWidth)/itemWidth);itemsPerPage=(itemsPerPage<pp_images.length)?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();}else{$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();};galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css('margin-left',-((galleryWidth/2)+(navWidth/2))).find('div:first').width(galleryWidth+5).find('ul').width(fullGalleryWidth).find('li.selected').removeClass('selected');goToPage=(Math.floor(set_position/itemsPerPage)<totalPage)?Math.floor(set_position/itemsPerPage):totalPage;$.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');}else{$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');}}function _build_overlay(caller){if(settings.social_tools)facebook_like_link=settings.social_tools.replace('{location_href}',encodeURIComponent(location.href));settings.markup=settings.markup.replace('{pp_social}','');$('body').append(settings.markup);$pp_pic_holder=$('.pp_pic_holder'),$ppt=$('.ppt'),$pp_overlay=$('div.pp_overlay');if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject=\"\";for(var i=0;i<pp_images.length;i++){if(!pp_images[i].match(/\\b(jpg|jpeg|png|gif)\\b/gi)){classname='default';img_src='';}else{classname='';img_src=pp_images[i];}toInject+=\"<li class='\"+classname+\"'><a href='#'><img src='\"+img_src+\"' width='50' alt='' /></a></li>\";};toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find('#pp_full_res').after(toInject);$pp_gallery=$('.pp_pic_holder .pp_gallery'),$pp_gallery_li=$pp_gallery.find('li');$pp_gallery.find('.pp_arrow_next').click(function(){$.prettyPhoto.changeGalleryPage('next');$.prettyPhoto.stopSlideshow();return false;});$pp_gallery.find('.pp_arrow_previous').click(function(){$.prettyPhoto.changeGalleryPage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_content').hover(function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();},function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();});itemWidth=52+5;$pp_gallery_li.each(function(i){$(this).find('a').click(function(){$.prettyPhoto.changePage(i);$.prettyPhoto.stopSlideshow();return false;});});};if(settings.slideshow){$pp_pic_holder.find('.pp_nav').prepend('<a href=\"#\" class=\"pp_play\">Play</a>')\n$pp_pic_holder.find('.pp_nav .pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});}$pp_pic_holder.attr('class','pp_pic_holder '+settings.theme);$pp_overlay.css({'opacity':0,'height':$(document).height(),'width':$(window).width()}).bind('click',function(){if(!settings.modal)$.prettyPhoto.close();});$('a.pp_close').bind('click',function(){$.prettyPhoto.close();return false;});if(settings.allow_expand){$('a.pp_expand').bind('click',function(e){if($(this).hasClass('pp_expand')){$(this).removeClass('pp_expand').addClass('pp_contract');doresize=false;}else{$(this).removeClass('pp_contract').addClass('pp_expand');doresize=true;};_hideContent(function(){$.prettyPhoto.open();});return false;});}$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){$.prettyPhoto.changePage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){$.prettyPhoto.changePage('next');$.prettyPhoto.stopSlideshow();return false;});_center_overlay();};if(!pp_alreadyInitialized&&getHashtag()){pp_alreadyInitialized=true;hashIndex=getHashtag();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf('/'));setTimeout(function(){$(\"a[\"+pp_settings.hook+\"^='\"+hashRel+\"']:eq(\"+hashIndex+\")\").trigger('click');},50);}return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize);};function getHashtag(){var url=location.href;hashtag=(url.indexOf('#prettyPhoto')!==-1)?decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)):false;if(hashtag){hashtag=hashtag.replace(/<|>/g,'');}return hashtag;};function setHashtag(){if(typeof theRel=='undefined')return;location.hash=theRel+'/'+rel_index+'/';};function clearHashtag(){if(location.href.indexOf('#prettyPhoto')!==-1)location.hash=\"prettyPhoto\";}function getParam(name,url){name=name.replace(/[\\[]/,\"\\\\\\[\").replace(/[\\]]/,\"\\\\\\]\");var regexS=\"[\\\\?&]\"+name+\"=([^&#]*)\";var regex=new RegExp(regexS);var results=regex.exec(url);return(results==null)?\"\":results[1];}})(jQuery);var pp_alreadyInitialized=false;";
var mod_pagespeed_iZdr$hPGoQ = "var $=jQuery;jQuery(document).ready(function($){jQuery(\"body\").addClass(\"woocommerce\");});";
var mod_pagespeed_kj_qumGL_L = "!function(a,b){\"use strict\";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf(\"MSIE 10\"),h=!!navigator.userAgent.match(/Trident.*rv:11\\./),i=b.querySelectorAll(\"iframe.wp-embedded-content\");for(c=0;c<i.length;c++)if(d=i[c],!d.getAttribute(\"data-secret\")){if(f=Math.random().toString(36).substr(2,10),d.src+=\"#?secret=\"+f,d.setAttribute(\"data-secret\",f),g||h)a=d.cloneNode(!0),a.removeAttribute(\"security\"),d.parentNode.replaceChild(a,d)}else;}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret=\"'+d.secret+'\"]'),k=b.querySelectorAll('blockquote[data-secret=\"'+d.secret+'\"]');for(e=0;e<k.length;e++)k[e].style.display=\"none\";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute(\"style\"),\"height\"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if(\"link\"===d.message)if(h=b.createElement(\"a\"),i=b.createElement(\"a\"),h.href=f.getAttribute(\"src\"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener(\"message\",a.wp.receiveEmbedMessage,!1),b.addEventListener(\"DOMContentLoaded\",c,!1),a.addEventListener(\"load\",c,!1)}(window,document);";
(function(e) {
    "use strict";

    function t(e) {
        return (e || "").toLowerCase()
    }
    var i = "2.1.1";
    e.fn.cycle = function(i) {
        var n;
        return 0 !== this.length || e.isReady ? this.each(function() {
            var n, s, o, c, l = e(this),
                r = e.fn.cycle.log;
            if (!l.data("cycle.opts")) {
                (l.data("cycle-log") === !1 || i && i.log === !1 || s && s.log === !1) && (r = e.noop), r("--c2 init--"), n = l.data();
                for (var a in n) n.hasOwnProperty(a) && /^cycle[A-Z]+/.test(a) && (c = n[a], o = a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), r(o + ":", c, "(" + typeof c + ")"), n[o] = c);
                s = e.extend({}, e.fn.cycle.defaults, n, i || {}), s.timeoutId = 0, s.paused = s.paused || !1, s.container = l, s._maxZ = s.maxZ, s.API = e.extend({
                    _container: l
                }, e.fn.cycle.API), s.API.log = r, s.API.trigger = function(e, t) {
                    return s.container.trigger(e, t), s.API
                }, l.data("cycle.opts", s), l.data("cycle.API", s.API), s.API.trigger("cycle-bootstrap", [s, s.API]), s.API.addInitialSlides(), s.API.preInitSlideshow(), s.slides.length && s.API.initSlideshow()
            }
        }) : (n = {
            s: this.selector,
            c: this.context
        }, e.fn.cycle.log("requeuing slideshow (dom not ready)"), e(function() {
            e(n.s, n.c).cycle(i)
        }), this)
    }, e.fn.cycle.API = {
        opts: function() {
            return this._container.data("cycle.opts")
        },
        addInitialSlides: function() {
            var t = this.opts(),
                i = t.slides;
            t.slideCount = 0, t.slides = e(), i = i.jquery ? i : t.container.find(i), t.random && i.sort(function() {
                return Math.random() - .5
            }), t.API.add(i)
        },
        preInitSlideshow: function() {
            var t = this.opts();
            t.API.trigger("cycle-pre-initialize", [t]);
            var i = e.fn.cycle.transitions[t.fx];
            i && e.isFunction(i.preInit) && i.preInit(t), t._preInitialized = !0
        },
        postInitSlideshow: function() {
            var t = this.opts();
            t.API.trigger("cycle-post-initialize", [t]);
            var i = e.fn.cycle.transitions[t.fx];
            i && e.isFunction(i.postInit) && i.postInit(t)
        },
        initSlideshow: function() {
            var t, i = this.opts(),
                n = i.container;
            i.API.calcFirstSlide(), "static" == i.container.css("position") && i.container.css("position", "relative"), e(i.slides[i.currSlide]).css({
                opacity: 1,
                display: "block",
                visibility: "visible"
            }), i.API.stackSlides(i.slides[i.currSlide], i.slides[i.nextSlide], !i.reverse), i.pauseOnHover && (i.pauseOnHover !== !0 && (n = e(i.pauseOnHover)), n.hover(function() {
                i.API.pause(!0)
            }, function() {
                i.API.resume(!0)
            })), i.timeout && (t = i.API.getSlideOpts(i.currSlide), i.API.queueTransition(t, t.timeout + i.delay)), i._initialized = !0, i.API.updateView(!0), i.API.trigger("cycle-initialized", [i]), i.API.postInitSlideshow()
        },
        pause: function(t) {
            var i = this.opts(),
                n = i.API.getSlideOpts(),
                s = i.hoverPaused || i.paused;
            t ? i.hoverPaused = !0 : i.paused = !0, s || (i.container.addClass("cycle-paused"), i.API.trigger("cycle-paused", [i]).log("cycle-paused"), n.timeout && (clearTimeout(i.timeoutId), i.timeoutId = 0, i._remainingTimeout -= e.now() - i._lastQueue, (0 > i._remainingTimeout || isNaN(i._remainingTimeout)) && (i._remainingTimeout = void 0)))
        },
        resume: function(e) {
            var t = this.opts(),
                i = !t.hoverPaused && !t.paused;
            e ? t.hoverPaused = !1 : t.paused = !1, i || (t.container.removeClass("cycle-paused"), 0 === t.slides.filter(":animated").length && t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed"))
        },
        add: function(t, i) {
            var n, s = this.opts(),
                o = s.slideCount,
                c = !1;
            "string" == e.type(t) && (t = e.trim(t)), e(t).each(function() {
                var t, n = e(this);
                i ? s.container.prepend(n) : s.container.append(n), s.slideCount++, t = s.API.buildSlideOpts(n), s.slides = i ? e(n).add(s.slides) : s.slides.add(n), s.API.initSlide(t, n, --s._maxZ), n.data("cycle.opts", t), s.API.trigger("cycle-slide-added", [s, t, n])
            }), s.API.updateView(!0), c = s._preInitialized && 2 > o && s.slideCount >= 1, c && (s._initialized ? s.timeout && (n = s.slides.length, s.nextSlide = s.reverse ? n - 1 : 1, s.timeoutId || s.API.queueTransition(s)) : s.API.initSlideshow())
        },
        calcFirstSlide: function() {
            var e, t = this.opts();
            e = parseInt(t.startingSlide || 0, 10), (e >= t.slides.length || 0 > e) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, 0 > t.nextSlide && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0))
        },
        calcNextSlide: function() {
            var e, t = this.opts();
            t.reverse ? (e = 0 > t.nextSlide - 1, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1)
        },
        calcTx: function(t, i) {
            var n, s = t;
            return i && s.manualFx && (n = e.fn.cycle.transitions[s.manualFx]), n || (n = e.fn.cycle.transitions[s.fx]), n || (n = e.fn.cycle.transitions.fade, s.API.log('Transition "' + s.fx + '" not found.  Using fade.')), n
        },
        prepareTx: function(e, t) {
            var i, n, s, o, c, l = this.opts();
            return 2 > l.slideCount ? (l.timeoutId = 0, void 0) : (!e || l.busy && !l.manualTrump || (l.API.stopTransition(), l.busy = !1, clearTimeout(l.timeoutId), l.timeoutId = 0), l.busy || (0 !== l.timeoutId || e) && (n = l.slides[l.currSlide], s = l.slides[l.nextSlide], o = l.API.getSlideOpts(l.nextSlide), c = l.API.calcTx(o, e), l._tx = c, e && void 0 !== o.manualSpeed && (o.speed = o.manualSpeed), l.nextSlide != l.currSlide && (e || !l.paused && !l.hoverPaused && l.timeout) ? (l.API.trigger("cycle-before", [o, n, s, t]), c.before && c.before(o, n, s, t), i = function() {
                l.busy = !1, l.container.data("cycle.opts") && (c.after && c.after(o, n, s, t), l.API.trigger("cycle-after", [o, n, s, t]), l.API.queueTransition(o), l.API.updateView(!0))
            }, l.busy = !0, c.transition ? c.transition(o, n, s, t, i) : l.API.doTransition(o, n, s, t, i), l.API.calcNextSlide(), l.API.updateView()) : l.API.queueTransition(o)), void 0)
        },
        doTransition: function(t, i, n, s, o) {
            var c = t,
                l = e(i),
                r = e(n),
                a = function() {
                    r.animate(c.animIn || {
                        opacity: 1
                    }, c.speed, c.easeIn || c.easing, o)
                };
            r.css(c.cssBefore || {}), l.animate(c.animOut || {}, c.speed, c.easeOut || c.easing, function() {
                l.css(c.cssAfter || {}), c.sync || a()
            }), c.sync && a()
        },
        queueTransition: function(t, i) {
            var n = this.opts(),
                s = void 0 !== i ? i : t.timeout;
            return 0 === n.nextSlide && 0 === --n.loop ? (n.API.log("terminating; loop=0"), n.timeout = 0, s ? setTimeout(function() {
                n.API.trigger("cycle-finished", [n])
            }, s) : n.API.trigger("cycle-finished", [n]), n.nextSlide = n.currSlide, void 0) : (s && (n._lastQueue = e.now(), void 0 === i && (n._remainingTimeout = t.timeout), n.paused || n.hoverPaused || (n.timeoutId = setTimeout(function() {
                n.API.prepareTx(!1, !n.reverse)
            }, s))), void 0)
        },
        stopTransition: function() {
            var e = this.opts();
            e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
        },
        advanceSlide: function(e) {
            var t = this.opts();
            return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, 0 > t.nextSlide ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, e >= 0), !1
        },
        buildSlideOpts: function(i) {
            var n, s, o = this.opts(),
                c = i.data() || {};
            for (var l in c) c.hasOwnProperty(l) && /^cycle[A-Z]+/.test(l) && (n = c[l], s = l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), o.API.log("[" + (o.slideCount - 1) + "]", s + ":", n, "(" + typeof n + ")"), c[s] = n);
            c = e.extend({}, e.fn.cycle.defaults, o, c), c.slideNum = o.slideCount;
            try {
                delete c.API, delete c.slideCount, delete c.currSlide, delete c.nextSlide, delete c.slides
            } catch (r) {}
            return c
        },
        getSlideOpts: function(t) {
            var i = this.opts();
            void 0 === t && (t = i.currSlide);
            var n = i.slides[t],
                s = e(n).data("cycle.opts");
            return e.extend({}, i, s)
        },
        initSlide: function(t, i, n) {
            var s = this.opts();
            i.css(t.slideCss || {}), n > 0 && i.css("zIndex", n), isNaN(t.speed) && (t.speed = e.fx.speeds[t.speed] || e.fx.speeds._default), t.sync || (t.speed = t.speed / 2), i.addClass(s.slideClass)
        },
        updateView: function(e, t) {
            var i = this.opts();
            if (i._initialized) {
                var n = i.API.getSlideOpts(),
                    s = i.slides[i.currSlide];
                !e && t !== !0 && (i.API.trigger("cycle-update-view-before", [i, n, s]), 0 > i.updateView) || (i.slideActiveClass && i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass), e && i.hideNonActive && i.slides.filter(":not(." + i.slideActiveClass + ")").css("visibility", "hidden"), 0 === i.updateView && setTimeout(function() {
                    i.API.trigger("cycle-update-view", [i, n, s, e])
                }, n.speed / (i.sync ? 2 : 1)), 0 !== i.updateView && i.API.trigger("cycle-update-view", [i, n, s, e]), e && i.API.trigger("cycle-update-view-after", [i, n, s]))
            }
        },
        getComponent: function(t) {
            var i = this.opts(),
                n = i[t];
            return "string" == typeof n ? /^\s*[\>|\+|~]/.test(n) ? i.container.find(n) : e(n) : n.jquery ? n : e(n)
        },
        stackSlides: function(t, i, n) {
            var s = this.opts();
            t || (t = s.slides[s.currSlide], i = s.slides[s.nextSlide], n = !s.reverse), e(t).css("zIndex", s.maxZ);
            var o, c = s.maxZ - 2,
                l = s.slideCount;
            if (n) {
                for (o = s.currSlide + 1; l > o; o++) e(s.slides[o]).css("zIndex", c--);
                for (o = 0; s.currSlide > o; o++) e(s.slides[o]).css("zIndex", c--)
            } else {
                for (o = s.currSlide - 1; o >= 0; o--) e(s.slides[o]).css("zIndex", c--);
                for (o = l - 1; o > s.currSlide; o--) e(s.slides[o]).css("zIndex", c--)
            }
            e(i).css("zIndex", s.maxZ - 1)
        },
        getSlideIndex: function(e) {
            return this.opts().slides.index(e)
        }
    }, e.fn.cycle.log = function() {
        window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
    }, e.fn.cycle.version = function() {
        return "Cycle2: " + i
    }, e.fn.cycle.transitions = {
        custom: {},
        none: {
            before: function(e, t, i, n) {
                e.API.stackSlides(i, t, n), e.cssBefore = {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }
            }
        },
        fade: {
            before: function(t, i, n, s) {
                var o = t.API.getSlideOpts(t.nextSlide).slideCss || {};
                t.API.stackSlides(i, n, s), t.cssBefore = e.extend(o, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                }), t.animIn = {
                    opacity: 1
                }, t.animOut = {
                    opacity: 0
                }
            }
        },
        fadeout: {
            before: function(t, i, n, s) {
                var o = t.API.getSlideOpts(t.nextSlide).slideCss || {};
                t.API.stackSlides(i, n, s), t.cssBefore = e.extend(o, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }), t.animOut = {
                    opacity: 0
                }
            }
        },
        scrollHorz: {
            before: function(e, t, i, n) {
                e.API.stackSlides(t, i, n);
                var s = e.container.css("overflow", "hidden").width();
                e.cssBefore = {
                    left: n ? s : -s,
                    top: 0,
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }, e.cssAfter = {
                    zIndex: e._maxZ - 2,
                    left: 0
                }, e.animIn = {
                    left: 0
                }, e.animOut = {
                    left: n ? -s : s
                }
            }
        }
    }, e.fn.cycle.defaults = {
        allowWrap: !0,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: !0,
        loop: 0,
        manualFx: void 0,
        manualSpeed: void 0,
        manualTrump: !0,
        maxZ: 100,
        pauseOnHover: !1,
        reverse: !1,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: !0,
        timeout: 4e3,
        updateView: 0
    }, e(document).ready(function() {
        e(e.fn.cycle.defaults.autoSelector).cycle()
    })
})(jQuery),
function(e) {
    "use strict";

    function t(t, n) {
        var s, o, c, l = n.autoHeight;
        if ("container" == l) o = e(n.slides[n.currSlide]).outerHeight(), n.container.height(o);
        else if (n._autoHeightRatio) n.container.height(n.container.width() / n._autoHeightRatio);
        else if ("calc" === l || "number" == e.type(l) && l >= 0) {
            if (c = "calc" === l ? i(t, n) : l >= n.slides.length ? 0 : l, c == n._sentinelIndex) return;
            n._sentinelIndex = c, n._sentinel && n._sentinel.remove(), s = e(n.slides[c].cloneNode(!0)), s.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), s.css({
                position: "static",
                visibility: "hidden",
                display: "block"
            }).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), s.find("*").css("visibility", "hidden"), n._sentinel = s
        }
    }

    function i(t, i) {
        var n = 0,
            s = -1;
        return i.slides.each(function(t) {
            var i = e(this).height();
            i > s && (s = i, n = t)
        }), n
    }

    function n(t, i, n, s) {
        var o = e(s).outerHeight();
        i.container.animate({
            height: o
        }, i.autoHeightSpeed, i.autoHeightEasing)
    }

    function s(i, o) {
        o._autoHeightOnResize && (e(window).off("resize orientationchange", o._autoHeightOnResize), o._autoHeightOnResize = null), o.container.off("cycle-slide-added cycle-slide-removed", t), o.container.off("cycle-destroyed", s), o.container.off("cycle-before", n), o._sentinel && (o._sentinel.remove(), o._sentinel = null)
    }
    e.extend(e.fn.cycle.defaults, {
        autoHeight: 0,
        autoHeightSpeed: 250,
        autoHeightEasing: null
    }), e(document).on("cycle-initialized", function(i, o) {
        function c() {
            t(i, o)
        }
        var l, r = o.autoHeight,
            a = e.type(r),
            d = null;
        ("string" === a || "number" === a) && (o.container.on("cycle-slide-added cycle-slide-removed", t), o.container.on("cycle-destroyed", s), "container" == r ? o.container.on("cycle-before", n) : "string" === a && /\d+\:\d+/.test(r) && (l = r.match(/(\d+)\:(\d+)/), l = l[1] / l[2], o._autoHeightRatio = l), "number" !== a && (o._autoHeightOnResize = function() {
            clearTimeout(d), d = setTimeout(c, 50)
        }, e(window).on("resize orientationchange", o._autoHeightOnResize)), setTimeout(c, 30))
    })
}(jQuery),
function(e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    }), e(document).on("cycle-update-view", function(t, i, n, s) {
        "caption" === i.captionModule && e.each(["caption", "overlay"], function() {
            var e = this,
                t = n[e + "Template"],
                o = i.API.getComponent(e);
            o.length && t ? (o.html(i.API.tmpl(t, n, i, s)), o.show()) : o.hide()
        })
    }), e(document).on("cycle-destroyed", function(t, i) {
        var n;
        e.each(["caption", "overlay"], function() {
            var e = this,
                t = i[e + "Template"];
            i[e] && t && (n = i.API.getComponent("caption"), n.empty())
        })
    })
}(jQuery),
function(e) {
    "use strict";
    var t = e.fn.cycle;
    e.fn.cycle = function(i) {
        var n, s, o, c = e.makeArray(arguments);
        return "number" == e.type(i) ? this.cycle("goto", i) : "string" == e.type(i) ? this.each(function() {
            var l;
            return n = i, o = e(this).data("cycle.opts"), void 0 === o ? (t.log('slideshow must be initialized before sending commands; "' + n + '" ignored'), void 0) : (n = "goto" == n ? "jump" : n, s = o.API[n], e.isFunction(s) ? (l = e.makeArray(c), l.shift(), s.apply(o.API, l)) : (t.log("unknown command: ", n), void 0))
        }) : t.apply(this, arguments)
    }, e.extend(e.fn.cycle, t), e.extend(t.API, {
        next: function() {
            var e = this.opts();
            if (!e.busy || e.manualTrump) {
                var t = e.reverse ? -1 : 1;
                e.allowWrap === !1 && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next"))
            }
        },
        prev: function() {
            var e = this.opts();
            if (!e.busy || e.manualTrump) {
                var t = e.reverse ? 1 : -1;
                e.allowWrap === !1 && 0 > e.currSlide + t || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev"))
            }
        },
        destroy: function() {
            this.stop();
            var t = this.opts(),
                i = e.isFunction(e._data) ? e._data : e.noop;
            clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stop(), t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"), t.container.removeData(), i(t.container[0], "parsedAttrs", !1), t.retainStylesOnDestroy || (t.container.removeAttr("style"), t.slides.removeAttr("style"), t.slides.removeClass(t.slideActiveClass)), t.slides.each(function() {
                e(this).removeData(), i(this, "parsedAttrs", !1)
            })
        },
        jump: function(e) {
            var t, i = this.opts();
            if (!i.busy || i.manualTrump) {
                var n = parseInt(e, 10);
                if (isNaN(n) || 0 > n || n >= i.slides.length) return i.API.log("goto: invalid slide index: " + n), void 0;
                if (n == i.currSlide) return i.API.log("goto: skipping, already on slide", n), void 0;
                i.nextSlide = n, clearTimeout(i.timeoutId), i.timeoutId = 0, i.API.log("goto: ", n, " (zero-index)"), t = i.currSlide < i.nextSlide, i.API.prepareTx(!0, t)
            }
        },
        stop: function() {
            var t = this.opts(),
                i = t.container;
            clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stopTransition(), t.pauseOnHover && (t.pauseOnHover !== !0 && (i = e(t.pauseOnHover)), i.off("mouseenter mouseleave")), t.API.trigger("cycle-stopped", [t]).log("cycle-stopped")
        },
        reinit: function() {
            var e = this.opts();
            e.API.destroy(), e.container.cycle()
        },
        remove: function(t) {
            for (var i, n, s = this.opts(), o = [], c = 1, l = 0; s.slides.length > l; l++) i = s.slides[l], l == t ? n = i : (o.push(i), e(i).data("cycle.opts").slideNum = c, c++);
            n && (s.slides = e(o), s.slideCount--, e(n).remove(), t == s.currSlide ? s.API.advanceSlide(1) : s.currSlide > t ? s.currSlide-- : s.currSlide++, s.API.trigger("cycle-slide-removed", [s, t, n]).log("cycle-slide-removed"), s.API.updateView())
        }
    }), e(document).on("click.cycle", "[data-cycle-cmd]", function(t) {
        t.preventDefault();
        var i = e(this),
            n = i.data("cycle-cmd"),
            s = i.data("cycle-context") || ".cycle-slideshow";
        e(s).cycle(n, i.data("cycle-arg"))
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t, i) {
        var n;
        return t._hashFence ? (t._hashFence = !1, void 0) : (n = window.location.hash.substring(1), t.slides.each(function(s) {
            if (e(this).data("cycle-hash") == n) {
                if (i === !0) t.startingSlide = s;
                else {
                    var o = s > t.currSlide;
                    t.nextSlide = s, t.API.prepareTx(!0, o)
                }
                return !1
            }
        }), void 0)
    }
    e(document).on("cycle-pre-initialize", function(i, n) {
        t(n, !0), n._onHashChange = function() {
            t(n, !1)
        }, e(window).on("hashchange", n._onHashChange)
    }), e(document).on("cycle-update-view", function(e, t, i) {
        i.hash && "#" + i.hash != window.location.hash && (t._hashFence = !0, window.location.hash = i.hash)
    }), e(document).on("cycle-destroyed", function(t, i) {
        i._onHashChange && e(window).off("hashchange", i._onHashChange)
    })
}(jQuery),
function(e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        loader: !1
    }), e(document).on("cycle-bootstrap", function(t, i) {
        function n(t, n) {
            function o(t) {
                var o;
                "wait" == i.loader ? (l.push(t), 0 === a && (l.sort(c), s.apply(i.API, [l, n]), i.container.removeClass("cycle-loading"))) : (o = e(i.slides[i.currSlide]), s.apply(i.API, [t, n]), o.show(), i.container.removeClass("cycle-loading"))
            }

            function c(e, t) {
                return e.data("index") - t.data("index")
            }
            var l = [];
            if ("string" == e.type(t)) t = e.trim(t);
            else if ("array" === e.type(t))
                for (var r = 0; t.length > r; r++) t[r] = e(t[r])[0];
            t = e(t);
            var a = t.length;
            a && (t.css("visibility", "hidden").appendTo("body").each(function(t) {
                function c() {
                    0 === --r && (--a, o(d))
                }
                var r = 0,
                    d = e(this),
                    u = d.is("img") ? d : d.find("img");
                return d.data("index", t), u = u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), u.length ? (r = u.length, u.each(function() {
                    this.complete ? c() : e(this).load(function() {
                        c()
                    }).on("error", function() {
                        0 === --r && (i.API.log("slide skipped; img not loaded:", this.src), 0 === --a && "wait" == i.loader && s.apply(i.API, [l, n]))
                    })
                }), void 0) : (--a, l.push(d), void 0)
            }), a && i.container.addClass("cycle-loading"))
        }
        var s;
        i.loader && (s = i.API.add, i.API.add = n)
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t, i, n) {
        var s, o = t.API.getComponent("pager");
        o.each(function() {
            var o = e(this);
            if (i.pagerTemplate) {
                var c = t.API.tmpl(i.pagerTemplate, i, t, n[0]);
                s = e(c).appendTo(o)
            } else s = o.children().eq(t.slideCount - 1);
            s.on(t.pagerEvent, function(e) {
                e.preventDefault(), t.API.page(o, e.currentTarget)
            })
        })
    }

    function i(e, t) {
        var i = this.opts();
        if (!i.busy || i.manualTrump) {
            var n = e.children().index(t),
                s = n,
                o = s > i.currSlide;
            i.currSlide != s && (i.nextSlide = s, i.API.prepareTx(!0, o), i.API.trigger("cycle-pager-activated", [i, e, t]))
        }
    }
    e.extend(e.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerTemplate: "<span>&bull;</span>"
    }), e(document).on("cycle-bootstrap", function(e, i, n) {
        n.buildPagerLink = t
    }), e(document).on("cycle-slide-added", function(e, t, n, s) {
        t.pager && (t.API.buildPagerLink(t, n, s), t.API.page = i)
    }), e(document).on("cycle-slide-removed", function(t, i, n) {
        if (i.pager) {
            var s = i.API.getComponent("pager");
            s.each(function() {
                var t = e(this);
                e(t.children()[n]).remove()
            })
        }
    }), e(document).on("cycle-update-view", function(t, i) {
        var n;
        i.pager && (n = i.API.getComponent("pager"), n.each(function() {
            e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)
        }))
    }), e(document).on("cycle-destroyed", function(e, t) {
        var i = t.API.getComponent("pager");
        i && (i.children().off(t.pagerEvent), t.pagerTemplate && i.empty())
    })
}(jQuery),
function(e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: !1
    }), e(document).on("cycle-initialized", function(e, t) {
        if (t.API.getComponent("next").on(t.nextEvent, function(e) {
                e.preventDefault(), t.API.next()
            }), t.API.getComponent("prev").on(t.prevEvent, function(e) {
                e.preventDefault(), t.API.prev()
            }), t.swipe) {
            var i = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
                n = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            t.container.on(i, function() {
                t.API.next()
            }), t.container.on(n, function() {
                t.API.prev()
            })
        }
    }), e(document).on("cycle-update-view", function(e, t) {
        if (!t.allowWrap) {
            var i = t.disabledClass,
                n = t.API.getComponent("next"),
                s = t.API.getComponent("prev"),
                o = t._prevBoundry || 0,
                c = void 0 !== t._nextBoundry ? t._nextBoundry : t.slideCount - 1;
            t.currSlide == c ? n.addClass(i).prop("disabled", !0) : n.removeClass(i).prop("disabled", !1), t.currSlide === o ? s.addClass(i).prop("disabled", !0) : s.removeClass(i).prop("disabled", !1)
        }
    }), e(document).on("cycle-destroyed", function(e, t) {
        t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
}(jQuery),
function(e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        progressive: !1
    }), e(document).on("cycle-pre-initialize", function(t, i) {
        if (i.progressive) {
            var n, s, o = i.API,
                c = o.next,
                l = o.prev,
                r = o.prepareTx,
                a = e.type(i.progressive);
            if ("array" == a) n = i.progressive;
            else if (e.isFunction(i.progressive)) n = i.progressive(i);
            else if ("string" == a) {
                if (s = e(i.progressive), n = e.trim(s.html()), !n) return;
                if (/^(\[)/.test(n)) try {
                    n = e.parseJSON(n)
                } catch (d) {
                    return o.log("error parsing progressive slides", d), void 0
                } else n = n.split(RegExp(s.data("cycle-split") || "\n")), n[n.length - 1] || n.pop()
            }
            r && (o.prepareTx = function(e, t) {
                var s, o;
                return e || 0 === n.length ? (r.apply(i.API, [e, t]), void 0) : (t && i.currSlide == i.slideCount - 1 ? (o = n[0], n = n.slice(1), i.container.one("cycle-slide-added", function(e, t) {
                    setTimeout(function() {
                        t.API.advanceSlide(1)
                    }, 50)
                }), i.API.add(o)) : t || 0 !== i.currSlide ? r.apply(i.API, [e, t]) : (s = n.length - 1, o = n[s], n = n.slice(0, s), i.container.one("cycle-slide-added", function(e, t) {
                    setTimeout(function() {
                        t.currSlide = 1, t.API.advanceSlide(-1)
                    }, 50)
                }), i.API.add(o, !0)), void 0)
            }), c && (o.next = function() {
                var e = this.opts();
                if (n.length && e.currSlide == e.slideCount - 1) {
                    var t = n[0];
                    n = n.slice(1), e.container.one("cycle-slide-added", function(e, t) {
                        c.apply(t.API), t.container.removeClass("cycle-loading")
                    }), e.container.addClass("cycle-loading"), e.API.add(t)
                } else c.apply(e.API)
            }), l && (o.prev = function() {
                var e = this.opts();
                if (n.length && 0 === e.currSlide) {
                    var t = n.length - 1,
                        i = n[t];
                    n = n.slice(0, t), e.container.one("cycle-slide-added", function(e, t) {
                        t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading")
                    }), e.container.addClass("cycle-loading"), e.API.add(i, !0)
                } else l.apply(e.API)
            })
        }
    })
}(jQuery),
function(e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        tmplRegex: "{{((.)?.*?)}}"
    }), e.extend(e.fn.cycle.API, {
        tmpl: function(t, i) {
            var n = RegExp(i.tmplRegex || e.fn.cycle.defaults.tmplRegex, "g"),
                s = e.makeArray(arguments);
            return s.shift(), t.replace(n, function(t, i) {
                var n, o, c, l, r = i.split(".");
                for (n = 0; s.length > n; n++)
                    if (c = s[n]) {
                        if (r.length > 1)
                            for (l = c, o = 0; r.length > o; o++) c = l, l = l[r[o]] || i;
                        else l = c[i];
                        if (e.isFunction(l)) return l.apply(c, s);
                        if (void 0 !== l && null !== l && l != i) return l
                    }
                return i
            })
        }
    })
}(jQuery);
(function(e) {
    "use strict";
    e(document).on("cycle-bootstrap", function(e, i, t) {
        "carousel" === i.fx && (t.getSlideIndex = function(e) {
            var i = this.opts()._carouselWrap.children(),
                t = i.index(e);
            return t % i.length
        }, t.next = function() {
            var e = i.reverse ? -1 : 1;
            i.allowWrap === !1 && i.currSlide + e > i.slideCount - i.carouselVisible || (i.API.advanceSlide(e), i.API.trigger("cycle-next", [i]).log("cycle-next"))
        })
    }), e.fn.cycle.transitions.carousel = {
        preInit: function(i) {
            i.hideNonActive = !1, i.container.on("cycle-destroyed", e.proxy(this.onDestroy, i.API)), i.API.stopTransition = this.stopTransition;
            for (var t = 0; i.startingSlide > t; t++) i.container.append(i.slides[0])
        },
        postInit: function(i) {
            var t, n, s, o, l = i.carouselVertical;
            i.carouselVisible && i.carouselVisible > i.slideCount && (i.carouselVisible = i.slideCount - 1);
            var r = i.carouselVisible || i.slides.length,
                c = {
                    display: l ? "block" : "inline-block",
                    position: "static"
                };
            if (i.container.css({
                    position: "relative",
                    overflow: "hidden"
                }), i.slides.css(c), i._currSlide = i.currSlide, o = e('<div class="cycle-carousel-wrap"></div>').prependTo(i.container).css({
                    margin: 0,
                    padding: 0,
                    top: 0,
                    left: 0,
                    position: "absolute"
                }).append(i.slides), i._carouselWrap = o, l || o.css("white-space", "nowrap"), i.allowWrap !== !1) {
                for (n = 0;
                    (void 0 === i.carouselVisible ? 2 : 1) > n; n++) {
                    for (t = 0; i.slideCount > t; t++) o.append(i.slides[t].cloneNode(!0));
                    for (t = i.slideCount; t--;) o.prepend(i.slides[t].cloneNode(!0))
                }
                o.find(".cycle-slide-active").removeClass("cycle-slide-active"), i.slides.eq(i.startingSlide).addClass("cycle-slide-active")
            }
            i.pager && i.allowWrap === !1 && (s = i.slideCount - r, e(i.pager).children().filter(":gt(" + s + ")").hide()), i._nextBoundry = i.slideCount - i.carouselVisible, this.prepareDimensions(i)
        },
        prepareDimensions: function(i) {
            var t, n, s, o, l = i.carouselVertical,
                r = i.carouselVisible || i.slides.length;
            if (i.carouselFluid && i.carouselVisible ? i._carouselResizeThrottle || this.fluidSlides(i) : i.carouselVisible && i.carouselSlideDimension ? (t = r * i.carouselSlideDimension, i.container[l ? "height" : "width"](t)) : i.carouselVisible && (t = r * e(i.slides[0])[l ? "outerHeight" : "outerWidth"](!0), i.container[l ? "height" : "width"](t)), n = i.carouselOffset || 0, i.allowWrap !== !1)
                if (i.carouselSlideDimension) n -= (i.slideCount + i.currSlide) * i.carouselSlideDimension;
                else
                    for (s = i._carouselWrap.children(), o = 0; i.slideCount + i.currSlide > o; o++) n -= e(s[o])[l ? "outerHeight" : "outerWidth"](!0);
            i._carouselWrap.css(l ? "top" : "left", n)
        },
        fluidSlides: function(i) {
            function t() {
                clearTimeout(s), s = setTimeout(n, 20)
            }

            function n() {
                i._carouselWrap.stop(!1, !0);
                var e = i.container.width() / i.carouselVisible;
                e = Math.ceil(e - l), i._carouselWrap.children().width(e), i._sentinel && i._sentinel.width(e), r(i)
            }
            var s, o = i.slides.eq(0),
                l = o.outerWidth() - o.width(),
                r = this.prepareDimensions;
            e(window).on("resize", t), i._carouselResizeThrottle = t, n()
        },
        transition: function(i, t, n, s, o) {
            var l, r = {},
                c = i.nextSlide - i.currSlide,
                a = i.carouselVertical,
                d = i.speed;
            if (i.allowWrap === !1) {
                s = c > 0;
                var u = i._currSlide,
                    p = i.slideCount - i.carouselVisible;
                c > 0 && i.nextSlide > p && u == p ? c = 0 : c > 0 && i.nextSlide > p ? c = i.nextSlide - u - (i.nextSlide - p) : 0 > c && i.currSlide > p && i.nextSlide > p ? c = 0 : 0 > c && i.currSlide > p ? c += i.currSlide - p : u = i.currSlide, l = this.getScroll(i, a, u, c), i.API.opts()._currSlide = i.nextSlide > p ? p : i.nextSlide
            } else s && 0 === i.nextSlide ? (l = this.getDim(i, i.currSlide, a), o = this.genCallback(i, s, a, o)) : s || i.nextSlide != i.slideCount - 1 ? l = this.getScroll(i, a, i.currSlide, c) : (l = this.getDim(i, i.currSlide, a), o = this.genCallback(i, s, a, o));
            r[a ? "top" : "left"] = s ? "-=" + l : "+=" + l, i.throttleSpeed && (d = l / e(i.slides[0])[a ? "height" : "width"]() * i.speed), i._carouselWrap.animate(r, d, i.easing, o)
        },
        getDim: function(i, t, n) {
            var s = e(i.slides[t]);
            return s[n ? "outerHeight" : "outerWidth"](!0)
        },
        getScroll: function(e, i, t, n) {
            var s, o = 0;
            if (n > 0)
                for (s = t; t + n > s; s++) o += this.getDim(e, s, i);
            else
                for (s = t; s > t + n; s--) o += this.getDim(e, s, i);
            return o
        },
        genCallback: function(i, t, n, s) {
            return function() {
                var t = e(i.slides[i.nextSlide]).position(),
                    o = 0 - t[n ? "top" : "left"] + (i.carouselOffset || 0);
                i._carouselWrap.css(i.carouselVertical ? "top" : "left", o), s()
            }
        },
        stopTransition: function() {
            var e = this.opts();
            e.slides.stop(!1, !0), e._carouselWrap.stop(!1, !0)
        },
        onDestroy: function() {
            var i = this.opts();
            i._carouselResizeThrottle && e(window).off("resize", i._carouselResizeThrottle), i.slides.prependTo(i.container), i._carouselWrap.remove()
        }
    }
})(jQuery);