

function calcularPrecioFinal(){
 let a_pagar=0;
 desc=document.getElementById("porc_desc").value;
 console.log (desc);
 let cant= document.getElementById("cant_entradas").value;
 console.log(cant);


 descTotal= (cant *1000) *(desc/100) ;
 console.log(descTotal);
 
 a_pagar= (cant *1000) - descTotal;
 console.log( a_pagar);

 document.getElementById('precioFinal').value = a_pagar;
 }

 
