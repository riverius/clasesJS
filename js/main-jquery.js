// Cambiar contenido de Etiqueta h1
    // Con JavaScript Puro
    //console.log("Pagina Funcionando");
    //document.getElementById('Titulo').innerHTML = "TITULO CAMBIADO";
   

// Incorporar Libreria JQuery

$(document).ready(function(){
    console.log("Pagina Funcionando")

    // SELECCIONAR ELEMENTOS HTML
    $('h1').html("Modificar segun ETIQUETA");
    $('#Titulo').html("Modificar segun ID");
    $('.display-3').html("Modificar segun CLASE");
    
    // AGREGAR CLASE  [ jq.classAdd ]
    $('h1').addClass('text-center text-uppercase'); //segun etiqueta
    $('#p2').addClass('text-danger'); //segun ID
    
    // QUITAR CLASE  [ jq.removeClass ]
    $('#Parrafos').removeClass('display-5');
    
    // AGREGAR ELEMENTO [ jq.Append ]
    $('#Parrafos').append('<p>Cuarto parrafo agregado desde JS</p>');
    
    // QUITAR ELEMENTO [ jq.Remove ]
    // $('#p3').remove();
   
    // MODIFICAR PROPIEDADES CSS [ jqCssSet ]
    $('#p1').css('color','blue');
    $('#p3').css({color:'blue',background:'green',padding:'10px'});
    
    // METODO attr()     [ jqAttrSet]
    $('img').attr('src', 'https://cdn.blizzardwatch.com/wp-content/uploads/2017/07/ArthasDK-Header.jpg');
    
    // EVENTOS CON JQUERY
    //Evento click Agregando clase
    
    //Evento click Agregando estilo en css
    
    //Alternativa al evento click

})
