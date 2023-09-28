const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
};
const wordEl = document.getElementById("word");
const morseEl = document.getElementById("morse");
const translateEl = document.getElementById("translate");

translateEl.addEventListener("click", function() {
    const word = (wordEl.value).toUpperCase().split("");
    const morse = word.map(item => {
        if (/[A-Z]/.test(item)) {
            return morseCode[item];
        } else if (item === " ") {
            return "/";
        } else {
            return item;
        }
    }).join(" ");
    morseEl.value = morse;
})


