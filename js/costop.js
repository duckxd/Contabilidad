function costop()
{
   var mpd1 = document.getElementById('mpd').value;
   var mod1 = document.getElementById('mod').value;

   var resultado;

   resultado = parseInt(mpd1) + parseInt(mod1);

   document.getElementById("cpro1").value = resultado;
   document.getElementById("cpro2").value = resultado;
}