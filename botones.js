// funcion para ordenar contenido en filas
function ordenarContenido() {
    const columns = document.querySelector(".contenido .columns");
    if (columns.style.flexDirection === "column") {
        columns.style.flexDirection = "row";
    } else {
        columns.style.flexDirection = "column"; // lo convierte en filas
    }
}

// funcion de  título principal
function cambiarTitulo() {
    const titulo = document.getElementById("titulo");
    if (titulo.innerText === "HTML & CSS: Curso práctico avanzado") {
        titulo.innerText = "Nuevo Título del Libro";
    } else {
        titulo.innerText = "HTML & CSS: Curso práctico avanzado";
    }
}

// 3. funcion Cambiar color de subtítulo y párrafo de descripción
function cambiarColor() {
    const subtitulo = document.querySelector(".descripcion h2");
    const parrafos = document.querySelectorAll(".descripcion p");

    if (subtitulo.style.color === "blue") {
        subtitulo.style.color = "#444"; // vuelve al color original
        parrafos.forEach(p => p.style.color = "black");
    } else {
        subtitulo.style.color = "blue";
        parrafos.forEach(p => p.style.color = "darkred");
    }
}

// 4. funcion agregar imagen debajo de “Datos del libro”
function agregarImagen() {
    const datos = document.querySelector(".datos");
   
    if (!document.getElementById("imagenLibro")) {
        const img = document.createElement("img");
        img.id = "imagenLibro";
        img.src = "c:\Users\GERMAN\Documents\Cuerpo informatico.jpg";
        img.alt = "Imagen del libro";
        img.style.display = "block";
        img.style.marginTop = "15px";
        img.style.maxWidth = "200px"; 
        datos.appendChild(img);
    }
}

