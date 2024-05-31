//iniciamos una variable que posea nuestra oración
let oracion = "la casa es grande";
let resultado = contarCaracteres(oracion);
console.log(resultado);

function contarCaracteres(oracion) {
    //Objeto vacío para almacenar las frecuencias
    let frecuencias = {};
    //Recorremos cada caracter de la cadena de texto
    for (let i = 0; i < oracion.length; i++) {
        let caracter = oracion[i];
        // Ignoramos los espacios
        if (caracter === ' ') {
            continue;
        }
        // Si el carácter ya está en el objeto, incrementamos su frecuencia
        if (frecuencias[caracter]) {
            frecuencias[caracter]++;
        } else {
            // Si el carácter no está en el objeto, lo añadimos con frecuencia 1
            frecuencias[caracter] = 1;
        }
    }
    // Devolvemos el diccionario con las frecuencias
    return frecuencias;
}
