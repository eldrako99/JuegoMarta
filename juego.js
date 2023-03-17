const palabras = [
  { palabra: "amor", pista: "Encuentra el camino hacia los sueños, pero no te quedes dormida en el intento. En un lugar oscuro, donde los secretos se esconden" },
  { palabra: "imprescindible", pista: "Donde aguardan tus mejores galas, colgadas y listas para usar. ¿Podrías encontrar aquí el código que buscas? Investiga bien" },
  { palabra: "pilar", pista: "Un lugar donde te preparas para el día y hablas con roca. Necesitas acudir a a él cuando no haces un perfect." },
  { palabra: "incondicional", pista: "Aquí cuelgan algunas de las que se llevan en la espalda, en el interior de una de ellas encontrarás el código que necesitas para avanzar en tu aventura." },
  { palabra: "tequiero", pista: "Muy bien guapa, has ganado. Tu regalo está en un lugar donde en época de examenes más se usan. De mucha variedad de colores y uno de tus gustos favoritos" }
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
