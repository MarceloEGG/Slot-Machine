
  // Array de nombres de imágenes pre cargadas
  const imagenesPreCargadas = [
    "bulma.gif",
    "goku.gif",
    "vegeta.gif",
    "milk.gif",
    "picoro.gif",
    "krillin.gif",
    // ... Agrega aquí los nombres de las imágenes restantes
  ];

  // Función para generar un número aleatorio entre un mínimo y un máximo
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Función para llenar la matriz con imágenes aleatorias
  function llenarMatrizConImagenes(filas, columnas) {
    const table = document.getElementById("imagenMatrix");
    table.innerHTML = ''; // Limpiar contenido anterior

    for (let i = 0; i < filas; i++) {
      const row = table.insertRow();
      
      for (let j = 0; j < columnas; j++) {
        const cell = row.insertCell();
        const randomImagenIndex = generarNumeroAleatorio(0, imagenesPreCargadas.length - 1);
        const imagen = imagenesPreCargadas[randomImagenIndex];
        const imgElement = document.createElement("img");
        imgElement.src = imagen;
        imgElement.alt = "Imagen Aleatoria";
        cell.appendChild(imgElement);
      }
    
  }}

  // Asociar la función a ejecutar al presionar el botón
  const botonLlenarMatriz = document.getElementById("llenarMatrizButton");
  botonLlenarMatriz.addEventListener("click", function () {
    llenarMatrizConImagenes(3, 5);
  })