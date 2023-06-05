


/**
 * Conversion de monedas, de dolares, libras, reales, pesos y euros.
 * @method Nombre de la función
 * @param {string} id - El id de los imputs de dolares, libras, reales, pesos o euros.
 * @param {number} valor - El valor de los imputs de dolares, libras, reales, pesos o euros.
 * @return
 */
// function conversorMonedas(id, valor) {
//     if (valor.includes(",")) {
//         valor = valor.replace(",", ".");
//     }
//     if (isNaN(valor)) {
//         document.lasMonedasDelMundo.unid_dolar.value = "";
//         document.lasMonedasDelMundo.unid_libras.value = "";
//         document.lasMonedasDelMundo.unid_reales.value = "";
//         document.lasMonedasDelMundo.unid_euro.value = "";
//         document.lasMonedasDelMundo.unid_peso.value = "";
//         alert("El valor ingresado es incorrecto");
//     } else if (id == "Dolar-(Estadounidense)") {
//         document.lasMonedasDelMundo.unid_libras.value = Math.round(valor * 0.83 * 100) / 100;
//         document.lasMonedasDelMundo.unid_reales.value = Math.round(valor * 5.1 * 100) / 100;
//         document.lasMonedasDelMundo.unid_euro.value = Math.round(valor * 0.93 * 100) / 100;
//         document.lasMonedasDelMundo.unid_peso.value = Math.round(valor * 240 * 100) / 100;
//     } else if (id == "Libras-Esterlinas") {
//         document.lasMonedasDelMundo.unid_dolar.value = Math.round(valor * 1.20 * 100) / 100;
//         document.lasMonedasDelMundo.unid_euro.value = Math.round(valor * 1.12 * 100) / 100;
//         document.lasMonedasDelMundo.unid_reales.value = Math.round(valor * 6.12 * 100) / 100;
//         document.lasMonedasDelMundo.unid_peso.value = Math.round(valor * 300 * 100) / 100;
//     } else if (id == "Reales") {
//         document.lasMonedasDelMundo.unid_dolar.value = Math.round(valor * 0.19 * 100) / 100;
//         document.lasMonedasDelMundo.unid_libras.value = Math.round(valor * 0.16 * 100) / 100;
//         document.lasMonedasDelMundo.unid_euro.value = Math.round(valor * 0.18 * 100) / 100;
//         document.lasMonedasDelMundo.unid_peso.value = Math.round(valor * 47 * 100) / 100;
//     } else if (id == "Euros") {
//         document.lasMonedasDelMundo.unid_dolar.value = Math.round(valor * 1.07 * 100) / 100;
//         document.lasMonedasDelMundo.unid_libras.value = Math.round(valor * 0.89 * 100) / 100;
//         document.lasMonedasDelMundo.unid_reales.value = Math.round(valor * 5.45 * 100) / 100;
//         document.lasMonedasDelMundo.unid_peso.value = Math.round(valor * 258 * 100) / 100;
//     } else if (id == "Peso-Argentino") {
//         document.lasMonedasDelMundo.unid_dolar.value = Math.round(valor * 0.0041 * 100) / 100;
//         document.lasMonedasDelMundo.unid_libras.value = Math.round(valor * 0.0033 * 100) / 100;
//         document.lasMonedasDelMundo.unid_euro.value = Math.round(valor * 0.0038 * 100) / 100;
//         document.lasMonedasDelMundo.unid_reales.value = Math.round(valor * 0.0213 * 100) / 100;
//     }
// }

y=0
dy = 1;
function animarBillete(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "imagenes/billete.png";

    img.onload = function (){
        ctx.drawImage(img, 10,y);
    }
y+=dy;
}
function conversorMonedas() {
    var monedaEntrada = document.getElementById("Moneda-de-entrada").value;
    var monedaSalida = document.getElementById("Moneda-de-salida").value;
    var cantidad = document.getElementById("Cantidad").value;

    if (isNaN(cantidad)) {
        document.getElementById("resultado").textContent = "";
        alert("El valor ingresado es incorrecto");
    } else {
        if (monedaEntrada === monedaSalida) {
            document.getElementById("resultado").textContent = cantidad;
        } else if (monedaEntrada === "Dolar-(Estadounidense)") {
            if (monedaSalida === "Libras-Esterlinas") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.83 * 100) / 100;
            } else if (monedaSalida === "Reales") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 5.1 * 100) / 100;
            } else if (monedaSalida === "Euros") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.93 * 100) / 100;
            } else if (monedaSalida === "Peso-Argentino") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 240 * 100) / 100;
            }
        } else if (monedaEntrada === "Libras-Esterlinas") {
            if (monedaSalida === "Dolar-(Estadounidense)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 1.20 * 100) / 100;
            } else if (monedaSalida === "Euros") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 1.12 * 100) / 100;
            } else if (monedaSalida === "Reales") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 6.12 * 100) / 100;
            } else if (monedaSalida === "Peso-Argentino") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 300 * 100) / 100;
            }
        } else if (monedaEntrada === "Reales") {
            if (monedaSalida === "Dolar-(Estadounidense)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.19 * 100) / 100;
            } else if (monedaSalida === "Libras-Esterlinas") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.16 * 100) / 100;
            } else if (monedaSalida === "Euros") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.18 * 100) / 100;
            } else if (monedaSalida === "Peso-Argentino") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 47 * 100) / 100;
            }
        } else if (monedaEntrada === "Euros") {
            if (monedaSalida === "Dolar-(Estadounidense)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 1.07 * 100) / 100;
            } else if (monedaSalida === "Libras-Esterlinas") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.89 * 100) / 100;
            } else if (monedaSalida === "Reales") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 5.45 * 100) / 100;
            } else if (monedaSalida === "Peso-Argentino") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 258 * 100) / 100;
            }
        }
    }
}
