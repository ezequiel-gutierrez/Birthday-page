const audio = new Audio();
audio.src = "./spaResources/felizCumple.mp3"

const button = document.querySelector(".playButton");
const canvas = document.querySelector("#confetti");

const jsConfetti = new JSConfetti();

button.addEventListener("click", () => {
    jsConfetti.addConfetti()
})