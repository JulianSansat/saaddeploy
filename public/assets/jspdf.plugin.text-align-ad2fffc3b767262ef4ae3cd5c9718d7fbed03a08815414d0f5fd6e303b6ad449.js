!function(t,e){"use strict";t.writeText=function(t,n,r,i){i=i||{};var o={align:"left",width:this.internal.pageSize.width},a=e.extend({},o,i),s=this.internal.getFontSize(),u=this.getStringUnitWidth(r)*s/this.internal.scaleFactor;"center"===a.align?t+=(a.width-u)/2:"right"===a.align&&(t+=a.width-u),this.text(r,t,n)}}(jsPDF.API,jQuery);