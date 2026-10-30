// esto es un comentario en JS. El navegador lo ignora.

console.log("!Hola el cerebro de la web esta despierto.");

// 1 declarando variables
let energia = 100;
const nombreHeroe = "Nelson";
let experiencia = 50;
const juegoFavorito = "Zelda";
let energiaTotal = energia + experiencia;

//2 Usando las variable
console.log("El heroe se llama: " + nombreHeroe);
console.log("Energia inicial:"+ energia);

//3 Cambiando el valor de una variable (let)
energia = energia - 20;
console.log("!El heroe recibio dano energia actual: "+ energia);

console.log("Mi juego favorito es: " +juegoFavorito +" y mi energia total es: "+energiaTotal);
//Intentemos cambiar una constante (esto dara error en la consola)
// nombreHeroe = "Otro Nombre"; // si quitas las barras//, veras el error.