

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

            //Botons modify
            const boton1 = document.createElement('button');
            boton1.type = "button";
            boton1.id = "modify";
            boton1.innerText = 'Ver';

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
            celda3.textContent = "$" + precio;

            let celda4 = nuevaFila.insertCell(4);
            celda4.appendChild(boton1);


            //Colocar modal
            const modal =  document.getElementById("getModal");


            boton1.addEventListener('click', ()=> {
   
                modal.classList.add("modal-show");
           })


            //Quitar modal
           const quitModal = document.querySelector(".btn-cancel");


           quitModal.addEventListener('click', ()=> {
               modal.classList.remove("modal-show");
           })


            //Activar la función para ver los datos registrados cada vez que le damos en Submit
            datosRegistrados();    

        }


        
     function datosRegistrados() {
            //Iteramos las filas de la tabla
         for(var i = 1; i < tabla.rows.length; i++) {

                tabla.rows[i].onclick = function() {
                    
              // Agarramos los datos de los inputs y lo agregamos a las entradas del modal
                document.getElementById("cod-modal").value = this.cells[0].textContent;

                document.getElementById("nom-modal").value = this.cells[1].textContent;

                document.getElementById("cantd-modal").value = this.cells[2].textContent;

                document.getElementById("precio-modal").value = this.cells[3].textContent;
                };
            }
        }





    //    BY JosueRz