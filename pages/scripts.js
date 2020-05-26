var puntaje = 0;
var respuesta1="";
var respuesta2="";
var respuesta3="";
var respuesta4="";
var respuesta5="";
function apretar (){
    
    var primera = document.getElementsByName("primera");
    if (primera[0].checked){
        puntaje = puntaje + 1;


    }else{
        puntaje = puntaje + 0;
        
    }
    var segunda = document.getElementsByName("segunda");
    if (segunda[0].checked){
        puntaje = puntaje + 1;


    }else{
        puntaje = puntaje + 0;
        
    }
    var tercera = document.getElementsByName("tercera");
    if (tercera[0].checked){
        puntaje = puntaje + 1;


    }else{
        puntaje = puntaje + 0;
        
    }
    var cuarta = document.getElementsByName("cuarta");
    if (cuarta[0].checked){
        puntaje = puntaje + 1;


    }else{
        puntaje = puntaje + 0;
        
    }
    var quinta = document.getElementsByName("quinta");
    if (quinta[0].checked){
        puntaje = puntaje + 1;


    }else{
        puntaje = puntaje + 0;
        
    }
    alert ("Su puntaje es " + puntaje);
    alert ("Respondio " + puntaje + " preguntas correctas de 5");
    puntaje = 0;
}