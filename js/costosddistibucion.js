function costodd()
{
   var num1 = document.getElementById('gv').value;
   var num2 = document.getElementById('gda').value;

   var resultado;

   resultado = parseInt(num1) + parseInt(num2);

   document.getElementById("rescd1").value = resultado;
   document.getElementById("rescd2").value = resultado;
}