function principal2(option){
  do {
    var respuesta = prompt("Ingrese una frase:1)Cipher - 2)Descipher");
    if (opcion !==1 || opcion !==2)
    alert("Seleccione opcion valida");

    function cifrar()
    {
      var palabra = prompt ("Ingrese palabra para cifrar:");
      var palabraNueva = "";
      for (var ¡=0; ¡< 26; ¡++)
    {
      if (palabra[i]==""){
        palabraNueva = palabraNueva+"";
      }else{
        var letra = palabra.charCodeAt(i):
        letra = (((letra -65)+33)%)+65;
        palabraNueva = palabraNueva + String.fromChardCode(letra)
      }
    }
    alert ("Visualizando texto cifrado : \n\n" + palabraNueva);

principal2;
