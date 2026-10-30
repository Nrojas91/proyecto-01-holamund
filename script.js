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

//1. Seleccionamos los elementos del DOM

const boton = document.getElementById('boton-magico');
const mensaje = document.getElementById('mensaje-secreto');

//2. Agregamos un "Escuchador de eventos" (Event Listener)
boton.addEventListener('click', () => {
    //3. Esto pasa cuando se hace click
    console.log("!El boton fue clickeado");

    //Cambiamos el display del 'none' a 'block' para mostrarlo
    mensaje.style.display = 'block';

    //Tambien podemos cambiar el texto del boton
    boton.textContent = "!Desbloqueado!";

    document.body.style.backgroundColor = 'black';
    console.log("!Modo Oscuro Activado");
});

let inventario = ["Espada", "Pocion", "Escudo"];
// El indice 0 es "espada" , el 1 es "pocion", el 2 es "Escudo"

inventario.push("Mapa"); // Ahora el inventario tiene 4 cosas.

let personaje ={
    nombre: "link",
    vida: 100,
    arma: "Espada Maestra"
};
console.log(personaje.nombre); // imprime "link"

let carrito1 = [
    { nombre: "Pocion", precio: 10},
    { nombre: "Escudo", precio: 50}
];

//1. Creamos nuestro "Array" vacio (el carrito)
let carrito = [];

//2. Seleccionamos los elementos del DOM
const inputProducto = document.getElementById('input-producto');
const btnAgregar = document.getElementById('btn-agregar');
const listaCarrito = document.getElementById('lista-carrito');

//3. Escuchamos el clic del boton
btnAgregar.addEventListener('click', () => {
    //Obtenemos el texto que el usuario escribio en el input
    const nuevoProducto = inputProducto.value;

    //Validacion si el input esta vacio, no hacemos nada
    if(nuevoProducto === ""){
        alert("!Escribe algo Primero");
        return; //Detiene la funcion aqui.
    }

    //agregamos el producto al Array
    carrito.push(nuevoProducto);
    console.log("Carrito actual: ", carrito);
    //agregamos aviso producto agregado al carrito
    console.log("!Producto agregado");
    //Limpiamos el input para que el usuario escriba otro
    inputProducto.value = "";

    //4. Actualizamos la pantalla(renderizar)
    renderizaCarrito();
});

//Funcion que dibuja la lista en HTML
function renderizaCarrito(){
    // Primero vaciamos la lista HTML para no duplicar
    listaCarrito.innerHTML = "";

    //Recorremos el Array usando forEach (por cada producto...)
    carrito.forEach((producto)=>{
        //Creamos un nuevo elemento de lista <li>
        const li = document.createElement('li');
        //le ponemos el texto del producto
        li.textContent = producto;
        // Lo insertamos dentro del <ul>
        listaCarrito.appendChild(li);
    });
}