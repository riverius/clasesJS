
$(document).ready(function(){
    console.log("Pagina Funcionando")


    $('#enviar').click(function(){
        $.get("https://www.themealdb.com/api/json/v1/1/categories.php",
        function(data){
            console.log(data);
        });
    });




})