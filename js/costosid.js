function costoind()
{
   var num1 = document.getElementById('mpi').value;
   var num2 = document.getElementById('moi').value;
   var num3 = document.getElementById('ggdfi').value;

   var resultado;

   resultado = parseInt(num1) + parseInt(num2) + parseInt(num3);

   document.getElementById("costoidtos").value = resultado;
}