const palabras = [
  { palabra: "perro", pista: "Encuentra el camino hacia los sueños, pero no te quedes dormido en el intento. En un lugar oscuro, donde los secretos se esconden" },
  { palabra: "gato", pista: "Animal doméstico de pelo suave y cola larga." },
  { palabra: "coche", pista: "Vehículo de cuatro ruedas para transporte." },
  { palabra: "plátano", pista: "Fruta amarilla y alargada." },
  { palabra: "libro", pista: "Objeto que se utiliza para leer y contiene información." }
];

let indicePalabraActual = 0;
let aciertos = 0;

const palabraInput = document.getElementById("palabra");
const enviarButton = document.getElementById("enviar");
const pistasDiv = document.getElementById("pistas");
const resultadoDiv = document.getElementById("resultado");

mostrarPista();

enviarButton.addEventListener("click", function () {
  const palabra = palabraInput.value.toLowerCase().trim();

  if (palabra === palabras[indicePalabraActual].palabra) {
    aciertos++;
    resultadoDiv.textContent = "¡Correcto!";

    if (aciertos === palabras.length) {
      pistasDiv.textContent = "¡Has ganado!";
      enviar
    } else {
      indicePalabraActual++;
      palabraInput.value = "";
      mostrarPista();
    }
  } else {
    resultadoDiv.textContent = "Incorrecto, inténtalo de nuevo.";
  }
});

function mostrarPista() {
  pistasDiv.textContent = palabras[indicePalabraActual].pista;
}
