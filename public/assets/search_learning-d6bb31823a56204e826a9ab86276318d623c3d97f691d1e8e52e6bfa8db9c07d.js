$(document).ready(function(){$("#_classroom_id").empty(),$("#_users_id").empty(),$("#_subject_id").prepend("<option value='todos'>Todas</option>"),$("#_subject_id option:first").attr("selected","selected"),$("#_classroom_id").prepend("<option value='todos'>Todas</option>"),$("#_classroom_id option:first").attr("selected","selected"),$("#_users_id").prepend("<option value='todos'>Todos</option>"),$("#_users_id option:first").attr("selected","selected"),$("#_classroom2_id").empty(),$("#_users2_id").empty(),$("#_subject2_id").prepend("<option value='todos'>Todas</option>"),$("#_subject2_id option:first").attr("selected","selected"),$("#_classroom2_id").prepend("<option value='todos'>Todas</option>"),$("#_classroom2_id option:first").attr("selected","selected"),$("#_users2_id").prepend("<option value='todos'>Todos</option>"),$("#_users2_id option:first").attr("selected","selected"),$("#_subject_id").change(function(){"todos"==$("#_subject_id").val()&&($("#_classroom_id").empty(),$("#_classroom_id").prepend("<option value='todos'>Todas</option>"),$("#_classroom_id option:first").attr("selected","selected"),$("#_users_id").empty(),$("#_users_id").prepend("<option value='todos'>Todos</option>"),$("#_users_id option:first").attr("selected","selected")),$.ajax({url:"/results/subject_selection",type:"GET",data:{subject:$("#_subject_id option:selected").val()}})}),$("#_subject2_id").change(function(){"todos"==$("#_subject2_id").val()&&($("#_classroom2_id").empty(),$("#_classroom2_id").prepend("<option value='todos'>Todas</option>"),$("#_classroom2_id option:first").attr("selected","selected"),$("#_users2_id").empty(),$("#_users2_id").prepend("<option value='todos'>Todos</option>"),$("#_users2_id option:first").attr("selected","selected")),$.ajax({url:"/results/subject2_selection",type:"GET",data:{subject:$("#_subject2_id option:selected").val()}})}),$("#_classroom_id").change(function(){"todos"==$("#_classroom_id").val()&&($("#_users_id").empty(),$("#_users_id").prepend("<option value='todos'>Todos</option>"),$("#_users_id option:first").attr("selected","selected")),$.ajax({url:"/results/classroom_selection",type:"GET",data:{classroom:$("#_classroom_id option:selected").val()}})}),$("#_classroom2_id").change(function(){"todos"==$("#_classroom2_id").val()&&($("#_users2_id").empty(),$("#_users2_id").prepend("<option value='todos'>Todos</option>"),$("#_users2_id option:first").attr("selected","selected")),$.ajax({url:"/results/classroom2_selection",type:"GET",data:{classroom:$("#_classroom2_id option:selected").val()}})})});