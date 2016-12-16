"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(e,t){"use strict";function n(n){var i=t.console;o[n]||(o[n]=!0,e.migrateWarnings.push(n),i&&i.warn&&!e.migrateMute&&(i.warn("JQMIGRATE: "+n),e.migrateTrace&&i.trace&&i.trace()))}function i(e,t,i,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return n(o),i}})}e.migrateVersion="3.0.0",function(){var n=t.console&&t.console.log&&function(){t.console.log.apply(t.console,arguments)},i=/^[12]\./;n&&(e&&!i.test(e.fn.jquery)||n("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&n("JQMIGRATE: Migrate plugin loaded multiple times"),n("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion))}();var o={};e.migrateWarnings=[],void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset=function(){o={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&n("jQuery is not compatible with Quirks Mode");var r=e.fn.init,s=e.isNumeric,a=e.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,c=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;e.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(n("jQuery( '#' ) is not a valid selector"),t[0]=[]),r.apply(this,t)},e.fn.init.prototype=e.fn,e.find=function(e){var t=Array.prototype.slice.call(arguments);if("string"==typeof e&&l.test(e))try{document.querySelector(e)}catch(i){e=e.replace(c,function(e,t,n,i){return"["+t+n+'"'+i+'"]'});try{document.querySelector(e),n("Attribute selector with '#' must be quoted: "+t[0]),t[0]=e}catch(e){n("Attribute selector with '#' was not fixed: "+t[0])}}return a.apply(this,t)};var u;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&(e.find[u]=a[u]);e.fn.size=function(){return n("jQuery.fn.size() is deprecated; use the .length property"),this.length},e.parseJSON=function(){return n("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},e.isNumeric=function(t){function i(t){var n=t&&t.toString();return!e.isArray(t)&&n-parseFloat(n)+1>=0}var o=s(t),r=i(t);return o!==r&&n("jQuery.isNumeric() should not be called on constructed objects"),r},i(e,"unique",e.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),i(e.expr,"filters",e.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),i(e.expr,":",e.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var h=e.ajax;e.ajax=function(){var e=h.apply(this,arguments);return e.promise&&(i(e,"success",e.done,"jQXHR.success is deprecated and removed"),i(e,"error",e.fail,"jQXHR.error is deprecated and removed"),i(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var d=e.fn.removeAttr,p=e.fn.toggleClass,f=/\S+/g;e.fn.removeAttr=function(t){var i=this;return e.each(t.match(f),function(t,o){e.expr.match.bool.test(o)&&(n("jQuery.fn.removeAttr no longer sets boolean properties: "+o),i.prop(o,!1))}),d.apply(this,arguments)},e.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?p.apply(this,arguments):(n("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var n=this.getAttribute&&this.getAttribute("class")||"";n&&e.data(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||t===!1?"":e.data(this,"__className__")||"")}))};var g=!1;e.swap&&e.each(["height","width","reliableMarginRight"],function(t,n){var i=e.cssHooks[n]&&e.cssHooks[n].get;i&&(e.cssHooks[n].get=function(){var e;return g=!0,e=i.apply(this,arguments),g=!1,e})}),e.swap=function(e,t,i,o){var r,s,a={};g||n("jQuery.swap() is undocumented and deprecated");for(s in t)a[s]=e.style[s],e.style[s]=t[s];r=i.apply(e,o||[]);for(s in t)e.style[s]=a[s];return r};var m=e.data;e.data=function(t,i,o){var r;return i&&i!==e.camelCase(i)&&(r=e.hasData(t)&&m.call(this,t),r&&i in r)?(n("jQuery.data() always sets/gets camelCased names: "+i),arguments.length>2&&(r[i]=o),r[i]):m.apply(this,arguments)};var v=e.Tween.prototype.run;e.Tween.prototype.run=function(t){e.easing[this.easing].length>1&&(n('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),e.easing[this.easing]=e.easing[this.easing].bind(e.easing,t,this.options.duration*t,0,1,this.options.duration)),v.apply(this,arguments)};var y=e.fn.load,b=e.event.fix;e.event.props=[],e.event.fixHooks={},e.event.fix=function(t){var i,o=t.type,r=this.fixHooks[o],s=e.event.props;if(s.length)for(n("jQuery.event.props are deprecated and removed: "+s.join());s.length;)e.event.addProp(s.pop());if(r&&!r._migrated_&&(r._migrated_=!0,n("jQuery.event.fixHooks are deprecated and removed: "+o),(s=r.props)&&s.length))for(;s.length;)e.event.addProp(s.pop());return i=b.call(this,t),r&&r.filter?r.filter(i,t):i},e.each(["load","unload","error"],function(t,i){e.fn[i]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===i&&"string"==typeof e[0]?y.apply(this,e):(n("jQuery.fn."+i+"() is deprecated"),e.splice(0,0,i),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),e(function(){e(document).triggerHandler("ready")}),e.event.special.ready={setup:function(){this===document&&n("'ready' event is deprecated")}},e.fn.extend({bind:function(e,t,i){return n("jQuery.fn.bind() is deprecated"),this.on(e,null,t,i)},unbind:function(e,t){return n("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,i,o){return n("jQuery.fn.delegate() is deprecated"),this.on(t,e,i,o)},undelegate:function(e,t,i){return n("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)}});var x=e.fn.offset;e.fn.offset=function(){var t,i=this[0],o={top:0,left:0};return i&&i.nodeType?(t=(i.ownerDocument||document).documentElement,e.contains(t,i)?x.apply(this,arguments):(n("jQuery.fn.offset() requires an element connected to a document"),o)):(n("jQuery.fn.offset() requires a valid DOM element"),o)};var w=e.param;e.param=function(t,i){var o=e.ajaxSettings&&e.ajaxSettings.traditional;return void 0===i&&o&&(n("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),i=o),w.call(this,t,i)};var T=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),T.apply(this,arguments)};var C=e.Deferred,S=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];e.Deferred=function(t){var i=C(),o=i.promise();return i.pipe=o.pipe=function(){var t=arguments;return n("deferred.pipe() is deprecated"),e.Deferred(function(n){e.each(S,function(r,s){var a=e.isFunction(t[r])&&t[r];i[s[1]](function(){var t=a&&a.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s[0]+"With"](this===o?n.promise():this,a?[t]:arguments)})}),t=null}).promise()},t&&t.call(i,i),i}}(jQuery,window);