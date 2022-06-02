const form = document.getElementById("form"); //Guardo la informacion del formu

form.addEventListener("submit", function(event) { //Especifico que al darle'submit' Que la página no se recargue
    event.preventDefault();

    // let PreformDatos = new formDatos(form); //Creo un objeto apartir de la info

})


function insertRowTable(form) {

    var respuesta;
    //capturamos el indice del select 
    let indice = document.fomul.miSelect.selectedIndex
        //capturamos el valor del select
    let valor = document.fomul.miSelect.options[indice].value



    let Table = document.getElementById("tablita");
    let newLineRow = Table.insertRow(-1);


    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    if (valor == "Suma") {
        respuesta = numero1 + numero2;
    }
    if (valor == "Resta") {
        respuesta = numero1 - numero2;
    }
    if (valor == "Multiplicacion") {
        respuesta = numero1 * numero2;
    }
    if (valor == "Division") {
        respuesta = numero1 / numero2;
    }


    let newCelda = newLineRow.insertCell(0);
    newCelda.textContent = numero1;

    let newCelda2 = newLineRow.insertCell(1);
    newCelda2.textContent = numero2;

    let newCelda3 = newLineRow.insertCell(2);
    newCelda3.textContent = valor;

    let newCelda4 = newLineRow.insertCell(3);
    newCelda4.textContent = respuesta;
}
// let numero1 = 0;
// let numero2 = 0;
// let options = "";
// let texto = "";