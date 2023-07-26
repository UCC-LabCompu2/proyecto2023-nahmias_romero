/**
 * Anima la imagen del billete
 * @method animarBillete
 */

let x = 0;
let dx = 1;
let animationInterval;

function animarBillete() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const monedaSalida = document.getElementById("Moneda-de-salida").value;

    let cantidad = parseFloat(document.getElementById("Cantidad").value);
    if (isNaN(cantidad) || cantidad <= 0) {
        if (!animationInterval) {
            document.getElementById("Cantidad").value = "";
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // clearInterval(animationInterval);
        return;
    }

    //canvas.width = canvas.offsetWidth;

    let img = new Image();
    if (monedaSalida === "Dolar-(Estadounidense)") {
        img.src = "imagenes/dolar.png";
    } else if (monedaSalida === "Libras-(Esterlinas)") {
        img.src = "imagenes/libraEsterlina.png";
    } else if (monedaSalida === "Euros") {
        img.src = "imagenes/euro.png";
    } else if (monedaSalida === "Reales") {
        img.src = "imagenes/reales.png";
    } else if (monedaSalida === "Peso-(Argentino)") {
        img.src = "imagenes/pesosArg.png";
    }

    x = canvas.width;
    img.onload = function () {

        clearInterval(animationInterval);

        animationInterval = setInterval(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, x, 10);

            x -= dx;

            if (x + img.width < 0) {
                x = canvas.width;
            }
        }, 20);
    };
}


/**
 * Convierte de una moneda a otra
 * @method conversorMonedas
 */

function conversorMonedas() {
    const monedaEntrada = document.getElementById("Moneda-de-entrada").value;
    const monedaSalida = document.getElementById("Moneda-de-salida").value;
    let cantidad = parseFloat(document.getElementById("Cantidad").value);


    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").textContent = "";
        alert("El valor ingresado es incorrecto o negativo. Por favor, ingrese un valor válido mayor que cero.");
        document.getElementById("Cantidad").value = "";
        clearInterval(animationInterval);
        return;
    }
    if (cantidad.toString().length > 10) {
        document.getElementById("resultado").textContent = "";
        alert("La cantidad ingresada supera el límite de caracteres permitido.");
        document.getElementById("Cantidad").value = "";
        clearInterval(animationInterval);
        return;
    }


    if (isNaN(cantidad)) {
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
