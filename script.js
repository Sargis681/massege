const envelope = document.getElementById("envelope");
const voice = document.getElementById("voice");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    // 🔊 Открытие — продолжаем проигрывать с того места
    voice.play();
  } else {
    // ⏸ Закрытие — просто ставим на паузу, не сбрасываем
    voice.pause();
  }
});
