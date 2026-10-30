// 1.Treamos los datos guardados o creamos array vacio
let tareas = JSON.parse(localStorage.getItem('misTareas')) || [];

const form = document.getElementById('formulario-tarea');
const input = document.getElementById('input-tarea');
const lista = document.getElementById('lista-tareas');

//2.Funcionamiento que dibuja las tareas en la pantalla
function renderizarTareas(){
    lista.innerHTML = ""; //limpiamos la lista
    
    //AQUI esta la Magia actualizamos el titulo cada vez que se dibuja
    const titulo = document.querySelector('h1');
    titulo.textContent = "Misiones (" + tareas.length + ")";


    tareas.forEach((tareas, index) => {
        const li = document.createElement('li');

        //Texto de la tarea
        const span = document.createElement('span');
        span.textContent = tareas.texto;
        li.appendChild(span);

        //Boton de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "❌";
        btnEliminar.style.backgroundColor = "#e74c3c"; //Rojo
        btnEliminar.addEventListener('click', () => eliminarTarea(index));
        li.appendChild(btnEliminar);
        lista.appendChild(li);
       
    });
}

//3.Funcion para agregar tarea
form.addEventListener('submit', (e) =>{
    e.preventDefault();//Evita que la pagina recargue (comportamiento por defecto de un formulario)

    const texto = input.value;
    if(texto === "") return;

    //Guardamos como Objeto(por si luego queremos agregar fechas o prioridad)
    tareas.push({texto: texto, completada: false });
    input.value = "";

    guardarYRenderizar();

});

//4.Funcion para eliminar
function eliminarTarea(index){
    tareas.splice(index, 1);
    guardarYRenderizar();
}

//5.Funcion maestra que guarda y dibuja.
function guardarYRenderizar(){
    localStorage.setItem('misTareas', JSON.stringify(tareas));
    renderizarTareas();
}

//Ejecutamos al cargar la pagina
renderizarTareas();