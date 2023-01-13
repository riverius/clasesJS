console.log("pipipipipipi");

var variable = true;
const constante = 5;
console.log(constante);
variable = false;
console.log(variable);

//OPERADORES
var Num1 = 15;
var Num2 = 3;
var vNom = "Marcelo";
var vApellido = "Esco";
console.log("suma: ", Num1+Num2);
console.log("resta: ",Num1-Num2);
console.log("division: ",Num1/Num2);
console.log("multip: ",Num1*Num2);
console.log("Nombre Completo; "+vNom+" "+vApellido);
console.log("resto div: ",Num1%Num2);

//SENTENCIAS IF
if(Num1%2 == 0){console.log("el ",Num1," es par")}
else {console.log("El ",Num1," es impar")}

//COMPARACION
var vGlosa = "El Numero: ";
if(Num1>Num2){
    console.log(vGlosa,Num1," es mayor que ",Num2);
}else if(Num1<Num2){
    console.log(vGlosa,Num2," es menor que ",Num1);
}else{
    console.log(vGlosa,Num1," es igual a ",Num2);}

//SUMAR 2 NUMEROS
function Suma(){
    var vfNum1 = document.getElementById("vNum1").value;
    var vfNum2 = document.getElementById("vNum2").value;

    if (vfNum1=="" || vfNum2===""){
        alert("Debe completar todos los datos.");
    }else{
        var vfSuma = parseInt(vfNum1) + parseInt(vfNum2);
        document.getElementById("vResultado").value = vfSuma;
    }
}


