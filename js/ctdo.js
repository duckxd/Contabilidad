function costoopera()
{
   var mpd1 = document.getElementById('rescospro1').value;
   var mod1 = document.getElementById('rescd1').value;

   var resultado;

   resultado = parseInt(mpd1) + parseInt(mod1);

   document.getElementById("rescostp").value = resultado;
}