// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Same bed but it feels just a little bit bigger now", time: 12 },
  { text: "Our song on the radio but it don't sound the same", time: 18 },
  { text: "When our friends talk about you All it does is just tear me down", time: 25 },
  { text: "'Cause my heart breaks a little When I hear your name", time: 32 },
  { text: "It all just sounds like ooh-ooh, ooh-ooh", time: 35 },
  { text: "Mmm, too young, too dumb to realize", time: 44 },
  { text: "That I should've bought you flowers", time: 49 },
  { text: "And held your hand", time: 53 },
  { text: "Should've gave you all my hours", time: 55 },
  { text: "When I had the chance", time: 60 },
  { text: "Take you to every party Cause all you wanted to do was dance", time: 62 },
  { text: "Now my baby's dancing But she's dancing with another man", time: 68 },
  { text: "My pride, my ego, my needs, and my selfish ways", time: 81 },
  { text: "Caused a good strong woman like you To walk out my life", time: 88 },
  { text: "Now I never, never get to clean up the mess I made", time: 94 },
  { text: "And it haunts me every time I close my eyes", time: 101 },
  { text: "It all just sounds like ooh-ooh, ooh-ooh", time: 106 },
  { text: "Mmm, too young, too dumb to realize", time: 114 },
  { text: "That I should've bought you flowers", time: 119 },
  { text: "And held your hand", time: 123 },
  { text: "Should've gave you all my hours", time: 125 },
  { text: "When I had the chance", time: 129 },
  { text: "Take you to every party Cause all you wanted to do was dance", time: 132 },
  { text: "Now my baby's dancing But she's dancing with another man", time: 138 },
  { text: "Although it hurts", time: 145 },
  { text: "I'll be the first to say that I was wrong", time: 149 },
  { text: "Oh, I know I'm probably much too late", time: 159 },
  { text: "To try and apologize for my mistakes", time: 162 },
  { text: "But I just want you to know", time: 166 },
  { text: "I hope he buys you flowers", time: 171 },
  { text: "I hope he holds your hand", time: 175 },
  { text: "Give you all his hours", time: 179 },
  { text: "When he has the chance", time: 182 },
  { text: "Take to every party", time: 185 },
  { text: "'Cause I remember how much you loved to dance ", time: 188 },
  { text: "Do all the things I should have done When I was your man ", time: 190 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);