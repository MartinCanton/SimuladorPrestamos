function simularPrestamos() {
    let continuar = true;

    while (continuar) {
        calcularPrestamo();
        
    let respuesta;
    do {
        respuesta = prompt('¿Desea realizar otra simulación? (Sí/No)').toLowerCase();
    } while (respuesta !== 'si' && respuesta !== 'sí' && respuesta !== 'no');

    continuar = respuesta === 'si' || respuesta === 'sí';
    }

    alert('Gracias por utilizar el Simulador de Préstamos de Martín Cantón');
}

    

function calcularPrestamo() {
    const montoPrestamo = parseFloat(prompt('Ingrese el monto del préstamo:'));
    if (isNaN(montoPrestamo) || montoPrestamo <= 0){
        alert ('Los datos ingresados no son correctos. Por favor ingrese un valor válido y mayor que cero.');
        return;
    }
    const tasaInteresAnual = parseFloat(prompt('Ingrese el interés de su préstamo:'));
    if (isNaN(tasaInteresAnual) || tasaInteresAnual < 0){
        alert ('Los datos ingresados no son correctos.');
        return;
    }
    const plazoEnMeses = parseFloat(prompt('Ingrese el plazo del préstamo en meses:'));

    if (isNaN(plazoEnMeses) || plazoEnMeses <= 0){
        alert ('Los datos ingresados no son correctos. Por favor ingrese un valor válido y mayor que cero.');
        return;
    }

    const cuotaMensual = (montoPrestamo + ((montoPrestamo * tasaInteresAnual) / 100)) / plazoEnMeses;
    const pagoTotal = cuotaMensual * plazoEnMeses; 

    const resultado = `Monto del Préstamo: $${montoPrestamo.toFixed(2)}\nTasa de Interés Anual: ${tasaInteresAnual}%\nPlazo en Meses: ${plazoEnMeses}\nCuota Mensual: $${cuotaMensual.toFixed(2)}\nPago Total: $${pagoTotal.toFixed(2)}`;

    alert(resultado);
}


