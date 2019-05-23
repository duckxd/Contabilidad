function costoup()
{
   var num1 = document.getElementById('rescospro2').value;
   var num2 = document.getElementById('up').value;

   var resultado;

   resultado = parseInt(num1) / parseInt(num2);

   document.getElementById("cupro").value = resultado;
}