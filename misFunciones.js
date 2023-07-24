/**
 * Anima la imagen del billete
 * @method animarBillete
 */

var x = 0;
var dx = 1;
var animationInterval; // Variable para almacenar el identificador del intervalo de animación

function animarBillete() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var monedaSalida = document.getElementById("Moneda-de-salida").value;

    canvas.width = canvas.offsetWidth; // Obtener el ancho del contenedor del canvas

    if (monedaSalida === "Dolar-(Estadounidense)") {
        var img = new Image();
        img.src = "imagenes/dolar.png";
    } else if (monedaSalida === "Libras-(Esterlinas)") {
        var img = new Image();
        img.src = "imagenes/libraEsterlina.png";
    } else if (monedaSalida === "Euros") {
        var img = new Image();
        img.src = "imagenes/euro.png";
    } else if (monedaSalida === "Reales") {
        var img = new Image();
        img.src = "imagenes/reales.png";
    } else if (monedaSalida === "Peso-(Argentino)") {
        var img = new Image();
        img.src = "imagenes/pesosArg.png";
    }

    x = canvas.width; // Establecer la posición inicial del billete al final del canvas

    img.onload = function () {
        // Limpiar el intervalo anterior antes de iniciar una nueva animación
        clearInterval(animationInterval);

        animationInterval = setInterval(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, x, 10);

            x -= dx; // Mover el billete hacia la izquierda

            if (x + img.width < 0) {
                x = canvas.width; // Reiniciar la posición del billete al final del canvas
            }
        }, 20); // Aumentar el intervalo de tiempo para que la animación sea más lenta
    };
}



/**
 * Convierte de una moneda a otra
 * @method conversorMonedas
 */

function conversorMonedas() {
    const monedaEntrada = document.getElementById("Moneda-de-entrada").value;
    const monedaSalida = document.getElementById("Moneda-de-salida").value;
    let cantidad = document.getElementById("Cantidad").value;

    if (cantidad.length > 10) {
        document.getElementById("resultado").textContent = "";
        alert("La cantidad ingresada supera el límite de caracteres permitido.");
        return; // Frena el funcionamiento del código de la función si la cantidad es demasiado larga.
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").textContent = "";
        alert("El valor ingresado es incorrecto");
        return; // Detiene la ejecución de la función si la cantidad es incorrecta.
    }

    if (isNaN(cantidad)) {
        // Aquí se fija que no haya letras y, en caso de que sí las haya, muestra un mensaje de alerta
        document.getElementById("lasUnidades").LibrasEsterlinas.value = "";
        document.getElementById("lasUnidades").DolarEstadounidense.value = "";
        document.getElementById("lasUnidades").Euros.value = "";
        document.getElementById("lasUnidades").Reales.value = "";
        document.getElementById("lasUnidades").PesoArgentino.value = "";


    } else {
        if (monedaEntrada === monedaSalida) {
            document.getElementById("resultado").textContent = cantidad;
        } else if (monedaEntrada === "Dolar-(Estadounidense)") {
            if (monedaSalida === "Libras-(Esterlinas)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.83 * 100) / 100;
            } else if (monedaSalida === "Reales") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 5.1 * 100) / 100;
            } else if (monedaSalida === "Euros") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.93 * 100) / 100;
            } else if (monedaSalida === "Peso-(Argentino)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 240 * 100) / 100;
            }
        } else if (monedaEntrada === "Libras-(Esterlinas)") {
            if (monedaSalida === "Dolar-(Estadounidense)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 1.20 * 100) / 100;
            } else if (monedaSalida === "Euros") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 1.12 * 100) / 100;
            } else if (monedaSalida === "Reales") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 6.12 * 100) / 100;
            } else if (monedaSalida === "Peso-(Argentino)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 300 * 100) / 100;
            }
        } else if (monedaEntrada === "Reales") {
            if (monedaSalida === "Dolar-(Estadounidense)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.19 * 100) / 100;
            } else if (monedaSalida === "Libras-(Esterlinas)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.16 * 100) / 100;
            } else if (monedaSalida === "Euros") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.18 * 100) / 100;
            } else if (monedaSalida === "Peso-(Argentino)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 47 * 100) / 100;
            }
        } else if (monedaEntrada === "Euros") {
            if (monedaSalida === "Dolar-(Estadounidense)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 1.07 * 100) / 100;
            } else if (monedaSalida === "Libras-(Esterlinas)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.89 * 100) / 100;
            } else if (monedaSalida === "Reales") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 5.45 * 100) / 100;
            } else if (monedaSalida === "Peso-(Argentino)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 258 * 100) / 100;
            }
        } else if (monedaEntrada === "Peso-(Argentino)") {
            if (monedaSalida === "Dolar-(Estadounidense)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.0041 * 100) / 100;
            } else if (monedaSalida === "Libras-(Esterlinas)") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.0033 * 100) / 100;
            } else if (monedaSalida === "Reales") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.0213 * 100) / 100;
            } else if (monedaSalida === "Euros") {
                document.getElementById("resultado").textContent = Math.round(cantidad * 0.0038 * 100) / 100;
            }
        }
    }
}
