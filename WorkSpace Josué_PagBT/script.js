 function mostrarDatos() {
     
      //CON JQUERY                                  //CON JAVASCRIPT
var nombre = $('#name').val();               //document.getElementById("name");
 var correo = $('#email').val();                //document.getElementById("email");
var password =  $('#passw').val();          //document.getElementById("passw");

    return alert(" Hola " + nombre + "\n" + " Su correo es: " + correo + "\n" + " Su contraseña es: " + password);
}


