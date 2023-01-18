

function valForm(){
    console.log("Acceso establecido.");
    var vNom = $('#nombre').val();
    var vMail = $('#correo').val();
    var vMensaje = $('#mensaje').val();

    if (vNom === null || vNom === "") {
        Err_Color("nombre");
        Err_Contenido("nombre");
        return false;
    }else{
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(vNom)){
            Error_Color("nombre");
            Err_Contenido("No se permiten caracteres especiales o numeros");
            return false;
        } 
    }

    if (vMail === null || vMail === "") {
        Err_Color("correo");
        Err_Contenido("correo");
        return false;
    }else{
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+ $/;
        if (!expresion.test(vMail)){
            Err_Color("correo");
            Err_Contenido("No se permiten caracteres especiales o numeros");
            return false;
        } 
    }

    $('form').submit();
    return true;
}

function Err_Color(id_div){
    alert("Dato no valido: " + id_div);
    $('#'+id_div).css('border', '1px solid red');
}

function Err_Contenido(dato){
    alert("Error al ingresar: "+dato)
}

function ColorDefault(id_div){
    $('#'+id_div).css('border', '1px solid #999');
}

//etiqueta.accion, queda en memoria
$('input').focus(function(){
    ColorDefault('nombre');
    ColorDefault('correo');
})