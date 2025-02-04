const words = ["Photoshop", "AfterEffects", "Figma", "HTML", "CSS"];
const colors = ["#c16c7a", "#73e8af", "#8db3f9", "#e9a33a", "#c9b19f"];
let index = 0;

function rotateWord() {
    const wordElement = document.getElementById("rotate-word");
    wordElement.classList.add("fade-out");

    setTimeout(() => {
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];
        wordElement.style.color = colors[index];
        wordElement.classList.remove("fade-out");
        wordElement.classList.add("typewriter");
    }, 500); // Matcher transition-tiden i CSS

    setTimeout(() => {
        wordElement.classList.remove("typewriter");
    }, 2500); // Matcher typewriter animationens varighed
}

rotateWord();
setInterval(rotateWord, 3000); // Skifter ord hver 3. sekund

alert("YOU'RE ENTERING A DANGEROURS PLACE, TURN AROUND BEFORE YOU'LL REGRET");
