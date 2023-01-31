// Se crea el objeto math, que va a almacenar las funciones que van a ser exportadas.
const Math = {};

// Funcion que permite sumar 2 numeros
function add (x1,x2){
	return x1 + x2;
}

// Funcion que permite restar 2 numeros
function substract (x1,x2){	
	return x1 - x2; 
}

// Funcion que permite multiplicar 2 numeros
function multiply (x1,x2){
	return x1 * x2;
}

// Funcion que valida si el dividendo es 0, si no lo es, procede a realizar la operacion, de lo contrario, lanza un msj.
function divide (x1,x2){
	if (x2 != 0) {
		return x1 / x2;
	} else{
		console.log('No se puede dividir');
	}
} 

// Se añaden las funciones al objeto que se va a importar
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

// Se importa el objeto completo, con las funciones previamente añadidas. module.exports puede exportar mas cosas(Funciones, etc).
module.exports = Math;


/*
Forma "basica" de exportar las funciones, se obtiene el mismo 
resultado creando el objeto, añadiendole las funciones, y luego exportando el objeto.
> exports.add = add; exporta solamente la propiedad de un objeto.

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;

*/