

    const form = document.getElementById("formulario");

    form.addEventListener('submit', function(stop) {

        stop.preventDefault();
    })

    
        function addDatos() {


                //Creacion de variables
            let codigo = Number(document.getElementById("cod").value);
            let nombre = document.getElementById("nom").value;
            let cantidad = document.getElementById("cantd").value;
            let precio = Number(document.getElementById("prec").value);

            if(precio >= 20000) {

                precio = precio - (precio*20/100)
            }

            const tabla = document.getElementById("tabla");

            let nuevaFila = tabla.insertRow(-1);

            let celda0 = nuevaFila.insertCell(0);
            celda0.textContent = codigo;

            let celda1 = nuevaFila.insertCell(1);
            celda1.textContent = nombre;

            let celda2 = nuevaFila.insertCell(2);
            celda2.textContent = cantidad;

            let celda3 = nuevaFila.insertCell(3);
            celda3.textContent = precio;

        }

