var result;
$(document).ready(function(){
$("#userList").empty()
$("#dialog").hide()
result=$.ajax({
	type : "GET",
	url: "userName.json",
	dataType: "json",
	async: true,
	complete: function(){
    
	  result=eval ("(" + result.responseText + ")");
    $.each(result.employees, function(index,employee){
	  $("#userList").append("<li><a href='#' id='userName"+index+"'>"+employee[Object.keys(employee)[0]]+" "+employee[Object.keys(employee)[1]]+"</a></li>")
    });
    $("body").on("click", "a[id*='userName']",function(e){
       var currentEmployee;
       var currentIndex=e.toElement.id.substring(e.toElement.id.length-1);
       $.each(result.employees, function(index,employee){
       	if(index==currentIndex)
       		{
            currentEmployee=employee
          }
       })
       $("#dialog").empty()
       $.each(Object.keys(currentEmployee),function(index){
        var currentKey=Object.keys(currentEmployee)[index];
        var currentValue=currentEmployee[currentKey];
        $("#dialog").append("<p>"+currentKey+" : "+currentValue+"</p>");
       })
       
       
       
       //$("#dialog").show();
    });
       $("body").on("click","a[id*='userName']",function(){
       $("#dialog").dialog({ autoOpen: false });
       $("#dialog").dialog("open");
       $("#dialog").dialog( "option", "width", 460 );
       });

       
    }
});



})