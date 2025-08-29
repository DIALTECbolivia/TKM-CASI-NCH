// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me permites conocerte mas, es que llevo tiempo queriendote hablar", time: 3.6 },
  { text: "eres muy bonita y con esa sonrisa me ilusionas mas ", time: 10.8},
  { text: "solo dame una oportunidad ,y te daras cuenta que te quiero amar ", time: 18.5},
  { text: "te mereces todo y me refiero a un mundo de felicidad", time: 25.7 },
  { text: "te prometo que despues de un beso vas a suspirar", time: 33 },
  { text: "permiteme cumplir el sueño de tomar tu mano y juntos caminar", time: 41.8 },
  { text: "permiteme sentir la magia de mirar tus ojos y al cielo viajar", time: 48 },
  { text: "es que tu eres lo que yo mas deseo", time: 55 },
  { text: "permiteme ser esa estrella que te ilumine en la oscuridad", time: 63 },
  { text: "permiteme ser el pañuelo que seque tu llanto si te sientes mal", time: 70 },
  { text: "permiteme ser el artista que al final del dia siempre va a pintar", time: 78  },
  { text: "la imagen de que en mi futuro siempre vas a estar", time: 85},
  { text: "y permiteme ser el amor de tu vida", time: 97 },
  { text: "LOS PARRAS", time: 100 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);