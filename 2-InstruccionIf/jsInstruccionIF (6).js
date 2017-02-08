function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
edad=parseInt (edad);
if (edad>17) 
{
     alert("Mayor");
}
if (edad>12 && edad<18)
     {
         alert("Adolecente")
     }
if(edad<13)
  {
            alert("Menor");
  }
}
    
 
//FIN DE LA FUNCIÓN