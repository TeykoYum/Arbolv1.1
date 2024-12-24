//Estas notas son mas serias porque nop entiendo .js entonces a estudiar :*


document.addEventListener("DOMContentLoaded", function() {  // Espera a que el DOM esté completamente cargado

    var hojas = "";  // Inicializa una variable para almacenar las "hojas" del árbol

    [10, 2].forEach(row => {  // Recorre el arreglo que define las filas del árbol

        new Array(row).fill('').forEach((v, i) => {  // Crea un array de longitud 'row' y recorre cada elemento
            hojas += ([  // Agrega contenido HTML a la variable 'hojas'
                ...Array(9-i).fill("<span> </span>"),  // Agrega espacios para centrar las decoraciones
                ...Array(1+i*2).fill("<span class='rojo'>*</span>"),  // Agrega las decoraciones del árbol
                ...Array(9-i).fill("<span> </span>"),  // Agrega más espacios para centrar las decoraciones
            ].join(''))
            hojas += "<br>";  // Agrega un salto de línea al final de cada fila
        });
    });


    document.querySelector(".arbol").innerHTML = hojas;  // Inserta el contenido de 'hojas' en el div con la clase 'arbol'

    let animacion = document.querySelectorAll(".rojo");  // Selecciona todos los elementos con la clase 'rojo'

    function animar() {  // Define una función para animar los elementos seleccionados

        for (var i = 0; i < animacion.length; i++) {  // Recorre cada elemento seleccionado
            let tiempo = i / 20 + 1;  // Define el tiempo de animación basado en el índice del elemento
            animacion[i].style.animation = "colores " + tiempo + "s infinite";  // Asigna la animación a cada elemento
        }
    }

    window.addEventListener('load', animar);  // Ejecuta la función 'animar' cuando se carga la página
});
