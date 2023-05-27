

function calcularPrecioFinal(e){
   event.preventDefault(); //evita que se recargue la página al ejecutarse la función
 let a_pagar=0;
 desc=document.getElementById("porc_desc").value;
 console.log (desc);
 let cant= document.getElementById("cant_entradas").value;
 console.log(cant);

 descTotal= (cant *200) *(desc/100) ;
 console.log( descTotal);
 
 a_pagar= (cant *200) - descTotal;
 console.log( a_pagar);
 document.getElementById("precioFinal").value= a_pagar;
 document.getElementById("precioFinal").style.color="red";
 document.getElementById("precioFinal").style.fontWeight = "bold"
 return false; //lo agrego para evitar que al cargar el precioFinal vuelva al inicio de la página
}  
function animar_texto(){
  document.getElementById("verde").classList.add("animate__animated", "animate__heartBeat");
  document.documentElement.style.setProperty('--animate-duration', '0.3s');
}


 function borrar(e){
   event.preventDefault(); //evita que se recargue la página al ejecutarse la función
     document.getElementById("precioFinal").value=" ";
    document.getElementById("porc_desc").value =" ";
    document.getElementById("cant_entradas").value=" ";
   
 }

 
