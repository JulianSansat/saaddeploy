!function(t,i){"use strict";t.writeText=function(t,e,n,h){h=h||{};var r={align:"left",width:this.internal.pageSize.width},a=i.extend({},r,h),s=this.internal.getFontSize(),g=this.getStringUnitWidth(n)*s/this.internal.scaleFactor;"center"===a.align?t+=(a.width-g)/2:"right"===a.align&&(t+=a.width-g),this.text(n,t,e)}}(jsPDF.API,jQuery);