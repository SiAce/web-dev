// check off specific todo item by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

// click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// click icon to add new todo
$("#inputLine span").on("click", addNewTodo);

// press Enter to add content in input into list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        addNewTodo();
    }
})

// click plus icon to toggle input line
$("h1 i").on("click", function(){
    $("#inputLine").fadeToggle();
})

function addNewTodo() {
    var todoText = $("input[type='text']").val();
    if (todoText !== ""){
        $("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
        $("input[type='text']").val("");      
    }
}