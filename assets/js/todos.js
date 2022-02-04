//click done todos
$('ul').on('click', "li", function(){
    $(this).toggleClass('completed')
});

//click on X to delete todo
$('ul').on('click', "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//creating todos
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing text entered
        var todoText = $(this).val();
        $(this).val("");
        //adding todo to list
        $('ul').append('<li><span><i class="fa fa-trash"></i> </span>'+ todoText + '</li>')
       
    }
});

//Togglig on the input form
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
