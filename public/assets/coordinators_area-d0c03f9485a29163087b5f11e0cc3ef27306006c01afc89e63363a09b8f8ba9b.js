(function(){jQuery(function(){var t,e;return $(".note_div").hide(),$("#_users_id").parent().hide(),t=$("#_classroom_id").html(),e=$("#_users_id").html(),$("#_classroom_id").prepend("<option value='todos'>Todas</option>"),$("#_classroom_id option:first").attr("selected","selected"),$("#_users_id").prepend("<option value='todos'>Todos</option>"),$("#_users_id option:first").attr("selected","selected"),$("#_classroom_id").on("change",function(){var t,i;return t=$("#_classroom_id option:selected").text(),i=$(e).filter("optgroup[label='"+t+"']").html(),i?($("#_users_id").html(i),$("#_users_id").prepend("<option value='todos'>Todos</option>"),$("#_users_id option:first").attr("selected","selected"),$("#_users_id").parent().show()):($("#_users_id").empty(),$("#_users_id").parent().hide())})})}).call(this);