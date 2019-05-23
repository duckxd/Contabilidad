function costodp()
{
   var num1 = document.getElementById('ggdfd').value;
   var num2 = document.getElementById('cdirec').value;
   var num3 = document.getElementById('cpro1').value;

   var resultado;

   resultado = parseInt(num1) + parseInt(num2) + parseInt(num3);

   document.getElementById("rescospro1").value = resultado;
   document.getElementById("rescospro2").value = resultado;
   document.getElementById("rescospro3").value = resultado;
}