$(document).ready(function() {
    $(".relat__atu").on("change", function(){
    $("#esatu").toggle($(this).hasClass("relat__atu_yes"));
    });
   }
);